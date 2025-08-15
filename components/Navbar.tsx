'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown, User } from 'lucide-react'
import Logo from './Logo'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData))
        setIsLoggedIn(true)
      } catch (error) {
        console.error('Error parsing user data:', error)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    }
  }, [])

  // Language options
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ]

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname and add the new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setUser(null)
    router.push(`/${locale}`)
  }

  const navigation = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.about'), href: `/${locale}/about` },
    { name: t('nav.services'), href: `/${locale}/services` },
    { name: t('nav.resources'), href: `/${locale}/resources` },
    { name: t('nav.contact'), href: `/${locale}/contact` },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`}>
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                <Globe className="w-4 h-4" />
                <span className="font-medium">{languages.find(lang => lang.code === locale)?.flag}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 ${
                      locale === lang.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Login/Dashboard Button */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                  <User className="w-4 h-4" />
                  <span>{user?.name?.split(' ')[0] || 'Dashboard'}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href={`/${locale}/dashboard`}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-gray-700"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href={`/${locale}/login`}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
              >
                Client Login
              </Link>
            )}

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="btn-primary"
            >
              {t('hero.cta')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Language</span>
                </div>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code)
                        setIsOpen(false)
                      }}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        locale === lang.code
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Login/Dashboard */}
              {isLoggedIn ? (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link
                    href={`/${locale}/dashboard`}
                    className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href={`/${locale}/login`}
                    className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Client Login
                  </Link>
                </div>
              )}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t('hero.cta')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
