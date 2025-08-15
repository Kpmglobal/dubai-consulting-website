import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KPM Global Services - Dubai Business Consulting & Setup',
  description: 'Professional business consulting, company formation, legal services, and business setup in Dubai, UAE. Expert guidance for entrepreneurs and businesses.',
  keywords: 'Dubai business consulting, company formation UAE, legal services Dubai, business setup Dubai, KPM Global Services',
  authors: [{ name: 'KPM Global Services' }],
  creator: 'KPM Global Services',
  publisher: 'KPM Global Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kpmglobal.ae'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ru': '/ru',
      'tr': '/tr',
    },
  },
  openGraph: {
    title: 'KPM Global Services - Dubai Business Consulting',
    description: 'Professional business consulting and company formation services in Dubai, UAE.',
    url: 'https://kpmglobal.ae',
    siteName: 'KPM Global Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KPM Global Services - Dubai Business Consulting',
    description: 'Professional business consulting and company formation services in Dubai, UAE.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10B981" />
        <meta name="msapplication-TileColor" content="#10B981" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
