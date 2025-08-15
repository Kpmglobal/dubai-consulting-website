'use client';

export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your business goals and requirements to understand your needs.'
    },
    {
      number: '02',
      title: 'Documentation',
      description: 'We guide you through all required documents and prepare your application.'
    },
    {
      number: '03',
      title: 'Submission',
      description: 'We submit your application and handle all government procedures.'
    },
    {
      number: '04',
      title: 'Completion',
      description: 'Your business setup is complete and ready to operate.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven 4-step process to ensure your business setup is efficient and successful.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
