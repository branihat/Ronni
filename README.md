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

## 🗄️ Using MongoDB (Official Backend - Public Preview)

This project can use MongoDB via the official `django-mongodb-backend` (Public Preview by MongoDB). Keep in mind it's intended for evaluation and may introduce breaking changes in future versions. SQLite remains the default fallback for local development.

### 1) Install backend dependencies

```bash
cd backend
source ./.venv/bin/activate  # or .venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### 2) Configure environment variables

Set the following environment variables before starting Django:

```bash
export MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority&appName=<app>"
export MONGODB_NAME="affiliate_blog"
```

On Windows (PowerShell):
```powershell
$env:MONGODB_URI = "mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority&appName=<app>"
$env:MONGODB_NAME = "affiliate_blog"
```

The backend will auto-detect `MONGODB_URI` and switch to MongoDB; otherwise it uses SQLite.

### 3) Apply migrations

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```

### Notes
- Backend uses `ENGINE = 'django_mongodb_backend'` when `MONGODB_URI` is present.
- Works with Django 5.x.
- For production, use MongoDB Atlas and secure credentials via environment variables/secrets.

## 🧰 From-Scratch Setup (Step-by-Step)

This section walks you from an empty machine to a working local environment with Django + Next.js + optional MongoDB + optional Gemini AI.

### 0) Prerequisites
- Python 3.11+ (Python 3.13 tested)
- Node.js 18+
- npm 10+
- Git

### 1) Clone and prepare folders
```bash
# Choose a workspace directory and clone (or create the project folder)
cd ~/workspace
# If not already cloned, create folder and place code here
# mkdir -p "Afilliate project" && cd "Afilliate project"
cd "Afilliate project"
```

### 2) Backend setup (Django)
```bash
cd backend

# Create and activate virtual environment
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Database migrations
python manage.py makemigrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser
# Follow prompts for username/email/password

# Run the backend
python manage.py runserver 0.0.0.0:8000
```
- Backend will be available at: http://localhost:8000
- Admin: http://localhost:8000/admin

### 3) Frontend setup (Next.js)
```bash
cd ../frontend
npm install

# Configure API URL
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Run frontend
npm run dev
```
- Frontend will be available at: http://localhost:3000

### 4) MongoDB (optional)
By default, the backend uses SQLite. To use MongoDB:
```bash
# Set env vars prior to running Django
export MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority"
export MONGODB_NAME="affiliate_blog"

# Windows PowerShell
# $env:MONGODB_URI = "mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority"
# $env:MONGODB_NAME = "affiliate_blog"

# Then run migrations again
cd backend
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```
- The project auto-detects `MONGODB_URI` and switches to MongoDB via `django-mongodb-backend`.

### 5) Gemini AI (optional but recommended)
This project can auto-generate blog posts from simple product data.

Install SDK (already in requirements.txt, but if needed):
```bash
cd backend
source .venv/bin/activate
pip install google-generativeai==0.8.5
```

Set API key before running Django:
```bash
export GOOGLE_API_KEY="your-gemini-api-key"
# Windows PowerShell
# $env:GOOGLE_API_KEY = "your-gemini-api-key"
```

Flow:
1) Add product in Admin: http://localhost:8000/admin
   - Affiliate products → Add
   - Required: name, image URL, affiliate URL, network
   - Optional: description, price, rating
   - Pros/Cons: multiline (one point per line)
   - Features: multiline (one feature per line)
2) Generate blog via API:
```bash
curl -X POST http://127.0.0.1:8000/api/generate-post/ \
  -H "Content-Type: application/json" \
  -d '{"product_id": 1}'
```
- If `GOOGLE_API_KEY` is set, content is generated via Gemini.
- If not, a clean, templated post is created from your data.
3) View post from frontend home (lists latest posts).

### 6) Data seeding examples
```bash
# Set admin password quickly (if created via --noinput earlier)
cd backend
python manage.py shell -c "from django.contrib.auth import get_user_model; U=get_user_model(); u=U.objects.get(username='admin'); u.set_password('Admin@12345'); u.save()"

# Create a sample product
python manage.py shell -c "from blog.models import AffiliateProduct; AffiliateProduct.objects.get_or_create(name='Example Headphones', description='Crisp sound and all-day comfort', image='https://example.com/img.jpg', affiliate_url='https://amazon.com/dp/XXXX', network='Amazon', price=199, rating=4.5, pros='Great ANC\nComfortable', cons='Pricey', features='Bluetooth 5.3\n30h Battery\nUSB-C Fast Charge')"

# Generate a post for product id=1
curl -X POST http://127.0.0.1:8000/api/generate-post/ -H "Content-Type: application/json" -d '{"product_id": 1}'
```

### 7) Common issues & fixes
- Frontend shows “No posts available or API unreachable”:
  - Ensure backend is running on port 8000
  - Verify `.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:8000`
  - Disable frontend caching (already set to `cache: 'no-store'`)
- `posts.map is not a function` error:
  - The API returns paginated `{results: [...]}`; frontend normalizes this. Restart `npm run dev` if still cached.
- Backend `.venv` not found:
  - Always run backend commands inside `backend` folder or use full path to the venv
- MongoDB not connecting:
  - Verify `MONGODB_URI` allows your IP (Atlas Network Access)
  - Ensure migrations run after setting env vars
- Gemini errors:
  - Ensure `GOOGLE_API_KEY` is set
  - The service falls back to templated content if the model call fails

### 8) Project structure recap
- Backend Django apps
  - `blog/models.py`: Category, Post, AffiliateProduct, Review, Comment, NewsletterSignup
  - `blog/views.py`: Post/Product/Review list endpoints, comment create, generate-post
  - `blog/services.py`: Gemini integration (with fallback)
  - `core/settings.py`: DRF, CORS, media/static, DB (SQLite/MongoDB via env)
- Frontend Next.js
  - `src/app/page.tsx`: Renders template layout and lists posts
  - UI components: `Header`, `Hero`, `FeaturedPosts`, `ProductGrid`, `Sidebar`, `Footer`

You’re set to run locally with SQLite or MongoDB, and optionally generate AI-written posts from your simple product entries. For a one-click Admin action to generate posts from the Django admin list view, ask and I’ll add it.
