export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-300">
          Our diverse team of award-winning designers and experts are here to make your home the best it could be.
        </p>
        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} The Home Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

