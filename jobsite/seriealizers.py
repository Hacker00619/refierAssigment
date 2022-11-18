from rest_framework import serializers
from jobsite.models import jobDiscription

class jobDescSerialier(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = jobDiscription
        fields="__all__"