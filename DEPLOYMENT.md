# 🚀 Deployment Guide

This guide covers deployment to various hosting platforms for both frontend and backend.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ All environment variables configured
- ✅ Google Maps API key ready
- ✅ SMTP credentials configured
- ✅ MongoDB database accessible
- ✅ Domain name (for production)

## 🌐 Frontend Deployment (Vercel)

### 1. Vercel CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel --prod
```

### 2. Vercel Dashboard Deployment

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

3. **Environment Variables**
   - Go to Settings > Environment Variables
   - Add all `NEXT_PUBLIC_*` variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_API_URL=https://yourdomain.com/api
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically deploy on every push to main branch

### 3. Vercel Configuration

The `vercel.json` file is already configured with:
- API route handling
- Security headers
- CORS configuration
- Redirects for admin/dashboard routes

## 🖥️ Backend Deployment Options

### Option 1: Render (Recommended)

#### 1. Setup Render Account
- Go to [render.com](https://render.com)
- Sign up with GitHub account

#### 2. Create New Web Service
1. Click "New +" > "Web Service"
2. Connect your GitHub repository
3. Configure service:

```
Name: dubai-consulting-backend
Environment: Node
Build Command: npm install
Start Command: npm start
```

#### 3. Environment Variables
Add all backend environment variables:
```
NODE_ENV=production
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-production-jwt-secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@dubaiconsulting.ae
CORS_ORIGIN=https://yourdomain.com
```

#### 4. Deploy
- Click "Create Web Service"
- Render will build and deploy automatically

### Option 2: Railway

#### 1. Setup Railway
- Go to [railway.app](https://railway.app)
- Sign up with GitHub

#### 2. Deploy Service
1. Click "New Project" > "Deploy from GitHub repo"
2. Select your repository
3. Railway will auto-detect Node.js

#### 3. Environment Variables
- Go to Variables tab
- Add all backend environment variables
- Railway will auto-deploy on changes

### Option 3: Vercel Backend (Serverless)

#### 1. Create API Routes
Move backend logic to `app/api/` directory:

```typescript
// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Your login logic here
  return NextResponse.json({ success: true })
}
```

#### 2. Environment Variables
Add backend variables to Vercel:
```
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
SMTP_HOST=your-smtp-host
# ... other variables
```

#### 3. Deploy
- Deploy frontend to Vercel
- Backend will be deployed as serverless functions

### Option 4: DigitalOcean App Platform

#### 1. Setup DigitalOcean
- Go to [digitalocean.com](https://digitalocean.com)
- Create account and add payment method

#### 2. Create App
1. Click "Create App"
2. Connect GitHub repository
3. Select Node.js environment

#### 3. Configure
```
Build Command: npm install
Run Command: npm start
```

#### 4. Environment Variables
Add all backend variables in the App Spec

## 🗄️ Database Deployment

### MongoDB Atlas (Recommended)

#### 1. Create Cluster
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create new project
3. Build new cluster (M0 Free tier available)

#### 2. Configure Access
1. **Database Access**
   - Create database user
   - Set username/password
   - Assign read/write permissions

2. **Network Access**
   - Add IP address: `0.0.0.0/0` (allows all IPs)
   - Or restrict to your hosting platform IPs

#### 3. Get Connection String
```
mongodb+srv://username:password@cluster.mongodb.net/dubai-consulting
```

### Local MongoDB (Development Only)
```bash
# Install MongoDB
brew install mongodb-community  # macOS
sudo apt install mongodb        # Ubuntu

# Start service
sudo systemctl start mongod
sudo systemctl enable mongod
```

## 📧 Email Service Setup

### Gmail SMTP

#### 1. Enable 2FA
1. Go to Google Account settings
2. Enable 2-Step Verification

#### 2. Generate App Password
1. Go to Security > App passwords
2. Generate password for "Mail"
3. Use this password in SMTP_PASS

#### 3. Environment Variables
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Alternative Email Services

#### SendGrid
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Mailgun
```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

## 🗺️ Google Maps Setup

### 1. Google Cloud Console
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create new project or select existing

### 2. Enable APIs
1. Go to APIs & Services > Library
2. Search for "Maps JavaScript API"
3. Click "Enable"

### 3. Create Credentials
1. Go to APIs & Services > Credentials
2. Click "Create Credentials" > "API Key"
3. Copy the API key

### 4. Restrict API Key
1. Click on the created API key
2. Under "Application restrictions":
   - Select "HTTP referrers"
   - Add your domain: `https://yourdomain.com/*`
3. Under "API restrictions":
   - Select "Restrict key"
   - Select "Maps JavaScript API"

### 5. Environment Variable
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key-here
```

## 🔒 Security Configuration

### 1. HTTPS Setup
- Vercel provides HTTPS automatically
- Render provides HTTPS automatically
- Railway provides HTTPS automatically

### 2. CORS Configuration
```javascript
// Backend CORS settings
CORS_ORIGIN=https://yourdomain.com
```

### 3. Environment Variables
- Never commit `.env` files
- Use platform-specific secret management
- Rotate JWT secrets regularly

## 📊 Monitoring & Analytics

### 1. Vercel Analytics
- Built-in performance monitoring
- Real-time analytics
- Error tracking

### 2. MongoDB Atlas
- Database performance monitoring
- Query optimization
- Backup management

### 3. External Services
- Google Analytics 4
- Google Search Console
- Hotjar (user behavior)

## 🚀 Production Checklist

### Frontend
- [ ] Environment variables set
- [ ] Google Maps API key configured
- [ ] Build successful
- [ ] All routes working
- [ ] Images optimized
- [ ] SEO meta tags configured

### Backend
- [ ] Environment variables set
- [ ] MongoDB connection working
- [ ] Email service configured
- [ ] JWT secrets configured
- [ ] CORS origins set
- [ ] Rate limiting configured

### General
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Database backed up
- [ ] Monitoring active
- [ ] Error logging configured

## 🔧 Troubleshooting

### Common Issues

#### Frontend Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Backend Connection Issues
```bash
# Check MongoDB connection
# Verify environment variables
# Check network access
```

#### Email Not Sending
```bash
# Verify SMTP credentials
# Check firewall settings
# Test with different email service
```

### Debug Mode
```bash
# Frontend
DEBUG=* npm run dev

# Backend
DEBUG=* npm run dev
```

## 📈 Performance Optimization

### 1. Frontend
- Image optimization
- Code splitting
- Bundle analysis
- CDN usage

### 2. Backend
- Database indexing
- Query optimization
- Caching strategies
- Load balancing

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review environment variables
- Verify service configurations
- Check network connectivity

---

**Happy Deploying! 🚀**
