# Generated by Django 4.1.3 on 2022-11-17 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobsite', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobdiscription',
            name='jobDesc',
            field=models.TextField(),
        ),
    ]