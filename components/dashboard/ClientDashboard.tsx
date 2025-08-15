'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslations, useLocale } from 'next-intl';
import { 
  BookOpen, 
  Download, 
  User, 
  Settings, 
  LogOut, 
  Search, 
  Filter,
  Star,
  Clock,
  FileText,
  ChevronRight,
  ChevronDown,
  Eye,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

interface KnowledgeBaseArticle {
  _id: string;
  title: { en: string; ru?: string; tr?: string };
  description: { en: string; ru?: string; tr?: string };
  category: string;
  type: string;
  thumbnail?: string;
  views: number;
  downloads: number;
  rating: { average: number; count: number };
  estimatedReadTime: number;
  createdAt: string;
  fileUrl?: string;
  fileSize?: number;
  fileType?: string;
}

const ClientDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const t = useTranslations();
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState('overview');
  const [articles, setArticles] = useState<KnowledgeBaseArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchKnowledgeBase();
  }, []);

  const fetchKnowledgeBase = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      const response = await fetch(`${API_BASE_URL}/knowledge-base`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setArticles(data.data.articles);
      }
    } catch (error) {
      console.error('Error fetching knowledge base:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (articleId: string) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      const response = await fetch(`${API_BASE_URL}/knowledge-base/${articleId}/download`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Handle download - you might want to open the file in a new tab or trigger download
        window.open(data.data.downloadUrl, '_blank');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.en.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'business-setup', name: t('dashboard.categories.businessSetup'), icon: '🏢', count: articles.filter(a => a.category === 'business-setup').length },
    { id: 'banking', name: t('dashboard.categories.banking'), icon: '🏦', count: articles.filter(a => a.category === 'banking').length },
    { id: 'accounting', name: t('dashboard.categories.accounting'), icon: '📊', count: articles.filter(a => a.category === 'accounting').length },
    { id: 'tax', name: t('dashboard.categories.tax'), icon: '💰', count: articles.filter(a => a.category === 'tax').length },
    { id: 'vat', name: t('dashboard.categories.vat'), icon: '🧾', count: articles.filter(a => a.category === 'vat').length },
    { id: 'pro-services', name: t('dashboard.categories.proServices'), icon: '📋', count: articles.filter(a => a.category === 'pro-services').length },
    { id: 'legal', name: t('dashboard.categories.legal'), icon: '⚖️', count: articles.filter(a => a.category === 'legal').length },
    { id: 'costing', name: t('dashboard.categories.costing'), icon: '💵', count: articles.filter(a => a.category === 'costing').length },
    { id: 'templates', name: t('dashboard.categories.templates'), icon: '📄', count: articles.filter(a => a.category === 'templates').length },
    { id: 'guides', name: t('dashboard.categories.guides'), icon: '📚', count: articles.filter(a => a.category === 'guides').length },
    { id: 'faqs', name: t('dashboard.categories.faqs'), icon: '❓', count: articles.filter(a => a.category === 'faqs').length },
  ];

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.title')}</h1>
                <p className="text-sm text-gray-600">{t('dashboard.welcome', { name: user?.firstName })}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={logout}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {t('dashboard.logout')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('dashboard.navigation')}</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeTab === 'overview'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BookOpen className="h-4 w-4 mr-3" />
                  {t('dashboard.tabs.overview')}
                </button>
                <button
                  onClick={() => setActiveTab('knowledge-base')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeTab === 'knowledge-base'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-4 w-4 mr-3" />
                  {t('dashboard.tabs.knowledgeBase')}
                </button>
                <button
                  onClick={() => setActiveTab('downloads')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeTab === 'downloads'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Download className="h-4 w-4 mr-3" />
                  {t('dashboard.tabs.downloads')}
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeTab === 'profile'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User className="h-4 w-4 mr-3" />
                  {t('dashboard.tabs.profile')}
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('dashboard.overview.quickStats')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{articles.length}</div>
                      <div className="text-sm text-gray-600">{t('dashboard.overview.availableResources')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary">
                        {articles.filter(a => a.type === 'download').length}
                      </div>
                      <div className="text-sm text-gray-600">{t('dashboard.overview.downloadableFiles')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">
                        {articles.filter(a => a.type === 'guide').length}
                      </div>
                      <div className="text-sm text-gray-600">{t('dashboard.overview.guidesAvailable')}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('dashboard.overview.recentArticles')}</h2>
                  <div className="space-y-4">
                    {articles.slice(0, 5).map((article) => (
                      <div key={article._id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {article.title[locale] || article.title.en}
                          </h3>
                          <p className="text-sm text-gray-500 truncate">
                            {article.description[locale] || article.description.en}
                          </p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-xs text-gray-400 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.estimatedReadTime} {t('dashboard.common.minRead')}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {article.views} {t('dashboard.common.views')}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                            {getCategoryName(article.category)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Knowledge Base Tab */}
            {activeTab === 'knowledge-base' && (
              <div className="space-y-6">
                {/* Search and Filters */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder={t('dashboard.knowledgeBase.searchPlaceholder')}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="all">{t('dashboard.knowledgeBase.allCategories')}</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('dashboard.knowledgeBase.browseByCategory')}</h2>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{category.icon}</span>
                            <div>
                              <h3 className="font-medium text-gray-900">{category.name}</h3>
                              <p className="text-sm text-gray-500">{category.count} {t('dashboard.common.articles')}</p>
                            </div>
                          </div>
                          {expandedCategories.includes(category.id) ? (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                        
                        {expandedCategories.includes(category.id) && (
                          <div className="border-t border-gray-200 p-4 bg-gray-50">
                            <div className="space-y-3">
                              {articles
                                .filter(article => article.category === category.id)
                                .map((article) => (
                                  <div key={article._id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900">{article.title[locale] || article.title.en}</h4>
                                      <p className="text-sm text-gray-600">{article.description[locale] || article.description.en}</p>
                                      <div className="flex items-center space-x-4 mt-1">
                                        <span className="text-xs text-gray-400 flex items-center">
                                          <Clock className="h-3 w-3 mr-1" />
                                          {article.estimatedReadTime} {t('dashboard.common.min')}
                                        </span>
                                        <span className="text-xs text-gray-400 flex items-center">
                                          <Eye className="h-3 w-3 mr-1" />
                                          {article.views}
                                        </span>
                                        {article.rating.count > 0 && (
                                          <span className="text-xs text-gray-400 flex items-center">
                                            <Star className="h-3 w-3 mr-1" />
                                            {article.rating.average.toFixed(1)}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    {article.fileUrl && (
                                      <button
                                        onClick={() => handleDownload(article._id)}
                                        className="flex items-center px-3 py-2 text-sm font-medium text-primary hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                                      >
                                        <Download className="h-4 w-4 mr-2" />
                                        {t('dashboard.common.download')}
                                      </button>
                                    )}
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Downloads Tab */}
            {activeTab === 'downloads' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('dashboard.downloads.title')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles
                      .filter(article => article.fileUrl)
                      .map((article) => (
                        <div key={article._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <div className="h-12 w-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                <FileText className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-gray-900 mb-1">{article.title[locale] || article.title.en}</h3>
                              <p className="text-sm text-gray-600 mb-2">{article.description[locale] || article.description.en}</p>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{article.fileType?.toUpperCase()}</span>
                                <span>{article.fileSize ? formatFileSize(article.fileSize) : t('dashboard.common.unknownSize')}</span>
                              </div>
                              <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-gray-400 flex items-center">
                                  <Download className="h-3 w-3 mr-1" />
                                  {article.downloads} {t('dashboard.common.downloads')}
                                </span>
                                <span className="text-xs text-gray-400 flex items-center">
                                  <Eye className="h-3 w-3 mr-1" />
                                  {article.views} {t('dashboard.common.views')}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDownload(article._id)}
                            className="w-full mt-4 flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {t('dashboard.common.download')}
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('dashboard.profile.profileInformation')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('dashboard.profile.firstName')}</label>
                      <input
                        type="text"
                        value={user?.firstName || ''}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('dashboard.profile.lastName')}</label>
                      <input
                        type="text"
                        value={user?.lastName || ''}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('dashboard.profile.email')}</label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('dashboard.profile.company')}</label>
                      <input
                        type="text"
                        value={user?.company || t('dashboard.profile.notSpecified')}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('dashboard.profile.phone')}</label>
                      <input
                        type="text"
                        value={user?.phone || t('dashboard.profile.notSpecified')}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('dashboard.profile.country')}</label>
                      <input
                        type="text"
                        value={user?.country || t('dashboard.profile.notSpecified')}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">
                      {t('dashboard.profile.editProfile')}
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('dashboard.profile.accountInformation')}</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{t('dashboard.profile.memberSince')}</span>
                      <span className="text-sm text-gray-900">
                        {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{t('dashboard.profile.lastLogin')}</span>
                      <span className="text-sm text-gray-900">
                        {user?.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm font-medium text-gray-700">{t('dashboard.profile.accountStatus')}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {t('dashboard.profile.active')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
