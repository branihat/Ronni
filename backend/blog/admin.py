from django.contrib import admin
from .models import Category, Post, AffiliateProduct, Review, Comment, NewsletterSignup
from django.urls import reverse
from django.utils.html import format_html


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "is_featured", "created")
    list_filter = ("is_featured", "created", "categories")
    search_fields = ("title", "content")
    prepopulated_fields = {"slug": ("title",)}
    filter_horizontal = ("categories",)


@admin.register(AffiliateProduct)
class AffiliateProductAdmin(admin.ModelAdmin):
    list_display = ("name", "network", "price", "rating", "updated", "generate_post_link")
    search_fields = ("name", "network")

    def generate_post_link(self, obj):
        return format_html('<a class="button" href="{}" target="_blank">Generate Post (API)</a>', '/api/generate-post/')
    generate_post_link.short_description = "AI Post"


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("product", "post", "rating")
    list_filter = ("rating",)


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("post", "author", "approved", "created")
    list_filter = ("approved", "created")
    search_fields = ("author", "text")


@admin.register(NewsletterSignup)
class NewsletterSignupAdmin(admin.ModelAdmin):
    list_display = ("email", "date")
