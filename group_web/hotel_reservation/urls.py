from django.urls import path
from . import views

urlpatterns = [
    path('reserve/', views.book_room, name='reserve'),
]