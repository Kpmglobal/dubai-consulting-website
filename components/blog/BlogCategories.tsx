'use client';

export default function BlogCategories() {
  const categories = [
    'Business Setup',
    'Tax & Compliance',
    'Free Zones',
    'Banking',
    'Legal Services',
    'Market Insights'
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className="block text-gray-600 hover:text-primary-600 hover:bg-primary-50 px-3 py-2 rounded-lg transition-colors duration-200"
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
}
