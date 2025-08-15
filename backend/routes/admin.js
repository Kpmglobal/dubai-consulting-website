const express = require('express');
const { body, validationResult, query } = require('express-validator');
const User = require('../models/User');
const Blog = require('../models/Blog');
const KnowledgeBase = require('../models/KnowledgeBase');
const Service = require('../models/Service');
const { adminAuth } = require('../middleware/auth');

const router = express.Router();

// All routes require admin authentication
router.use(adminAuth);

// @route   GET /api/admin/dashboard
// @desc    Get admin dashboard statistics
// @access  Admin only
router.get('/dashboard', async (req, res) => {
  try {
    // Get user statistics
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isActive: true });
    const newUsersThisMonth = await User.countDocuments({
      createdAt: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) }
    });

    // Get content statistics
    const totalBlogPosts = await Blog.countDocuments();
    const publishedBlogPosts = await Blog.countDocuments({ status: 'published' });
    const totalKnowledgeBase = await KnowledgeBase.countDocuments();
    const publishedKnowledgeBase = await KnowledgeBase.countDocuments({ status: 'published' });
    const totalServices = await Service.countDocuments();
    const publishedServices = await Service.countDocuments({ status: 'published' });

    // Get recent activity
    const recentUsers = await User.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('firstName lastName email company createdAt');

    const recentBlogPosts = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('title.en status createdAt author')
      .populate('author', 'firstName lastName');

    const recentKnowledgeBase = await KnowledgeBase.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('title.en status createdAt author')
      .populate('author', 'firstName lastName');

    const recentServices = await Service.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('title.en status createdAt author')
      .populate('author', 'firstName lastName');

    res.json({
      success: true,
      data: {
        statistics: {
          users: {
            total: totalUsers,
            active: activeUsers,
            newThisMonth: newUsersThisMonth
          },
                  content: {
          blogPosts: {
            total: totalBlogPosts,
            published: publishedBlogPosts
          },
          knowledgeBase: {
            total: totalKnowledgeBase,
            published: publishedKnowledgeBase
          },
          services: {
            total: totalServices,
            published: publishedServices
          }
        }
        },
        recentActivity: {
          users: recentUsers,
          blogPosts: recentBlogPosts,
          knowledgeBase: recentKnowledgeBase,
          services: recentServices
        }
      }
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching dashboard data'
    });
  }
});

// @route   GET /api/admin/users
// @desc    Get all users with filters and pagination
// @access  Admin only
router.get('/users', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('search').optional().isString(),
  query('role').optional().isIn(['client', 'admin']),
  query('status').optional().isIn(['active', 'inactive']),
  query('sort').optional().isIn(['newest', 'oldest', 'name', 'email'])
], async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      role,
      status,
      sort = 'newest'
    } = req.query;

    // Build query
    const query = {};
    
    if (role) {
      query.role = role;
    }
    
    if (status) {
      query.isActive = status === 'active';
    }
    
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    // Build sort options
    let sortOptions = {};
    switch (sort) {
      case 'newest':
        sortOptions = { createdAt: -1 };
        break;
      case 'oldest':
        sortOptions = { createdAt: 1 };
        break;
      case 'name':
        sortOptions = { firstName: 1, lastName: 1 };
        break;
      case 'email':
        sortOptions = { email: 1 };
        break;
      default:
        sortOptions = { createdAt: -1 };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const users = await User.find(query)
      .select('-password')
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await User.countDocuments(query);

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching users'
    });
  }
});

// @route   GET /api/admin/users/:id
// @desc    Get specific user details
// @access  Admin only
router.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select('-password');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: {
        user
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching user'
    });
  }
});

// @route   PUT /api/admin/users/:id
// @desc    Update user (admin only)
// @access  Admin only
router.put('/users/:id', [
  body('firstName').optional().trim().isLength({ min: 2, max: 50 }),
  body('lastName').optional().trim().isLength({ min: 2, max: 50 }),
  body('company').optional().trim().isLength({ max: 100 }),
  body('phone').optional().matches(/^[\+]?[1-9][\d]{0,15}$/),
  body('country').optional().trim().isLength({ max: 50 }),
  body('role').optional().isIn(['client', 'admin']),
  body('isActive').optional().isBoolean(),
  body('accessLevel').optional().isIn(['basic', 'premium', 'vip'])
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { id } = req.params;
    const updateFields = {};

    // Only allow updating specific fields
    const allowedFields = ['firstName', 'lastName', 'company', 'phone', 'country', 'role', 'isActive', 'accessLevel'];
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updateFields[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(
      id,
      updateFields,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      data: {
        user
      }
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating user'
    });
  }
});

// @route   DELETE /api/admin/users/:id
// @desc    Deactivate user account
// @access  Admin only
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent admin from deactivating themselves
    if (id === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'You cannot deactivate your own account'
      });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User account deactivated successfully'
    });
  } catch (error) {
    console.error('Deactivate user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deactivating user'
    });
  }
});

// @route   GET /api/admin/blog
// @desc    Get all blog posts for admin management
// @access  Admin only
router.get('/blog', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('status').optional().isIn(['draft', 'published', 'archived']),
  query('category').optional().isString()
], async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      status,
      category
    } = req.query;

    // Build query
    const query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (category) {
      query.category = category;
    }

    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const posts = await Blog.find(query)
      .select('title.en status category author createdAt updatedAt isFeatured')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('author', 'firstName lastName');

    // Get total count for pagination
    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      data: {
        posts,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Get admin blog posts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching blog posts'
    });
  }
});

// @route   GET /api/admin/knowledge-base
// @desc    Get all knowledge base articles for admin management
// @access  Admin only
router.get('/knowledge-base', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('status').optional().isIn(['draft', 'published', 'archived']),
  query('category').optional().isString(),
  query('type').optional().isString()
], async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      status,
      category,
      type
    } = req.query;

    // Build query
    const query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (category) {
      query.category = category;
    }
    
    if (type) {
      query.type = type;
    }

    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const articles = await KnowledgeBase.find(query)
      .select('title.en status category type author createdAt updatedAt isPublic requiresAuth accessLevel')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('author', 'firstName lastName');

    // Get total count for pagination
    const total = await KnowledgeBase.countDocuments(query);

    res.json({
      success: true,
      data: {
        articles,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Get admin knowledge base error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching knowledge base'
    });
  }
});

// @route   GET /api/admin/analytics
// @desc    Get analytics data for admin
// @access  Admin only
router.get('/analytics', [
  query('period').optional().isIn(['7d', '30d', '90d', '1y']),
  query('type').optional().isIn(['users', 'content', 'engagement'])
], async (req, res) => {
  try {
    const { period = '30d', type = 'all' } = req.query;

    // Calculate date range
    const now = new Date();
    let startDate;
    
    switch (period) {
      case '7d':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case '30d':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case '90d':
        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        break;
      case '1y':
        startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    const analytics = {};

    // User analytics
    if (type === 'all' || type === 'users') {
      analytics.users = {
        total: await User.countDocuments(),
        active: await User.countDocuments({ isActive: true }),
        newInPeriod: await User.countDocuments({ createdAt: { $gte: startDate } }),
        byRole: {
          client: await User.countDocuments({ role: 'client' }),
          admin: await User.countDocuments({ role: 'admin' })
        }
      };
    }

    // Content analytics
    if (type === 'all' || type === 'content') {
      analytics.content = {
        blogPosts: {
          total: await Blog.countDocuments(),
          published: await Blog.countDocuments({ status: 'published' }),
          draft: await Blog.countDocuments({ status: 'draft' }),
          archived: await Blog.countDocuments({ status: 'archived' })
        },
        knowledgeBase: {
          total: await KnowledgeBase.countDocuments(),
          published: await KnowledgeBase.countDocuments({ status: 'published' }),
          draft: await KnowledgeBase.countDocuments({ status: 'draft' }),
          archived: await KnowledgeBase.countDocuments({ status: 'archived' })
        }
      };
    }

    // Engagement analytics
    if (type === 'all' || type === 'engagement') {
      const topBlogPosts = await Blog.find({ status: 'published' })
        .sort({ views: -1 })
        .limit(5)
        .select('title.en views likes');

      const topKnowledgeBase = await KnowledgeBase.find({ status: 'published' })
        .sort({ views: -1 })
        .limit(5)
        .select('title.en views downloads');

      analytics.engagement = {
        topBlogPosts,
        topKnowledgeBase
      };
    }

    res.json({
      success: true,
      data: {
        period,
        analytics
      }
    });
  } catch (error) {
    console.error('Get analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching analytics'
    });
  }
});

// @route   POST /api/admin/bulk-action
// @desc    Perform bulk actions on content/users
// @access  Admin only
router.post('/bulk-action', [
  body('action').isIn(['publish', 'archive', 'delete', 'activate', 'deactivate']).withMessage('Invalid action'),
  body('type').isIn(['users', 'blog', 'knowledge-base']).withMessage('Invalid type'),
  body('ids').isArray({ min: 1 }).withMessage('IDs array is required')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { action, type, ids } = req.body;

    let result;
    let message;

    switch (type) {
      case 'users':
        if (action === 'activate') {
          result = await User.updateMany(
            { _id: { $in: ids } },
            { isActive: true }
          );
          message = `${result.modifiedCount} users activated`;
        } else if (action === 'deactivate') {
          result = await User.updateMany(
            { _id: { $in: ids } },
            { isActive: false }
          );
          message = `${result.modifiedCount} users deactivated`;
        }
        break;

      case 'blog':
        if (action === 'publish') {
          result = await Blog.updateMany(
            { _id: { $in: ids } },
            { status: 'published' }
          );
          message = `${result.modifiedCount} blog posts published`;
        } else if (action === 'archive') {
          result = await Blog.updateMany(
            { _id: { $in: ids } },
            { status: 'archived' }
          );
          message = `${result.modifiedCount} blog posts archived`;
        }
        break;

      case 'knowledge-base':
        if (action === 'publish') {
          result = await KnowledgeBase.updateMany(
            { _id: { $in: ids } },
            { status: 'published' }
          );
          message = `${result.modifiedCount} knowledge base articles published`;
        } else if (action === 'archive') {
          result = await KnowledgeBase.updateMany(
            { _id: { $in: ids } },
            { status: 'archived' }
          );
          message = `${result.modifiedCount} knowledge base articles archived`;
        }
        break;
    }

    res.json({
      success: true,
      message,
      data: {
        action,
        type,
        processedCount: result.modifiedCount
      }
    });
  } catch (error) {
    console.error('Bulk action error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while performing bulk action'
    });
  }
});

// @route   GET /api/admin/services
// @desc    Get all services with filters and pagination
// @access  Admin only
router.get('/services', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('search').optional().isString(),
  query('category').optional().isString(),
  query('status').optional().isIn(['draft', 'published', 'archived']),
  query('sort').optional().isIn(['newest', 'oldest', 'name', 'category', 'sortOrder'])
], async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      category,
      status,
      sort = 'newest'
    } = req.query;

    // Build query
    const query = {};
    
    if (search) {
      query.$text = { $search: search };
    }
    
    if (category) {
      query.category = category;
    }
    
    if (status) {
      query.status = status;
    }

    // Build sort options
    let sortOptions = {};
    switch (sort) {
      case 'newest':
        sortOptions = { createdAt: -1 };
        break;
      case 'oldest':
        sortOptions = { createdAt: 1 };
        break;
      case 'name':
        sortOptions = { 'title.en': 1 };
        break;
      case 'category':
        sortOptions = { category: 1, sortOrder: 1 };
        break;
      case 'sortOrder':
        sortOptions = { sortOrder: 1, createdAt: -1 };
        break;
      default:
        sortOptions = { createdAt: -1 };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const services = await Service.find(query)
      .select('title.en title.ru title.tr description.en description.ru description.tr category status featured sortOrder coverImage slug createdAt lastUpdated')
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .populate('author', 'firstName lastName');

    // Get total count for pagination
    const total = await Service.countDocuments(query);

    res.json({
      success: true,
      data: {
        services,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching services'
    });
  }
});

// @route   GET /api/admin/services/:id
// @desc    Get specific service by ID
// @access  Admin only
router.get('/services/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id)
      .populate('author', 'firstName lastName company');

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      data: {
        service
      }
    });
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching service'
    });
  }
});

// @route   POST /api/admin/services
// @desc    Create new service
// @access  Admin only
router.post('/services', [
  body('title.en').notEmpty().withMessage('English title is required'),
  body('description.en').notEmpty().withMessage('English description is required'),
  body('content.en').notEmpty().withMessage('English content is required'),
  body('slug').notEmpty().withMessage('Slug is required'),
  body('category').isIn([
    'business-setup', 'legal-services', 'tax-accounting', 
    'visa-services', 'banking', 'consulting'
  ]).withMessage('Invalid category'),
  body('status').optional().isIn(['draft', 'published', 'archived']).withMessage('Invalid status'),
  body('featured').optional().isBoolean().withMessage('featured must be a boolean'),
  body('sortOrder').optional().isInt().withMessage('sortOrder must be an integer'),
  body('pricing.startingPrice').optional().isFloat({ min: 0 }).withMessage('Starting price must be a positive number'),
  body('pricing.currency').optional().isString().withMessage('Currency must be a string'),
  body('pricing.pricingModel').optional().isIn(['fixed', 'hourly', 'monthly', 'custom']).withMessage('Invalid pricing model')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    // Check if slug already exists
    const existingService = await Service.findOne({ slug: req.body.slug });
    if (existingService) {
      return res.status(400).json({
        success: false,
        message: 'Service with this slug already exists'
      });
    }

    // Create new service
    const service = new Service({
      ...req.body,
      author: req.user._id
    });

    await service.save();

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: {
        service
      }
    });
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating service'
    });
  }
});

// @route   PUT /api/admin/services/:id
// @desc    Update service
// @access  Admin only
router.put('/services/:id', [
  body('title.en').optional().notEmpty().withMessage('English title cannot be empty'),
  body('description.en').optional().notEmpty().withMessage('English description cannot be empty'),
  body('content.en').optional().notEmpty().withMessage('English content cannot be empty'),
  body('slug').optional().notEmpty().withMessage('Slug cannot be empty'),
  body('category').optional().isIn([
    'business-setup', 'legal-services', 'tax-accounting', 
    'visa-services', 'banking', 'consulting'
  ]).withMessage('Invalid category'),
  body('status').optional().isIn(['draft', 'published', 'archived']).withMessage('Invalid status'),
  body('featured').optional().isBoolean().withMessage('featured must be a boolean'),
  body('sortOrder').optional().isInt().withMessage('sortOrder must be an integer'),
  body('pricing.startingPrice').optional().isFloat({ min: 0 }).withMessage('Starting price must be a positive number'),
  body('pricing.currency').optional().isString().withMessage('Currency must be a string'),
  body('pricing.pricingModel').optional().isIn(['fixed', 'hourly', 'monthly', 'custom']).withMessage('Invalid pricing model')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { id } = req.params;

    // Check if slug already exists (excluding current service)
    if (req.body.slug) {
      const existingService = await Service.findOne({ 
        slug: req.body.slug, 
        _id: { $ne: id } 
      });
      if (existingService) {
        return res.status(400).json({
          success: false,
          message: 'Service with this slug already exists'
        });
      }
    }

    // Find and update service
    const service = await Service.findByIdAndUpdate(
      id,
      { ...req.body, lastUpdated: new Date() },
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service updated successfully',
      data: {
        service
      }
    });
  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating service'
    });
  }
});

// @route   DELETE /api/admin/services/:id
// @desc    Archive service
// @access  Admin only
router.delete('/services/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Archive service instead of deleting
    const service = await Service.findByIdAndUpdate(
      id,
      { status: 'archived' },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service archived successfully'
    });
  } catch (error) {
    console.error('Archive service error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while archiving service'
    });
  }
});

// @route   GET /api/admin/system-info
// @desc    Get system information
// @access  Admin only
router.get('/system-info', (req, res) => {
  try {
    const systemInfo = {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString()
    };

    res.json({
      success: true,
      data: {
        systemInfo
      }
    });
  } catch (error) {
    console.error('Get system info error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching system info'
    });
  }
});

module.exports = router;
