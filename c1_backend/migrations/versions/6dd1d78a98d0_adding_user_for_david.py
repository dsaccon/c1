"""adding user for david

Revision ID: 6dd1d78a98d0
Revises: 671b3aa8b09a
Create Date: 2020-12-09 20:51:44.800123

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6dd1d78a98d0'
down_revision = '671b3aa8b09a'
branch_labels = None
depends_on = None


def upgrade():
  op.execute("""INSERT INTO users (email, created_at, is_admin, name, login_type) values ('dsaccon@outlook.com', now(), TRUE, 'David Saccoon', 'azure')""")


def downgrade():
  pass
