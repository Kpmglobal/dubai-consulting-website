import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FileText, BookOpen, HelpCircle, Download, Calendar, User, ArrowRight, Search, Filter, Tag, Clock, Eye, Heart } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to Dubai Free Zone Business Setup',
      excerpt: 'Everything you need to know about setting up a business in Dubai\'s prestigious free zones, including benefits, requirements, and step-by-step process.',
      author: 'Ahmed Al Rashid',
      date: '2024-01-15',
      category: 'Business Setup',
      readTime: '8 min read',
      image: '/blog/freezone-guide.jpg',
      tags: ['Free Zone', 'Business Setup', 'Dubai', 'Guide'],
      views: 1247,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: 'UAE Corporate Tax: What You Need to Know in 2024',
      excerpt: 'Comprehensive overview of the new corporate tax regulations in the UAE and how they affect your business operations and planning.',
      author: 'Elena Petrova',
      date: '2024-01-10',
      category: 'Tax & Accounting',
      readTime: '12 min read',
      image: '/blog/corporate-tax-2024.jpg',
      tags: ['Corporate Tax', 'UAE', '2024', 'Tax Planning'],
      views: 892,
      likes: 67,
      featured: true
    },
    {
      id: 3,
      title: 'Golden Visa Requirements: Your Path to UAE Residency',
      excerpt: 'Detailed breakdown of Golden Visa eligibility criteria, application process, and benefits for investors and professionals.',
      author: 'Mehmet Yilmaz',
      date: '2024-01-05',
      category: 'Visa Services',
      readTime: '10 min read',
      image: '/blog/golden-visa-guide.jpg',
      tags: ['Golden Visa', 'UAE Residency', 'Investment', 'Visa'],
      views: 1156,
      likes: 78,
      featured: true
    },
    {
      id: 4,
      title: 'Mainland vs Free Zone: Choosing the Right Business Structure',
      excerpt: 'Comparative analysis of mainland and free zone business structures to help you make the best decision for your business goals.',
      author: 'Sarah Johnson',
      date: '2023-12-28',
      category: 'Business Setup',
      readTime: '15 min read',
      image: '/blog/mainland-vs-freezone.jpg',
      tags: ['Mainland', 'Free Zone', 'Comparison', 'Business Structure'],
      views: 987,
      likes: 54,
      featured: false
    },
    {
      id: 5,
      title: 'VAT Registration in UAE: Step-by-Step Process',
      excerpt: 'Complete guide to VAT registration, including eligibility, required documents, and compliance requirements for UAE businesses.',
      author: 'Viktor Ivanov',
      date: '2023-12-20',
      category: 'Tax & Accounting',
      readTime: '9 min read',
      image: '/blog/vat-registration.jpg',
      tags: ['VAT', 'Registration', 'UAE', 'Compliance'],
      views: 756,
      likes: 43,
      featured: false
    },
    {
      id: 6,
      title: 'Investment Opportunities in Dubai Real Estate Market',
      excerpt: 'Explore the latest trends and opportunities in Dubai\'s real estate market for foreign investors and business owners.',
      author: 'Fatima Al Zahra',
      date: '2023-12-15',
      category: 'Investment',
      readTime: '11 min read',
      image: '/blog/dubai-real-estate.jpg',
      tags: ['Real Estate', 'Investment', 'Dubai', 'Market Trends'],
      views: 634,
      likes: 38,
      featured: false
    },
    {
      id: 7,
      title: 'Business License Types in Dubai: A Comprehensive Guide',
      excerpt: 'Understanding the different types of business licenses available in Dubai and how to choose the right one for your business.',
      author: 'Ahmed Al Rashid',
      date: '2023-12-10',
      category: 'Business Setup',
      readTime: '7 min read',
      image: '/blog/business-licenses.jpg',
      tags: ['Business License', 'Dubai', 'Regulations', 'Setup'],
      views: 543,
      likes: 32,
      featured: false
    },
    {
      id: 8,
      title: 'Employee Visa Process for UAE Companies',
      excerpt: 'Step-by-step guide to obtaining employee visas for your UAE company, including requirements and processing times.',
      author: 'Mehmet Yilmaz',
      date: '2023-12-05',
      category: 'Visa Services',
      readTime: '6 min read',
      image: '/blog/employee-visa.jpg',
      tags: ['Employee Visa', 'UAE', 'Visa Process', 'HR'],
      views: 487,
      likes: 29,
      featured: false
    }
  ]

  const categories = [
    'All Categories',
    'Business Setup',
    'Tax & Accounting',
    'Visa Services',
    'Investment',
    'Legal Services',
    'Market Insights'
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Knowledge Hub
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Dubai Business Insights
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, guides, and expert advice on doing business in Dubai. 
              From setup to growth, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                Get Expert Advice
              </Link>
              <Link 
                href="/resources" 
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Articles
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article key={post.id} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.date)}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/resources/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article key={post.id} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.date)}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/resources/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-3 py-2 bg-primary-600 text-white rounded-lg">1</button>
              <button className="px-3 py-2 text-gray-700 hover:text-primary-600">2</button>
              <button className="px-3 py-2 text-gray-700 hover:text-primary-600">3</button>
              <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest business insights, regulatory updates, 
            and expert advice delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-primary-200 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
