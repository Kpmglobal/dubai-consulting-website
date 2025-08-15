import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import OfficeLocation from '@/components/contact/GoogleMap';

export const metadata: Metadata = {
  title: 'Contact Us - KPM Global Services | Dubai Business Consulting',
  description: 'Get in touch with KPM Global Services for professional business consulting, company formation, and legal services in Dubai, UAE. Contact us today for a free consultation.',
  keywords: 'contact KPM Global Services, business setup consultation, UAE business advice, Dubai business experts, free consultation',
  openGraph: {
    title: 'Contact Us - KPM Global Services | Dubai Business Consulting',
    description: 'Get in touch with KPM Global Services for professional business consulting, company formation, and legal services in Dubai, UAE.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - KPM Global Services | Dubai Business Consulting',
    description: 'Get in touch with KPM Global Services for professional business consulting, company formation, and legal services in Dubai, UAE.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <OfficeLocation />
    </main>
  );
}
