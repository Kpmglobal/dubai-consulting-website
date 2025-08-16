import { Metadata } from 'next';
import RegisterForm from '@/components/auth/RegisterForm';
import AuthLayout from '@/components/auth/AuthLayout';

export const metadata: Metadata = {
  title: 'Client Registration - KPM Global Services | Dubai Business Consulting',
  description: 'Register for a client account with KPM Global Services to access exclusive business setup resources, guides, and support.',
  keywords: 'register, sign up, KPM Global Services account, business setup registration, client portal access',
  openGraph: {
    title: 'Register - Dubai Business Setup Consulting',
    description: 'Create your account to access exclusive Dubai business setup resources, guides, and personalized consulting services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register - Dubai Business Setup Consulting',
    description: 'Create your account to access exclusive Dubai business setup resources, guides, and personalized consulting services.',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join KPM Global Services for exclusive business resources"
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Sign in here"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
