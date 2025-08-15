'use client';

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
            🔍
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          <a href="#" className="block hover:text-primary-600 transition-colors duration-200">
            <h4 className="font-medium text-gray-900">Company Formation Guide</h4>
            <p className="text-sm text-gray-500">January 15, 2024</p>
          </a>
          <a href="#" className="block hover:text-primary-600 transition-colors duration-200">
            <h4 className="font-medium text-gray-900">VAT Regulations Overview</h4>
            <p className="text-sm text-gray-500">January 10, 2024</p>
          </a>
          <a href="#" className="block hover:text-primary-600 transition-colors duration-200">
            <h4 className="font-medium text-gray-900">Free Zone Comparison</h4>
            <p className="text-sm text-gray-500">January 5, 2024</p>
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['Business Setup', 'Dubai', 'Free Zones', 'VAT', 'Banking', 'Legal'].map((tag, index) => (
            <a
              key={index}
              href="#"
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-800 transition-colors duration-200"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
