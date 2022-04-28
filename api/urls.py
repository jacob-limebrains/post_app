from django.urls import path, include

from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename="users")
router.register(r'posts', views.PostViewSet, basename="posts")

urlpatterns = [
    path('', include(router.urls)),
    path('token/', obtain_auth_token)
]
