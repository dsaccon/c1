from . import db

class UsersLoginHistory(db.Model):
  __tablename__ = 'users_login_history'

  user_login_id = Column(db.Integer, 
    autoincrement=True, primary_key=True)
  created_at = Column(db.DateTime)
  user_id = Column(db.Integer, 
    db.ForeignKey('users.id'), index=True)
  login_type = Column(db.String)
  ip_address = Column(db.String)
  token_id = Column(db.String, index=True)
  platform = Column(db.String, index=True)
