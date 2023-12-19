from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PostViewSet

Post_router = DefaultRouter()
Post_router.register(r'posts', PostViewSet)
