import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogPosts = {
  '1': {
    id: 1,
    title: 'Modern Kitchen Design Trends 2025',
    content: `
      <h2>Introduction to Modern Kitchen Design</h2>
      <p>The kitchen has evolved from a purely functional space to the heart of the home. In 2025, we're seeing exciting trends that blend technology, sustainability, and aesthetics.</p>
      
      <h3>Key Trends for 2025</h3>
      <ul>
        <li><strong>Smart Appliances:</strong> Integration of IoT devices for a connected kitchen experience</li>
        <li><strong>Sustainable Materials:</strong> Eco-friendly countertops and cabinets made from recycled materials</li>
        <li><strong>Minimalist Design:</strong> Clean lines and clutter-free spaces with hidden storage</li>
        <li><strong>Bold Colors:</strong> Moving away from all-white kitchens to vibrant accent colors</li>
        <li><strong>Modular Systems:</strong> Flexible layouts that adapt to your changing needs</li>
      </ul>
      
      <h3>Design Elements</h3>
      <p>Modern modular kitchens focus on functionality without compromising on style. The use of high-quality materials, efficient storage solutions, and thoughtful lighting creates spaces that are both beautiful and practical.</p>
      
      <h3>Conclusion</h3>
      <p>Investing in a modern kitchen design not only enhances your home's value but also improves your daily cooking experience. Our team at The Home Care specializes in creating custom kitchen solutions tailored to your lifestyle.</p>
    `,
    image: 'istockphoto-2149909394-2048x2048.jpg',
    date: 'Dec 1, 2025',
    category: 'Kitchen Design',
    author: 'The Home Care Team',
  },
  '2': {
    id: 2,
    title: 'Creating Your Perfect Bedroom Sanctuary',
    content: `
      <h2>Designing a Restful Bedroom</h2>
      <p>Your bedroom should be a personal sanctuary - a place where you can unwind and recharge. Here's how to create the perfect bedroom space.</p>
      
      <h3>Essential Elements</h3>
      <ul>
        <li><strong>Comfortable Bedding:</strong> Invest in quality mattresses and linens</li>
        <li><strong>Proper Lighting:</strong> Layered lighting for different moods and activities</li>
        <li><strong>Storage Solutions:</strong> Built-in wardrobes to keep clutter at bay</li>
        <li><strong>Color Psychology:</strong> Calming colors like blues, greens, and neutrals</li>
        <li><strong>Personal Touches:</strong> Artwork and decor that reflects your personality</li>
      </ul>
      
      <h3>Space Planning</h3>
      <p>Whether you have a large master bedroom or a cozy space, proper planning ensures maximum functionality. Consider traffic flow, furniture placement, and multi-functional pieces.</p>
      
      <h3>Create Your Dream Space</h3>
      <p>Let us help you design a bedroom that promotes rest, relaxation, and rejuvenation. Our expert team creates customized bedroom solutions that match your style and needs.</p>
    `,
    image: 'small-juvenile-bedroom-arrangement_23-2151113778.jpg',
    date: 'Nov 28, 2025',
    category: 'Bedroom Design',
    author: 'The Home Care Team',
  },
  '3': {
    id: 3,
    title: 'Living Room Design Ideas for Small Spaces',
    content: `
      <h2>Maximize Your Small Living Room</h2>
      <p>A small living room doesn't mean compromising on style or comfort. With smart design choices, you can create a spacious-feeling, functional living area.</p>
      
      <h3>Space-Saving Tips</h3>
      <ul>
        <li><strong>Multi-functional Furniture:</strong> Sofa beds, ottoman storage, nesting tables</li>
        <li><strong>Vertical Storage:</strong> Utilize wall space with shelves and cabinets</li>
        <li><strong>Light Colors:</strong> Create an illusion of space with lighter palettes</li>
        <li><strong>Mirrors:</strong> Strategically placed mirrors to reflect light and space</li>
        <li><strong>Smart Layout:</strong> Floating furniture away from walls when possible</li>
      </ul>
      
      <h3>Design Strategies</h3>
      <p>Scale is crucial in small spaces. Choose appropriately sized furniture, avoid heavy curtains, and keep pathways clear. Every piece should serve a purpose.</p>
      
      <h3>Transform Your Space</h3>
      <p>Our design experts specialize in making small spaces feel grand. Contact us for a personalized living room makeover consultation.</p>
    `,
    image: 'illustration-living-room-interior_252025-174853.jpg',
    date: 'Nov 25, 2025',
    category: 'Living Room',
    author: 'The Home Care Team',
  },
  '4': {
    id: 4,
    title: 'The Art of False Ceiling Design',
    content: `
      <h2>Elevate Your Interiors with False Ceilings</h2>
      <p>False ceilings are more than just aesthetic additions - they serve practical purposes while adding architectural interest to your spaces.</p>
      
      <h3>Benefits of False Ceilings</h3>
      <ul>
        <li><strong>Conceal Utilities:</strong> Hide wiring, pipes, and ductwork</li>
        <li><strong>Improve Acoustics:</strong> Better sound insulation</li>
        <li><strong>Energy Efficiency:</strong> Help maintain room temperature</li>
        <li><strong>Lighting Integration:</strong> Perfect for recessed and cove lighting</li>
        <li><strong>Design Flexibility:</strong> Endless creative possibilities</li>
      </ul>
      
      <h3>Popular Designs</h3>
      <p>From minimalist flat designs to elaborate coffered ceilings, POP designs to gypsum board installations - choose what complements your overall interior theme.</p>
      
      <h3>Expert Installation</h3>
      <p>Professional installation ensures safety and longevity. Our team provides complete false ceiling solutions with warranty and after-sales support.</p>
    `,
    image: 'istockphoto-504855059-2048x2048.jpg',
    date: 'Nov 22, 2025',
    category: 'False Ceiling',
    author: 'The Home Care Team',
  },
  '5': {
    id: 5,
    title: 'Home Office Setup Guide',
    content: `
      <h2>Design Your Productive Workspace</h2>
      <p>With remote work becoming the norm, having a dedicated home office space is essential for productivity and work-life balance.</p>
      
      <h3>Essential Components</h3>
      <ul>
        <li><strong>Ergonomic Furniture:</strong> Comfortable desk and chair setup</li>
        <li><strong>Proper Lighting:</strong> Natural light supplemented with task lighting</li>
        <li><strong>Storage Solutions:</strong> Organized filing and shelving systems</li>
        <li><strong>Technology Setup:</strong> Cable management and power access</li>
        <li><strong>Noise Control:</strong> Soundproofing for video calls</li>
      </ul>
      
      <h3>Creating Focus Zones</h3>
      <p>Separate your work area from living spaces to maintain boundaries. Use colors and decor that inspire creativity while minimizing distractions.</p>
      
      <h3>Customized Solutions</h3>
      <p>Whether you need a corner desk or a full room conversion, we create home offices that boost your productivity and reflect your professional image.</p>
    `,
    image: 'ai-generated-ai-generative-vintage-retro-style-cozy-artist-home-room-office-table-creation-inspirational-space-graphic-art_95211-13974.jpg',
    date: 'Nov 20, 2025',
    category: 'Home Office',
    author: 'The Home Care Team',
  },
  '6': {
    id: 6,
    title: 'Wardrobe Organization Tips',
    content: `
      <h2>Master Wardrobe Organization</h2>
      <p>A well-organized wardrobe saves time, reduces stress, and helps you make the most of your clothing collection.</p>
      
      <h3>Organization Principles</h3>
      <ul>
        <li><strong>Declutter First:</strong> Remove items you no longer wear</li>
        <li><strong>Categorize:</strong> Group similar items together</li>
        <li><strong>Use Vertical Space:</strong> Shelf dividers and hanging organizers</li>
        <li><strong>Seasonal Rotation:</strong> Store off-season clothes separately</li>
        <li><strong>Visibility:</strong> See everything at a glance</li>
      </ul>
      
      <h3>Storage Solutions</h3>
      <p>Custom wardrobes with adjustable shelving, pull-out drawers, and specialized compartments for shoes, ties, and accessories maximize every inch of space.</p>
      
      <h3>Professional Design</h3>
      <p>Our wardrobe systems are tailored to your specific needs, ensuring everything has its place and your morning routine is streamlined.</p>
    `,
    image: 'istockphoto-615822976-2048x2048.jpg',
    date: 'Nov 18, 2025',
    category: 'Wardrobe',
    author: 'The Home Care Team',
  },
  '7': {
    id: 7,
    title: 'Dining Room Decor Ideas',
    content: `
      <h2>Create Memorable Dining Experiences</h2>
      <p>Your dining room sets the stage for family meals and entertaining guests. Make it a space that combines functionality with style.</p>
      
      <h3>Design Elements</h3>
      <ul>
        <li><strong>Table Selection:</strong> Size and shape that fits your space</li>
        <li><strong>Seating Comfort:</strong> Chairs that support extended sitting</li>
        <li><strong>Lighting:</strong> Statement chandelier or pendant lights</li>
        <li><strong>Storage:</strong> Sideboards or buffets for serving ware</li>
        <li><strong>Decor:</strong> Artwork, mirrors, and table centerpieces</li>
      </ul>
      
      <h3>Layout Planning</h3>
      <p>Ensure adequate space for movement around the table. Consider traffic flow from kitchen to dining area and allow room for chairs to pull out comfortably.</p>
      
      <h3>Elegant Solutions</h3>
      <p>From formal dining rooms to casual breakfast nooks, we design dining spaces that bring people together and create lasting memories.</p>
    `,
    image: 'istockphoto-686989268-2048x2048.jpg',
    date: 'Nov 15, 2025',
    category: 'Dining Room',
    author: 'The Home Care Team',
  },
  '8': {
    id: 8,
    title: 'Color Psychology in Interior Design',
    content: `
      <h2>The Power of Color in Your Home</h2>
      <p>Colors have a profound impact on mood, energy levels, and overall well-being. Understanding color psychology helps create spaces that truly feel like home.</p>
      
      <h3>Color Effects</h3>
      <ul>
        <li><strong>Blue:</strong> Calming, promotes relaxation - ideal for bedrooms</li>
        <li><strong>Yellow:</strong> Energizing, cheerful - great for kitchens</li>
        <li><strong>Green:</strong> Balancing, refreshing - perfect for living rooms</li>
        <li><strong>Red:</strong> Stimulating, passionate - use as accents</li>
        <li><strong>Neutral:</strong> Versatile, timeless - excellent base colors</li>
      </ul>
      
      <h3>Application Tips</h3>
      <p>Use the 60-30-10 rule: 60% dominant color, 30% secondary color, 10% accent color. Consider natural lighting and room size when choosing colors.</p>
      
      <h3>Expert Guidance</h3>
      <p>Our design consultants help you select color schemes that reflect your personality while creating the desired atmosphere in each room.</p>
    `,
    image: 'ff3.jpg',
    date: 'Nov 12, 2025',
    category: 'Design Tips',
    author: 'The Home Care Team',
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - The Home Care Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={`/images/${post.image}`}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-primary bg-opacity-10 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-gray-700 mb-6">
                Let our expert team bring your interior design vision to life
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
          >
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </article>
  );
}

