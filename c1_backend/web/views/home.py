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
    if all((
        'name' in request.form,
        'short_name' in request.form,
        'url' in request.form,
        'row_order' in request.form,
        'certification_id' in request.form,
        'parent_organization' in request.form)):
      # Edit
      name = request.form['name']
      short_name = request.form['short_name']
      url = request.form['url']
      row_order = request.form['row_order']
      id_ = request.form['certification_id']
      parent_org = db.session.query(ParentOrganization).filter(
        ParentOrganization.name==request.form['parent_organization']).first()

      cert = Certification.query.get(id_)
      cert.name = name
      cert.short_name = short_name
      cert.url = url
      cert.row_order = row_order
      cert.parent_organization = parent_org
      db.session.add(cert)
      db.session.commit()

    elif all((
        'new-name' in request.form,
        'new-short-name' in request.form,
        'new-url' in request.form,
        'new-row-order' in request.form,
        'new-parent-org' in request.form)):
      # Add new
      new_name = request.form['new-name']
      new_short_name = request.form['new-short-name']
      new_url = request.form['new-url']
      new_row_order = request.form['new-row-order']
      new_parent_org = request.form['new-parent-org']

      parent_org = db.session.query(ParentOrganization).filter(
        ParentOrganization.name==new_parent_org).first()
      cert = Certification(
        name=new_name, short_name=new_short_name, url=new_url,
        row_order=new_row_order, parent_organization=parent_org)
      db.session.add(cert)
      db.session.commit()

  all_certs = Certification.query.all()
  all_certs.sort(key=lambda x: int(x.row_order))
  all_parent_orgs = ParentOrganization.query.all()

  return render_template(
    "certifications.html", certs=all_certs, parent_orgs=all_parent_orgs)

@application.route("/certifications/<int:id_>/delete")
@login_required
def certifications_loggedin_delete(id_):
  cert = Certification.query.get(id_)
  db.session.delete(cert)
  db.session.commit()

  return redirect("/certifications")

@application.route("/parent-organizations", methods=('GET', 'POST'))
@login_required
def parent_orgs_loggedin():
  if request.method == 'POST':
    if all((
        'name' in request.form,
        'short_name' in request.form,
        'url' in request.form)):
      # Edit
      name = request.form['name']
      short_name = request.form['short_name']
      url = request.form['url']
      id_ = request.form['parent_org_id']
      parent = ParentOrganization.query.get(id_)
      parent.name = name
      parent.short_name = short_name
      parent.url = url
      db.session.add(parent)
      db.session.commit()

    elif all((
        'new-name' in request.form,
        'new-short-name' in request.form,
        'new-url' in request.form)):
      # Add new
      new_name = request.form['new-name']
      new_short_name = request.form['new-short-name']
      new_url = request.form['new-url']
      parent = ParentOrganization(
        name=new_name, short_name=new_short_name, url=new_url)
      db.session.add(parent)
      db.session.commit()

  all_parent_orgs = ParentOrganization.query.all()
  all_parent_orgs.sort(key=lambda x: int(x.id))

  return render_template(
    "parent_organizations.html", parent_orgs=all_parent_orgs)

@application.route("/parent-organizations/<int:id_>/delete")
@login_required
def parent_orgs_loggedin_delete(id_):
  parent = ParentOrganization.query.get(id_)
  db.session.delete(parent)
  db.session.commit()

  return redirect("/parent-organizations")