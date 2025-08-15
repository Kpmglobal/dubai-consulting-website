const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    en: {
      type: String,
      required: [true, 'English title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    ru: {
      type: String,
      trim: true,
      maxlength: [200, 'Russian title cannot exceed 200 characters']
    },
    tr: {
      type: String,
      trim: true,
      maxlength: [200, 'Turkish title cannot exceed 200 characters']
    }
  },
  excerpt: {
    en: {
      type: String,
      required: [true, 'English excerpt is required'],
      trim: true,
      maxlength: [500, 'Excerpt cannot exceed 500 characters']
    },
    ru: {
      type: String,
      trim: true,
      maxlength: [500, 'Russian excerpt cannot exceed 500 characters']
    },
    tr: {
      type: String,
      trim: true,
      maxlength: [500, 'Turkish excerpt cannot exceed 500 characters']
    }
  },
  content: {
    en: {
      type: String,
      required: [true, 'English content is required']
    },
    ru: String,
    tr: String
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens']
  },
  featuredImage: {
    type: String,
    required: [true, 'Featured image is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'business-setup',
      'banking',
      'accounting',
      'tax',
      'vat',
      'pro-services',
      'legal',
      'business-tips',
      'market-insights',
      'success-stories'
    ]
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [50, 'Tag cannot exceed 50 characters']
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Author is required']
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  publishedAt: {
    type: Date,
    default: null
  },
  seo: {
    en: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String]
    },
    ru: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String]
    },
    tr: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String]
    }
  },
  readTime: {
    type: Number, // in minutes
    default: 5
  },
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  isFeatured: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    enum: ['en', 'ru', 'tr'],
    default: 'en'
  },
  sortOrder: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for localized content
blogSchema.virtual('localizedTitle').get(function() {
  return this.title[this.language] || this.title.en;
});

blogSchema.virtual('localizedExcerpt').get(function() {
  return this.excerpt[this.language] || this.excerpt.en;
});

blogSchema.virtual('localizedContent').get(function() {
  return this.content[this.language] || this.content.en;
});

// Virtual for like count
blogSchema.virtual('likeCount').get(function() {
  return this.likes.length;
});

// Indexes for performance
blogSchema.index({ slug: 1 });
blogSchema.index({ status: 1, publishedAt: -1 });
blogSchema.index({ category: 1, status: 1 });
blogSchema.index({ author: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ featured: 1, status: 1 });
blogSchema.index({ createdAt: -1 });
blogSchema.index({ updatedAt: -1 });

// Text search index
blogSchema.index({
  'title.en': 'text',
  'title.ru': 'text',
  'title.tr': 'text',
  'excerpt.en': 'text',
  'excerpt.ru': 'text',
  'excerpt.tr': 'text',
  'content.en': 'text',
  'content.ru': 'text',
  'content.tr': 'text',
  tags: 'text'
});

// Instance methods
blogSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

blogSchema.methods.getLocalizedContent = function(language = 'en') {
  return {
    title: this.title[language] || this.title.en,
    excerpt: this.excerpt[language] || this.excerpt.en,
    content: this.content[language] || this.content.en,
    seo: this.seo[language] || this.seo.en
  };
};

// Static methods
blogSchema.statics.findPublished = function() {
  return this.find({ status: 'published' });
};

blogSchema.statics.findByCategory = function(category, language = 'en') {
  return this.find({ 
    category, 
    status: 'published' 
  }).select(`title.${language} excerpt.${language} content.${language} slug featuredImage category tags publishedAt readTime views likes isFeatured language`);
};

blogSchema.statics.findFeatured = function(language = 'en') {
  return this.find({ 
    isFeatured: true, 
    status: 'published' 
  }).select(`title.${language} excerpt.${language} content.${language} slug featuredImage category tags publishedAt readTime views likes isFeatured language`);
};

blogSchema.statics.search = function(query, language = 'en') {
  return this.find({
    $text: { $search: query },
    status: 'published'
  }).select(`title.${language} excerpt.${language} content.${language} slug featuredImage category tags publishedAt readTime views likes isFeatured language`);
};

// Pre-save middleware
blogSchema.pre('save', function(next) {
  // Set publishedAt when status changes to published
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  // Update lastUpdated
  this.lastUpdated = new Date();
  
  // Calculate read time based on content length
  if (this.isModified('content')) {
    const contentLength = this.content.en ? this.content.en.length : 0;
    this.readTime = Math.ceil(contentLength / 200); // Assuming 200 characters per minute
    if (this.readTime < 1) this.readTime = 1;
  }
  
  next();
});

// Pre-save middleware to generate slug if not provided
blogSchema.pre('save', function(next) {
  if (!this.slug && this.title.en) {
    this.slug = this.title.en
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  next();
});

module.exports = mongoose.model('Blog', blogSchema);
