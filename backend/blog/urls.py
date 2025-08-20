from django.urls import path
from . import views


urlpatterns = [
    path('posts/', views.PostList.as_view(), name='post-list'),
    path('posts/<slug:slug>/', views.PostDetail.as_view(), name='post-detail'),
    path('products/', views.ProductList.as_view(), name='product-list'),
    path('reviews/', views.ReviewList.as_view(), name='review-list'),
    path('comments/', views.CommentCreate.as_view(), name='comment-create'),
    path('generate-post/', views.GeneratePostFromProduct.as_view(), name='generate-post-from-product'),
]



