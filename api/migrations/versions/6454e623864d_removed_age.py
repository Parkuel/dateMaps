"""Removed Age

Revision ID: 6454e623864d
Revises: 
Create Date: 2024-07-05 13:14:58.039872

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6454e623864d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=320), nullable=False),
    sa.Column('password', sa.String(length=25), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('username', sa.String(length=20), nullable=True),
    sa.Column('profile_image', sa.String(), nullable=True),
    sa.Column('date_of_birth', sa.Date(), nullable=True),
    sa.Column('gender', sa.String(), nullable=True),
    sa.Column('has_details', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('email', name='uix_user_email'),
    sa.UniqueConstraint('username'),
    sa.UniqueConstraint('username', name='uix_user_username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
