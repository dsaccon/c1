from flask import render_template, abort, redirect, request
from flask_login import login_required, current_user
from web import application, db, admin_required
from web.models import *
import datetime as dt
import os

@application.route("/")
def home():
  return redirect("/login?next=L2hvbWU=")

@application.route("/home")
@login_required
def home_loggedin():
  return render_template("index.html")

@application.route("/owners", methods=('GET', 'POST'))
@login_required
def owners_loggedin():
  if request.method == 'POST':
    if all((
        'name' in request.form,
        'owner_type' in request.form,
        'industry' in request.form,
        'hq_address' in request.form)):
      # Edit
      name = request.form['name']
      owner_type = request.form['owner_type']
      industry = request.form['industry']
      hq_address = request.form['hq_address']
      id_ = request.form['owner_id']
      owner = Owner.query.get(id_)
      owner.name = name
      owner.owner_type = owner_type
      owner.industry = industry
      owner.hq_address = hq_address
      db.session.add(owner)
      db.session.commit()

    elif all((
        'new-name' in request.form,
        'new-owner-type' in request.form,
        'new-industry' in request.form,
        'new-hq-address' in request.form)):
      # Add new
      new_name = request.form['new-name']
      new_owner_type = request.form['new-owner-type']
      new_industry = request.form['new-industry']
      new_hq_address = request.form['new-hq-address']

      owner = Owner(
        name=new_name, owner_type=new_owner_type,
        industry=new_industry, hq_address=new_hq_address)
      db.session.add(owner)
      db.session.commit()

  all_owners = Owner.query.all()
  all_owners.sort(key=lambda x: int(x.owner_id))

  return render_template(
    "owners.html", owners=all_owners)

@application.route("/owners/<int:id_>/delete")
@login_required
def owners_loggedin_delete(id_):
  owner = Owner.query.get(id_)
  db.session.delete(owner)
  db.session.commit()

  return redirect("/owners")

@application.route("/facilities", methods=('GET', 'POST'))
@login_required
def facilities_loggedin():
  if request.method == 'POST':
    if all((
        'name' in request.form,
        'owner' in request.form,
        'address' in request.form)):
      # Edit
      name = request.form['name']
      address = request.form['address']
      id_ = request.form['facility_id']
      owner = db.session.query(Owner).filter(
        Owner.name==request.form['owner']).first()

      facility = Facility.query.get(id_)
      facility.name = name
      facility.owner = owner
      facility.address = address
      db.session.add(facility)
      db.session.commit()

    elif all((
        'new-name' in request.form,
        'new-owner' in request.form,
        'new-address' in request.form,
        'new-lat' in request.form,
        'new-long' in request.form,
        'new-location' in request.form)):
      # Add new
      new_name = request.form['new-name']
      new_owner = request.form['new-owner']
      new_address = request.form['new-address']
      new_latitude = request.form['new-lat']
      new_longitude = request.form['new-long']
      new_location = request.form['new-location'].split(',')
      if new_latitude and new_longitude:
        new_coordinates = f'POINT({new_latitude} {new_longitude})'

        owner = db.session.query(Owner).filter(
          Owner.name==new_owner).first()
        facility = Facility(
          name=new_name, owner=owner, address=new_address,
          location=new_coordinates, location_name=new_location)
        db.session.add(facility)
        db.session.commit()

  all_facilities = Facility.query.all()
  all_facilities.sort(key=lambda x: int(x.facility_id))
  for facility in all_facilities:
    facility.location_name = facility.location_name[1:-1].replace('"', '')
  all_owners = Owner.query.all()
  all_owners.sort(key=lambda x: int(x.owner_id))

  return render_template(
    "facilities.html", facilities=all_facilities, owners=all_owners)

@application.route("/facilities/<int:id_>/delete")
@login_required
def facilities_loggedin_delete(id_):
  facility = Facility.query.get(id_)
  db.session.delete(facility)
  db.session.commit()

  return redirect("/facilities")

@application.route("/jobs", methods=('GET', 'POST'))
@login_required
def jobs_loggedin():
  if request.method == 'POST':
    if all((
        'name' in request.form,
        'owner' in request.form,
        'facility' in request.form,
        'start_date' in request.form,
        'end_date' in request.form,
        'job_id' in request.form)):
      # Edit
      name = request.form['name']
      start_date = request.form['start_date']
      end_date = request.form['end_date']
      id_ = request.form['job_id']
      owner = db.session.query(Owner).filter(
        Owner.name==request.form['owner']).first()
      facility = db.session.query(Facility).filter(
        Facility.name==request.form['facility']).first()

      job = Job.query.get(id_)
      job.name = name
      job.owner = owner
      job.facility = facility
      job.start_date = start_date
      job.end_date = end_date
      db.session.add(job)
      db.session.commit()

    elif all((
        'new-name' in request.form,
        'new-owner' in request.form,
        'new-facility' in request.form,
        'new-start-date' in request.form,
        'new-end-date' in request.form)):
      # Add new
      new_name = request.form['new-name']
      new_owner = request.form['new-owner']
      new_facility = request.form['new-facility']
      new_start_date = request.form['new-start-date']
      new_end_date = request.form['new-end-date']

      owner = db.session.query(Owner).filter(
        Owner.name==new_owner).first()
      facility = db.session.query(Facility).filter(
        Facility.name==new_facility).first()
      job = Job(
        name=new_name, facility=facility,
        start_date=new_start_date, end_date=new_end_date)
      db.session.add(job)
      db.session.commit()

  all_jobs = Job.query.all()
  all_jobs.sort(key=lambda x: int(x.job_id))
  for job in all_jobs:
    start = job.start_date
    end = job.end_date
    job.start_date = dt.datetime(start.year, start.month, start.day).strftime('%m/%d/%Y')
    job.end_date = dt.datetime(end.year, end.month, end.day).strftime('%m/%d/%Y')
  all_owners = Owner.query.all()
  all_facilities = Facility.query.all()

  return render_template("jobs.html", jobs=all_jobs, owners=all_owners, facilities=all_facilities)

@application.route("/jobs/<int:id_>/delete")
@login_required
def jobs_loggedin_delete(id_):
  job = Job.query.get(id_)
  db.session.delete(job)
  db.session.commit()

  return redirect("/jobs")

@application.route("/certifications", methods=('GET', 'POST'))
@login_required
def certifications_loggedin():
  if request.method == 'POST':
    if all((
        'name' in request.form,
        'short_name' in request.form,
        'url' in request.form,
        'row_order' in request.form,
        'parent_organization' in request.form,
        'certification_id' in request.form)):
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