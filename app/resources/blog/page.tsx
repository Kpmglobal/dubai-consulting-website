import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogNewsletter from '@/components/blog/BlogNewsletter';

export const metadata: Metadata = {
  title: 'Blog & Resources - Dubai Business Setup Consulting',
  description: 'Stay updated with the latest insights on UAE business setup, regulations, market trends, and expert advice. Read our comprehensive guides and industry insights.',
  keywords: 'Dubai business blog, UAE business insights, business setup guides, Dubai market trends, business consulting articles',
  openGraph: {
    title: 'Blog & Resources - Dubai Business Setup Consulting',
    description: 'Stay updated with the latest insights on UAE business setup, regulations, market trends, and expert advice.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Resources - Dubai Business Setup Consulting',
    description: 'Stay updated with the latest insights on UAE business setup, regulations, market trends, and expert advice.',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <div className="lg:col-span-1">
            <BlogCategories />
          </div>
        </div>
      </div>
      <BlogNewsletter />
    </main>
  );
}
