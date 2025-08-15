import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, User, Clock, Tag, Bookmark, ArrowLeft, Eye, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would normally fetch from API based on slug
  // For now, using mock data
  const post = {
    slug: params.slug,
    title: 'Complete Guide to Dubai Free Zone Business Setup',
    excerpt: 'Everything you need to know about setting up a business in Dubai\'s prestigious free zones, including benefits, requirements, and step-by-step process.',
    content: `
      <p>Setting up a business in Dubai's free zones has become increasingly popular among international entrepreneurs and companies looking to establish a presence in the Middle East. With their attractive tax benefits, 100% foreign ownership, and streamlined business processes, free zones offer an ideal environment for business growth and expansion.</p>
      
      <h2>What are Dubai Free Zones?</h2>
      <p>Dubai free zones are designated areas that offer special economic regulations and incentives to businesses. These zones are designed to attract foreign investment and promote economic diversification. Currently, there are over 20 free zones in Dubai, each catering to specific industries and business activities.</p>
      
      <h2>Key Benefits of Free Zone Business Setup</h2>
      <ul>
        <li><strong>100% Foreign Ownership:</strong> Unlike mainland companies, free zone businesses can be 100% owned by foreign nationals without requiring a local partner or sponsor.</li>
        <li><strong>Tax Exemptions:</strong> Free zone companies enjoy zero corporate tax, zero personal income tax, and zero customs duties on imports and exports.</li>
        <li><strong>Capital Repatriation:</strong> Full repatriation of capital and profits without restrictions.</li>
        <li><strong>Simplified Procedures:</strong> Streamlined business registration and licensing processes.</li>
        <li><strong>Modern Infrastructure:</strong> Access to world-class office facilities, technology, and business support services.</li>
      </ul>
      
      <h2>Popular Free Zones in Dubai</h2>
      <h3>1. Dubai Multi Commodities Centre (DMCC)</h3>
      <p>DMCC is one of the largest and most prestigious free zones, specializing in commodities trading, jewelry, and precious metals. It offers excellent facilities and support services for international traders.</p>
      
      <h3>2. Dubai Internet City (DIC)</h3>
      <p>DIC is the region's largest technology hub, home to major tech companies like Microsoft, Oracle, and IBM. It's ideal for technology, media, and telecommunications companies.</p>
      
      <h3>3. Dubai Media City (DMC)</h3>
      <p>DMC caters to media and creative industries, offering specialized facilities for publishing, broadcasting, and digital media companies.</p>
      
      <h3>4. Dubai International Financial Centre (DIFC)</h3>
      <p>DIFC is the leading financial hub in the Middle East, Africa, and South Asia, providing a robust regulatory framework for financial services companies.</p>
      
      <h2>Business Setup Process</h2>
      <h3>Step 1: Choose Your Free Zone</h3>
      <p>Select a free zone based on your business activity, industry requirements, and location preferences. Consider factors such as proximity to clients, suppliers, and transportation hubs.</p>
      
      <h3>Step 2: Determine Business Activity</h3>
      <p>Define your business activities clearly, as this will determine the type of license you need. Free zones offer various license types including commercial, industrial, and service licenses.</p>
      
      <h3>Step 3: Prepare Required Documents</h3>
      <p>Gather all necessary documents including passport copies, business plan, financial statements, and any professional qualifications required for your industry.</p>
      
      <h3>Step 4: Submit Application</h3>
      <p>Submit your application to the chosen free zone authority. The application process typically takes 1-2 weeks for approval.</p>
      
      <h3>Step 5: Obtain License and Setup Office</h3>
      <p>Once approved, you'll receive your business license and can proceed with office setup, employee visas, and operational requirements.</p>
      
      <h2>Required Documents</h2>
      <ul>
        <li>Passport copy (valid for 6+ months)</li>
        <li>Residence visa copy (if applicable)</li>
        <li>Business plan and description</li>
        <li>Financial statements (if applicable)</li>
        <li>Professional qualifications (for specific activities)</li>
        <li>Bank reference letter</li>
        <li>Proof of address in home country</li>
      </ul>
      
      <h2>Costs and Fees</h2>
      <p>Free zone business setup costs vary depending on the zone and license type. Typical costs include:</p>
      <ul>
        <li>License fees: AED 5,000 - 25,000 annually</li>
        <li>Office space: AED 15,000 - 50,000 annually</li>
        <li>Visa costs: AED 3,000 - 8,000 per person</li>
        <li>Registration fees: AED 1,000 - 5,000 (one-time)</li>
      </ul>
      
      <h2>Important Considerations</h2>
      <h3>Business Activities</h3>
      <p>Ensure your business activities are permitted in the chosen free zone. Some zones have restrictions on certain activities or require additional approvals.</p>
      
      <h3>Office Requirements</h3>
      <p>Most free zones require physical office space, though some offer virtual office solutions for smaller businesses. Consider your space requirements and budget accordingly.</p>
      
      <h3>Visa Requirements</h3>
      <p>Free zone companies can sponsor employee visas, but there are minimum requirements for office space and business activities. Plan your visa strategy in advance.</p>
      
      <h3>Compliance and Renewals</h3>
      <p>Free zone companies must comply with annual renewal requirements and maintain proper records. Stay updated on compliance deadlines and requirements.</p>
      
      <h2>Conclusion</h2>
      <p>Dubai free zones offer an excellent opportunity for international businesses to establish a presence in the Middle East with minimal bureaucracy and maximum benefits. By understanding the requirements and following the proper process, you can successfully set up your business and start operating in one of the world's most dynamic business environments.</p>
      
      <p>If you're considering free zone business setup in Dubai, our expert team can guide you through every step of the process, ensuring a smooth and successful establishment of your business.</p>
    `,
    author: 'Ahmed Al Rashid',
    date: '2024-01-15',
    category: 'Business Setup',
    readTime: '8 min read',
    image: '/blog/freezone-guide.jpg',
    tags: ['Free Zone', 'Business Setup', 'Dubai', 'Guide'],
    views: 1247,
    likes: 89,
    comments: 23
  }

  const relatedPosts = [
    {
      title: 'Mainland vs Free Zone: Choosing the Right Business Structure',
      excerpt: 'Comparative analysis of mainland and free zone business structures to help you make the best decision.',
      slug: 'mainland-vs-freezone',
      image: '/blog/mainland-vs-freezone.jpg',
      category: 'Business Setup',
      date: '2023-12-28'
    },
    {
      title: 'UAE Corporate Tax: What You Need to Know in 2024',
      excerpt: 'Comprehensive overview of the new corporate tax regulations in the UAE and how they affect your business.',
      slug: 'corporate-tax-2024',
      image: '/blog/corporate-tax-2024.jpg',
      category: 'Tax & Accounting',
      date: '2024-01-10'
    },
    {
      title: 'Golden Visa Requirements: Your Path to UAE Residency',
      excerpt: 'Detailed breakdown of Golden Visa eligibility criteria, application process, and benefits.',
      slug: 'golden-visa-guide',
      image: '/blog/golden-visa-guide.jpg',
      category: 'Visa Services',
      date: '2024-01-05'
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-primary-600">Resources</Link>
            <span>/</span>
            <Link href="/resources/blog" className="hover:text-primary-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                href="/resources/blog" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {post.views} views
                </span>
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">By {post.author}</p>
                  <p className="text-sm text-gray-600">Business Setup Expert</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Featured Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="mb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article:</h3>
              <SocialShare
                url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://dubaiconsulting.ae'}/resources/blog/${post.slug}`}
                title={post.title}
                description={post.excerpt}
                hashtags={post.tags}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article key={index} className="card hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(relatedPost.date)}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      href={`/resources/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read More
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/resources/blog" 
                className="btn-primary"
              >
                View All Blog Posts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Help with Business Setup?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you navigate the complexities of setting up your business in Dubai. 
            Get personalized guidance and support throughout your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
