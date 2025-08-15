@echo off
echo ========================================
echo Dubai Consulting Website Setup
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo Download the LTS version and run the installer
    echo Then restart this script
    pause
    exit /b 1
)

echo Node.js found: 
node --version
echo.

echo Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo npm is not installed or not in PATH
    echo Please ensure Node.js is properly installed
    pause
    exit /b 1
)

echo npm found:
npm --version
echo.

echo Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo Failed to install backend dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create .env.local file in the root directory
echo 2. Create .env file in the backend directory
echo 3. Set up MongoDB (local or Atlas)
echo 4. Get Google Maps API key
echo 5. Configure SMTP settings
echo.
echo See env.template for required environment variables
echo.
echo To start development:
echo - Frontend: npm run dev
echo - Backend: cd backend && npm run dev
echo.
pause
