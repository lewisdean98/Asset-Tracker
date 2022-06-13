# Generated by Django 4.0.4 on 2022-06-13 14:33

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('assets', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='asset',
            name='last_checked_in',
            field=models.DateTimeField(verbose_name=datetime.datetime(2022, 6, 13, 14, 33, 11, 534143, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='asset',
            name='last_checked_out',
            field=models.DateTimeField(verbose_name=datetime.datetime(2022, 6, 13, 14, 33, 11, 534276, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='event',
            name='time_stamp',
            field=models.DateTimeField(verbose_name=datetime.datetime(2022, 6, 13, 14, 33, 11, 546280, tzinfo=utc)),
        ),
    ]
