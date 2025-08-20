from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.utils.text import slugify
from django.contrib.auth import get_user_model
from .models import Post, AffiliateProduct, Review, Comment
from .serializers import PostSerializer, AffiliateProductSerializer, ReviewSerializer, CommentSerializer
from .services import generate_post_with_gemini_prompt

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


class GeneratePostFromProduct(APIView):
    def post(self, request, *args, **kwargs):
        product_id = request.data.get("product_id")
        if not product_id:
            return Response({"error": "product_id required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            product = AffiliateProduct.objects.get(id=product_id)
        except AffiliateProduct.DoesNotExist:
            return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

        # Generate content with Gemini (falls back if key missing)
        features = [f.strip() for f in (product.features or "").splitlines() if f.strip()]
        generated_content = generate_post_with_gemini_prompt(
            product_name=product.name,
            description=product.description,
            features=features,
            pros=product.pros,
            cons=product.cons,
            affiliate_url=product.affiliate_url,
        )

        User = get_user_model()
        author = User.objects.filter(is_superuser=True).first() or User.objects.first()
        title = f"{product.name} Review"
        slug = slugify(title)
        post, created = Post.objects.get_or_create(
            slug=slug,
            defaults={
                "title": title,
                "author": author,
                "content": generated_content,
                "is_featured": True,
            },
        )

        if not created:
            post.content = generated_content
            post.save(update_fields=["content"])

        return Response(PostSerializer(post).data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)
