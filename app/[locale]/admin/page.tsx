'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import { 
  FileText, 
  BookOpen, 
  Settings, 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search, 
  Filter,
  Calendar,
  User,
  Tag,
  MoreVertical,
  CheckCircle,
  Clock,
  AlertCircle,
  Save,
  X,
  Image,
  Globe,
  DollarSign,
  Star
} from 'lucide-react'

interface BlogPost {
  _id: string
  title: { en: string; ru?: string; tr?: string }
  content: { en: string; ru?: string; tr?: string }
  category: string
  tags: string[]
  coverImage?: string
  status: 'draft' | 'published' | 'archived'
  author: { firstName: string; lastName: string }
  createdAt: string
  isFeatured: boolean
}

interface KnowledgeBaseEntry {
  _id: string
  title: { en: string; ru?: string; tr?: string }
  content: { en: string; ru?: string; tr?: string }
  category: string
  type: string
  status: 'draft' | 'published' | 'archived'
  author: { firstName: string; lastName: string }
  createdAt: string
  requiresAuth: boolean
  accessLevel: string
}

interface Service {
  _id: string
  title: { en: string; ru?: string; tr?: string }
  description: { en: string; ru?: string; tr?: string }
  content: { en: string; ru?: string; tr?: string }
  category: string
  slug: string
  status: 'draft' | 'published' | 'archived'
  featured: boolean
  sortOrder: number
  coverImage?: string
  pricing?: {
    startingPrice: number
    currency: string
    pricingModel: string
  }
  author: { firstName: string; lastName: string }
  createdAt: string
}

interface DashboardStats {
  users: {
    total: number
    active: number
    newThisMonth: number
  }
  content: {
    blogPosts: { total: number; published: number }
    knowledgeBase: { total: number; published: number }
    services: { total: number; published: number }
  }
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formType, setFormType] = useState<'blog' | 'knowledge' | 'service'>('blog')
  const [editingItem, setEditingItem] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeBaseEntry[]>([])
  const [services, setServices] = useState<Service[]>([])

  const t = useTranslations()
  const locale = useLocale()
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('authToken')
      if (!token) return

      const [statsRes, blogRes, knowledgeRes, servicesRes] = await Promise.all([
        fetch(`${API_BASE_URL}/admin/dashboard`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/admin/blog-posts`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/admin/knowledge-base`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL}/admin/services`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ])

      if (statsRes.ok) {
        const statsData = await statsRes.json()
        setStats(statsData.data.statistics)
      }

      if (blogRes.ok) {
        const blogData = await blogRes.json()
        setBlogPosts(blogData.data.blogPosts)
      }

      if (knowledgeRes.ok) {
        const knowledgeData = await knowledgeRes.json()
        setKnowledgeBase(knowledgeData.data.knowledgeBase)
      }

      if (servicesRes.ok) {
        const servicesData = await servicesRes.json()
        setServices(servicesData.data.services)
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = (type: 'blog' | 'knowledge' | 'service') => {
    setFormType(type)
    setEditingItem(null)
    setShowForm(true)
  }

  const handleEdit = (item: any, type: 'blog' | 'knowledge' | 'service') => {
    setFormType(type)
    setEditingItem(item)
    setShowForm(true)
  }

  const handleDelete = async (id: string, type: 'blog' | 'knowledge' | 'service') => {
    if (!confirm('Are you sure you want to delete this item?')) return

    try {
      const token = localStorage.getItem('authToken')
      if (!token) return

      let endpoint = ''
      switch (type) {
        case 'blog':
          endpoint = `/admin/blog-posts/${id}`
          break
        case 'knowledge':
          endpoint = `/admin/knowledge-base/${id}`
          break
        case 'service':
          endpoint = `/admin/services/${id}`
          break
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (response.ok) {
        fetchDashboardData()
      }
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'draft':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'archived':
      case 'inactive':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
      case 'active':
        return <CheckCircle className="w-4 h-4" />
      case 'draft':
      case 'pending':
        return <Clock className="w-4 h-4" />
      case 'archived':
      case 'inactive':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  if (loading) {
    return (
      <ProtectedRoute requiredRole="admin">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute requiredRole="admin">
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Admin Header */}
        <section className="pt-32 pb-8 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {t('admin.title')}
                </h1>
                <p className="text-gray-300">
                  {t('admin.subtitle')}
                </p>
              </div>
              <div className="mt-4 lg:mt-0 flex space-x-3">
                <button 
                  onClick={() => handleCreate('blog')}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Plus className="w-4 h-4 mr-2 inline" />
                  {t('admin.actions.newBlogPost')}
                </button>
                <button 
                  onClick={() => handleCreate('knowledge')}
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Plus className="w-4 h-4 mr-2 inline" />
                  {t('admin.actions.newKnowledgeEntry')}
                </button>
                <button 
                  onClick={() => handleCreate('service')}
                  className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Plus className="w-4 h-4 mr-2 inline" />
                  {t('admin.actions.newService')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Admin Navigation */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: t('admin.tabs.overview'), icon: Eye },
                { id: 'blog', label: t('admin.tabs.blogPosts'), icon: FileText },
                { id: 'knowledge', label: t('admin.tabs.knowledgeBase'), icon: BookOpen },
                { id: 'services', label: t('admin.tabs.services'), icon: Settings },
                { id: 'users', label: t('admin.tabs.users'), icon: Users }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Admin Content */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{t('admin.stats.totalUsers')}</p>
                        <p className="text-2xl font-bold text-gray-900">{stats?.users.total || 0}</p>
                        <p className="text-sm text-green-600">+{stats?.users.newThisMonth || 0} {t('admin.stats.thisMonth')}</p>
                      </div>
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <Users className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{t('admin.stats.blogPosts')}</p>
                        <p className="text-2xl font-bold text-gray-900">{stats?.content.blogPosts.total || 0}</p>
                        <p className="text-sm text-blue-600">{stats?.content.blogPosts.published || 0} {t('admin.stats.published')}</p>
                      </div>
                      <div className="p-3 bg-secondary-100 rounded-lg">
                        <FileText className="w-6 h-6 text-secondary-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{t('admin.stats.knowledgeBase')}</p>
                        <p className="text-2xl font-bold text-gray-900">{stats?.content.knowledgeBase.total || 0}</p>
                        <p className="text-sm text-green-600">{stats?.content.knowledgeBase.published || 0} {t('admin.stats.published')}</p>
                      </div>
                      <div className="p-3 bg-accent-100 rounded-lg">
                        <BookOpen className="w-6 h-6 text-accent-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{t('admin.stats.services')}</p>
                        <p className="text-2xl font-bold text-gray-900">{stats?.content.services.total || 0}</p>
                        <p className="text-sm text-purple-600">{stats?.content.services.published || 0} {t('admin.stats.published')}</p>
                      </div>
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Settings className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Blog Posts */}
                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('admin.recent.blogPosts')}</h3>
                    <div className="space-y-3">
                      {blogPosts.slice(0, 5).map((post) => (
                        <div key={post._id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0">
                            {post.coverImage ? (
                              <img src={post.coverImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                            ) : (
                              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                <Image className="w-5 h-5 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {post.title[locale] || post.title.en}
                            </p>
                            <p className="text-xs text-gray-500">
                              {post.author.firstName} {post.author.lastName} • {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                            {post.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Knowledge Base */}
                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('admin.recent.knowledgeBase')}</h3>
                    <div className="space-y-3">
                      {knowledgeBase.slice(0, 5).map((entry) => (
                        <div key={entry._id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {entry.title[locale] || entry.title.en}
                            </p>
                            <p className="text-xs text-gray-500">
                              {entry.author.firstName} {entry.author.lastName} • {entry.category}
                            </p>
                          </div>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(entry.status)}`}>
                            {entry.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Posts Tab */}
            {activeTab === 'blog' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">{t('admin.tabs.blogPosts')}</h2>
                  <button
                    onClick={() => handleCreate('blog')}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {t('admin.actions.newBlogPost')}
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.title')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.author')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.category')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.status')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.created')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.actions')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {blogPosts.map((post) => (
                          <tr key={post._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  {post.coverImage ? (
                                    <img className="h-10 w-10 rounded-lg object-cover" src={post.coverImage} alt="" />
                                  ) : (
                                    <div className="h-10 w-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                      <Image className="h-5 w-5 text-gray-400" />
                                    </div>
                                  )}
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {post.title[locale] || post.title.en}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {post.tags.slice(0, 2).join(', ')}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {post.author.firstName} {post.author.lastName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {post.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                                {getStatusIcon(post.status)}
                                <span className="ml-1">{post.status}</span>
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(post.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleEdit(post, 'blog')}
                                  className="text-primary-600 hover:text-primary-900"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDelete(post._id, 'blog')}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Knowledge Base Tab */}
            {activeTab === 'knowledge' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">{t('admin.tabs.knowledgeBase')}</h2>
                  <button
                    onClick={() => handleCreate('knowledge')}
                    className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {t('admin.actions.newKnowledgeEntry')}
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.title')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.category')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.type')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.author')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.status')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.actions')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {knowledgeBase.map((entry) => (
                          <tr key={entry._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {entry.title[locale] || entry.title.en}
                              </div>
                              <div className="text-sm text-gray-500">
                                {entry.requiresAuth ? '🔒 Requires Auth' : '🌐 Public'}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {entry.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {entry.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {entry.author.firstName} {entry.author.lastName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(entry.status)}`}>
                                {getStatusIcon(entry.status)}
                                <span className="ml-1">{entry.status}</span>
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleEdit(entry, 'knowledge')}
                                  className="text-primary-600 hover:text-primary-900"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDelete(entry._id, 'knowledge')}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">{t('admin.tabs.services')}</h2>
                  <button
                    onClick={() => handleCreate('service')}
                    className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {t('admin.actions.newService')}
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.title')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.category')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.slug')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.status')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.featured')}
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t('admin.table.actions')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {services.map((service) => (
                          <tr key={service._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  {service.coverImage ? (
                                    <img className="h-10 w-10 rounded-lg object-cover" src={service.coverImage} alt="" />
                                  ) : (
                                    <div className="h-10 w-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                      <Settings className="h-5 w-5 text-gray-400" />
                                    </div>
                                  )}
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {service.title[locale] || service.title.en}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {service.description[locale] || service.description.en}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {service.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                              {service.slug}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                                {getStatusIcon(service.status)}
                                <span className="ml-1">{service.status}</span>
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {service.featured ? (
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                              ) : (
                                <span className="text-gray-400">—</span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleEdit(service, 'service')}
                                  className="text-primary-600 hover:text-primary-900"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDelete(service._id, 'service')}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">{t('admin.tabs.users')}</h2>
                </div>

                <div className="bg-white rounded-xl shadow-soft p-6">
                  <p className="text-gray-500">{t('admin.users.comingSoon')}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CRUD Forms Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {editingItem ? t('admin.forms.edit') : t('admin.forms.create')} {formType}
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    {t('admin.forms.comingSoon')}
                  </p>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      {t('admin.forms.close')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </main>
    </ProtectedRoute>
  )
}
