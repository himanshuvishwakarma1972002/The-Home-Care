import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';

export const metadata = {
  title: 'Contact Us - The Home Care',
  description: 'Get in touch with The Home Care for your interior design needs',
};

export default function Contact() {
  return (
    <section className="py-8 bg-orange-50 min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            {/* Image */}
            <div className="lg:col-span-2 relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/painting-hanging-shelf-full-cacti-succulents_53876-110301.jpg"
                alt="Contact Us"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white p-6 lg:p-8 rounded-lg shadow-xl">
              <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

