import time
from peewee import *

from . import db


class Metagraph(Model):
    id = AutoField()
    netuid = IntegerField()
    json_data = TextField()
    last_update = IntegerField(default=lambda: int(time.time()))

    class Meta:
        database = db


db.create_tables([Metagraph])
