import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 transition-transform group-hover:scale-110 duration-300">
              <Image 
                src="/images/home-care-logo-icon-design-vector-22560864.jpg"
                alt="The Home Care Logo"
                fill
                sizes="64px"
                className="rounded-full object-cover ring-2 ring-primary ring-opacity-0 group-hover:ring-opacity-100 transition-all duration-300"
                priority
              />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                THE HOME CARE
              </h2>
              <p className="text-xs text-gray-500 hidden md:block">Interior Design Solutions</p>
            </div>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

