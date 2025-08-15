import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Our Services - Dubai Business Setup Consulting',
  description: 'Comprehensive business setup services in Dubai: Company Formation, Bank Account Opening, Accounting, Tax Advisory, PRO Services, and more. Expert guidance for your UAE business success.',
  keywords: 'Dubai business setup services, company formation, bank account opening, accounting services, tax advisory, PRO services, UAE business consulting',
  openGraph: {
    title: 'Our Services - Dubai Business Setup Consulting',
    description: 'Comprehensive business setup services in Dubai: Company Formation, Bank Account Opening, Accounting, Tax Advisory, PRO Services, and more.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Dubai Business Setup Consulting',
    description: 'Comprehensive business setup services in Dubai: Company Formation, Bank Account Opening, Accounting, Tax Advisory, PRO Services, and more.',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </main>
  );
}
