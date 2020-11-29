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
from flask_dance.contrib.azure import make_azure_blueprint, azure

LOGIN_DURATION = datetime.timedelta(days=31)

AZURE_CLIENT_ID = os.environ['AZURE_CLIENT_ID']
AZURE_CLIENT_SECRET = os.environ['AZURE_CLIENT_SECRET']
AZURE_AUTH_ENDPOINT = os.environ['AZURE_AUTH_ENDPOINT']
AZURE_TOKEN_ENDPOINT = os.environ['AZURE_TOKEN_ENDPOINT']
ADMIN_HOST = os.environ['ADMIN_HOST']

azure_blueprint = make_azure_blueprint(
  client_id=AZURE_CLIENT_ID,
  client_secret=AZURE_CLIENT_SECRET,
  redirect_url=ADMIN_HOST + '/login/azure/success')
application.register_blueprint(azure_blueprint, url_prefix="/login")

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

@application.route("/login/")
def azure_push_login():
  return redirect(url_for("azure.login", _external=True))

@application.route('/login/azure/success')
def azure_login():
  #if not azure.authorized:
  #  return redirect(url_for("azure.login", 
  #    _external=True))
  resp = azure.get("/v1.0/me")
  assert resp.ok
  authed_user = json.loads(resp.text)
  application.logger.warn(authed_user)
  application.logger.warn(resp.text)
  u = (db.session.query(User)
    .filter(func.trim(User.email) == authed_user['userPrincipalName'])
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
    ulh.token_id = None
    db.session.add(ulh)
    db.session.commit()
    login_user(u, remember=True, duration=LOGIN_DURATION)
    return redirect("/home")
  else:
    return redirect("/?error=1")
