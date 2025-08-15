import { Metadata } from 'next';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Register - Dubai Business Setup Consulting',
  description: 'Create your Dubai Business Setup Consulting account to access exclusive resources, guides, and business setup information.',
  keywords: 'register, sign up, create account, Dubai business setup, consulting, client portal',
  openGraph: {
    title: 'Register - Dubai Business Setup Consulting',
    description: 'Create your Dubai Business Setup Consulting account to access exclusive resources, guides, and business setup information.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register - Dubai Business Setup Consulting',
    description: 'Create your Dubai Business Setup Consulting account to access exclusive resources, guides, and business setup information.',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegisterPage() {
  return <RegisterForm />;
}
