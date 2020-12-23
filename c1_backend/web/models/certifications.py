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
  parent_organization = relationship("ParentOrganization", back_populates="certifications")

  def __init__(self, name, short_name, url, row_order):
    self.name = name
    self.short_name = short_name
    self.url = url
    self.row_order = row_order