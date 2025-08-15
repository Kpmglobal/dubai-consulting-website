const express = require('express');
const { body, validationResult } = require('express-validator');
const KnowledgeBase = require('../models/KnowledgeBase');
const { auth, requireRole } = require('../middleware/auth');
const path = require('path');
const fs = require('fs').promises;

const router = express.Router();

// @route   GET /api/knowledge-base
// @desc    Get all knowledge base entries based on user access level
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await require('../models/User').findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Determine access level based on user role
    let accessLevel = 'public';
    if (user.role === 'client') accessLevel = 'client';
    if (user.role === 'partner') accessLevel = 'partner';
    if (user.role === 'admin') accessLevel = 'admin';

    // Find entries user can access
    const entries = await KnowledgeBase.find({
      accessLevel: { $lte: accessLevel },
      isPublished: true,
      status: 'published'
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: entries
    });
  } catch (error) {
    console.error('Get knowledge base error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching knowledge base'
    });
  }
});

// @route   GET /api/knowledge-base/:id
// @desc    Get knowledge base entry by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const user = await require('../models/User').findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const entry = await KnowledgeBase.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({
        success: false,
        message: 'Knowledge base entry not found'
      });
    }

    // Check access level
    let accessLevel = 'public';
    if (user.role === 'client') accessLevel = 'client';
    if (user.role === 'partner') accessLevel = 'partner';
    if (user.role === 'admin') accessLevel = 'admin';

    if (entry.accessLevel > accessLevel) {
      return res.status(403).json({
        success: false,
        message: 'Access denied to this resource'
      });
    }

    // Increment view count
    entry.viewCount += 1;
    await entry.save();

    res.json({
      success: true,
      data: entry
    });
  } catch (error) {
    console.error('Get knowledge base entry error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching entry'
    });
  }
});

// @route   POST /api/knowledge-base
// @desc    Create new knowledge base entry
// @access  Private/Admin
router.post('/', [
  auth,
  requireRole(['admin']),
  body('title').trim().isLength({ min: 1, max: 200 }).withMessage('Title is required and must be under 200 characters'),
  body('content').trim().isLength({ min: 1 }).withMessage('Content is required'),
  body('summary').optional().trim().isLength({ max: 500 }).withMessage('Summary must be under 500 characters'),
  body('category').isIn([
    'business-setup',
    'legal-services',
    'tax-accounting',
    'visa-services',
    'investment',
    'consulting',
    'general',
    'guides',
    'checklists',
    'templates'
  ]).withMessage('Invalid category'),
  body('tags').optional().isArray().withMessage('Tags must be an array'),
  body('accessLevel').isIn(['public', 'client', 'partner', 'admin']).withMessage('Invalid access level'),
  body('language').isIn(['en', 'ru', 'tr']).withMessage('Invalid language')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const entry = new KnowledgeBase({
      ...req.body,
      author: req.user.userId,
      isPublished: req.body.isPublished || false,
      publishedAt: req.body.isPublished ? new Date() : null
    });

    await entry.save();

    res.status(201).json({
      success: true,
      message: 'Knowledge base entry created successfully',
      data: entry
    });
  } catch (error) {
    console.error('Create knowledge base error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating entry'
    });
  }
});

// @route   PUT /api/knowledge-base/:id
// @desc    Update knowledge base entry
// @access  Private/Admin
router.put('/:id', [
  auth,
  requireRole(['admin']),
  body('title').optional().trim().isLength({ min: 1, max: 200 }).withMessage('Title must be under 200 characters'),
  body('content').optional().trim().isLength({ min: 1 }).withMessage('Content cannot be empty'),
  body('summary').optional().trim().isLength({ max: 500 }).withMessage('Summary must be under 500 characters'),
  body('category').optional().isIn([
    'business-setup',
    'legal-services',
    'tax-accounting',
    'visa-services',
    'investment',
    'consulting',
    'general',
    'guides',
    'checklists',
    'templates'
  ]).withMessage('Invalid category'),
  body('accessLevel').optional().isIn(['public', 'client', 'partner', 'admin']).withMessage('Invalid access level'),
  body('language').optional().isIn(['en', 'ru', 'tr']).withMessage('Invalid language')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const entry = await KnowledgeBase.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({
        success: false,
        message: 'Knowledge base entry not found'
      });
    }

    // Update fields
    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined) {
        entry[key] = req.body[key];
      }
    });

    // Update publishedAt if publishing status changed
    if (req.body.isPublished && !entry.isPublished) {
      entry.publishedAt = new Date();
    }

    await entry.save();

    res.json({
      success: true,
      message: 'Knowledge base entry updated successfully',
      data: entry
    });
  } catch (error) {
    console.error('Update knowledge base error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating entry'
    });
  }
});

// @route   DELETE /api/knowledge-base/:id
// @desc    Delete knowledge base entry
// @access  Private/Admin
router.delete('/:id', auth, requireRole(['admin']), async (req, res) => {
  try {
    const entry = await KnowledgeBase.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({
        success: false,
        message: 'Knowledge base entry not found'
      });
    }

    // Delete associated files
    if (entry.attachments && entry.attachments.length > 0) {
      for (const attachment of entry.attachments) {
        try {
          await fs.unlink(attachment.filePath);
        } catch (fileError) {
          console.error('Error deleting file:', fileError);
        }
      }
    }

    await KnowledgeBase.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Knowledge base entry deleted successfully'
    });
  } catch (error) {
    console.error('Delete knowledge base error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting entry'
    });
  }
});

// @route   GET /api/knowledge-base/:id/download/:filename
// @desc    Download file attachment
// @access  Private
router.get('/:id/download/:filename', auth, async (req, res) => {
  try {
    const user = await require('../models/User').findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const entry = await KnowledgeBase.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({
        success: false,
        message: 'Knowledge base entry not found'
      });
    }

    // Check access level
    let accessLevel = 'public';
    if (user.role === 'client') accessLevel = 'client';
    if (user.role === 'partner') accessLevel = 'partner';
    if (user.role === 'admin') accessLevel = 'admin';

    if (entry.accessLevel > accessLevel) {
      return res.status(403).json({
        success: false,
        message: 'Access denied to this resource'
      });
    }

    const attachment = entry.attachments.find(att => att.filename === req.params.filename);
    if (!attachment) {
      return res.status(404).json({
        success: false,
        message: 'File not found'
      });
    }

    // Check if file exists
    try {
      await fs.access(attachment.filePath);
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: 'File not found on server'
      });
    }

    // Increment download count
    attachment.downloadCount += 1;
    entry.downloadCount += 1;
    await entry.save();

    // Set headers for download
    res.setHeader('Content-Type', attachment.mimeType);
    res.setHeader('Content-Disposition', `attachment; filename="${attachment.originalName}"`);

    // Send file
    res.sendFile(path.resolve(attachment.filePath));

  } catch (error) {
    console.error('Download file error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while downloading file'
    });
  }
});

module.exports = router;
