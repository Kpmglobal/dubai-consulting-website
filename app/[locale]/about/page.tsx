import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';

export const metadata: Metadata = {
  title: 'About Us - KPM Global Services | Dubai Business Consulting',
  description: 'Learn about KPM Global Services, our mission, team, and 15+ years of experience helping businesses succeed in the UAE market.',
  keywords: 'about us, KPM Global Services, business setup experts, team, experience, Dubai business consultants',
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
