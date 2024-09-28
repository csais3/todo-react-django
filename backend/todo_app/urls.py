from django.urls import path
from .views import (HelloApiListView, TodoListCreateApiView,
                    TodoRetrieveUpdateApiView)

urlpatterns = [
    path('', HelloApiListView.as_view()),
    path('todos/', TodoListCreateApiView.as_view()),
    path('todo/<int:pk>/', TodoRetrieveUpdateApiView.as_view()),
]