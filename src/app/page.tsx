 'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BackgroundMusic from '@/components/home/BackgroundMusic';

const heroSlides = [
  { img: 'Living Room/ff3.jpg', title: 'Living Room Designs', text: 'Transform your living space into an inviting haven' },
  { img: 'Kitchen/istockphoto-2149909394-2048x2048.jpg', title: 'Modern Kitchens', text: 'Functional and stylish modular kitchen solutions' },
  { img: 'Bedroom/small-juvenile-bedroom-arrangement_23-2151113854.jpg', title: 'Bedroom Sanctuaries', text: 'Create your perfect restful retreat' },
  { img: 'Dining Room/istockphoto-478373146-2048x2048.jpg', title: 'Dining Experiences', text: 'Elegant spaces for memorable meals' },
  { img: 'Home Office/modern-home-workplace-with-desk-bookcase-3d-rendering_960782-70862.jpg', title: 'Home Offices', text: 'Productive workspaces designed for success' },
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Expert Team Members' },
];

const offerings = [
  { 
    title: 'Modular Interiors', 
    desc: 'Functional kitchen, wardrobe and storage',
    icon: '🏠',
    link: '/kitchen',
  },
  { 
    title: 'Full Home Interiors', 
    desc: 'Turnkey interior solutions for your home',
    icon: '✨',
    link: '/about',
  },
  { 
    title: 'Luxury Interiors', 
    desc: 'Tailored interiors that redefine elegance',
    icon: '💎',
    link: '/products',
  },
  { 
    title: 'Renovations', 
    desc: 'Expert solutions to upgrade your home',
    icon: '🔧',
    link: '/contact',
  },
];

const whyChooseUs = [
  {
    icon: '✨',
    title: 'Flat 10-year warranty',
    description: 'Industry-leading warranty coverage for your peace of mind.',
  },
  {
    icon: '🎯',
    title: '45-day move-in guarantee',
    description: 'We deliver your dream home on time, every time.',
  },
  {
    icon: '🤝',
    title: '146 quality checks',
    description: 'Rigorous quality standards to ensure perfection.',
  },
  {
    icon: '💡',
    title: '500+ happy homes',
    description: '98% customer satisfaction with our designs.',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[currentSlide];

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image 
            src={`/images/${activeSlide.img}`}
            alt={activeSlide.title}
            fill
            sizes="100vw"
            className="object-cover transition-opacity duration-1000"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Slider arrows */}
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-lg transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-lg transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="container mx-auto px-4 z-10 relative flex items-end pb-16">
          <div className="max-w-3xl p-6 md:p-10 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Home to Beautiful Interiors
            </h1>
            <p className="text-gray-100 text-xl leading-relaxed mb-6">
              Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. 
              With a wide range of furniture & decor, we have your back from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors text-center"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/products"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors text-center"
              >
                Calculate Cost
              </Link>
            </div>
            {/* Slide indicators */}
            <div className="flex gap-2 mt-6">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white w-4' : 'bg-white/50 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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

      {/* Offerings Section - Livspace Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            One-stop shop for all things interiors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <Link
                key={index}
                href={offering.link}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group text-center"
              >
                <div className="text-6xl mb-4">{offering.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {offering.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{offering.desc}</p>
                <div className="mt-4 text-primary font-semibold group-hover:underline">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Ideas Section - Livspace Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Inspiration for Home Interior Designs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Give your home a new look with these interior design ideas curated for you
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { img: 'Living Room/illustration-living-room-interior_252025-174853.jpg', title: 'Living Room Sofa', text: 'Premium comfort sofa set', link: '/products/living-room-sofa' },
              { img: 'Kitchen/istockphoto-2149909394-2048x2048.jpg', title: 'Kitchen Cabinet', text: 'Modern modular kitchen', link: '/products/kitchen-cabinet-set' },
              { img: 'Bedroom/small-juvenile-bedroom-arrangement_23-2151113854.jpg', title: 'Bedroom Set', text: 'Complete bedroom furniture', link: '/products/bedroom-furniture' },
              { img: 'Dining Room/istockphoto-478373146-2048x2048.jpg', title: 'Dining Table', text: '6-seater dining set', link: '/products/dining-table' },
              { img: 'Wardrobe/istockphoto-1002112474-2048x2048.jpg', title: 'Wardrobe System', text: 'Custom wardrobe solution', link: '/products/wardrobe-system' },
              { img: 'False Ceiling/istockphoto-1093464902-1024x1024.jpg', title: 'False Ceiling', text: 'Elegant ceiling designs', link: '/products/false-ceiling' },
              { img: 'Home Office/modern-home-workplace-with-desk-bookcase-3d-rendering_960782-70862.jpg', title: 'Office Desk', text: 'Home office setup', link: '/products/office-desk' },
              { img: 'Living Room/fgg.jpg', title: 'Interior Design', text: 'Complete solutions', link: '/kitchen' },
            ].map((item, index) => (
              <Link 
                key={index}
                href={item.link}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 h-80 cursor-pointer block"
              >
                <Image 
                  src={`/images/${item.img}`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose The Home Care?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Explore our curated collection of premium interior design solutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { img: 'Kitchen/istockphoto-2149909394-2048x2048.jpg', name: 'Modern Kitchen Cabinet Set', price: 45999, category: 'Kitchen', link: '/products/kitchen-cabinet-set' },
              { img: 'Bedroom/small-juvenile-bedroom-arrangement_23-2151113854.jpg', name: 'Bedroom Furniture Collection', price: 89999, category: 'Bedroom', link: '/products/bedroom-furniture' },
              { img: 'Living Room/illustration-living-room-interior_252025-174853.jpg', name: 'Premium Living Room Sofa', price: 54999, category: 'Living Room', link: '/products/living-room-sofa' },
              { img: 'Dining Room/istockphoto-478373146-2048x2048.jpg', name: 'Dining Table with Chairs', price: 34999, category: 'Dining Room', link: '/products/dining-table' },
            ].map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/images/${product.img}`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-primary font-semibold group-hover:underline">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to create a home that truly reflects your style and meets your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Background Music Player */}
      <BackgroundMusic audioSrc="/audio/Ghostrifter-Official-Purple-Dream(chosic.com).mp3" />
    </>
  );
}


