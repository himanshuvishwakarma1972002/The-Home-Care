'use client';
import Image from 'next/image';
import Link from 'next/link';


// Kitchen items from Kitchen folder
const kitchenItems = [
  { img: 'Kitchen/istockphoto-2149909394-2048x2048.jpg', name: 'Kitchen Design 1' },
  { img: 'Kitchen/istockphoto-1290123200-2048x2048.jpg', name: 'Kitchen Design 2' },
  { img: 'Kitchen/istockphoto-1445021937-612x612.jpg', name: 'Kitchen Design 3' },
  { img: 'Kitchen/istockphoto-1001017528-2048x2048.jpg', name: 'Kitchen Design 4' },
  { img: 'Kitchen/istockphoto-1136467016-2048x2048.jpg', name: 'Kitchen Design 5' },
  { img: 'Kitchen/istockphoto-182434426-2048x2048.jpg', name: 'Kitchen Design 6' },
  { img: 'Kitchen/dfdfe.jpg', name: 'Kitchen Design 7' },
  { img: 'Kitchen/photo-1692133231156-257f3c285316.jpg', name: 'Kitchen Design 8' },
  { img: 'Kitchen/photo-1699134831822-173d92d74ef2.jpg', name: 'Kitchen Design 9' },
  { img: 'Kitchen/premium_photo-1683140941523-f1fbbabe54d5.jpg', name: 'Kitchen Design 10' },
];

// Bedroom items from Bedroom folder
const bedroomItems = [
  { img: 'Bedroom/small-juvenile-bedroom-arrangement_23-2151113854.jpg', name: 'Bedroom Design 1' },
  { img: 'Bedroom/small-juvenile-bedroom-arrangement_23-2151113872.jpg', name: 'Bedroom Design 2' },
  { img: 'Bedroom/istockphoto-1008199950-2048x2048.jpg', name: 'Bedroom Design 3' },
  { img: 'Bedroom/istockphoto-1021799268-2048x2048.jpg', name: 'Bedroom Design 4' },
  { img: 'Bedroom/istockphoto-1021799326-2048x2048.jpg', name: 'Bedroom Design 5' },
  { img: 'Bedroom/istockphoto-1222723728-2048x2048.jpg', name: 'Bedroom Design 6' },
  { img: 'Bedroom/istockphoto-1284416582-2048x2048.jpg', name: 'Bedroom Design 7' },
  { img: 'Bedroom/istockphoto-564571170-2048x2048.jpg', name: 'Bedroom Design 8' },
  { img: 'Bedroom/istockphoto-686989268-2048x2048.jpg', name: 'Bedroom Design 9' },
  { img: 'Bedroom/istockphoto-686989412-2048x2048.jpg', name: 'Bedroom Design 10' },
];

// Living Room items from Living Room folder
const livingRoomItems = [
  { img: 'Living Room/illustration-living-room-interior_252025-174853.jpg', name: 'Living Room Design 1' },
  { img: 'Living Room/illustration-living-room-interior_252025-224747.jpg', name: 'Living Room Design 2' },
  { img: 'Living Room/ff3.jpg', name: 'Living Room Design 3' },
  { img: 'Living Room/fgg.jpg', name: 'Living Room Design 4' },
  { img: 'Living Room/istockphoto-1317785232-2048x2048.jpg', name: 'Living Room Design 5' },
  { img: 'Living Room/istockphoto-1482779314-2048x2048.jpg', name: 'Living Room Design 6' },
  { img: 'Living Room/istockphoto-1555549205-2048x2048.jpg', name: 'Living Room Design 7' },
  { img: 'Living Room/istockphoto-807185246-2048x2048.jpg', name: 'Living Room Design 8' },
  { img: 'Living Room/jhjhj6.jpg', name: 'Living Room Design 9' },
  { img: 'Living Room/trtrt.jpg', name: 'Living Room Design 10' },
];

// Dining Room items from Dining Room folder
const diningRoomItems = [
  { img: 'Dining Room/dfdfe.jpg', name: 'Dining Room Design 1' },
  { img: 'Dining Room/istockphoto-1136467016-2048x2048.jpg', name: 'Dining Room Design 2' },
  { img: 'Dining Room/istockphoto-1225229198-2048x2048.jpg', name: 'Dining Room Design 3' },
  { img: 'Dining Room/istockphoto-157484805-2048x2048.jpg', name: 'Dining Room Design 4' },
  { img: 'Dining Room/istockphoto-478373146-2048x2048.jpg', name: 'Dining Room Design 5' },
  { img: 'Dining Room/istockphoto-498363571-2048x2048.jpg', name: 'Dining Room Design 6' },
  { img: 'Dining Room/istockphoto-504855059-2048x2048.jpg', name: 'Dining Room Design 7' },
  { img: 'Dining Room/istockphoto-504855059-2048x20481.jpg', name: 'Dining Room Design 8' },
  { img: 'Dining Room/istockphoto-583735532-2048x2048.jpg', name: 'Dining Room Design 9' },
  { img: 'Dining Room/istockphoto-615822976-2048x2048.jpg', name: 'Dining Room Design 10' },
];

// Wardrobe items from Wardrobe folder
const wardrobeItems = [
  { img: 'Wardrobe/istockphoto-1002112474-2048x2048.jpg', name: 'Wardrobe Design 1' },
  { img: 'Wardrobe/istockphoto-1002114190-2048x2048.jpg', name: 'Wardrobe Design 2' },
  { img: 'Wardrobe/istockphoto-1141401667-2048x2048.jpg', name: 'Wardrobe Design 3' },
  { img: 'Wardrobe/istockphoto-1186389076-2048x2048.jpg', name: 'Wardrobe Design 4' },
  { img: 'Wardrobe/istockphoto-2136689050-1024x1024.jpg', name: 'Wardrobe Design 5' },
  { img: 'Wardrobe/istockphoto-625010110-2048x2048.jpg', name: 'Wardrobe Design 6' },
  { img: 'Wardrobe/istockphoto-625010474-2048x2048.jpg', name: 'Wardrobe Design 7' },
  { img: 'Wardrobe/istockphoto-655824504-2048x2048.jpg', name: 'Wardrobe Design 8' },
  { img: 'Wardrobe/istockphoto-834008664-1024x1024.jpg', name: 'Wardrobe Design 9' },
  { img: 'Wardrobe/istockphoto-944515330-2048x2048.jpg', name: 'Wardrobe Design 10' },
];

// False Ceiling items from False Ceiling folder
const falseCeilingItems = [
  { img: 'False Ceiling/istockphoto-1093464902-1024x1024.jpg', name: 'False Ceiling Design 1' },
  { img: 'False Ceiling/istockphoto-1186389076-2048x2048.jpg', name: 'False Ceiling Design 2' },
  { img: 'False Ceiling/istockphoto-1418217144-1024x1024.jpg', name: 'False Ceiling Design 3' },
  { img: 'False Ceiling/istockphoto-1418217293-1024x1024.jpg', name: 'False Ceiling Design 4' },
  { img: 'False Ceiling/istockphoto-1560745711-1024x1024.jpg', name: 'False Ceiling Design 5' },
  { img: 'False Ceiling/istockphoto-501652042-1024x1024.jpg', name: 'False Ceiling Design 6' },
  { img: 'False Ceiling/istockphoto-542068890-1024x1024.jpg', name: 'False Ceiling Design 7' },
  { img: 'False Ceiling/istockphoto-542068972-1024x1024.jpg', name: 'False Ceiling Design 8' },
  { img: 'False Ceiling/istockphoto-601923778-1024x1024.jpg', name: 'False Ceiling Design 9' },
  { img: 'False Ceiling/istockphoto-834008664-1024x1024.jpg', name: 'False Ceiling Design 10' },
];

// Home Office items from Home Office folder
const homeOfficeItems = [
  { img: 'Home Office/group-people-65-min.jpg', name: 'Home Office Design 1' },
  { img: 'Home Office/istockphoto-1226410671-2048x2048.jpg', name: 'Home Office Design 2' },
  { img: 'Home Office/istockphoto-1358435984-2048x2048.jpg', name: 'Home Office Design 3' },
  { img: 'Home Office/istockphoto-1374990131-2048x2048.jpg', name: 'Home Office Design 4' },
  { img: 'Home Office/istockphoto-1424310390-2048x2048.jpg', name: 'Home Office Design 5' },
  { img: 'Home Office/istockphoto-807185246-2048x2048.jpg', name: 'Home Office Design 6' },
  { img: 'Home Office/istockphoto-828530034-2048x2048.jpg', name: 'Home Office Design 7' },
  { img: 'Home Office/modern-home-workplace-with-desk-bookcase-3d-rendering_960782-70862.jpg', name: 'Home Office Design 8' },
  { img: 'Home Office/photo-1597260469329-e1201e075d82.jpg', name: 'Home Office Design 9' },
  { img: 'Home Office/young-smart-light-haired-girl-with-bob-hairstyle-casual-clothes-sitting-chair-modern-library-reading-favourite-book-relaxing-after-long-day-study_176420-8324.jpg', name: 'Home Office Design 10' },
];

interface CategorySectionProps {
  title: string;
  description: string;
  items: Array<{ img: string; name: string }>;
  bgColor?: string;
}

function CategorySection({ title, description, items, bgColor = 'bg-gray-50' }: CategorySectionProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <Link
              key={index}
              href="/contact"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={`/images/${item.img}`}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <div className="p-4 text-center">
                <h6 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {item.name}
                </h6>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
  { id: 'bedroom', name: 'Bedroom', icon: '🛏️' },
  { id: 'living', name: 'Living Room', icon: '🛋️' },
  { id: 'dining', name: 'Dining Room', icon: '🍽️' },
  { id: 'wardrobe', name: 'Wardrobe', icon: '👔' },
  { id: 'ceiling', name: 'False Ceiling', icon: '✨' },
  { id: 'office', name: 'Home Office', icon: '💼' },
];

export default function Kitchen() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Category Navigation Bar */}
      <div className="sticky top-16 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-primary hover:text-white rounded-full whitespace-nowrap transition-all font-semibold text-sm"
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modular Kitchen Section */}
      <div id="kitchen">
        <CategorySection
        title="Modular Kitchen Designs"
        description="We craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs."
        items={kitchenItems}
        bgColor="bg-white"
      />

      </div>

      {/* Bedroom Section */}
      <div id="bedroom">
        <CategorySection
        title="Bedroom Designs"
        description="Create your perfect sanctuary with our elegant bedroom designs. From modern minimalist to classic luxury, we offer bedroom solutions that combine comfort and style."
        items={bedroomItems}
        bgColor="bg-gray-50"
      />

      </div>

      {/* Living Room Section */}
      <div id="living">
        <CategorySection
          title="Living Room Designs"
        description="Transform your living space into an inviting haven. Our living room designs focus on creating spaces that bring families together while reflecting your personal style."
        items={livingRoomItems}
        bgColor="bg-white"
      />

      </div>

      {/* Dining Room Section */}
      <div id="dining">
        <CategorySection
          title="Dining Room Designs"
        description="Elevate your dining experience with our sophisticated dining room designs. We create spaces that are perfect for both everyday meals and special occasions."
        items={diningRoomItems}
        bgColor="bg-gray-50"
      />

      </div>

      {/* Wardrobe Section */}
      <div id="wardrobe">
        <CategorySection
          title="Wardrobe Designs"
        description="Maximize your storage with our custom wardrobe solutions. From walk-in closets to space-saving designs, we create organized and stylish storage spaces."
        items={wardrobeItems}
        bgColor="bg-white"
      />

      </div>

      {/* False Ceiling Section */}
      <div id="ceiling">
        <CategorySection
          title="False Ceiling Designs"
        description="Add elegance to your interiors with our creative false ceiling designs. We blend aesthetics with functionality to create stunning overhead statements."
        items={falseCeilingItems}
        bgColor="bg-gray-50"
      />

      </div>

      {/* Home Office Section */}
      <div id="office">
        <CategorySection
          title="Home Office Designs"
        description="Design your productive workspace with our home office solutions. We create inspiring environments that enhance focus and creativity while maintaining style."
        items={homeOfficeItems}
        bgColor="bg-white"
      />
      </div>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get in touch with us today and let&apos;s bring your interior design dreams to life!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
