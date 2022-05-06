from django.contrib import admin

from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_filter = ('author', 'title')
    list_display = ('title', 'description', 'author')
    search_fields = ['title', 'author']