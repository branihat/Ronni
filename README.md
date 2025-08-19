# Affiliate Blog Project

A modern, SEO-optimized blogging and affiliate marketing website built with Django (Python backend) and Next.js (React frontend).

## 🚀 Features

### Backend (Django)
- **Blog Management**: Create, edit, and manage blog posts with categories
- **Affiliate Products**: Manage affiliate products with reviews, pros/cons, and ratings
- **User Management**: Django admin interface for content management
- **REST API**: Full REST API for frontend integration
- **SEO Ready**: Optimized for search engines with proper meta tags

### Frontend (Next.js)
- **Modern UI**: Built with TypeScript and Tailwind CSS
- **SEO Optimized**: Server-side rendering and meta tags
- **Responsive Design**: Mobile-first approach
- **Fast Performance**: Optimized with Next.js App Router

## 🏗️ Architecture

```
├── backend/                 # Django backend
│   ├── core/               # Django project settings
│   ├── blog/               # Blog app with models & API
│   ├── manage.py           # Django management script
│   └── .venv/              # Python virtual environment
├── frontend/                # Next.js frontend
│   ├── src/
│   │   └── app/            # Next.js App Router
│   ├── package.json         # Node.js dependencies
│   └── .env.local          # Environment variables
└── README.md               # This file
```

## 🛠️ Tech Stack

### Backend
- **Python 3.13+**
- **Django 5.2.5** - Web framework
- **Django REST Framework** - API framework
- **SQLite** - Database (can be upgraded to PostgreSQL)
- **Pillow** - Image processing

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📋 Prerequisites

- Python 3.13 or higher
- Node.js 18 or higher
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Navigate to project directory
cd "path/to/Afilliate project"

# Create virtual environment and install dependencies
cd backend
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Backend Setup

```bash
cd backend

# Activate virtual environment
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Run migrations
python manage.py migrate

# Create superuser (optional - already created)
python manage.py createsuperuser

# Start Django server
python manage.py runserver
```

**Default Admin Credentials:**
- Username: `admin`
- Password: `Admin@12345`

### 3. Frontend Setup

```bash
cd frontend

# Create environment file
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Start development server
npm run dev
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/
- **Django Admin**: http://localhost:8000/admin
- **API Endpoints**:
  - `GET /api/posts/` - List all blog posts
  - `GET /api/posts/<slug>/` - Get specific post
  - `GET /api/products/` - List affiliate products
  - `GET /api/reviews/` - List product reviews
  - `POST /api/comments/` - Create comment

## 📊 Database Models

### Blog Models
- **Category**: Blog post categories
- **Post**: Blog posts with content, images, and categories
- **Comment**: User comments on posts
- **NewsletterSignup**: Email newsletter subscriptions

### Affiliate Models
- **AffiliateProduct**: Product information and affiliate links
- **Review**: Product reviews with ratings, pros, and cons

## 🔧 Configuration

### Backend Settings (`backend/core/settings.py`)
- Database: SQLite (development) / PostgreSQL (production)
- CORS: Enabled for development
- Media files: Configured for image uploads
- REST Framework: Pagination enabled

### Frontend Settings (`frontend/.env.local`)
- `NEXT_PUBLIC_API_URL`: Backend API endpoint

## 📝 Adding Content

### Via Django Admin
1. Access http://localhost:8000/admin
2. Login with admin credentials
3. Add/edit:
   - Categories
   - Blog posts
   - Affiliate products
   - Reviews

### Via API
```bash
# Create a new post
curl -X POST http://localhost:8000/api/posts/ \
  -H "Content-Type: application/json" \
  -d '{"title":"New Post","slug":"new-post","content":"Content here"}'
```

## 🚀 Deployment

### Backend (Django)
- **Heroku**: Easy deployment with PostgreSQL addon
- **DigitalOcean**: App Platform or Droplet
- **AWS**: EC2 with RDS
- **Render**: Free tier available

### Frontend (Next.js)
- **Vercel**: Optimized for Next.js (recommended)
- **Netlify**: Static site hosting
- **AWS S3**: Static website hosting

### Environment Variables for Production
```bash
# Backend
DEBUG=False
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:pass@host:port/db
ALLOWED_HOSTS=yourdomain.com

# Frontend
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

## 🔒 Security Considerations

- Change default admin password
- Use environment variables for sensitive data
- Enable HTTPS in production
- Configure CORS properly for production
- Regular security updates

## 📚 API Documentation

### Authentication
Currently using session-based authentication. For production, consider:
- JWT tokens
- OAuth2
- API keys

### Rate Limiting
Consider implementing rate limiting for:
- Comment creation
- API endpoints
- Admin access

## 🧪 Testing

```bash
# Backend tests
cd backend
python manage.py test

# Frontend tests
cd frontend
npm test
```

## 📈 Performance Optimization

### Backend
- Database query optimization
- Caching with Redis
- Image optimization
- API response compression

### Frontend
- Image optimization with Next.js
- Code splitting
- Static generation where possible
- CDN for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
3. Add tests if applicable
4. Submit a pull request

## 📄 License

This project is for educational and commercial use.

## 🆘 Troubleshooting

### Common Issues

**Backend won't start:**
- Check if port 8000 is available
- Verify virtual environment is activated
- Check Django logs for errors

**Frontend can't connect to backend:**
- Verify backend is running on port 8000
- Check `.env.local` configuration
- Ensure CORS is properly configured

**Database errors:**
- Run `python manage.py migrate`
- Check database file permissions
- Verify model changes are migrated

**Admin access issues:**
- Reset admin password: `python manage.py changepassword admin`
- Check user permissions in Django admin

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review Django and Next.js documentation
3. Check console logs for error messages

---

**Happy Coding! 🎉**
