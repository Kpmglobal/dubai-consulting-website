import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, Building2, TrendingUp, CheckCircle, Clock, DollarSign, ArrowRight, FileText, Shield, Globe, BarChart3, Target } from 'lucide-react'
import Link from 'next/link'

export default function ConsultingPage() {
  const consultingServices = [
    {
      title: 'Market Entry Strategy',
      description: 'Comprehensive market entry strategies for businesses looking to establish presence in the UAE.',
      features: [
        'Market research & analysis',
        'Entry mode selection',
        'Competitive analysis',
        'Risk assessment',
        'Implementation planning',
        'Performance monitoring'
      ],
      duration: '4-8 weeks',
      startingPrice: 'AED 25,000',
      icon: Target
    },
    {
      title: 'Business Strategy Development',
      description: 'Strategic planning and business model optimization for sustainable growth.',
      features: [
        'Strategic planning',
        'Business model design',
        'Growth strategy',
        'Competitive positioning',
        'Value proposition',
        'Implementation roadmap'
      ],
      duration: '6-10 weeks',
      startingPrice: 'AED 35,000',
      icon: TrendingUp
    },
    {
      title: 'Operational Optimization',
      description: 'Streamline operations and improve efficiency across your business processes.',
      features: [
        'Process analysis',
        'Efficiency improvement',
        'Technology integration',
        'Performance metrics',
        'Change management',
        'Continuous improvement'
      ],
      duration: '8-12 weeks',
      startingPrice: 'AED 30,000',
      icon: BarChart3
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital technologies and strategies.',
      features: [
        'Digital strategy',
        'Technology assessment',
        'Implementation planning',
        'Change management',
        'Training & support',
        'Performance tracking'
      ],
      duration: '12-16 weeks',
      startingPrice: 'AED 50,000',
      icon: Globe
    },
    {
      title: 'Financial Advisory',
      description: 'Strategic financial planning and optimization for business growth and sustainability.',
      features: [
        'Financial planning',
        'Budget optimization',
        'Cash flow management',
        'Investment planning',
        'Risk management',
        'Performance analysis'
      ],
      duration: '4-6 weeks',
      startingPrice: 'AED 20,000',
      icon: DollarSign
    },
    {
      title: 'Change Management',
      description: 'Navigate organizational change with expert guidance and support.',
      features: [
        'Change strategy',
        'Stakeholder engagement',
        'Communication planning',
        'Training programs',
        'Resistance management',
        'Success measurement'
      ],
      duration: '6-12 weeks',
      startingPrice: 'AED 25,000',
      icon: Users
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Business Assessment',
      description: 'Comprehensive analysis of your current business situation and objectives',
      duration: '1-2 weeks',
      icon: FileText
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Develop customized business strategy and implementation plan',
      duration: '2-4 weeks',
      icon: Target
    },
    {
      step: 3,
      title: 'Implementation Planning',
      description: 'Detailed planning for strategy execution and change management',
      duration: '1-2 weeks',
      icon: TrendingUp
    },
    {
      step: 4,
      title: 'Execution & Support',
      description: 'Implement strategy with ongoing support and guidance',
      duration: 'Varies',
      icon: CheckCircle
    },
    {
      step: 5,
      title: 'Monitoring & Optimization',
      description: 'Track performance and optimize strategies for continuous improvement',
      duration: 'Ongoing',
      icon: BarChart3
    }
  ]

  const benefits = [
    {
      title: 'Expert Consultants',
      description: 'Experienced business consultants with deep UAE market knowledge',
      icon: Users
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored strategies based on your unique business needs and goals',
      icon: Target
    },
    {
      title: 'Proven Methodologies',
      description: 'Time-tested frameworks and methodologies for business success',
      icon: Shield
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and guidance throughout implementation',
      icon: Clock
    },
    {
      title: 'Measurable Results',
      description: 'Clear metrics and KPIs to track progress and success',
      icon: BarChart3
    },
    {
      title: 'Long-term Partnership',
      description: 'Build lasting relationships for ongoing business success',
      icon: Building2
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-primary-800 to-accent-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Business Consulting Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Strategic Business Consulting for Growth
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Transform your business with expert consulting services. Our strategic advisors help 
              you navigate challenges, optimize operations, and achieve sustainable growth in the UAE market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                Get Business Consultation
              </Link>
              <Link 
                href="/services" 
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-900"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Consulting Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide strategic consulting services to help your business thrive in the competitive UAE market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-200 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                    <div className="text-lg font-bold text-secondary-600">
                      {service.startingPrice}
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="btn-secondary w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your business consulting success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center p-8">
                  <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-secondary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Consulting Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional consulting services with a focus on your business success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-900 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert consulting team is here to help you develop strategies, optimize operations, 
            and achieve sustainable growth in the competitive UAE market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Business Consultation
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-900">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
