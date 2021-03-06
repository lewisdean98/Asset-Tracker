from pyexpat import model
from django.db import models
from django.utils.timezone import now

# Create your models here.
class Asset(models.Model):
    asset_tag = models.CharField(max_length=8, primary_key=True)
    checked_in = models.BooleanField(0)
    checked_in_count = models.IntegerField(0)
    last_checked_in = models.DateTimeField(now())
    last_checked_out = models.DateTimeField(now())
    
class Event(models.Model):
    id = models.UUIDField(primary_key=True)
    asset_tag = models.CharField(max_length=8)
    time_stamp = models.DateTimeField(now())
    ticket = models.CharField(max_length=20)
    user = models.CharField(max_length=40)