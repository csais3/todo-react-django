from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TodoSerializer
from .models import Todo

class HelloApiListView(APIView):
    
    def get(self, *args, **kwargs):
        data = {"message": "welcome to todo app"}
        return Response(data, status=status.HTTP_200_OK)

class TodoListCreateApiView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoRetrieveUpdateApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer