from django.contrib import admin
from django.urls import path, include
from jobsite.views import JobViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'jobs', JobViewSet)

urlpatterns = [
    path('', include(router.urls))
]
