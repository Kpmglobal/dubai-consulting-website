import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import TeamSection from '@/components/about/TeamSection';
import ValuesSection from '@/components/about/ValuesSection';

export const metadata: Metadata = {
  title: 'About Us - KPM Global Services | Dubai Business Consulting',
  description: 'Learn about KPM Global Services, our mission, team, and 15+ years of experience helping businesses succeed in the UAE market.',
  keywords: 'about us, KPM Global Services, business setup experts, team, experience, Dubai business consultants',
  openGraph: {
    title: 'About Us - Dubai Business Setup Consulting',
    description: 'Learn about our expert team and 15+ years of experience helping businesses establish and grow in Dubai.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Dubai Business Setup Consulting',
    description: 'Learn about our expert team and 15+ years of experience helping businesses establish and grow in Dubai.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <ValuesSection />
      <TeamSection />
    </main>
  );
}
