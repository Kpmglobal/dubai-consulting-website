# 🚀 **COMPLETE DEPLOYMENT CHECKLIST - KPM Global Services**

## 📋 **PREREQUISITES (Get These Ready First)**

- [ ] **Domain Name**: `kpmglobal.ae` (or your preferred domain)
- [ ] **GitHub Account** (free)
- [ ] **Vercel Account** (free for frontend)
- [ ] **Render Account** (free for backend)
- [ ] **MongoDB Atlas Account** (free database)
- [ ] **Gmail Account** (for email service)

---

## 🎯 **STEP 1: PREPARE YOUR CODE**

### **1.1 Create Environment Files**
```bash
# In your project root, create .env.local:
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# In backend folder, create .env:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kpm-global-services
JWT_SECRET=your-super-secret-jwt-key-here
FRONTEND_URL=https://kpmglobal.ae
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@kpmglobal.ae
SMTP_PASS=your-app-password
NODE_ENV=production
```

### **1.2 Test Locally (Optional)**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev
```

---

## 🚀 **STEP 2: DEPLOY TO GITHUB**

### **2.1 Initialize Git Repository**
```bash
# In your project root
git init
git add .
git commit -m "Initial commit - KPM Global Services Website"
```

### **2.2 Create GitHub Repository**
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `kpm-global-services-website`
4. Make it **Public** (required for free hosting)
5. Don't initialize with README
6. Click "Create repository"

### **2.3 Push to GitHub**
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kpm-global-services-website.git
git push -u origin main
```

---

## 🌐 **STEP 3: DEPLOY FRONTEND TO VERCEL**

### **3.1 Connect Vercel to GitHub**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js

### **3.2 Configure Environment Variables**
In Vercel project settings, add:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### **3.3 Deploy**
1. Click "Deploy"
2. Wait for build (2-3 minutes)
3. You'll get: `https://your-project.vercel.app`

---

## ⚙️ **STEP 4: DEPLOY BACKEND TO RENDER**

### **4.1 Create Backend Repository**
```bash
# Create a new folder for backend
mkdir kpm-global-services-backend
cd kpm-global-services-backend

# Copy backend files
cp -r ../backend/* .

# Initialize git
git init
git add .
git commit -m "Backend initial commit"
```

### **4.2 Push Backend to GitHub**
1. Create new GitHub repo: `kpm-global-services-backend`
2. Push your backend code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/kpm-global-services-backend.git
git push -u origin main
```

### **4.3 Deploy on Render**
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your backend repository
5. Configure:
   - **Name:** `kpm-global-services-api`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Port:** `5000`

### **4.4 Set Environment Variables in Render**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kpm-global-services
JWT_SECRET=your-super-secret-jwt-key-here
FRONTEND_URL=https://kpmglobal.ae
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@kpmglobal.ae
SMTP_PASS=your-app-password
NODE_ENV=production
```

### **4.5 Deploy Backend**
1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes)
3. You'll get: `https://your-api.onrender.com`

---

## 🗄️ **STEP 5: SETUP MONGODB ATLAS**

### **5.1 Create MongoDB Atlas Account**
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create new cluster (free tier)

### **5.2 Configure Database**
1. Create database: `kpm-global-services`
2. Create user with read/write permissions
3. Get connection string
4. Update `MONGODB_URI` in Render

### **5.3 Network Access**
1. In Atlas, go to "Network Access"
2. Add IP: `0.0.0.0/0` (allow all IPs)

---

## 📧 **STEP 6: CONFIGURE EMAIL SERVICE**

### **6.1 Gmail Setup**
1. Enable 2-factor authentication
2. Generate App Password
3. Use in environment variables:
   ```
   SMTP_USER=info@kpmglobal.ae
   SMTP_PASS=your-app-password
   ```

---

## 🔧 **STEP 7: CONFIGURE YOUR DOMAIN**

### **7.1 DNS Settings**
In your domain registrar's DNS panel, add:

```
Type: A
Name: @
Value: 76.76.19.53 (Vercel IP)

Type: CNAME
Name: www
Value: your-project.vercel.app

Type: CNAME
Name: api
Value: your-backend-url.onrender.com
```

### **7.2 Connect Domain to Vercel**
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `kpmglobal.ae`
4. Vercel will provide DNS records to verify

### **7.3 Update Frontend URLs**
Update your Vercel environment:
```
NEXT_PUBLIC_API_URL=https://api.kpmglobal.ae
```

---

## ✅ **STEP 8: FINAL TESTING**

### **8.1 Test Frontend**
- [ ] `https://kpmglobal.ae` loads
- [ ] Language switching works (EN/RU/TR)
- [ ] All pages load correctly
- [ ] Contact form works

### **8.2 Test Backend**
- [ ] `https://api.kpmglobal.ae` responds
- [ ] User registration works
- [ ] User login works
- [ ] Client dashboard loads

### **8.3 Test Features**
- [ ] Multi-language support
- [ ] Responsive design
- [ ] Contact form emails
- [ ] Authentication system

---

## 🎉 **YOU'RE LIVE!**

Your KPM Global Services website is now accessible at:
- **Frontend:** `https://kpmglobal.ae`
- **Backend API:** `https://api.kpmglobal.ae`
- **Client Login:** `https://kpmglobal.ae/en/login`
- **Dashboard:** `https://kpmglobal.ae/en/dashboard`

---

## 🔍 **TROUBLESHOOTING**

### **Common Issues:**
1. **CORS Errors:** Check `FRONTEND_URL` in backend
2. **Database Connection:** Verify MongoDB URI
3. **Email Not Sending:** Check SMTP credentials
4. **Domain Not Loading:** Wait for DNS propagation (up to 48 hours)

### **Need Help?**
- Check hosting provider logs
- Verify all environment variables
- Ensure DNS records are correct

---

## 📱 **POST-DEPLOYMENT**

### **What You Have Now:**
- ✅ Professional KPM Global Services website
- ✅ Multi-language support (EN/RU/TR)
- ✅ Client authentication system
- ✅ Admin panel for content management
- ✅ Contact form with email integration
- ✅ Responsive mobile-first design
- ✅ SEO optimized pages
- ✅ SSL certificates (automatic)

**Your website is now production-ready and accessible worldwide!** 🚀

---

## 📞 **Company Information (For Reference)**

**KPM Global Services**
- **Phone:** +971-552490091
- **Email:** info@kpmglobal.ae
- **Working Hours:** Monday to Friday: 10:00 AM to 6:00 PM UTC/GMT +4 hours
- **Saturday:** Appointments Only
- **Location:** Dubai, United Arab Emirates
- **Services:** Business Consulting, Company Formation, Legal Services, Tax & Accounting, Visa Services
