'use client'

import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function TestI18nPage() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            i18n Test Page - {locale.toUpperCase()}
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Navigation Translations</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Home:</strong> {t('nav.home')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>About:</strong> {t('nav.about')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Services:</strong> {t('nav.services')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Contact:</strong> {t('nav.contact')}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Hero Section</h2>
              <div className="space-y-2">
                <div><strong>Title:</strong> {t('hero.title')}</div>
                <div><strong>Subtitle:</strong> {t('hero.subtitle')}</div>
                <div><strong>CTA:</strong> {t('hero.cta')}</div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Business Setup:</strong> {t('services.businessSetup.title')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Legal Services:</strong> {t('services.legalServices.title')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Tax & Accounting:</strong> {t('services.taxAccounting.title')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Visa Services:</strong> {t('services.visaServices.title')}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Login Title:</strong> {t('auth.login.title')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Register Title:</strong> {t('auth.register.title')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Email:</strong> {t('auth.login.email')}
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <strong>Password:</strong> {t('auth.login.password')}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <Link 
                href={`/${locale}`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
