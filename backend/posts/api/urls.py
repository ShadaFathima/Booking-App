from django.urls import path
from .views import VenueCardListAPIView, VenueCardDetailAPIView
from .views import HomeView
# urlpatterns = [
#     path('', views.ListProject.as_view(), name='post-list'),
#     path('<int:pk>/', views.DetailProject.as_view(), name='post-detail'),
# ]
urlpatterns = [
    path('venue-cards/', VenueCardListAPIView.as_view(), name='venue-cards-list'),
    path('venue-cards/<int:pk>/', VenueCardDetailAPIView.as_view(), name='venue-card-detail'),
    path('', HomeView.as_view(), name='index'),
    # Add other CRUD endpoints as needed
]