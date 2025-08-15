'use client';

export default function ServicesGrid() {
  const services = [
    {
      title: 'Company Formation',
      description: 'Professional business registration services in Dubai',
      href: '/en/services/company-formation'
    },
    {
      title: 'Bank Account Opening',
      description: 'Corporate and personal banking solutions',
      href: '/en/services/bank-account-opening'
    },
    {
      title: 'Accounting & Automation',
      description: 'Comprehensive financial management services',
      href: '/en/services/accounting-automation'
    },
    {
      title: 'Corporate Tax',
      description: 'Expert tax planning and compliance',
      href: '/en/services/corporate-tax'
    },
    {
      title: 'VAT Advisory',
      description: 'VAT registration and compliance services',
      href: '/en/services/vat-advisory'
    },
    {
      title: 'PRO Services',
      description: 'Government liaison and documentation',
      href: '/en/services/pro-services'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href={service.href} className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
