
from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.index),
    path('create/', views.BaseView.as_view()),
    path('read/', views.get),
]
