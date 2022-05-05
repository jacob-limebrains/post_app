from django.urls import path, include

from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename="users")
router.register(r'posts', views.PostViewSet, basename="posts")

urlpatterns = [
    path('', include(router.urls)),
    path('auth-token/', obtain_auth_token),
    path('change_password/', views.ChangeUserPasswordView.as_view(), name='change_password'),
    path('change_email/', views.UpdateUserEmail.as_view(), name='change_email'),

    # path('user/<id>/', views.UserDetailsViewSet.as_view(), name='user_details'),

    # path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]
