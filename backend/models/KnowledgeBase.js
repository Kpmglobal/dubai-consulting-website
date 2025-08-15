const mongoose = require('mongoose');

const knowledgeBaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  summary: {
    type: String,
    trim: true,
    maxlength: [500, 'Summary cannot exceed 500 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
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
    ]
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [50, 'Tag cannot exceed 50 characters']
  }],
  attachments: [{
    filename: {
      type: String,
      required: true
    },
    originalName: {
      type: String,
      required: true
    },
    filePath: {
      type: String,
      required: true
    },
    fileSize: {
      type: Number,
      required: true
    },
    mimeType: {
      type: String,
      required: true
    },
    downloadCount: {
      type: Number,
      default: 0
    }
  }],
  accessLevel: {
    type: String,
    enum: ['public', 'client', 'partner', 'admin'],
    default: 'client'
  },
  language: {
    type: String,
    enum: ['en', 'ru', 'tr'],
    default: 'en'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: Date,
  viewCount: {
    type: Number,
    default: 0
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['draft', 'review', 'published', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true
});

// Indexes
knowledgeBaseSchema.index({ category: 1, accessLevel: 1 });
knowledgeBaseSchema.index({ language: 1, isPublished: 1 });
knowledgeBaseSchema.index({ tags: 1 });

const KnowledgeBase = mongoose.model('KnowledgeBase', knowledgeBaseSchema);

module.exports = KnowledgeBase;
