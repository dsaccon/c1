from sqlalchemy.orm import relationship
from . import db

class Job(db.Model):
  __tablename__ = 'jobs'

  job_id = db.Column(db.Integer,
    autoincrement=True, primary_key=True)
  name = db.Column(db.Text)
  facility_id = db.Column(db.Integer, db.ForeignKey('facilities.facility_id'))
  start_date = db.Column(db.DateTime(timezone=True))
  end_date = db.Column(db.DateTime(timezone=True))
  bid = relationship("Bid", backref="job", lazy="dynamic")
