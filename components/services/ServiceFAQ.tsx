'use client';

export default function ServiceFAQ() {
  const faqs = [
    {
      question: 'How long does the process take?',
      answer: 'Typically, the complete process takes 2-4 weeks, depending on the complexity and type of business structure you choose.'
    },
    {
      question: 'What documents do I need?',
      answer: 'You\'ll need passport copies, proof of address, business plan, and other documents depending on your business type. We\'ll guide you through all requirements.'
    },
    {
      question: 'Can I operate outside the UAE?',
      answer: 'This depends on your business structure. Free zone companies have specific restrictions, while mainland companies can operate throughout the UAE.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer various support packages to help with compliance, renewals, and ongoing business needs.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our services and business setup in Dubai.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
