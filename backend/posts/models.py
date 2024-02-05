from django.db import models

class VenueCard(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    images = models.FileField(default="")
    location_link = models.URLField()  # Rename field to better represent a link
    payment_per_hour = models.DecimalField(max_digits=10, decimal_places=2)

    def generate_map_iframe(self):
        # Logic to generate iframe code from the location link
        # You may customize this based on your requirements
        return f'<iframe src="{self.location_link}" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

    @property
    def map_iframe(self):
        return self.generate_map_iframe()

    def __str__(self):
        return self.title
