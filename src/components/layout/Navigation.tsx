'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/kitchen', label: 'Categories' },
  { href: '/blog', label: 'Blog' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg text-gray-700 hover:text-white hover:bg-primary transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-1 lg:gap-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href}
              className={`relative px-4 lg:px-6 py-2 text-base font-medium transition-all duration-300 rounded-lg group ${
                pathname === item.href 
                  ? 'text-white bg-primary' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10'
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-gray-900 z-50 md:hidden shadow-2xl">
            <div className="p-6 bg-gray-900">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-bold text-lg">Menu</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-primary transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                        pathname === item.href
                          ? 'bg-primary text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

