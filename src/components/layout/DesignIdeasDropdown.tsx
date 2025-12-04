'use client';

import Link from 'next/link';
import { useState } from 'react';

const designCategories = {
  column1: [
    { name: 'Modular Kitchen Designs', link: '/kitchen#kitchen' },
    { name: 'Wardrobe Designs', link: '/kitchen#wardrobe' },
    { name: 'Bathroom Designs', link: '/contact' },
    { name: 'Master Bedroom Designs', link: '/kitchen#bedroom' },
    { name: 'Living Room Designs', link: '/kitchen#living' },
    { name: 'Pooja Room Designs', link: '/contact' },
    { name: 'TV Unit Designs', link: '/contact' },
    { name: 'False Ceiling Designs', link: '/kitchen#ceiling' },
    { name: 'Kids Bedroom Designs', link: '/kitchen#bedroom' },
    { name: 'Balcony Designs', link: '/contact' },
  ],
  column2: [
    { name: 'Dining Room Designs', link: '/kitchen#dining' },
    { name: 'Foyer Designs', link: '/contact' },
    { name: 'Homes by The Home Care', link: '/products' },
    { name: 'Home Office Designs', link: '/kitchen#office' },
    { name: 'Guest Bedroom Designs', link: '/kitchen#bedroom' },
    { name: 'Window Designs', link: '/contact' },
    { name: 'Flooring Designs', link: '/contact' },
    { name: 'Wall Decor Designs', link: '/contact' },
    { name: 'Wall Paint Designs', link: '/contact' },
    { name: 'Home Wallpaper Designs', link: '/contact' },
  ],
  column3: [
    { name: 'Tile Designs', link: '/contact' },
    { name: 'Study Room Designs', link: '/contact' },
    { name: 'Kitchen Sinks', link: '/contact' },
    { name: 'Space Saving Designs', link: '/contact' },
    { name: 'Door Designs', link: '/contact' },
    { name: 'Staircase Designs', link: '/contact' },
    { name: 'Crockery Unit Designs', link: '/contact' },
    { name: 'Home Bar Designs', link: '/contact' },
  ],
};

export default function DesignIdeasDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-4 lg:px-6 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg transition-all duration-300"
      >
        Design Ideas
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3">
                {designCategories.column1.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block text-gray-700 hover:text-primary transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3">
                {designCategories.column2.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block text-gray-700 hover:text-primary transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-3">
                {designCategories.column3.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block text-gray-700 hover:text-primary transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


