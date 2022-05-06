from datetime import datetime

from django.contrib.auth.models import User
from django.core.validators import EmailValidator

from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator

from taggit.serializers import TaggitSerializer, TagListSerializerField

from .models import Post


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }, 'email': {
            'validators': [
                EmailValidator,
                UniqueValidator(
                    queryset=User.objects.all(),
                    message="This email is already exists!"
                )
            ]
        }}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        user.save()
        Token.objects.create(user=user)

        return user


class ChangeUserPasswordSerializer(serializers.Serializer):
    model = User

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    new_re_password = serializers.CharField(required=True)


class UpdateUserEmailSerializer(serializers.Serializer):
    model = User

    new_email = serializers.EmailField(required=True)
    current_password = serializers.CharField(required=True)


class PostSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()
    author = serializers.CharField(source='author.username')
    created = serializers.DateTimeField(format="%d-%m-%Y %H:%M:%S")

    class Meta:
        model = Post
        fields = '__all__'
