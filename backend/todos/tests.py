from django.test import TestCase
from .models import Todo
from datetime import date, timedelta

""" Models Test Cases

class Todo(models.Model):
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    due_date = models.DateField(null=True, blank=True)  # Optional due date
    resolved = models.BooleanField(default=False)  # Mark whether the todo is resolved

    def __str__(self):
        return self.title """



class TodoModelTest(TestCase):
    """Test cases for the Todo model"""

    def test_create_todo_with_all_fields(self):
        """Test creating a todo with all fields"""
        due_date = date.today() + timedelta(days=7)
        todo = Todo.objects.create(
            title="Complete project",
            #description="Finish the Django React app",
            due_date=due_date,
            resolved=False
        )
        self.assertEqual(todo.title, "Complete project")
        #self.assertEqual(todo.description, "Finish the Django React app")
        self.assertEqual(todo.due_date, due_date)
        self.assertFalse(todo.resolved)
        print("Test-01 - create_todo_with_all_fields - Passed")

    def test_create_todo_with_required_fields_only(self):
        """Test creating a todo with only required fields"""
        todo = Todo.objects.create(title="Simple todo")
        self.assertEqual(todo.title, "Simple todo")
        #self.assertEqual(todo.description, "")
        self.assertIsNone(todo.due_date)
        self.assertFalse(todo.resolved)
        print("Test-02 - create_todo_with_required_fields_only - Passed")

