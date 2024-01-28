from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListProject.as_view(), name='post-list'),
    path('<int:pk>/', views.DetailProject.as_view(), name='post-detail'),
]
