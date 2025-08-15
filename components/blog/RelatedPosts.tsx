'use client';

export default function RelatedPosts() {
  const relatedPosts = [
    {
      title: 'Understanding UAE VAT Regulations',
      excerpt: 'Everything you need to know about VAT compliance for your UAE business.',
      href: '#'
    },
    {
      title: 'Top Free Zones in Dubai',
      excerpt: 'Compare the best free zones and find the perfect location for your business.',
      href: '#'
    },
    {
      title: 'Banking Solutions for New Businesses',
      excerpt: 'Navigate the banking landscape and set up your business accounts.',
      href: '#'
    }
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <a href={post.href} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Read More →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
