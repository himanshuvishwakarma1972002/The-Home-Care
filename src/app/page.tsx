import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/ff3.jpg"
            alt="Interior Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl bg-white p-8 md:p-12 rounded-lg shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Design Your Home, Your Way
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. 
              With a wide range of furniture & decor, we have your back from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Design Your Home, Your Way
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { img: 'illustration-living-room-interior_252025-174853.jpg', title: 'Living Room Sofa', text: 'Premium comfort sofa set', link: '/products/living-room-sofa' },
              { img: 'istockphoto-2149909394-2048x2048.jpg', title: 'Kitchen Cabinet', text: 'Modern modular kitchen', link: '/products/kitchen-cabinet-set' },
              { img: 'small-juvenile-bedroom-arrangement_23-2151113778.jpg', title: 'Bedroom Set', text: 'Complete bedroom furniture', link: '/products/bedroom-furniture' },
              { img: 'istockphoto-686989268-2048x2048.jpg', title: 'Dining Table', text: '6-seater dining set', link: '/products/dining-table' },
              { img: 'istockphoto-615822976-2048x2048.jpg', title: 'Wardrobe System', text: 'Custom wardrobe solution', link: '/products/wardrobe-system' },
              { img: 'istockphoto-504855059-2048x2048.jpg', title: 'False Ceiling', text: 'Elegant ceiling designs', link: '/products/false-ceiling' },
              { img: 'modern-home-workplace-with-desk-bookcase-3d-rendering_960782-70862.jpg', title: 'Office Desk', text: 'Home office setup', link: '/products/office-desk' },
              { img: 'fgg.jpg', title: 'Interior Design', text: 'Complete solutions', link: '/kitchen' },
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Build Great Products
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Complete Interior Design Service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Kitchen Design', icon: '🏠' },
              { title: 'Bedroom', icon: '🛏️' },
              { title: 'Living Room', icon: '🛋️' },
              { title: 'Dining Room', icon: '🍽️' },
              { title: 'Wardrobe', icon: '👔' },
              { title: 'False Ceiling', icon: '✨' },
            ].map((service, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

