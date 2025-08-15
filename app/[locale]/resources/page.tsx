import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FileText, BookOpen, HelpCircle, Download, Calendar, User, ArrowRight, Search, Filter, Tag } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
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
      tags: ['Free Zone', 'Business Setup', 'Dubai', 'Guide']
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
      tags: ['Corporate Tax', 'UAE', '2024', 'Tax Planning']
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
      tags: ['Golden Visa', 'UAE Residency', 'Investment', 'Visa']
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
      tags: ['Mainland', 'Free Zone', 'Comparison', 'Business Structure']
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
      tags: ['VAT', 'Registration', 'UAE', 'Compliance']
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
      tags: ['Real Estate', 'Investment', 'Dubai', 'Market Trends']
    }
  ]

  const guides = [
    {
      title: 'Business Setup Checklist',
      description: 'Complete checklist for setting up your business in Dubai, including all required documents and steps.',
      category: 'Business Setup',
      downloadCount: 1247,
      fileSize: '2.3 MB',
      icon: FileText
    },
    {
      title: 'VAT Compliance Guide',
      description: 'Comprehensive guide to VAT compliance for UAE businesses, including filing requirements and deadlines.',
      category: 'Tax & Accounting',
      downloadCount: 892,
      fileSize: '1.8 MB',
      icon: BookOpen
    },
    {
      title: 'Legal Requirements Handbook',
      description: 'Essential legal requirements and compliance guidelines for operating a business in the UAE.',
      category: 'Legal Services',
      downloadCount: 756,
      fileSize: '3.1 MB',
      icon: FileText
    },
    {
      title: 'Investment Opportunities Report',
      description: 'Latest report on investment opportunities across various sectors in the UAE market.',
      category: 'Investment',
      downloadCount: 634,
      fileSize: '4.2 MB',
      icon: BookOpen
    }
  ]

  const faqs = [
    {
      question: 'What are the main differences between mainland and free zone companies?',
      answer: 'Mainland companies can trade directly with local UAE market and have no restrictions on business activities, while free zone companies offer 100% foreign ownership, tax benefits, and streamlined processes but are limited to international trade.',
      category: 'Business Setup'
    },
    {
      question: 'How long does it take to get a business license in Dubai?',
      answer: 'The timeline varies by business type and structure. Free zone licenses typically take 2-3 weeks, while mainland licenses can take 3-4 weeks. We can expedite the process for urgent cases.',
      category: 'Business Setup'
    },
    {
      question: 'What documents do I need for company registration?',
      answer: 'Required documents include passport copies, proof of address, business plan, bank reference letter, and professional CV. Additional documents may be required based on your business activity.',
      category: 'Business Setup'
    },
    {
      question: 'Can I open a corporate bank account without visiting Dubai?',
      answer: 'Yes, we can assist with remote bank account opening for most major UAE banks. However, some banks may require a physical visit for verification purposes.',
      category: 'Banking'
    },
    {
      question: 'What are the ongoing compliance requirements for UAE companies?',
      answer: 'Ongoing requirements include annual license renewal, financial reporting, VAT filing (if applicable), and maintaining proper corporate governance records.',
      category: 'Compliance'
    },
    {
      question: 'How much does it cost to set up a business in Dubai?',
      answer: 'Costs vary significantly based on business structure and activities. Free zone setups start from AED 15,000, while mainland companies start from AED 25,000. We provide detailed cost breakdowns during consultation.',
      category: 'Pricing'
    }
  ]

  const categories = ['All', 'Business Setup', 'Tax & Accounting', 'Legal Services', 'Visa Services', 'Investment', 'Compliance']

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-xl font-bold text-gray-900 mb-6">
              Resources & Knowledge Base
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Access our comprehensive collection of guides, articles, and resources to help you 
              navigate the UAE business landscape and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources, guides, and articles..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Articles & Insights
            </h2>
            <Link href="/resources/blog" className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-t-2xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <FileText className="w-16 h-16 mx-auto mb-2 text-primary-500" />
                    <p className="text-sm">Blog Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="inline-flex items-center space-x-1 text-xs text-gray-600">
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/resources/blog/${post.id}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Downloads */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Guides & Downloads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive guides and resources to help you navigate the UAE business landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <guide.icon className="w-6 h-6 text-primary-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{guide.category}</span>
                  <span>{guide.fileSize}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{guide.downloadCount} downloads</span>
                </div>
                
                <button className="w-full btn-primary text-sm py-2">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about business setup and operations in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="mt-3">
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/resources/faqs" className="btn-outline">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-responsive-lg font-bold text-white mb-6">
            Need More Specific Information?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our expert team is ready to provide personalized 
            guidance and answer any questions about your business setup in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Get Expert Advice
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
