from sqlalchemy.orm import relationship
from geoalchemy2 import Geometry
from . import db

class Facility(db.Model):
  __tablename__ = 'facilities'

  facility_id = db.Column(db.Integer,
    autoincrement=True, primary_key=True)
  name = db.Column(db.Text)
  owner_id = db.Column(db.Integer, db.ForeignKey('owners.owner_id'))
  address = db.Column(db.Text)
  location = db.Column(Geometry(geometry_type="POINT"))
#  job = relationship("Job", backref="facility", uselist=False)
  job = relationship("Job", backref="facility", lazy="dynamic")