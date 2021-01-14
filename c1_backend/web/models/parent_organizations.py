from sqlalchemy.orm import relationship
from . import db

class ParentOrganization(db.Model):
  __tablename__ = 'parent_organizations'

  id = db.Column(db.Integer, autoincrement=True, primary_key=True)
  name = db.Column(db.String)
  short_name = db.Column(db.String)
  url = db.Column(db.String)
  certifications = relationship("Certification", backref="parent_organization", lazy="dynamic")