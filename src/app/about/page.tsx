import Image from 'next/image';

export const metadata = {
  title: 'About Us - The Home Care',
  description: 'Learn more about The Home Care interior design services',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/ff3.jpg"
                alt="Interior Design"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At The Home Care, we believe that every space should reflect the personality and lifestyle of those who inhabit it. 
                Our mission is to transform houses into homes through thoughtful, innovative interior design solutions.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With years of experience in the industry, our team specializes in creating stunning interiors that are both 
                functional and beautiful. From modern kitchens to cozy bedrooms, we handle every aspect of your interior design needs.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Kitchen Design', desc: 'Modern, functional kitchen spaces' },
                { title: 'Bedroom Solutions', desc: 'Comfortable and stylish bedrooms' },
                { title: 'Living Areas', desc: 'Inviting spaces for relaxation' },
                { title: 'Wardrobes', desc: 'Custom storage solutions' },
                { title: 'False Ceilings', desc: 'Elegant ceiling designs' },
                { title: 'Complete Interiors', desc: 'End-to-end interior solutions' },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

