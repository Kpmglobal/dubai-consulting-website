# Dubai Business Setup Consulting Website

A comprehensive, multi-language business consulting website built with Next.js 14, Node.js, and MongoDB. Features include client dashboard, admin panel, blog system, knowledge base, and full CRUD operations.

## 🚀 Features

### Frontend (Next.js 14)
- **Multi-language Support**: English, Russian, and Turkish with next-intl
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Client Dashboard**: Protected area for authenticated clients
- **Admin Panel**: Full CRUD operations for content management
- **Blog System**: SEO-optimized blog with social sharing
- **Contact Form**: Integrated with Nodemailer
- **Google Maps**: Interactive map integration
- **Social Media**: OpenGraph-ready sharing buttons

### Backend (Node.js + Express)
- **Authentication**: JWT-based auth with bcrypt
- **Database**: MongoDB with Mongoose ODM
- **Email**: Nodemailer integration for contact forms
- **Security**: Rate limiting, input validation, CORS
- **API**: RESTful endpoints with comprehensive CRUD operations

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Internationalization**: next-intl
- **Maps**: Google Maps JavaScript API
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT + bcrypt
- **Email**: Nodemailer
- **Validation**: express-validator
- **Security**: Helmet, CORS, Rate Limiting

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB 6+
- Google Maps API key
- SMTP credentials for email

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd dubai-consulting-website
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 3. Environment Setup

#### Frontend (.env.local)
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# Next.js
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
```

#### Backend (.env)
```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/dubai-consulting

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@dubaiconsulting.ae

# CORS
CORS_ORIGIN=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 4. Database Setup
```bash
# Start MongoDB (if using local installation)
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env with your Atlas connection string
```

### 5. Start Development Servers
```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
npm run dev
```

## 🌐 Environment Variables

### Frontend Variables
| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your website URL | Yes | - |
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes | - |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key | Yes | - |

### Backend Variables
| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | 5000 |
| `NODE_ENV` | Environment | No | development |
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `JWT_SECRET` | JWT signing secret | Yes | - |
| `JWT_EXPIRE` | JWT expiration time | No | 7d |
| `SMTP_HOST` | SMTP server host | Yes | - |
| `SMTP_PORT` | SMTP server port | Yes | - |
| `SMTP_USER` | SMTP username | Yes | - |
| `SMTP_PASS` | SMTP password | Yes | - |
| `CONTACT_EMAIL` | Contact form recipient | Yes | - |
| `CORS_ORIGIN` | Allowed CORS origins | Yes | - |

## 🗄️ Database Models

### User Model
- Authentication fields (email, password hash)
- Profile information (name, company, phone)
- Role-based access control (client/admin)
- Account status and preferences

### Blog Model
- Multi-language content (title, content, description)
- SEO metadata and OpenGraph tags
- Author and publishing information
- Categories, tags, and featured status

### Knowledge Base Model
- Multi-language articles and guides
- File attachments and downloads
- Access control and authentication requirements
- Categories and search functionality

### Service Model
- Multi-language service descriptions
- Pricing and feature information
- SEO optimization and categorization
- Featured services and sort order

## 🔐 Authentication & Security

### JWT Implementation
- Secure token generation and validation
- Role-based access control
- Protected routes middleware
- Token refresh mechanism

### Security Features
- Password hashing with bcrypt
- Rate limiting on auth routes
- Input validation and sanitization
- CORS configuration
- Helmet security headers

## 📧 Email Integration

### Nodemailer Setup
- SMTP configuration for reliable delivery
- HTML email templates
- Contact form notifications
- User confirmation emails

### Email Templates
- Company notification emails
- User confirmation emails
- Newsletter signup confirmations
- Customizable HTML layouts

## 🗺️ Google Maps Integration

### Features
- Interactive office location map
- Custom markers and info windows
- Responsive design integration
- Error handling and fallbacks

### Setup
1. Get Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API
3. Set billing and quotas
4. Add API key to environment variables

## 📱 Social Media Integration

### OpenGraph Support
- Facebook sharing optimization
- Twitter card support
- LinkedIn sharing
- Custom meta tags

### Share Functionality
- One-click social sharing
- URL copying with clipboard API
- Hashtag support
- Custom share messages

## 🚀 Deployment

### Frontend (Vercel)

#### 1. Vercel Configuration
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

#### 2. Environment Variables in Vercel
- Go to your project dashboard
- Navigate to Settings > Environment Variables
- Add all `NEXT_PUBLIC_*` variables

#### 3. Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

### Backend (Render/Railway/Vercel)

#### Render Deployment
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables
5. Deploy

#### Railway Deployment
1. Connect GitHub repository
2. Auto-deploy on push
3. Set environment variables
4. Configure domain

#### Vercel Backend
1. Create API routes in `/api` directory
2. Use Vercel serverless functions
3. Set environment variables
4. Deploy with frontend

### Environment Variables for Production

#### Frontend (Vercel)
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-production-api-key
```

#### Backend (Render/Railway)
```bash
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
SMTP_HOST=your-production-smtp-host
SMTP_USER=your-production-email
SMTP_PASS=your-production-password
CORS_ORIGIN=https://yourdomain.com
```

## 📁 Project Structure

```
dubai-consulting-website/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalized routes
│   │   ├── admin/               # Admin panel
│   │   ├── dashboard/           # Client dashboard
│   │   ├── resources/           # Blog and knowledge base
│   │   └── services/            # Service pages
│   ├── globals.css              # Global styles
│   ├── i18n.ts                  # Internationalization config
│   └── layout.tsx               # Root layout
├── components/                   # Reusable components
│   ├── auth/                    # Authentication components
│   ├── dashboard/               # Dashboard components
│   ├── GoogleMap.tsx            # Google Maps component
│   ├── SocialShare.tsx          # Social sharing component
│   └── ...                     # Other components
├── backend/                     # Backend API
│   ├── models/                  # MongoDB models
│   ├── routes/                  # API routes
│   ├── middleware/              # Custom middleware
│   ├── server.js                # Express server
│   └── package.json             # Backend dependencies
├── public/                      # Static assets
│   ├── locales/                 # Translation files
│   └── images/                  # Images and icons
├── package.json                 # Frontend dependencies
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
└── README.md                    # This file
```

## 🔧 Development Commands

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend
```bash
cd backend
npm run dev          # Start with nodemon
npm start            # Start production server
npm test             # Run tests
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Admin
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/users` - User management
- `GET /api/admin/blog` - Blog management
- `GET /api/admin/knowledge-base` - Knowledge base management
- `GET /api/admin/services` - Service management

### Public
- `GET /api/blog` - Public blog posts
- `GET /api/knowledge-base` - Public knowledge base
- `POST /api/contact` - Contact form submission

## 🌍 Internationalization

### Supported Languages
- **English (en)**: Primary language
- **Russian (ru)**: Secondary language
- **Turkish (tr)**: Secondary language

### Translation Files
- `public/locales/en/common.json`
- `public/locales/ru/common.json`
- `public/locales/tr/common.json`

### Adding New Languages
1. Create new locale directory
2. Copy and translate JSON files
3. Update `i18n.ts` configuration
4. Add language selector in navbar

## 🧪 Testing

### Frontend Testing
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Backend Testing
```bash
cd backend
npm test
```

## 📈 Performance Optimization

### Frontend
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Tailwind CSS purging
- Bundle analysis

### Backend
- Database indexing
- Query optimization
- Caching strategies
- Rate limiting

## 🔒 Security Best Practices

### Implemented
- JWT token validation
- Password hashing
- Input sanitization
- CORS protection
- Rate limiting
- Helmet security headers

### Recommendations
- Use HTTPS in production
- Regular security audits
- Keep dependencies updated
- Monitor API usage
- Implement logging

## 🐛 Troubleshooting

### Common Issues

#### Frontend
- **Build errors**: Check TypeScript types and imports
- **Styling issues**: Verify Tailwind CSS configuration
- **Internationalization**: Check locale files and routing

#### Backend
- **Database connection**: Verify MongoDB URI and network
- **Email sending**: Check SMTP credentials and settings
- **Authentication**: Verify JWT secret and token format

### Debug Mode
```bash
# Frontend
DEBUG=* npm run dev

# Backend
DEBUG=* npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and questions:
- Email: support@dubaiconsulting.ae
- Phone: +971 4 XXX XXXX
- Website: https://dubaiconsulting.ae

## 🔄 Updates

### Recent Updates
- ✅ Multi-language support implementation
- ✅ Admin panel with CRUD operations
- ✅ Client dashboard integration
- ✅ Google Maps integration
- ✅ Social media sharing
- ✅ Email integration with Nodemailer
- ✅ Deployment configuration

### Planned Features
- 🔄 Advanced analytics dashboard
- 🔄 Multi-file upload system
- 🔄 Real-time notifications
- 🔄 Advanced search functionality
- 🔄 Payment integration
- 🔄 Mobile app development

---

**Built with ❤️ for Dubai Business Setup Consulting**
