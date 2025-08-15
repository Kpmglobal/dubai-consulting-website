'use client';

export default function BlogGrid() {
  const posts = [
    {
      title: 'Complete Guide to Company Formation in Dubai',
      excerpt: 'Everything you need to know about setting up a business in Dubai, from choosing the right structure to completing registration.',
      category: 'Business Setup',
      date: '2024-01-15',
      readTime: '8 min read'
    },
    {
      title: 'Understanding UAE VAT Regulations for Businesses',
      excerpt: 'A comprehensive overview of VAT requirements, registration process, and compliance obligations for UAE businesses.',
      category: 'Tax & Compliance',
      date: '2024-01-10',
      readTime: '6 min read'
    },
    {
      title: 'Top Free Zones in Dubai for International Business',
      excerpt: 'Compare the best free zones in Dubai, their benefits, requirements, and which one suits your business needs.',
      category: 'Free Zones',
      date: '2024-01-05',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article key={index} className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
