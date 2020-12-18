from . import db

class Certification(db.Model):
  __tablename__ = 'certifications'

#  certification_id = db.Column(db.Integer,
#    autoincrement=True, primary_key=True)
  certification_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
  name = db.Column(db.String, index=True)
  row_order = db.Column(db.Integer, index=True)

  def __init__(self, name, row_order):
    self.name = name
    self.row_order = row_order