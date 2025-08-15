@echo off
echo 🚀 Dubai Consulting Website Deployment Helper
echo =============================================
echo.

echo 📋 Prerequisites Check:
echo - Domain name: [ ] 
echo - GitHub account: [ ]
echo - Vercel account: [ ]
echo - Render account: [ ]
echo - MongoDB Atlas: [ ]
echo.

echo 🎯 Quick Deployment Steps:
echo.
echo 1. PUSH TO GITHUB:
echo    git init
echo    git add .
echo    git commit -m "Initial commit"
echo    git remote add origin YOUR_GITHUB_REPO_URL
echo    git push -u origin main
echo.

echo 2. DEPLOY FRONTEND TO VERCEL:
echo    - Go to vercel.com
echo    - Import your GitHub repo
echo    - Deploy automatically
echo.

echo 3. DEPLOY BACKEND TO RENDER:
echo    - Go to render.com
echo    - Create new Web Service
echo    - Connect your backend repo
echo    - Set environment variables
echo.

echo 4. CONFIGURE DOMAIN:
echo    - Add domain in Vercel
echo    - Update DNS records
echo    - Wait for propagation
echo.

echo 📖 For detailed instructions, see: DEPLOYMENT_GUIDE.md
echo.

pause


