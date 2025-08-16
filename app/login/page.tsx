import { Metadata } from 'next';
import LoginForm from '@/components/auth/LoginForm';
import AuthLayout from '@/components/auth/AuthLayout';

export const metadata: Metadata = {
  title: 'Client Login - KPM Global Services | Dubai Business Consulting',
  description: 'Access your client dashboard for business setup resources, guides, and support from KPM Global Services. Login to your account.',
  keywords: 'login, sign in, KPM Global Services account, business setup login, client portal access',
  openGraph: {
    title: 'Login - Dubai Business Setup Consulting',
    description: 'Access your client dashboard to view exclusive resources, guides, and business setup information.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login - Dubai Business Setup Consulting',
    description: 'Access your client dashboard to view exclusive resources, guides, and business setup information.',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your KPM Global Services account"
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Sign up here"
    >
      <LoginForm />
    </AuthLayout>
  );
}
