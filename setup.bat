@echo off
chcp 65001 >nul
echo 🚀 Setting up Dubai Business Setup Consulting Website...
echo ==================================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%
if %NODE_VERSION% lss 18 (
    echo ❌ Node.js version 18+ is required. Current version: 
    node --version
    pause
    exit /b 1
)

echo ✅ Node.js 
node --version
echo  detected

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ npm 
npm --version
echo  detected

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

echo ✅ Frontend dependencies installed

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)

cd ..

echo ✅ Backend dependencies installed

REM Create environment files
echo 🔧 Creating environment files...

REM Frontend .env.local
if not exist .env.local (
    (
        echo # Frontend Environment Variables
        echo NEXT_PUBLIC_SITE_URL=http://localhost:3000
        echo NEXT_PUBLIC_API_URL=http://localhost:5000/api
        echo NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key-here
        echo NEXTAUTH_SECRET=your-nextauth-secret-here
        echo NEXTAUTH_URL=http://localhost:3000
    ) > .env.local
    echo ✅ Created .env.local (frontend)
) else (
    echo ℹ️  .env.local already exists
)

REM Backend .env
if not exist backend\.env (
    (
        echo # Backend Environment Variables
        echo PORT=5000
        echo NODE_ENV=development
        echo MONGODB_URI=mongodb://localhost:27017/dubai-consulting
        echo JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
        echo JWT_EXPIRE=7d
        echo SMTP_HOST=smtp.gmail.com
        echo SMTP_PORT=587
        echo SMTP_USER=your-email@gmail.com
        echo SMTP_PASS=your-app-password-here
        echo CONTACT_EMAIL=info@dubaiconsulting.ae
        echo CORS_ORIGIN=http://localhost:3000
        echo RATE_LIMIT_WINDOW_MS=900000
        echo RATE_LIMIT_MAX_REQUESTS=100
    ) > backend\.env
    echo ✅ Created backend\.env
) else (
    echo ℹ️  backend\.env already exists
)

echo.
echo 🎉 Setup completed successfully!
echo.
echo 📋 Next steps:
echo 1. Update environment variables in .env.local and backend\.env
echo 2. Get Google Maps API key from console.cloud.google.com
echo 3. Configure SMTP settings for email functionality
echo 4. Start MongoDB database
echo.
echo 🚀 Start development servers:
echo    Terminal 1: cd backend ^&^& npm run dev
echo    Terminal 2: npm run dev
echo.
echo 🌐 Access your application:
echo    Frontend: http://localhost:3000
echo    Backend: http://localhost:5000
echo    Admin: http://localhost:3000/en/admin
echo    Dashboard: http://localhost:3000/en/dashboard
echo.
echo 📚 Documentation:
echo    README.md - Complete setup guide
echo    DEPLOYMENT.md - Deployment instructions
echo    env.template - Environment variables reference
echo.
echo 🔧 Need help? Check the README.md file for detailed instructions.
echo.
pause
