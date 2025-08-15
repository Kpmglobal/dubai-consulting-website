import { Metadata } from 'next';
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminLayout from '@/components/admin/AdminLayout';

export const metadata: Metadata = {
  title: 'Admin Dashboard - KPM Global Services | Content Management',
  description: 'Admin dashboard for managing KPM Global Services website content. Content management system for KPM Global Services website.',
  keywords: 'admin dashboard, content management, KPM Global Services admin, website management',
  openGraph: {
    title: 'Admin Dashboard - Dubai Business Setup Consulting',
    description: 'Admin panel for managing blog posts, knowledge base articles, services, and website content.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Dashboard - Dubai Business Setup Consulting',
    description: 'Admin panel for managing blog posts, knowledge base articles, services, and website content.',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
}
