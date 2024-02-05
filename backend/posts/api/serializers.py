# from rest_framework.serializers import ModelSerializer

# from rest_framework import serializers
# from ..models import VenueCard

# class VenueCardSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = VenueCard
#         fields = ['id', 'title', 'description', 'image_url', 'location', 'link', 'payment_per_hour']
# class PostSerializer(serializers.ModelSerializer):
#     class meta:
#         model = Post
#         fields=('id','title', 'body')

# class PostSerializer(serializers.HyperlinkedModelSerializer):s
#     class Meta:
#         model = Post
#         fields = ('id', 'title', 'body')

from rest_framework import serializers
from ..models import VenueCard

class VenueCardSerializer(serializers.ModelSerializer):
    map_iframe = serializers.CharField(read_only=True)

    class Meta:
        model = VenueCard
        fields = ['id', 'title', 'description', 'images', 'location_link', 'payment_per_hour', 'map_iframe']
