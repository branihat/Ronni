from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self) -> str:
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    featured_image = models.ImageField(upload_to='blogimages/', blank=True, null=True)
    categories = models.ManyToManyField(Category, related_name='posts', blank=True)
    is_featured = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def __str__(self) -> str:
        return self.title


class AffiliateProduct(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField()
    affiliate_url = models.URLField()
    network = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    pros = models.TextField()
    cons = models.TextField()
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name


class Review(models.Model):
    product = models.ForeignKey(AffiliateProduct, on_delete=models.CASCADE, related_name='reviews')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='reviews')
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    pros = models.TextField()
    cons = models.TextField()

    def __str__(self) -> str:
        return f"Review for {self.product.name} on {self.post.title}"


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=100)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created']

    def __str__(self) -> str:
        return f"Comment by {self.author} on {self.post.title}"


class NewsletterSignup(models.Model):
    email = models.EmailField(unique=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.email
