import base64
import os
import requests
import uuid
import datetime
import json
from web import application, login_manager, db
from flask import jsonify, render_template, request, url_for, redirect
from flask_login import LoginManager, login_required, \
  login_user, logout_user, current_user
from web.models import *
from werkzeug.security import check_password_hash
from sqlalchemy import func
from .azure import azure

LOGIN_DURATION = datetime.timedelta(days=31)

def get_ip():
  if request.environ.get('HTTP_X_FORWARDED_FOR'):
    return request.environ.get('HTTP_X_FORWARDED_FOR')
  else:
    return request.environ.get('REMOTE_ADDR')

@login_manager.unauthorized_handler
def unauthorized():
  application.logger.info("redirecting to /login")
  b64next = base64.b64encode(
    request.url.encode('utf-8'))
  return redirect("/login?next=%s" % b64next.decode('utf-8'))

@login_manager.user_loader
def load_user(user_id):
  u = User.query.filter_by(id=user_id).first()
  if u is None:
    return False
  u.last_seen_at = datetime.datetime.now()
  db.session.commit()
  return u

@application.route("/logout")
def logout():
  logout_user()
  return redirect("/")

@application.route("/login")
def login_view():
  return render_template("login/login.html")

@application.route("/login/password", methods=["POST"])
def login_plaintext():
  username = request.form.get('username')
  password = request.form.get('password')
  access_token = str(uuid.uuid4())
  u = (db.session.query(User)
    .filter(func.trim(User.email) == username)
    .filter(User.login_type == 'password')
    .first())
  if u is None:
    return redirect("/?error=1")
  if check_password_hash(u.password_hash, password):
    ulh = UsersLoginHistory()
    ulh.created_at = datetime.datetime.now()
    ulh.user_id = u.user_id
    ulh.ip_address = get_ip()
    ulh.login_type = 'password'
    ulh.token_id = access_token
    db.session.add(ulh)
    db.session.commit()
    login_user(u, remember=False, duration=LOGIN_DURATION)
    if u.is_admin:
      return redirect("/home")
    elif u.is_affiliate:
      return redirect("/affiliate-calendar")
    else:
      return 'You are not an admin or an affiliate. Call for help!' 
  else:
    return redirect("/?error=1")

@application.route('/login/azure')
def azure_login():
  return azure.authorize(callback=url_for('oauth_redirect', _external=True),
    state=request.args.get('next'))

@application.route("/oauthredirect")
def oauth_redirect():
  next_url = None
  if request.args.get('state'):
    next_url_b64 = request.args.get('state')
    next_url = base64.b64decode(next_url_b64)

  resp = azure.authorized_response()
  access_token = resp.get('access_token')
  print("TOKEN!!!")
  print(access_token)
  
  headers = {'Authorization': 'Bearer %s' % access_token}
  req = requests.get('https://graph.microsoft.com/v1.0/me',
    headers=headers)
  print(req.text)
  print(json.loads(req.text))
  # {'@odata.context': 'https://graph.microsoft.com/v1.0/$metadata#users/$entity', 'businessPhones': [], 'displayName': 'Tom Hayden', 'givenName': 'Tom', 'jobTitle': None, 'mail': 'thayden@corrosionone.com', 'mobilePhone': None, 'officeLocation': None, 'preferredLanguage': 'en-US', 'surname': 'Hayden', 'userPrincipalName': 'thayden@corrosionone.com', 'id': '8d60b3c0-145b-45af-ab8f-9d385c7ae875'}

  authed_user = json.loads(req.text)
  u = (db.session.query(User)
    .filter(func.trim(User.email) == authed_user['mail'])
    .filter(User.login_type == 'azure')
    .first())

  if u is not None:
    u.azure_token = authed_user.get('id')
    db.session.commit()

    ulh = UsersLoginHistory()
    ulh.created_at = datetime.datetime.now()
    ulh.user_id = u.user_id
    ulh.ip_address = get_ip()
    ulh.login_type = 'azure'
    ulh.token_id = access_token
    db.session.add(ulh)
    db.session.commit()
    login_user(u, remember=True, duration=LOGIN_DURATION)
    if next_url and u.is_admin:
      return redirect(next_url)
    else:
      return redirect("/home")
  else:
    return redirect("/?error=1")

