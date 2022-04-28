from django.contrib import admin

from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_filter = ('title', 'tags', 'description')
    list_display = ('title', 'tags', 'description')
    search_fields = ['title', 'tags']
