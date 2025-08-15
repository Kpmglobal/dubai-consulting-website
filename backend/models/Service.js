const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
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
  description: {
    en: {
      type: String,
      required: [true, 'English description is required'],
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters']
    },
    ru: {
      type: String,
      trim: true,
      maxlength: [500, 'Russian description cannot exceed 500 characters']
    },
    tr: {
      type: String,
      trim: true,
      maxlength: [500, 'Turkish description cannot exceed 500 characters']
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
    trim: true,
    lowercase: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'business-setup',
      'legal-services',
      'tax-accounting',
      'visa-services',
      'banking',
      'consulting'
    ]
  },
  icon: {
    type: String,
    trim: true
  },
  coverImage: {
    type: String,
    trim: true
  },
  gallery: [{
    type: String,
    trim: true
  }],
  features: [{
    en: {
      title: String,
      description: String
    },
    ru: {
      title: String,
      description: String
    },
    tr: {
      title: String,
      description: String
    }
  }],
  pricing: {
    startingPrice: {
      type: Number,
      min: 0
    },
    currency: {
      type: String,
      default: 'AED'
    },
    pricingModel: {
      type: String,
      enum: ['fixed', 'hourly', 'monthly', 'custom'],
      default: 'fixed'
    }
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  sortOrder: {
    type: Number,
    default: 0
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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Author is required']
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
serviceSchema.virtual('localizedTitle').get(function() {
  return this.title[this.language] || this.title.en;
});

serviceSchema.virtual('localizedDescription').get(function() {
  return this.description[this.language] || this.description.en;
});

serviceSchema.virtual('localizedContent').get(function() {
  return this.content[this.language] || this.content.en;
});

// Indexes for performance
serviceSchema.index({ slug: 1 });
serviceSchema.index({ category: 1, status: 1 });
serviceSchema.index({ featured: 1, status: 1 });
serviceSchema.index({ author: 1 });
serviceSchema.index({ sortOrder: 1 });
serviceSchema.index({ createdAt: -1 });
serviceSchema.index({ updatedAt: -1 });

// Text search index
serviceSchema.index({
  'title.en': 'text',
  'title.ru': 'text',
  'title.tr': 'text',
  'description.en': 'text',
  'description.ru': 'text',
  'description.tr': 'text',
  'content.en': 'text',
  'content.ru': 'text',
  'content.tr': 'text'
});

// Instance methods
serviceSchema.methods.getLocalizedContent = function(language = 'en') {
  return {
    title: this.title[language] || this.title.en,
    description: this.description[language] || this.description.en,
    content: this.content[language] || this.content.en,
    features: this.features.map(feature => ({
      title: feature[language]?.title || feature.en?.title,
      description: feature[language]?.description || feature.en?.description
    })),
    seo: this.seo[language] || this.seo.en
  };
};

// Static methods
serviceSchema.statics.findPublished = function() {
  return this.find({ status: 'published' }).sort({ sortOrder: 1, createdAt: -1 });
};

serviceSchema.statics.findByCategory = function(category, language = 'en') {
  return this.find({ 
    category, 
    status: 'published' 
  }).select(`title.${language} description.${language} content.${language} category icon coverImage slug featured sortOrder createdAt`).sort({ sortOrder: 1, createdAt: -1 });
};

serviceSchema.statics.findFeatured = function(language = 'en') {
  return this.find({ 
    featured: true, 
    status: 'published' 
  }).select(`title.${language} description.${language} content.${language} category icon coverImage slug featured sortOrder createdAt`).sort({ sortOrder: 1, createdAt: -1 });
};

// Pre-save middleware
serviceSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

module.exports = mongoose.model('Service', serviceSchema);
