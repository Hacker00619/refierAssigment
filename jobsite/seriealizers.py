from rest_framework import serializers
from jobsite.models import jobDiscription

class jobDescSerialier(serializers.ModelSerializer):
    class Meta:
        model = jobDiscription
        fields="__all__"