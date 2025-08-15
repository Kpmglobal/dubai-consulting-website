#!/bin/bash

# Dubai Business Setup Consulting Website - Setup Script
# This script automates the setup process for development

echo "🚀 Setting up Dubai Business Setup Consulting Website..."
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm $(npm -v) detected"

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

echo "✅ Frontend dependencies installed"

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

cd ..

echo "✅ Backend dependencies installed"

# Create environment files
echo "🔧 Creating environment files..."

# Frontend .env.local
if [ ! -f .env.local ]; then
    cat > .env.local << EOF
# Frontend Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key-here
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=http://localhost:3000
EOF
    echo "✅ Created .env.local (frontend)"
else
    echo "ℹ️  .env.local already exists"
fi

# Backend .env
if [ ! -f backend/.env ]; then
    cat > backend/.env << EOF
# Backend Environment Variables
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
EOF
    echo "✅ Created backend/.env"
else
    echo "ℹ️  backend/.env already exists"
fi

# Check if MongoDB is running
echo "🗄️  Checking MongoDB connection..."
if command -v mongosh &> /dev/null; then
    if mongosh --eval "db.runCommand('ping')" > /dev/null 2>&1; then
        echo "✅ MongoDB is running"
    else
        echo "⚠️  MongoDB is not running. Please start MongoDB:"
        echo "   macOS: brew services start mongodb-community"
        echo "   Ubuntu: sudo systemctl start mongod"
        echo "   Windows: Start MongoDB service"
    fi
else
    echo "ℹ️  MongoDB client not found. Please install MongoDB:"
    echo "   macOS: brew install mongodb-community"
    echo "   Ubuntu: sudo apt install mongodb"
    echo "   Windows: Download from mongodb.com"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Update environment variables in .env.local and backend/.env"
echo "2. Get Google Maps API key from console.cloud.google.com"
echo "3. Configure SMTP settings for email functionality"
echo "4. Start MongoDB database"
echo ""
echo "🚀 Start development servers:"
echo "   Terminal 1: cd backend && npm run dev"
echo "   Terminal 2: npm run dev"
echo ""
echo "🌐 Access your application:"
echo "   Frontend: http://localhost:3000"
echo "   Backend: http://localhost:5000"
echo "   Admin: http://localhost:3000/en/admin"
echo "   Dashboard: http://localhost:3000/en/dashboard"
echo ""
echo "📚 Documentation:"
echo "   README.md - Complete setup guide"
echo "   DEPLOYMENT.md - Deployment instructions"
echo "   env.template - Environment variables reference"
echo ""
echo "🔧 Need help? Check the README.md file for detailed instructions."
