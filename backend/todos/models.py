from django.db import models

# Create your models here.
from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    due_date = models.DateField(null=True, blank=True)  # Optional due date
    resolved = models.BooleanField(default=False)  # Mark whether the todo is resolved

    def __str__(self):
        return self.title