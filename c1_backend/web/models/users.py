from . import db

class User(db.Model):
  __tablename__ = 'users'
  _is_anonymous = False
  is_active = True

  # flask-login property
  @property
  def is_authenticated(self):
    return True 

  # flask-login property
  @property
  def is_anonymous(self):
    return  False

  # needed for flask-login
  def get_id(self):
    return str(self.id)

  @property
  def user_id(self):
    return self.id

  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String)
  created_at = db.Column(db.DateTime)
  is_admin = db.Column(db.Boolean)
  name = db.Column(db.Text)
  last_seen_at = db.Column(db.DateTime)
  login_type = db.Column(db.String)
  password_hash = db.Column(db.Text)
  disabled_at = db.Column(db.DateTime)
  is_email_user = db.Column(db.Boolean)
  phone = db.Column(db.String)
