from django.db import models
from django.contrib.auth.models import User

from taggit.managers import TaggableManager


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True)
    title = models.CharField(max_length=50)
    tags = TaggableManager()
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
