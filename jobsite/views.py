from django.shortcuts import render
from rest_framework import viewsets
from jobsite.models import jobDiscription
from jobsite.seriealizers import jobDescSerialier
# Create your views here.

class JobViewSet(viewsets.ModelViewSet):
    queryset = jobDiscription.objects.all()
    serializer_class=jobDescSerialier