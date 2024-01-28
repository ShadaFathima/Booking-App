# from rest_framework.serializers import ModelSerializer

from rest_framework import serializers
from ..models import Post

# class PostSerializer(serializers.ModelSerializer):
#     class meta:
#         model = Post
#         fields=('id','title', 'body')

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'body')