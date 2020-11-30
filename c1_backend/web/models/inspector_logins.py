from . import db

class InspectorLogin(db.Model):
  __tablename__ = 'inspector_logins'

  login_id = db.Column(db.Integer,
    autoincrement=True, primary_key=True)
  inspector_id = db.Column(db.Integer,
    db.ForeignKey('users.id'), index=True)
  inspector = db.relationship('Inspector')
  created_at = db.Column(db.DateTime)
  created_ip_address = db.Column(db.String)
  api_key = db.Column(db.String, index=True)
  last_seen_at = db.Column(db.DateTime)
  disabled_at = db.Column(db.DateTime, index=True)
