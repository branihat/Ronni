from rest_framework import generics
from .models import Post, AffiliateProduct, Review, Comment
from .serializers import PostSerializer, AffiliateProductSerializer, ReviewSerializer, CommentSerializer

class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'


class ProductList(generics.ListAPIView):
    queryset = AffiliateProduct.objects.all()
    serializer_class = AffiliateProductSerializer


class ReviewList(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class CommentCreate(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
