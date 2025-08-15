'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Logo from '../Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  footerText,
  footerLink,
  footerLinkText
}) => {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href={`/${locale}`}>
            <Logo size="lg" />
          </Link>
        </div>

        {/* Auth Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 mt-2">{subtitle}</p>
          </div>

          {children}

          {/* Footer Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {footerText}{' '}
              <Link
                href={footerLink}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href={`/${locale}`}
            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
