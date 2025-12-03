'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Modern Kitchen Design Trends 2025',
    excerpt: 'Discover the latest trends in modular kitchen designs that blend functionality with style.',
    images: [
      'Kitchen/istockphoto-2149909394-2048x2048.jpg',
      'Kitchen/istockphoto-1290123200-2048x2048.jpg',
      'Kitchen/istockphoto-1001017528-2048x2048.jpg',
      'Kitchen/istockphoto-1136467016-2048x2048.jpg',
    ],
    date: 'Dec 1, 2025',
    category: 'Kitchen Design',
  },
  {
    id: 2,
    title: 'Creating Your Perfect Bedroom Sanctuary',
    excerpt: 'Transform your bedroom into a peaceful retreat with these expert design tips.',
    images: [
      'Bedroom/small-juvenile-bedroom-arrangement_23-2151113854.jpg',
      'Bedroom/small-juvenile-bedroom-arrangement_23-2151113872.jpg',
      'Bedroom/istockphoto-1008199950-2048x2048.jpg',
      'Bedroom/istockphoto-1021799268-2048x2048.jpg',
    ],
    date: 'Nov 28, 2025',
    category: 'Bedroom Design',
  },
  {
    id: 3,
    title: 'Living Room Design Ideas for Small Spaces',
    excerpt: 'Maximize your living room space with smart design solutions and clever furniture placement.',
    images: [
      'Living Room/illustration-living-room-interior_252025-174853.jpg',
      'Living Room/illustration-living-room-interior_252025-224747.jpg',
      'Living Room/ff3.jpg',
      'Living Room/fgg.jpg',
    ],
    date: 'Nov 25, 2025',
    category: 'Living Room',
  },
  {
    id: 4,
    title: 'The Art of False Ceiling Design',
    excerpt: 'Elevate your interiors with stunning false ceiling designs that add depth and character.',
    images: [
      'False Ceiling/istockphoto-1093464902-1024x1024.jpg',
      'False Ceiling/istockphoto-1186389076-2048x2048.jpg',
      'False Ceiling/istockphoto-1418217144-1024x1024.jpg',
      'False Ceiling/istockphoto-1560745711-1024x1024.jpg',
    ],
    date: 'Nov 22, 2025',
    category: 'False Ceiling',
  },
  {
    id: 5,
    title: 'Home Office Setup Guide',
    excerpt: 'Create a productive workspace at home with our comprehensive design guide.',
    images: [
      'Home Office/modern-home-workplace-with-desk-bookcase-3d-rendering_960782-70862.jpg',
      'Home Office/istockphoto-1226410671-2048x2048.jpg',
      'Home Office/istockphoto-1358435984-2048x2048.jpg',
      'Home Office/istockphoto-1374990131-2048x2048.jpg',
    ],
    date: 'Nov 20, 2025',
    category: 'Home Office',
  },
  {
    id: 6,
    title: 'Wardrobe Organization Tips',
    excerpt: 'Maximize storage and keep your wardrobe organized with these practical tips.',
    images: [
      'Wardrobe/istockphoto-1002112474-2048x2048.jpg',
      'Wardrobe/istockphoto-1002114190-2048x2048.jpg',
      'Wardrobe/istockphoto-1141401667-2048x2048.jpg',
      'Wardrobe/istockphoto-1186389076-2048x2048.jpg',
    ],
    date: 'Nov 18, 2025',
    category: 'Wardrobe',
  },
  {
    id: 7,
    title: 'Dining Room Decor Ideas',
    excerpt: 'Make every meal special with these stunning dining room design inspirations.',
    images: [
      'Dining Room/istockphoto-478373146-2048x2048.jpg',
      'Dining Room/istockphoto-498363571-2048x2048.jpg',
      'Dining Room/istockphoto-504855059-2048x2048.jpg',
      'Dining Room/istockphoto-583735532-2048x2048.jpg',
    ],
    date: 'Nov 15, 2025',
    category: 'Dining Room',
  },
  {
    id: 8,
    title: 'Color Psychology in Interior Design',
    excerpt: 'Learn how different colors can transform the mood and feel of your living spaces.',
    images: [
      'Living Room/ff3.jpg',
      'Living Room/fgg.jpg',
      'Living Room/istockphoto-1317785232-2048x2048.jpg',
      'Living Room/istockphoto-1482779314-2048x2048.jpg',
    ],
    date: 'Nov 12, 2025',
    category: 'Design Tips',
  },
];

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [post.images.length]);

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <Link href={`/blog/${post.id}`}>
        <div className="relative h-64 overflow-hidden group">
          {post.images.map((img, index) => (
            <Image
              key={index}
              src={`/images/${img}`}
              alt={`${post.title} - Image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-opacity duration-700 ${
                index === currentImageIndex
                  ? 'opacity-100'
                  : 'opacity-0 absolute'
              } group-hover:scale-110 transition-transform duration-500`}
              loading="lazy"
              quality={75}
            />
          ))}
          {/* Image indicator dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {post.images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50 w-1.5'
                }`}
              />
            ))}
          </div>
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
  );
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

