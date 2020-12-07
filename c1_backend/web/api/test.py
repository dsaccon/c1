from datetime import datetime
from flask import render_template, abort, jsonify
from flask_login import current_user
from web import application, db, application, valid_google_jwt_required
from web.models import *


@application.route("/api/ok.json")
@valid_google_jwt_required
def test_json():
    payload = {'timestamp': datetime.now().isoformat()}
    return jsonify(payload)


@application.route("/invalid")
def invalid():
    payload = {'timestamp': datetime.now().isoformat()}
    return jsonify(payload)
