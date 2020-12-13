from datetime import datetime, timedelta
from flask import render_template, abort, jsonify, request
from flask_login import current_user
from google.oauth2 import id_token
from google.auth.transport import requests
from functools import wraps
from web import application, db
from web.models import *
import requests
import jwt

CLIENT_ID_GOOGLE = "591260303822-7bc0jb459rppkuhemoba2qamqhqqm90f.apps.googleusercontent.com"


def decode_auth_token(token):
    json = request.get_json(force=True)
    payload = jwt.decode(token, application.secret_key)
    return payload["sub"]


def valid_token_required(func):
    @wraps(func)
    def func_wrapper(*args, **kwargs):
        jwt_token = request.headers.get("Authorization")
        authorization_type = request.headers.get("Authorization-Type")
        if authorization_type == "GOOGLE":
            try:
                idinfo = id_token.verify_oauth2_token(jwt_token, requests.Request(), CLIENT_ID_GOOGLE)
            except ValueError as value_error:
                application.logger.info("INVALID GOOGLE TOKEN")
                return jsonify({ "error": "error with google jwt token: " + str(value_error) })
        elif authorization_type == "CUSTOM":
            try:
                decode_auth_token(jwt_token)
            except:
                application.logger.info("INVALID GOOGLE TOKEN")
                return jsonify({ "error": "Invalid custom JWT token" })
        else:
            return jsonify({ "error": "Invalid authorization type" })
        return func(*args, **kwargs)

    return func_wrapper


@application.route("/api/ok.json")
@valid_token_required
def test_json():
    payload = {"timestamp": datetime.now().isoformat()}
    return jsonify(payload)


@application.route("/invalid")
def invalid():
    payload = {"timestamp": datetime.now().isoformat()}
    return jsonify(payload)


@application.route("/facebook/login", methods=["POST"])
def login_facebook():
    json = request.get_json(force=True)
    application.logger.info("JSON: ", str(json))
    try:
        access_token = json["accessToken"]
        facebook_name = json["facebookName"]
    except KeyError as error:
        return jsonify({"error": "Missing Key: " + str(error)})

    try:
        params = {"access_token": access_token}
        res = requests.get("https://graph.facebook.com/v8.0/me", params=params)
        json = res.json()
        application.logger.info("JSON: ", str(json))
        returned_name = json["name"]
        if facebook_name == returned_name:
            payload = {
                "exp": datetime.utcnow() + timedelta(days=0, seconds=900),
                "iat": datetime.utcnow(),
                "sub": returned_name
            }
            token = jwt.encode(
                payload,
                application.secret_key,
                algorithm="HS256"
            )
            return jsonify({ "token": token.decode() })
        else:
            application.logger.info("SENT NAME: ", facebook_name)
            application.logger.info("RECEIVED NAME: ", returned_name)
            raise Exception("Could not validate facebook access token")
    except Exception as e:
        application.logger.info("Exception occurred trying to validate facebook access token: ", str(e))
        return jsonify({"error": "Could not validate facebook access token"})






