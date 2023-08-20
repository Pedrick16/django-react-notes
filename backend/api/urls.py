from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes" ),
    path('notes/', views.getNotes, name="notes" ),
    path('note/<str:id>/update/', views.updateNote, name="update_note" ),

    path('note/<str:id>/', views.getNote, name="get_note" ),
]