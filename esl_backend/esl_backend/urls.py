from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Other paths
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt'), name="jwt"),
    path('auth/', include("djoser.urls.authtoken")),
    path('auth/', include('djoser.social.urls')),
]
