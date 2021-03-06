"""jobs, owners and facilities

Revision ID: 440d0855bb22
Revises: 31faaa960fd6
Create Date: 2021-01-21 01:22:29.164400

"""
from alembic import op
import sqlalchemy as sa
import geoalchemy2


# revision identifiers, used by Alembic.
revision = '440d0855bb22'
down_revision = '31faaa960fd6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('owners',
    sa.Column('owner_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.Column('owner_type', sa.Text(), nullable=True),
    sa.Column('industry', sa.Text(), nullable=True),
    sa.Column('hq_address', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('owner_id')
    )
    op.create_table('facilities',
    sa.Column('facility_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.Column('address', sa.Text(), nullable=True),
    sa.Column('location', geoalchemy2.types.Geometry(geometry_type='POINT', from_text='ST_GeomFromEWKT', name='geometry'), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['owners.owner_id'], ),
    sa.PrimaryKeyConstraint('facility_id')
    )
    op.create_table('jobs',
    sa.Column('job_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.Column('facility_id', sa.Integer(), nullable=True),
    sa.Column('start_date', sa.DateTime(), nullable=True),
    sa.Column('end_date', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['facility_id'], ['facilities.facility_id'], ),
    sa.PrimaryKeyConstraint('job_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('jobs')
    op.drop_table('facilities')
    op.drop_table('owners')
    # ### end Alembic commands ###
