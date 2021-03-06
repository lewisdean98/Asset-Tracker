# Generated by Django 4.0.4 on 2022-06-11 14:07

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('asset_tag', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('checked_in', models.BooleanField(verbose_name=0)),
                ('checked_in_count', models.IntegerField(verbose_name=0)),
                ('last_checked_in', models.DateTimeField(verbose_name=datetime.datetime(2022, 6, 11, 14, 7, 13, 516568, tzinfo=utc))),
                ('last_checked_out', models.DateTimeField(verbose_name=datetime.datetime(2022, 6, 11, 14, 7, 13, 516710, tzinfo=utc))),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('asset_tag', models.CharField(max_length=8)),
                ('time_stamp', models.DateTimeField(verbose_name=datetime.datetime(2022, 6, 11, 14, 7, 13, 566051, tzinfo=utc))),
                ('ticket', models.CharField(max_length=20)),
                ('user', models.CharField(max_length=40)),
            ],
        ),
    ]
