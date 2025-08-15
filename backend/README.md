# KPM Global Services Backend API

This is the backend server for the KPM Global Services website, providing authentication, user management, and knowledge base functionality.

## 🚀 Features

- **Authentication System**: JWT-based login/registration with bcrypt password hashing
- **User Management**: Client and partner user roles with profile management
- **Knowledge Base**: Secure access to business resources and downloadable content
- **File Management**: Secure file uploads and downloads
- **Security**: Rate limiting, input validation, CORS protection
- **Email Integration**: Nodemailer for transactional emails

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **Multer** - File upload handling

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🔧 Installation

1. **Clone the repository and navigate to backend:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.template .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/dubai-consulting
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_URL=http://localhost:3000
   SMTP_HOST=smtp.gmail.com
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Start MongoDB:**
   - **Local**: Start MongoDB service
   - **Atlas**: Use your connection string

5. **Run the server:**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/change-password` - Change password
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

### Knowledge Base
- `GET /api/knowledge-base` - Get all resources
- `GET /api/knowledge-base/:id` - Get resource by ID
- `POST /api/knowledge-base` - Create resource (admin only)
- `PUT /api/knowledge-base/:id` - Update resource (admin only)
- `DELETE /api/knowledge-base/:id` - Delete resource (admin only)
- `GET /api/knowledge-base/:id/download/:filename` - Download file

### Contact
- `POST /api/contact` - Submit contact form

## 🔐 User Roles

- **client**: Access to basic resources and guides
- **partner**: Access to client resources plus partner materials
- **admin**: Full access to all features and user management

## 📁 File Structure

```
backend/
├── models/          # Database models
├── routes/          # API route handlers
├── middleware/      # Custom middleware
├── uploads/         # File upload directory
├── server.js        # Main server file
├── package.json     # Dependencies
└── README.md        # This file
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Rate Limiting**: Prevents abuse
- **Input Validation**: Express-validator for data sanitization
- **CORS Protection**: Configurable cross-origin requests
- **Helmet**: Security headers

## 📧 Email Configuration

The server uses Nodemailer for sending emails. Configure your SMTP settings in `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Note**: For Gmail, you'll need to use an App Password, not your regular password.

## 🗄️ Database Models

### User
- Basic info (name, email, password)
- Role-based access control
- Preferences and settings
- Referral system

### KnowledgeBase
- Content management
- File attachments
- Access control levels
- Categories and tags

## 🚀 Deployment

### Environment Variables
Ensure all required environment variables are set in production:

```bash
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
FRONTEND_URL=your-production-frontend-url
```

### PM2 (Recommended)
```bash
npm install -g pm2
pm2 start server.js --name "dubai-consulting-api"
pm2 save
pm2 startup
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🧪 Testing

```bash
npm test
```

## 📊 Monitoring

- **Health Check**: `GET /api/health`
- **Logs**: Check console output and PM2 logs
- **Database**: Monitor MongoDB connection status

## 🤝 Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Submit a pull request

## 📞 Support

For technical support or questions:
- Check the logs for error messages
- Verify environment variables
- Ensure MongoDB is running
- Check network connectivity

## 📄 License

This project is proprietary to KPM Global Services.
