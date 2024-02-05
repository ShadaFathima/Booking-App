# from django.contrib import admin
# from .models import Post
# # Register your models here.

# admin.site.register(Post)

# posts/admin.py

from django.contrib import admin
from .models import VenueCard  # Import the new VenueCard model

class VenueCardAdmin(admin.ModelAdmin):
    # list_display = ('title', 'description', 'location', 'link', 'payment_per_hour', 'image_url')
    list_display = ('id', 'title', 'description', 'images', 'location_link', 'payment_per_hour', 'map_iframe')

# Register the VenueCard model with the custom admin class
admin.site.register(VenueCard, VenueCardAdmin)
