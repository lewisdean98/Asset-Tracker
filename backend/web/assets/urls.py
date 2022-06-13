from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('scan/<str:asset_tag>', views.scanAsset, name='scan-asset'),
    path('gethistory/<str:asset_tag>', views.getHistory, name='get-history')
]