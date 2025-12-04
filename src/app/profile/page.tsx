'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Profile() {
  const { user, token, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    } else if (user) {
      setName(user.name);
      setEmail(user.email || '');
    }
  }, [isAuthenticated, user, router]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_URL}/api/auth/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      setMessage('Profile updated successfully!');
      setEditing(false);
      
      // Update local user data
      const updatedUser = { ...user, name: data.user.name, email: data.user.email };
      localStorage.setItem('authUser', JSON.stringify(updatedUser));
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark p-8 text-white text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-primary text-4xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-white/80 mt-2">{user.phone}</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {message && (
                <div className={`mb-6 px-4 py-3 rounded-lg ${
                  message.includes('success') 
                    ? 'bg-green-50 border border-green-200 text-green-600' 
                    : 'bg-red-50 border border-red-200 text-red-600'
                }`}>
                  {message}
                </div>
              )}

              {!editing ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-500 mb-1">Name</label>
                    <p className="text-lg text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-500 mb-1">Phone</label>
                    <p className="text-lg text-gray-900">{user.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-500 mb-1">Email</label>
                    <p className="text-lg text-gray-900">{user.email || 'Not provided'}</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setEditing(true)}
                      className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Edit Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleUpdate} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditing(false);
                        setName(user.name);
                        setEmail(user.email || '');
                        setMessage('');
                      }}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Link
              href="/products"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="text-3xl mb-2">🛋️</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary">Products</h3>
            </Link>
            <Link
              href="/contact"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary">Contact Us</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}





