import Link from 'next/link';

export const metadata = {
  title: 'Thank You - The Home Care',
  description: 'Thank you for contacting us',
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-primary flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your message has been successfully sent.
          </p>
          <p className="text-gray-600 mb-8">
            We appreciate you reaching out to us. Our team will review your inquiry and 
            get back to you within 24 hours. We&apos;re excited to help you create your dream space!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/kitchen"
              className="inline-block bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Explore Our Work
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              In the meantime, feel free to:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/blog" className="text-primary hover:underline">
                Read Our Blog
              </Link>
              <Link href="/products" className="text-primary hover:underline">
                Browse Products
              </Link>
              <Link href="/kitchen" className="text-primary hover:underline">
                View Categories
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-white text-sm">
          <p>Need immediate assistance?</p>
          <p className="mt-2">Email: info@thehomecare.com | Phone: +91-1234567890</p>
        </div>
      </div>
    </div>
  );
}

