# Quick Start Guide - Dubai Consulting Website

## 🚀 Get Running in 5 Minutes

### 1. Install Node.js
- Download from [https://nodejs.org/](https://nodejs.org/)
- Choose LTS version (recommended)
- Run installer and restart terminal

### 2. Run Setup Script
```bash
# Windows
setup-windows.bat

# Linux/Mac
chmod +x setup.sh
./setup.sh
```

### 3. Create Environment Files

#### Frontend (.env.local in root directory)
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key-here
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=http://localhost:3000
```

#### Backend (.env in backend directory)
```bash
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/dubai-consulting
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
JWT_EXPIRE=7d
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
CONTACT_EMAIL=info@dubaiconsulting.ae
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 4. Start Development Servers

#### Terminal 1 - Frontend
```bash
npm run dev
```
Frontend will run at: http://localhost:3000

#### Terminal 2 - Backend
```bash
cd backend
npm run dev
```
Backend will run at: http://localhost:5000

### 5. Access Your Website
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/health

## 🔧 What's Already Built

✅ **Frontend Structure**
- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS styling
- Internationalization setup
- Component architecture

✅ **Backend Structure**
- Express.js server
- MongoDB models
- Authentication routes
- API endpoints
- Security middleware

✅ **Pages Created**
- Home page
- About page
- Services overview
- Contact page
- Blog listing
- Login/Register
- Client Dashboard
- Admin panel

## 🚧 What You Need to Build

🔄 **Components** (referenced but not created yet)
- Service-specific components
- Blog components
- Contact form components
- Admin dashboard components

🔄 **Database Setup**
- MongoDB installation/connection
- Sample data seeding

🔄 **External Services**
- Google Maps API key
- SMTP email configuration

## 📁 Project Structure

```
├── app/                    # Next.js pages (App Router)
│   ├── [locale]/          # Internationalized routes
│   ├── dashboard/         # Client dashboard
│   ├── admin/            # Admin panel
│   └── services/         # Service pages
├── components/            # React components
├── backend/              # Node.js/Express API
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   └── middleware/       # Express middleware
├── public/               # Static assets
└── hooks/                # Custom React hooks
```

## 🆘 Need Help?

1. **Check the logs** - Both frontend and backend show detailed error messages
2. **Verify environment variables** - Make sure all required vars are set
3. **Check MongoDB connection** - Ensure database is running
4. **Review the README.md** - Comprehensive project documentation

## 🎯 Next Steps After Setup

1. **Customize content** - Update text, images, and branding
2. **Add your services** - Modify service descriptions and pricing
3. **Configure email** - Set up SMTP for contact forms
4. **Add Google Maps** - Get API key and configure locations
5. **Deploy** - Use Vercel for frontend, your choice for backend

---

**Happy coding! 🚀**
