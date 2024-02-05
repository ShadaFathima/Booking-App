# posts/api/views.py

from rest_framework import generics 
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from ..models import VenueCard
from .serializers import VenueCardSerializer

class VenueCardListAPIView(generics.ListCreateAPIView):
    queryset = VenueCard.objects.all()
    serializer_class = VenueCardSerializer

class VenueCardDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = VenueCard.objects.all()
    serializer_class = VenueCardSerializer
from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'index.html'


# from rest_framework.viewsets import ModelViewSet
# from ..models import Post 
# from .serializers import PostSerializer

# class PostViewSet(ModelViewSet):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
# class ListProject(generics.ListCreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class DetailProject(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer