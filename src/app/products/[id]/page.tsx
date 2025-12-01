'use client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';

const products = {
  'kitchen-cabinet-set': {
    id: 'kitchen-cabinet-set',
    name: 'Modern Kitchen Cabinet Set',
    price: 45999,
    image: 'istockphoto-2149909394-2048x2048.jpg',
    gallery: ['istockphoto-2149909394-2048x2048.jpg', 'istockphoto-1290123200-2048x2048.jpg', 'istockphoto-1445021937-612x612.jpg'],
    category: 'Kitchen',
    description: 'Complete modular kitchen cabinet system with premium finish',
    features: [
      'High-quality plywood construction',
      'Soft-close hinges and drawers',
      'Customizable layout options',
      'Water-resistant finish',
      '10-year warranty',
      'Professional installation included',
    ],
    specifications: {
      'Material': 'Marine plywood with laminate finish',
      'Color Options': 'White, Grey, Walnut, Oak',
      'Dimensions': 'Customizable to your kitchen size',
      'Installation Time': '3-5 days',
      'Warranty': '10 years',
    },
  },
  'bedroom-furniture': {
    id: 'bedroom-furniture',
    name: 'Bedroom Furniture Collection',
    price: 89999,
    image: 'small-juvenile-bedroom-arrangement_23-2151113778.jpg',
    gallery: ['small-juvenile-bedroom-arrangement_23-2151113778.jpg', 'small-juvenile-bedroom-arrangement_23-2151113846.jpg', 'small-juvenile-bedroom-arrangement_23-2151113845.jpg'],
    category: 'Bedroom',
    description: 'Elegant bedroom furniture set including bed, wardrobe, and side tables',
    features: [
      'Queen-size bed with storage',
      '4-door wardrobe',
      'Two matching bedside tables',
      'Premium engineered wood',
      'Scratch-resistant finish',
      'Free home delivery',
    ],
    specifications: {
      'Bed Size': 'Queen (60" x 78")',
      'Wardrobe': '72" H x 60" W x 24" D',
      'Material': 'Engineered wood with veneer',
      'Color': 'Walnut brown',
      'Assembly': 'Professional assembly included',
    },
  },
  'living-room-sofa': {
    id: 'living-room-sofa',
    name: 'Premium Living Room Sofa',
    price: 54999,
    image: 'illustration-living-room-interior_252025-174853.jpg',
    gallery: ['illustration-living-room-interior_252025-174853.jpg', 'illustration-living-room-interior_252025-224747.jpg'],
    category: 'Living Room',
    description: 'Comfortable and stylish 3-seater sofa with premium fabric',
    features: [
      'High-density foam cushions',
      'Premium fabric upholstery',
      'Sturdy hardwood frame',
      'Easy to clean',
      '5-year structural warranty',
      'Multiple color options',
    ],
    specifications: {
      'Seating': '3-seater',
      'Dimensions': '84" W x 36" D x 32" H',
      'Fabric': 'Premium polyester blend',
      'Frame': 'Hardwood',
      'Weight Capacity': '350 kg',
    },
  },
  'dining-table': {
    id: 'dining-table',
    name: 'Dining Table with Chairs',
    price: 34999,
    image: 'istockphoto-686989268-2048x2048.jpg',
    gallery: ['istockphoto-686989268-2048x2048.jpg', 'istockphoto-686989412-2048x2048.jpg'],
    category: 'Dining Room',
    description: '6-seater dining table set with comfortable chairs',
    features: [
      'Solid wood construction',
      '6 cushioned chairs',
      'Scratch-resistant table top',
      'Easy to maintain',
      'Classic design',
      '3-year warranty',
    ],
    specifications: {
      'Table Size': '72" L x 36" W x 30" H',
      'Seating': '6 persons',
      'Material': 'Solid wood',
      'Finish': 'Natural wood polish',
      'Chair Dimensions': '18" W x 20" D x 38" H',
    },
  },
  'wardrobe-system': {
    id: 'wardrobe-system',
    name: 'Custom Wardrobe System',
    price: 67999,
    image: 'istockphoto-615822976-2048x2048.jpg',
    gallery: ['istockphoto-615822976-2048x2048.jpg', 'istockphoto-542068890-1024x1024.jpg'],
    category: 'Wardrobe',
    description: 'Modular wardrobe with sliding doors and internal organizers',
    features: [
      'Sliding door mechanism',
      'Internal shelving and drawers',
      'Hanging rods for clothes',
      'Mirror on one door',
      'Customizable layout',
      'Professional installation',
    ],
    specifications: {
      'Dimensions': '96" H x 84" W x 24" D',
      'Doors': '2 sliding doors',
      'Material': 'Engineered wood with laminate',
      'Internal': 'Adjustable shelves and drawers',
      'Warranty': '7 years',
    },
  },
  'office-desk': {
    id: 'office-desk',
    name: 'Home Office Desk Setup',
    price: 29999,
    image: 'modern-home-workplace-with-desk-bookcase-3d-rendering_960782-70862.jpg',
    gallery: ['modern-home-workplace-with-desk-bookcase-3d-rendering_960782-70862.jpg', 'ai-generated-ai-generative-vintage-retro-style-cozy-artist-home-room-office-table-creation-inspirational-space-graphic-art_95211-13974.jpg'],
    category: 'Home Office',
    description: 'Complete office desk with storage and bookshelf',
    features: [
      'Spacious work surface',
      'Built-in drawers',
      'Cable management system',
      'Ergonomic height',
      'Matching bookshelf',
      'Easy assembly',
    ],
    specifications: {
      'Desk Size': '60" W x 30" D x 30" H',
      'Material': 'Engineered wood',
      'Storage': '3 drawers + bookshelf',
      'Color': 'Oak finish',
      'Weight Capacity': '100 kg',
    },
  },
  'false-ceiling': {
    id: 'false-ceiling',
    name: 'False Ceiling Design Package',
    price: 15999,
    image: 'istockphoto-504855059-2048x2048.jpg',
    gallery: ['istockphoto-504855059-2048x2048.jpg', 'istockphoto-504855059-2048x20481.jpg'],
    category: 'False Ceiling',
    description: 'Complete false ceiling installation with lighting',
    features: [
      'Gypsum board material',
      'Recessed LED lighting',
      'Professional installation',
      'Custom design options',
      'Conceals wiring and pipes',
      '5-year warranty',
    ],
    specifications: {
      'Coverage': 'Up to 150 sq ft',
      'Material': 'Gypsum board',
      'Lighting': '6 LED spotlights included',
      'Design': 'Simple or multi-level',
      'Installation': '2-3 days',
    },
  },
};

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Images */}
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <Image
                  src={`/images/${product.gallery[selectedImage]}`}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.slice(0, 3).map((img, index) => (
                  <div 
                    key={index} 
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedImage === index 
                        ? 'ring-4 ring-primary scale-105' 
                        : 'hover:opacity-75 hover:scale-105'
                    }`}
                  >
                    <Image
                      src={`/images/${img}`}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg mb-6">{product.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-gray-500 ml-2">(incl. GST)</span>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-primary text-white text-center px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Order Now
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 border-2 border-primary text-primary text-center px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-4">
                  <div className="font-semibold text-gray-900 mb-1">{key}</div>
                  <div className="text-gray-600">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
            >
              ← Back to All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

