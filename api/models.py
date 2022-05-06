from datetime import datetime, date

from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# from django.dispatch import receiver
# from django.urls import reverse
# from django_rest_passwordreset.signals import reset_password_token_created
# from django.core.mail import send_mail

from taggit.managers import TaggableManager


# @receiver(reset_password_token_created)
# def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
#     email_plaintext_message = "{}?token={}".format(reverse('password_reset:reset-password-request'),
#                                                    reset_password_token.key)
#
#     send_mail(
#         # title:
#         "Password Reset for {title}".format(title="Some website title"),
#         # message:
#         email_plaintext_message,
#         # from:
#         "noreply@somehost.local",
#         # to:
#         [reset_password_token.user.email]
#     )


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='author', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='posts/%Y/%m/%d')
    title = models.CharField(max_length=50)
    tags = TaggableManager()
    description = models.TextField(max_length=140)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
