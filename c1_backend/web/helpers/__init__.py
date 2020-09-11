from __future__ import division
from builtins import str
from past.utils import old_div
import logging
import time
import dateutil.parser
import math
import json
import sqlalchemy
import copy
import os
import pytz
import decimal
import dateutil.parser
from jinja2 import Undefined, Template
from sqlalchemy.orm.base import object_mapper
from sqlalchemy.orm.exc import UnmappedInstanceError
#from celery import Celery
from flask import request
from datetime import datetime, timedelta, date,  time as dt_time
from calendar import timegm
import pytz
import requests
from web.models import *


# this blob here is for jinja2, so that it doesnt barf an undefined
# error if something doesnt exist in the template
class SilentUndefined(Undefined):
  def _fail_with_undefined_error(self, *args, **kwargs):
    return ''
  __add__ = __radd__ = __mul__ = __rmul__ = __div__ = __rdiv__ = \
    __truediv__ = __rtruediv__ = __floordiv__ = __rfloordiv__ = \
    __mod__ = __rmod__ = __pos__ = __neg__ = __call__ = \
    __getitem__ = __lt__ = __le__ = __gt__ = __ge__ = __int__ = \
    __float__ = __complex__ = __pow__ = __rpow__ = \
    _fail_with_undefined_error      

def int_to_dollars(dollars_int):
  try:
    return '${:,.2f}'.format(float(dollars_int) / 100)
  except:
    return ''

def format_timestamp(dt, format_string):
  yourdate = dateutil.parser.parse(dt)
  return yourdate.strftime(format_string)

''' email helper functions below this, which are useful for putting
    content into emails '''
def populate_values_in_query(query_text, some_variable_dict):
  t = Template(query_text)
  t.globals['int_to_dollars'] = int_to_dollars
  t.globals['format_timestamp'] = format_timestamp
  return t.render(some_variable_dict)

''' helper function to determine if an object is a sql
    alchemy object type '''
def is_mapped(obj):
  try:
    object_mapper(obj)
  except UnmappedInstanceError:
    return False
  return True

def dictify_obj(orig_obj):
  ''' take any sql alchemy response and attempt to dictify it '''
  sqlalchemy_obj = copy.deepcopy(orig_obj)
  if type(sqlalchemy_obj) == list:
    return [dictify_obj(obj) for obj in sqlalchemy_obj]
  if type(sqlalchemy_obj) in (str, str, int, float, bool):
    return sqlalchemy_obj
  if sqlalchemy_obj is None:
    return None

  if '__dict__' in dir(sqlalchemy_obj):
    new_dict = sqlalchemy_obj.__dict__
  elif is_mapped(sqlalchemy_obj) is True:
    new_dict = object_mapper(sqlalchemy_obj)
  elif type(sqlalchemy_obj) is dict:
    new_dict = sqlalchemy_obj
  else:
    new_dict = {k: getattr(sqlalchemy_obj, k) for (k) in list(sqlalchemy_obj.keys())}

  if '_sa_instance_state' in list(new_dict.keys()):
    del new_dict['_sa_instance_state']
  for (k,v) in list(new_dict.items()):
    if type(v) == datetime:
      new_dict[k] = v.isoformat()
      new_dict[k+'_timestamp'] = dt_to_utc_timestamp(v)
    if type(v) == date:
      new_dict[k] = v.isoformat()
      new_dict[k+'_timestamp'] = dt_to_utc_timestamp(v)
    if type(v) == decimal.Decimal:
      new_dict[k] = float(v)
    if is_mapped(v) is True:
      new_dict[k] = dictify_obj(v)

  if '_labels' in new_dict.keys():
    del new_dict['_labels']

  return new_dict

def get_tenant_host():
  http_host = request.environ.get('HTTP_HOST')
  if http_host is None:
    raise Exception("Unable to fetch HTTP_HOST!")
  http_host = http_host.replace(".blpt.co", "")
  return http_host

# helper function for making celery compatible
# with flask @ http://flask.pocoo.org/docs/0.12/patterns/celery/
#def make_celery(app):
#  celery = Celery(app.import_name,
#    backend=None,
#    broker=app.config['CELERY_BROKER_URL'])
#  celery.conf.update(app.config)
#  celery.conf.broker_transport_options = {'visibility_timeout': 7600}
#  TaskBase = celery.Task
#  class ContextTask(TaskBase):
#    abstract = True
#    def __call__(self, *args, **kwargs):
#      with app.app_context():
#        return TaskBase.__call__(self, *args, **kwargs)
#  celery.Task = ContextTask
#  return celery

def datetime_to_minutes_after_midnight(dt):
  hour = dt.hour
  minutes = dt.minute
  return hour*60 + minutes

# take minutes and conert it to a displayble time. For example,
# take 115 and turn that into "1:55am"
def minutes_after_midnight_to_displayable_time(minutes_after_midnight, weekday=False):
  # special case for 11:59pm
  if minutes_after_midnight == 1439:
    return '12:00am'

  hour = old_div(minutes_after_midnight,60)
  minutes = minutes_after_midnight % 60

  if minutes < 10:
    minutes = "0" + str(minutes)
  if hour == 0:
    hour = 12
    ampm = "am"
  elif hour == 12:
    ampm = "pm"
  elif hour > 12:
    hour = hour - 12
    ampm = "pm"
  else:
    ampm = "am"

  ret = "{}:{}{}".format(hour, minutes, ampm)
  # if weekday argument is supplied, then prepend that to the string
  if weekday:
    ret = "{} {}".format(weekday, ret)

  return ret

# this function converts a datetime to an integer day of the week in the 1-7
# format we use in our db
def datetime_to_weekday_int(dt):
  return dt.weekday() + 1

def weekday_int(minutes=0):
  tz = pytz.timezone('America/Chicago')
  now = datetime.now(tz) + timedelta(minutes=minutes)
  return int(now.strftime("%w")) 

def weekday_string(minutes=0):
  tz = pytz.timezone('America/Chicago')
  now = datetime.now(tz) + timedelta(minutes=minutes)
  return now.strftime("%A")

# take a datetime and return a datetime that is 12:00am the following day
def next_day_midnight(dt):
   return datetime.combine(dt.date(), dt_time(0,0,0,0))  + timedelta(days=1) 

# take a datetime and get yesterday at 11:50pm
def yesterday_1159pm(dt):
   return datetime.combine(dt.date(), dt_time(23,59,0,0))  - timedelta(days=1) 

def post_to_slack(msg, config):
  if config.get('SLACK_TXN_WEBHOOK'):
    webhook_url = config['SLACK_TXN_WEBHOOK']
    headers = {'Content-Type': 'application/json'}
    data = {'text': msg}
    req = requests.post(webhook_url, json.dumps(data), headers=headers)

def datetime_diff_seconds(dt1, dt2):
  d1_ts = time.mktime(dt1.timetuple())
  d2_ts = time.mktime(dt2.timetuple())
  return int(d2_ts-d1_ts)

def dict_flattener(input_dict):
  ''' flattens a dictionary of nested dicts into a single
  depth dictionary with elements separated by .'''
  output = {}
  for (k,v) in list(input_dict.items()):
    if type(v) not in (list, dict):
      output[k] = v
    elif type(v) is list:
      v = str(v)
    elif type(v) is dict:
      res = dict_flattener(v)
      for (k2, v2) in list(res.items()):
        output[str(k) + '.' + str(k2)] = v2
  return output

# returns a unix timestamp in UTC
# If you pass in 7pm on July 1, you'll get back
# a unix timestamp of 7pm on july1 in utc. This is
# useful for passing times to javascript
def dt_to_utc_timestamp(dt):
  return timegm(dt.timetuple())


def python2round(val):
  x = 0
  if (float(val) % 1) >= 0.5:
      x = math.ceil(val)
  else:
      x = round(val)
  return x

def utc_offset():
  system_tz = pytz.timezone('America/Chicago')
  offset = datetime.now(tz=system_tz).strftime('%z')
  hours = int(offset)/100
  return int(hours)

def central_offset(tz):
  dt1 = datetime.now(tz=tz)
  dt1 = datetime(dt1.year, dt1.month, dt1.day, dt1.hour, dt1.minute)
  central_dt = datetime.now() 
  hours_offset = round((central_dt - dt1).total_seconds()/3600)
  return hours_offset
