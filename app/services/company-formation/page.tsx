import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceContent from '@/components/services/ServiceContent';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceFAQ from '@/components/services/ServiceFAQ';

export const metadata: Metadata = {
  title: 'Company Formation Services Dubai - Business Setup Consulting',
  description: 'Professional company formation services in Dubai. Expert guidance for LLC, Free Zone, and Mainland company registration. Fast, reliable, and compliant business setup.',
  keywords: 'company formation Dubai, business registration UAE, LLC setup Dubai, free zone company, mainland company registration',
  openGraph: {
    title: 'Company Formation Services Dubai - Business Setup Consulting',
    description: 'Professional company formation services in Dubai. Expert guidance for LLC, Free Zone, and Mainland company registration.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Formation Services Dubai - Business Setup Consulting',
    description: 'Professional company formation services in Dubai. Expert guidance for LLC, Free Zone, and Mainland company registration.',
  },
};

export default function CompanyFormationPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero 
        title="Company Formation Services"
        subtitle="Professional business registration in Dubai"
        description="Expert guidance for LLC, Free Zone, and Mainland company setup. Fast, reliable, and fully compliant business registration services."
      />
      <ServiceContent />
      <ServiceProcess />
      <ServicePricing />
      <ServiceFAQ />
    </main>
  );
}
