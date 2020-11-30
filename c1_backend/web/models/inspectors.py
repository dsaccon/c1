from . import db

class Inspector(db.Model):
  __tablename__ = 'inspectors'

  inspector_id = db.Column(db.Integer,
    autoincrement=True, primary_key=True)
  email = db.Column(db.String, index=True)
  created_at = db.Column(db.DateTime)
  name = db.Column(db.Text)
  login_type = db.Column(db.String) # google, password
  password_hash = db.Column(db.String)
  disabled_at = db.Column(db.DateTime)
