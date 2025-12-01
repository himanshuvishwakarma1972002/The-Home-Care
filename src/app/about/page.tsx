import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - The Home Care',
  description: 'Learn more about The Home Care interior design services and our mission to transform your spaces',
};

export default function About() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Team Members' },
  ];

  const values = [
    {
      icon: '✨',
      title: 'Innovation',
      description: 'We stay ahead of design trends and incorporate cutting-edge solutions in every project.',
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'We use premium materials and maintain the highest standards in craftsmanship.',
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships with our clients through transparency and reliability.',
    },
    {
      icon: '💡',
      title: 'Creativity',
      description: 'Every design is unique, tailored to reflect your personal style and preferences.',
    },
  ];

  const services = [
    { 
      title: 'Kitchen Design', 
      desc: 'Modern, functional kitchen spaces that blend aesthetics with practicality',
      icon: '🍳',
    },
    { 
      title: 'Bedroom Solutions', 
      desc: 'Comfortable and stylish bedrooms designed for rest and relaxation',
      icon: '🛏️',
    },
    { 
      title: 'Living Areas', 
      desc: 'Inviting spaces for relaxation, entertainment, and family gatherings',
      icon: '🛋️',
    },
    { 
      title: 'Wardrobes', 
      desc: 'Custom storage solutions that maximize space and organization',
      icon: '👔',
    },
    { 
      title: 'False Ceilings', 
      desc: 'Elegant ceiling designs that add depth and character to your spaces',
      icon: '✨',
    },
    { 
      title: 'Complete Interiors', 
      desc: 'End-to-end interior solutions from concept to completion',
      icon: '🏠',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About The Home Care</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Transforming houses into homes with innovative interior design solutions since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/Living Room/ff3.jpg"
                alt="Interior Design"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                At The Home Care, we believe that every space should reflect the personality and lifestyle of those who inhabit it. 
                Our mission is to transform houses into homes through thoughtful, innovative interior design solutions.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                With years of experience in the industry, our team specializes in creating stunning interiors that are both 
                functional and beautiful. From modern kitchens to cozy bedrooms, we handle every aspect of your interior design needs.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We combine creativity with practicality, ensuring that every design not only looks stunning but also enhances 
                your daily living experience. Our commitment to quality and attention to detail sets us apart in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">What We Offer</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Comprehensive interior design services tailored to your unique needs and preferences
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose The Home Care?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Design Team</h3>
                    <p className="text-gray-600">Our experienced designers bring creativity and expertise to every project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h3>
                    <p className="text-gray-600">We source only the finest materials to ensure durability and elegance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                    <p className="text-gray-600">We respect your time and deliver projects on schedule without compromising quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Warranty</h3>
                    <p className="text-gray-600">All our work comes with extensive warranty coverage for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/Living Room/fgg.jpg"
                alt="Interior Design Excellence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to create a home that truly reflects your style and meets your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

