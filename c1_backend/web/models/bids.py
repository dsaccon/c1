from . import db

class Bid(db.Model):
  __tablename__ = 'bids'

  bid_id = db.Column(db.Integer,
    autoincrement=True, primary_key=True)
  name = db.Column(db.Text)
  job_id = db.Column(db.Integer, db.ForeignKey('jobs.job_id'))