from django.contrib import admin
from django.urls import path, include
from jobsite.views import JobViewSet
from rest_framework import routers
from jobsite import views

router = routers.DefaultRouter()
router.register(r'jobs', JobViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include(router.urls))
]
