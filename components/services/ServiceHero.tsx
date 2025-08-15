'use client';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            {subtitle}
          </span>
          <h1 className="text-responsive-xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
