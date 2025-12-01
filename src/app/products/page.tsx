import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Products - The Home Care',
  description: 'Browse our collection of curated home decor and furniture products',
};

const products = [
  {
    id: 'kitchen-cabinet-set',
    name: 'Modern Kitchen Cabinet Set',
    price: 45999,
    image: 'Kitchen/istockphoto-2149909394-2048x2048.jpg',
    category: 'Kitchen',
    description: 'Complete modular kitchen cabinet system',
  },
  {
    id: 'bedroom-furniture',
    name: 'Bedroom Furniture Collection',
    price: 89999,
    image: 'Bedroom/small-juvenile-bedroom-arrangement_23-2151113854.jpg',
    category: 'Bedroom',
    description: 'Elegant bedroom furniture set',
  },
  {
    id: 'living-room-sofa',
    name: 'Premium Living Room Sofa',
    price: 54999,
    image: 'Living Room/illustration-living-room-interior_252025-174853.jpg',
    category: 'Living Room',
    description: 'Comfortable and stylish sofa set',
  },
  {
    id: 'dining-table',
    name: 'Dining Table with Chairs',
    price: 34999,
    image: 'Dining Room/istockphoto-478373146-2048x2048.jpg',
    category: 'Dining Room',
    description: '6-seater dining table set',
  },
  {
    id: 'wardrobe-system',
    name: 'Custom Wardrobe System',
    price: 67999,
    image: 'Wardrobe/istockphoto-1002112474-2048x2048.jpg',
    category: 'Wardrobe',
    description: 'Modular wardrobe with sliding doors',
  },
  {
    id: 'office-desk',
    name: 'Home Office Desk Setup',
    price: 29999,
    image: 'Home Office/modern-home-workplace-with-desk-bookcase-3d-rendering_960782-70862.jpg',
    category: 'Home Office',
    description: 'Complete office desk with storage',
  },
  {
    id: 'false-ceiling',
    name: 'False Ceiling Design Package',
    price: 15999,
    image: 'False Ceiling/istockphoto-1093464902-1024x1024.jpg',
    category: 'False Ceiling',
    description: 'Complete false ceiling installation',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`/images/${product.image}`}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      quality={75}
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-semibold">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team can create bespoke furniture and design solutions tailored to your specific needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors"
          >
            Contact Our Design Team
          </Link>
        </div>
      </section>
    </div>
  );
}

