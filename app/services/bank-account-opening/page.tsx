import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceContent from '@/components/services/ServiceContent';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServicePricing from '@/components/services/ServicePricing';
import ServiceFAQ from '@/components/services/ServiceFAQ';

export const metadata: Metadata = {
  title: 'Bank Account Opening Dubai - Business Banking Services',
  description: 'Professional bank account opening services in Dubai. Corporate and personal account setup with major UAE banks. Expert guidance for business banking requirements.',
  keywords: 'bank account opening Dubai, corporate banking UAE, business bank account, UAE banking services, corporate account setup',
  openGraph: {
    title: 'Bank Account Opening Dubai - Business Banking Services',
    description: 'Professional bank account opening services in Dubai. Corporate and personal account setup with major UAE banks.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bank Account Opening Dubai - Business Banking Services',
    description: 'Professional bank account opening services in Dubai. Corporate and personal account setup with major UAE banks.',
  },
};

export default function BankAccountOpeningPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero 
        title="Bank Account Opening Services"
        subtitle="Professional banking solutions in Dubai"
        description="Expert guidance for corporate and personal bank account setup with major UAE banks. Fast, reliable, and compliant banking services."
      />
      <ServiceContent />
      <ServiceProcess />
      <ServicePricing />
      <ServiceFAQ />
    </main>
  );
}
