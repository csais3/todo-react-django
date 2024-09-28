from django.db import models
from django.utils import timezone

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    completed_on = models.DateTimeField(null=True, blank=True)
    completed = models.BooleanField(default=False)

    def mark_as_completed(self):
        self.completed_on = timezone.now()
        self.completed = True

    def __str__(self) -> str:
        return f"title: {self.title} - created on: {self.created_on}"