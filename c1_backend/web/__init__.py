from flask import Flask, render_template, redirect, request, \
  jsonify, url_for, send_file, Response, abort
from flask_login import LoginManager, login_required, login_user, \
  logout_user, current_user
from flask_talisman import Talisman
from flask_migrate import Migrate, MigrateCommand
from .helpers import dictify_obj
from werkzeug.middleware.proxy_fix import ProxyFix
import base64
import logging
import os
import requests
from .models import *

application = Flask(__name__)
application.secret_key = "dcb632ee"
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.environ['SQLALCHEMY_TRACK_MODIFICATIONS']
application.config['GOOGLE_MAPS_API_KEY'] = os.environ.get('GOOGLE_MAPS_API_KEY')

gunicorn_error_logger = logging.getLogger('gunicorn.error')
application.logger.handlers.extend(gunicorn_error_logger.handlers)
application.logger.setLevel(logging.INFO)

login_manager = LoginManager()
login_manager.init_app(application)

if os.environ.get('FORCE_SSL') == "TRUE":
  application.wsgi_app = ProxyFix(application.wsgi_app)
  csp = {'default-src': ['\'self\'', '\'unsafe-inline\'', '*'],
    'img-src': ['\'self\'', '\'unsafe-inline\'', '*'],
    'script-src': ['\'self\'', '\'unsafe-inline\'', '*']}
  talisman = Talisman(application, force_https=True, content_security_policy=csp)

if os.environ.get('SENTRY_DSN'):
  sentry_env = os.environ.get('SENTRY_ENV', 'unknown')
  sentry_sdk.init(
    environment=sentry_env,
    request_bodies='always',
    dsn=os.environ.get('SENTRY_DSN'),
    integrations=[FlaskIntegration(), CeleryIntegration()])

if os.environ.get('SLACK_TXN_WEBHOOK'):
  application.config['SLACK_TXN_WEBHOOK'] = os.environ['SLACK_TXN_WEBHOOK']

# enable postgres via SQLAlchemy
postgres_user = os.environ['POSTGRES_USER']
postgres_pass = os.environ['POSTGRES_PASSWORD']
postgres_db = os.environ['POSTGRES_DB']
postgres_host = os.environ['POSTGRES_HOST']
alchemy_uri = 'postgresql://%s:%s@%s:5432/%s' % (postgres_user, \
  postgres_pass, postgres_host, postgres_db)
application.config['SQLALCHEMY_DATABASE_URI'] = alchemy_uri
migrate = Migrate(application, db, compare_type=True)
db.init_app(application)

# redis stuff defined here to avoid repetition
REDIS_HOST = os.environ.get('REDIS_DEFAULT_HOST')
REDIS_URL = "redis://{}:{}@{}/0".format(os.environ.get('REDIS_DEFAULT_USER'), os.environ.get('REDIS_DEFAULT_PASS'), REDIS_HOST)

# enable celery for offline processing, using rabbit or redis
# using a default queue name of "worker"
if os.environ.get('CELERY_BACKEND') == 'rabbitmq':
  user = os.environ.get('RABBITMQ_DEFAULT_USER')
  password = os.environ.get('RABBITMQ_DEFAULT_PASS')
  vhost = os.environ.get('RABBITMQ_DEFAULT_VHOST')
  host = os.environ.get('RABBITMQ_DEFAULT_HOST')
  broker_url = "pyamqp://%s:%s@%s/%s" % (user, password, host, vhost)
  application.config['CELERY_BROKER_URL'] = broker_url
  celery = make_celery(application)
elif os.environ.get('CELERY_BACKEND') == 'redis':
  application.config['CELERY_BROKER_URL'] = REDIS_URL
  application.config['result_backend'] = REDIS_URL
  celery = make_celery(application)
else:
  application.logger.warn("celery backend is disabled...")

# load the stripe keys into the application unit
application.config['STRIPE_CONNECT_CLIENT_ID'] = os.environ.get('STRIPE_CONNECT_CLIENT_ID')
application.config['STRIPE_REDIRECT_HOSTNAME'] = os.environ.get('STRIPE_REDIRECT_HOSTNAME')
application.config['STRIPE_PRIVATE_KEY'] = os.environ.get('STRIPE_PRIVATE_KEY')
application.config['STRIPE_PUBLIC_KEY'] = os.environ.get('REACT_APP_STRIPE_PUBLIC_KEY')


application.config['JSONIFY_PRETTYPRINT_REGULAR'] = False
application.config['JSON_SORT_KEYS'] = False

# admin required decorator
def admin_required(func):
  def func_wrapper(*args, **kwargs):
    if current_user.is_admin == True:
      return func(*args, **kwargs)
    else:
      return redirect("/")
  func_wrapper.__name__ = func.__name__
  return func_wrapper

from . import login
from . import views
from . import api

# extra helper functions inside of JINJA
application.jinja_env.filters['b64decode'] = base64.b64decode
