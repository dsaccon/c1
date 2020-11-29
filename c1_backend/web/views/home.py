from flask import render_template, abort, redirect, request
from flask_login import login_required, current_user
from web import application, db, admin_required
from web.models import *
import os

@application.route("/")
def home():
  return redirect("/login?next=L2hvbWU=")

@application.route("/home")
@login_required
def home_loggedin():
  return render_template("index.html") 
