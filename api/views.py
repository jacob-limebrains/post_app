from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User

from rest_framework import views, viewsets, status, generics
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token

from . import serializers
from .models import Post


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [AllowAny]

    lookup_field = 'username'

# class UserDetailsViewSet(generics.RetrieveAPIView):
#     serializer_class = serializers.UserSerializer
#     permission_classes = [IsAuthenticated, ]
#
#     def get(self, request, *args, **kwargs):
#         user = get_object_or_404(User, id=kwargs['id'])
#         serializer = self.serializer_class(user)
#         return Response(serializer.data)


class ChangeUserPasswordView(generics.UpdateAPIView):
    serializer_class = serializers.ChangeUserPasswordSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            if self.object.check_password(serializer.data.get("new_password")) != self.object.check_password(
                    serializer.data.get("new_re_password")):
                return Response({"new_password": ["New password and repeated new password are not the same"]})
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateUserEmail(generics.UpdateAPIView):
    serializer_class = serializers.UpdateUserEmailSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            if self.object.email_user(serializer.data.get("old_email")) == self.object.get(self.object.email):
                return Response({"old_email": ["You can not change your email address on the same address"]},
                                status=status.HTTP_400_BAD_REQUEST)
            self.object.email = self.cleaned_data(serializer.data.get("new_email"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    permission_classes = [AllowAny]
