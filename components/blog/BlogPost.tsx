'use client';

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  return (
    <article className="bg-white rounded-2xl p-8 shadow-soft">
      <header className="mb-8">
        <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
          Business Setup
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Complete Guide to Company Formation in Dubai
        </h1>
        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>By Admin</span>
          <span>January 15, 2024</span>
          <span>8 min read</span>
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed mb-6">
          Setting up a business in Dubai can be a complex process, but with the right guidance, 
          it becomes much more manageable. This comprehensive guide will walk you through everything 
          you need to know about company formation in Dubai.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Business Structures</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Dubai offers several business structures, each with its own advantages and requirements. 
          The most common options include:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="text-gray-600">Mainland Company - Full UAE market access</li>
          <li className="text-gray-600">Free Zone Company - Tax benefits and 100% ownership</li>
          <li className="text-gray-600">Offshore Company - International business operations</li>
        </ul>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          Each structure has specific requirements and benefits, so it's important to choose 
          the one that best fits your business goals and circumstances.
        </p>
      </div>
    </article>
  );
}
