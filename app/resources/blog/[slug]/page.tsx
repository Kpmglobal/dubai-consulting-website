import { Metadata } from 'next';
import BlogPost from '@/components/blog/BlogPost';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogSidebar from '@/components/blog/BlogSidebar';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // In a real app, you would fetch the blog post data here
  const post = {
    title: 'Blog Post Title',
    description: 'Blog post description',
    keywords: 'blog, Dubai business, UAE consulting',
  };

  return {
    title: `${post.title} - Dubai Business Setup Consulting`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title} - Dubai Business Setup Consulting`,
      description: post.description,
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} - Dubai Business Setup Consulting`,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogPost slug={params.slug} />
            <RelatedPosts />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
