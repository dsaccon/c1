from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

from .users import User
from .users_login_history import UsersLoginHistory