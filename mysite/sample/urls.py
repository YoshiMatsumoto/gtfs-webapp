from django.conf.urls import url
from sample import views

urlpatterns = [
    url(r'^members/$', views.index, name='index'),
]