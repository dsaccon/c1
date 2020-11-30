from datetime import datetime
from flask import render_template, abort, jsonify, redirect
from flask_login import current_user
from web import application, db
from web.models import *

@application.route("/api/ok.json")
def test_json():
  payload = {'timestamp': datetime.now().isoformat()} 
  return jsonify(payload)
