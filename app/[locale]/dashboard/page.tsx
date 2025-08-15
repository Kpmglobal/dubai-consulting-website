'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { 
  BookOpen, 
  Download, 
  Search, 
  Filter, 
  FileText, 
  Building2, 
  Scale, 
  Calculator,
  Plane,
  TrendingUp,
  Users,
  LogOut,
  User,
  Settings
} from 'lucide-react'
import toast from 'react-hot-toast'

interface KnowledgeBaseEntry {
  _id: string
  title: string
  summary: string
  category: string
  tags: string[]
  attachments: Array<{
    filename: string
    originalName: string
    fileSize: number
    mimeType: string
  }>
  createdAt: string
}

const DashboardPage = () => {
  const router = useRouter()
  const t = useTranslations()
  const locale = useLocale()
  
  const [user, setUser] = useState<any>(null)
  const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeBaseEntry[]>([])
  const [filteredKB, setFilteredKB] = useState<KnowledgeBaseEntry[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen },
    { id: 'business-setup', name: 'Business Setup', icon: Building2 },
    { id: 'legal-services', name: 'Legal Services', icon: Scale },
    { id: 'tax-accounting', name: 'Tax & Accounting', icon: Calculator },
    { id: 'visa-services', name: 'Visa Services', icon: Plane },
    { id: 'investment', name: 'Investment', icon: TrendingUp },
    { id: 'consulting', name: 'Consulting', icon: Users },
    { id: 'guides', name: 'Guides', icon: FileText }
  ]

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    
    if (!token || !userData) {
      router.push(`/${locale}/login`)
      return
    }

    try {
      setUser(JSON.parse(userData))
      fetchKnowledgeBase()
    } catch (error) {
      console.error('Error parsing user data:', error)
      router.push(`/${locale}/login`)
    }
  }, [router, locale])

  const fetchKnowledgeBase = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/knowledge-base', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setKnowledgeBase(data.data || [])
        setFilteredKB(data.data || [])
      } else {
        toast.error('Failed to fetch resources')
      }
    } catch (error) {
      console.error('Error fetching knowledge base:', error)
      toast.error('Failed to fetch resources')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterKnowledgeBase(term, selectedCategory)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterKnowledgeBase(searchTerm, category)
  }

  const filterKnowledgeBase = (search: string, category: string) => {
    let filtered = knowledgeBase

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(item => item.category === category)
    }

    // Filter by search term
    if (search) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      )
    }

    setFilteredKB(filtered)
  }

  const handleDownload = async (entryId: string, filename: string) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/knowledge-base/${entryId}/download/${filename}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
        
        toast.success('Download started!')
      } else {
        toast.error('Download failed')
      }
    } catch (error) {
      console.error('Download error:', error)
      toast.error('Download failed')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    toast.success('Logged out successfully')
    router.push(`/${locale}`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DC</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Client Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-primary-600" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-gray-500 capitalize">{user.role}</p>
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Welcome back, {user.name}! 👋
          </h2>
          <p className="text-lg text-primary-100 mb-6">
            Access your exclusive business resources, guides, and downloadable content.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>{knowledgeBase.length} Resources Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Unlimited Downloads</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources, guides, and documents..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Knowledge Base Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredKB.map((entry) => (
            <div key={entry._id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {entry.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {entry.summary}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {entry.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {entry.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{entry.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Attachments */}
              {entry.attachments && entry.attachments.length > 0 && (
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-gray-700">Downloads:</p>
                  {entry.attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {attachment.originalName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(attachment.fileSize / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => handleDownload(entry._id, attachment.filename)}
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-medium">Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                <span className="capitalize">{entry.category.replace('-', ' ')}</span>
                <span>{new Date(entry.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredKB.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'Resources will appear here once they are available'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardPage
