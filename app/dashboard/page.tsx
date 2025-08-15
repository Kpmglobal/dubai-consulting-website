import { Metadata } from 'next';
import ClientDashboard from '@/components/dashboard/ClientDashboard';

export const metadata: Metadata = {
  title: 'Client Dashboard - Dubai Business Setup Consulting',
  description: 'Access your exclusive Dubai Business Setup Consulting resources, guides, and business setup information.',
  keywords: 'dashboard, client portal, Dubai business setup, consulting, resources, guides',
  openGraph: {
    title: 'Client Dashboard - Dubai Business Setup Consulting',
    description: 'Access your exclusive Dubai Business Setup Consulting resources, guides, and business setup information.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Dashboard - Dubai Business Setup Consulting',
    description: 'Access your exclusive Dubai Business Setup Consulting resources, guides, and business setup information.',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return <ClientDashboard />;
}
