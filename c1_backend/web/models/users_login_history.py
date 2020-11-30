from . import db

class UsersLoginHistory(db.Model):
  __tablename__ = 'users_login_history'

  user_login_id = db.Column(db.Integer, 
    autoincrement=True, primary_key=True)
  created_at = db.Column(db.DateTime)
  user_id = db.Column(db.Integer, 
    db.ForeignKey('users.id'), index=True)
  login_type = db.Column(db.String)
  ip_address = db.Column(db.String)
  token_id = db.Column(db.String, index=True)
  platform = db.Column(db.String, index=True)
  result = db.Column(db.String)
  email = db.Column(db.String)
