from flask import Flask, redirect, url_for, session, request, jsonify
import os
from flask_oauthlib.client import OAuth

AZURE_CLIENT_ID = os.environ['AZURE_CLIENT_ID']
AZURE_CLIENT_SECRET = os.environ['AZURE_CLIENT_SECRET']
AZURE_AUTH_ENDPOINT = os.environ['AZURE_AUTH_ENDPOINT']
AZURE_TOKEN_ENDPOINT = os.environ['AZURE_TOKEN_ENDPOINT']

azure = OAuth().remote_app(
  'azure',
  consumer_key=AZURE_CLIENT_ID,
  consumer_secret=AZURE_CLIENT_SECRET,
  request_token_params={'scope': 'User.Read'},
  access_token_url=AZURE_TOKEN_ENDPOINT,
  base_url='https://graph.microsoft.com/v1.0/', 
  access_token_method='POST',
  authorize_url=AZURE_AUTH_ENDPOINT)

@azure.tokengetter
def get_azure_oauth_token():
    return session.get('microsoft_token')
