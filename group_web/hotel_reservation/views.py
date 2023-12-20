from django.shortcuts import render

# Create your views here.

def book_room(request):
    return render(request, 'index.html')