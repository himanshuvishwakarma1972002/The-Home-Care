'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormData = {
  name: string;
  email: string;
  message: string;
  category: string;
  itemNumber: string;
  phone: string;
};

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    category: 'Kitchen',
    itemNumber: 'Item 1',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', category: 'Kitchen', itemNumber: 'Item 1', phone: '' });
        // Redirect to thank you page after 1 second
        setTimeout(() => {
          router.push('/thank-you');
        }, 1000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border-b-2 border-gray-300 focus:border-primary outline-none transition-colors"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full p-3 border-b-2 border-gray-300 focus:border-primary outline-none transition-colors"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full p-3 border-b-2 border-gray-300 focus:border-primary outline-none transition-colors"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border-b-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white"
        >
          <option value="Kitchen">Kitchen</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Living Room">Living Room</option>
          <option value="Dining Room">Dining Room</option>
          <option value="Wardrobe">Wardrobe</option>
          <option value="False Ceiling">False Ceiling</option>
          <option value="Home Offices">Home Office</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <select
          name="itemNumber"
          value={formData.itemNumber}
          onChange={handleChange}
          className="w-full p-3 border-b-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={`Item ${i + 1}`}>Item {i + 1}</option>
          ))}
        </select>
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Submit'}
        </button>
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message..."
        rows={3}
        required
        className="w-full p-3 border-b-2 border-gray-300 focus:border-primary outline-none transition-colors resize-none"
      />

      {status === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded text-sm">
          ✓ Message sent successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm">
          ✕ Error sending message. Please try again.
        </div>
      )}
    </form>
  );
}

