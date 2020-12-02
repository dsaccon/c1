from datetime import datetime
from flask import render_template, abort, jsonify, redirect, url_for
from flask_login import current_user
from web import application, db, application
from flask_dance.contrib.google import google
from web.models import *

@application.route("/api/ok.json")
def test_json():
  payload = {'timestamp': datetime.now().isoformat()} 
  return jsonify(payload)


@application.route("/oauth")
def index():
    if not google.authorized:
        return redirect(url_for("google.login"))
    resp = google.get("/oauth2/v1/userinfo")
    assert resp.ok, resp.text
    return "You are {email} on Google".format(email=resp.json()["email"])