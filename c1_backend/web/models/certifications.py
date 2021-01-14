from sqlalchemy.orm import relationship
from . import db

class Certification(db.Model):
  __tablename__ = 'certifications'

  certification_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
  name = db.Column(db.String, index=True)
  short_name = db.Column(db.String)
  url = db.Column(db.String)
  row_order = db.Column(db.Integer, index=True)
  parent_organization_id = db.Column(db.Integer, db.ForeignKey('parent_organizations.id'))