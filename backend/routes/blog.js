const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Blog = require('../models/Blog');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/blog
// @desc    Get all published blog posts with filters
// @access  Public
router.get('/', [
  query('category').optional().isString(),
  query('search').optional().isString(),
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('sort').optional().isIn(['newest', 'oldest', 'popular', 'featured']),
  query('language').optional().isIn(['en', 'ru', 'tr'])
], async (req, res) => {
  try {
    const {
      category,
      search,
      page = 1,
      limit = 20,
      sort = 'newest',
      language = 'en'
    } = req.query;

    // Build query
    const query = { status: 'published' };
    
    // Add category filter
    if (category) {
      query.category = category;
    }
    
    // Add search filter
    if (search) {
      query.$text = { $search: search };
    }

    // Build sort options
    let sortOptions = {};
    switch (sort) {
      case 'newest':
        sortOptions = { publishedAt: -1 };
        break;
      case 'oldest':
        sortOptions = { publishedAt: 1 };
        break;
      case 'popular':
        sortOptions = { views: -1, likes: -1 };
        break;
      case 'featured':
        sortOptions = { isFeatured: -1, publishedAt: -1 };
        break;
      default:
        sortOptions = { publishedAt: -1 };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const posts = await Blog.find(query)
      .select(`title.${language} excerpt.${language} content.${language} slug featuredImage category tags publishedAt readTime views likes isFeatured language`)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .populate('author', 'firstName lastName company');

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
    console.error('Get blog posts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching blog posts'
    });
  }
});

// @route   GET /api/blog/:slug
// @desc    Get specific blog post by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const language = req.query.language || 'en';

    const post = await Blog.findOne({ slug, status: 'published' })
      .select(`title.${language} excerpt.${language} content.${language} slug featuredImage category tags author publishedAt readTime views likes isFeatured language seo.${language}`)
      .populate('author', 'firstName lastName company profilePicture');

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Increment view count
    await post.incrementViews();

    res.json({
      success: true,
      data: {
        post
      }
    });
  } catch (error) {
    console.error('Get blog post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching blog post'
    });
  }
});

// @route   GET /api/blog/category/:category
// @desc    Get blog posts by category
// @access  Public
router.get('/category/:category', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('language').optional().isIn(['en', 'ru', 'tr'])
], async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 20, language = 'en' } = req.query;

    // Build query
    const query = { 
      category, 
      status: 'published' 
    };

    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Execute query
    const posts = await Blog.find(query)
      .select(`title.${language} excerpt.${language} content.${language} slug featuredImage category tags publishedAt readTime views likes isFeatured language`)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('author', 'firstName lastName company');

    // Get total count for pagination
    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      data: {
        category,
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
    console.error('Get category posts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching category posts'
    });
  }
});

// @route   GET /api/blog/featured
// @desc    Get featured blog posts
// @access  Public
router.get('/featured', [
  query('limit').optional().isInt({ min: 1, max: 50 }),
  query('language').optional().isIn(['en', 'ru', 'tr'])
], async (req, res) => {
  try {
    const { limit = 10, language = 'en' } = req.query;

    const posts = await Blog.find({ 
      isFeatured: true, 
      status: 'published' 
    })
      .select(`title.${language} excerpt.${language} content.${language} slug featuredImage category tags publishedAt readTime views likes isFeatured language`)
      .sort({ publishedAt: -1 })
      .limit(parseInt(limit))
      .populate('author', 'firstName lastName company');

    res.json({
      success: true,
      data: {
        posts
      }
    });
  } catch (error) {
    console.error('Get featured posts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching featured posts'
    });
  }
});

// @route   POST /api/blog
// @desc    Create new blog post
// @access  Admin only
router.post('/', [
  adminAuth,
  body('title.en').notEmpty().withMessage('English title is required'),
  body('excerpt.en').notEmpty().withMessage('English excerpt is required'),
  body('content.en').notEmpty().withMessage('English content is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('tags').optional().isArray().withMessage('Tags must be an array'),
  body('status').optional().isIn(['draft', 'published', 'archived']).withMessage('Invalid status'),
  body('isFeatured').optional().isBoolean().withMessage('isFeatured must be a boolean'),
  body('language').optional().isIn(['en', 'ru', 'tr']).withMessage('Invalid language'),
  body('sortOrder').optional().isInt().withMessage('sortOrder must be an integer')
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

    // Create new post
    const post = new Blog({
      ...req.body,
      author: req.user._id
    });

    await post.save();

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: {
        post
      }
    });
  } catch (error) {
    console.error('Create blog post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating blog post'
    });
  }
});

// @route   PUT /api/blog/:id
// @desc    Update blog post
// @access  Admin only
router.put('/:id', [
  adminAuth,
  body('title.en').optional().notEmpty().withMessage('English title cannot be empty'),
  body('excerpt.en').optional().notEmpty().withMessage('English excerpt cannot be empty'),
  body('content.en').optional().notEmpty().withMessage('English content cannot be empty'),
  body('category').optional().notEmpty().withMessage('Category cannot be empty'),
  body('tags').optional().isArray().withMessage('Tags must be an array'),
  body('status').optional().isIn(['draft', 'published', 'archived']).withMessage('Invalid status'),
  body('isFeatured').optional().isBoolean().withMessage('isFeatured must be a boolean'),
  body('language').optional().isIn(['en', 'ru', 'tr']).withMessage('Invalid language'),
  body('sortOrder').optional().isInt().withMessage('sortOrder must be an integer')
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

    // Find and update post
    const post = await Blog.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.json({
      success: true,
      message: 'Blog post updated successfully',
      data: {
        post
      }
    });
  } catch (error) {
    console.error('Update blog post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating blog post'
    });
  }
});

// @route   DELETE /api/blog/:id
// @desc    Archive blog post
// @access  Admin only
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;

    // Archive post instead of deleting
    const post = await Blog.findByIdAndUpdate(
      id,
      { status: 'archived' },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    res.json({
      success: true,
      message: 'Blog post archived successfully'
    });
  } catch (error) {
    console.error('Archive blog post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while archiving blog post'
    });
  }
});

// @route   POST /api/blog/:id/like
// @desc    Like/unlike a blog post
// @access  Private
router.post('/:id/like', auth, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Blog.findById(id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Check if user already liked the post
    const userLiked = post.likes.includes(req.user._id);
    
    if (userLiked) {
      // Unlike
      post.likes = post.likes.filter(likeId => likeId.toString() !== req.user._id.toString());
    } else {
      // Like
      post.likes.push(req.user._id);
    }

    await post.save();

    res.json({
      success: true,
      message: userLiked ? 'Post unliked' : 'Post liked',
      data: {
        likes: post.likes.length,
        userLiked: !userLiked
      }
    });
  } catch (error) {
    console.error('Like post error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while processing like'
    });
  }
});

// @route   GET /api/blog/search
// @desc    Search blog posts
// @access  Public
router.get('/search', [
  query('q').notEmpty().withMessage('Search query is required'),
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('language').optional().isIn(['en', 'ru', 'tr'])
], async (req, res) => {
  try {
    const { q: query, page = 1, limit = 20, language = 'en' } = req.query;

    // Build search query
    const searchQuery = { 
      status: 'published',
      $text: { $search: query }
    };

    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Execute search
    const posts = await Blog.find(searchQuery)
      .select(`title.${language} excerpt.${language} content.${language} slug featuredImage category tags publishedAt readTime views likes isFeatured language`)
      .sort({ score: { $meta: 'textScore' }, publishedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('author', 'firstName lastName company');

    // Get total count for pagination
    const total = await Blog.countDocuments(searchQuery);

    res.json({
      success: true,
      data: {
        query,
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
    console.error('Search blog posts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while searching'
    });
  }
});

module.exports = router;
