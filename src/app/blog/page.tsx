import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - The Home Care',
  description: 'Latest interior design tips, trends, and inspiration',
};

const blogPosts = [
  {
    id: 1,
    title: 'Modern Kitchen Design Trends 2025',
    excerpt: 'Discover the latest trends in modular kitchen designs that blend functionality with style.',
    image: 'istockphoto-2149909394-2048x2048.jpg',
    date: 'Dec 1, 2025',
    category: 'Kitchen Design',
  },
  {
    id: 2,
    title: 'Creating Your Perfect Bedroom Sanctuary',
    excerpt: 'Transform your bedroom into a peaceful retreat with these expert design tips.',
    image: 'small-juvenile-bedroom-arrangement_23-2151113778.jpg',
    date: 'Nov 28, 2025',
    category: 'Bedroom Design',
  },
  {
    id: 3,
    title: 'Living Room Design Ideas for Small Spaces',
    excerpt: 'Maximize your living room space with smart design solutions and clever furniture placement.',
    image: 'illustration-living-room-interior_252025-174853.jpg',
    date: 'Nov 25, 2025',
    category: 'Living Room',
  },
  {
    id: 4,
    title: 'The Art of False Ceiling Design',
    excerpt: 'Elevate your interiors with stunning false ceiling designs that add depth and character.',
    image: 'istockphoto-504855059-2048x2048.jpg',
    date: 'Nov 22, 2025',
    category: 'False Ceiling',
  },
  {
    id: 5,
    title: 'Home Office Setup Guide',
    excerpt: 'Create a productive workspace at home with our comprehensive design guide.',
    image: 'ai-generated-ai-generative-vintage-retro-style-cozy-artist-home-room-office-table-creation-inspirational-space-graphic-art_95211-13974.jpg',
    date: 'Nov 20, 2025',
    category: 'Home Office',
  },
  {
    id: 6,
    title: 'Wardrobe Organization Tips',
    excerpt: 'Maximize storage and keep your wardrobe organized with these practical tips.',
    image: 'istockphoto-615822976-2048x2048.jpg',
    date: 'Nov 18, 2025',
    category: 'Wardrobe',
  },
  {
    id: 7,
    title: 'Dining Room Decor Ideas',
    excerpt: 'Make every meal special with these stunning dining room design inspirations.',
    image: 'istockphoto-686989268-2048x2048.jpg',
    date: 'Nov 15, 2025',
    category: 'Dining Room',
  },
  {
    id: 8,
    title: 'Color Psychology in Interior Design',
    excerpt: 'Learn how different colors can transform the mood and feel of your living spaces.',
    image: 'ff3.jpg',
    date: 'Nov 12, 2025',
    category: 'Design Tips',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`/images/${post.image}`}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary font-semibold">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-primary font-semibold hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

