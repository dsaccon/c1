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

@application.route("/owners")
@login_required
def owners_loggedin():
  return render_template("owners.html")

@application.route("/jobs")
@login_required
def jobs_loggedin():
  return render_template("jobs.html")

@application.route("/certifications", methods=('GET', 'POST'))
@login_required
def certifications_loggedin():
  if request.method == 'POST':
    new_name = request.form['new-name']
    new_row_order = request.form['new-row-order']
    row = Certification(new_name, new_row_order)
    db.session.add(row)
    db.session.commit()

  all_certs = Certification.query.all()
  all_certs.sort(key=lambda x: int(x.row_order))

  return render_template("certifications.html", certs = all_certs)

@application.route("/certifications/<int:id>/edit", methods=('GET', 'POST'))
@login_required
def certifications_loggedin_edit(id):
  if request.method == 'POST':
    new_name = request.form['new-name']
    new_row_order = request.form['new-row-order']
    row = Certification(new_name, new_row_order)
    db.session.add(row)
    db.session.commit()
    return redirect("/certifications")

  row = db.session.query(Certification).filter(Certification.certification_id==id).first()
  return render_template("certifications_edit.html", cert = row)


@application.route("/certifications/<int:id>/delete")
@login_required
def certifications_loggedin_delete(id):
  row = db.session.query(Certification).filter(Certification.certification_id==id).delete()
  db.session.commit()

  return redirect("/certifications")