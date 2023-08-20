from django.db import models
from .models import *

# Create your models here.
class Note(models.Model):
    body = models.CharField(max_length=250)
    updated = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body

