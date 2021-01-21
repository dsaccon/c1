from sqlalchemy.orm import relationship
from . import db

class Owner(db.Model):
  __tablename__ = 'owners'

  owner_id = db.Column(db.Integer,
    autoincrement=True, primary_key=True)
  name = db.Column(db.Text)
  owner_type = db.Column(db.Text)
  industry = db.Column(db.Text)
  hq_address = db.Column(db.Text)
#  jobs = relationship(
#    "Job", backref="owner", lazy="dynamic")
  facilities = relationship(
    "Facility", backref="owner", lazy="dynamic")