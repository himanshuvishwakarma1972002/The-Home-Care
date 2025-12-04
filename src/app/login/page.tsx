'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  
  const [step, setStep] = useState<'phone' | 'otp' | 'name'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOTP] = useState('');
  const [name, setName] = useState('');
  const [method, setMethod] = useState<'sms' | 'email'>('sms');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleRequestOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/auth/request-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, email, method }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send OTP');
      }

      setStep('otp');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp, name: isNewUser ? name : undefined }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.message === 'Name is required for new users') {
          setIsNewUser(true);
          setStep('name');
          return;
        }
        throw new Error(data.message || 'Invalid OTP');
      }

      login(data.token, data.user);
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteName = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to complete registration');
      }

      login(data.token, data.user);
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-orange-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary p-8 text-white text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <Image
                src="/images/home-care-logo-icon-design-vector-22560864.jpg"
                alt="The Home Care"
                fill
                sizes="80px"
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold">Welcome to The Home Care</h1>
            <p className="text-white/80 mt-2">Login to access your account</p>
          </div>

          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* Step 1: Phone Number */}
            {step === 'phone' && (
              <form onSubmit={handleRequestOTP}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 1234567890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Receive OTP via
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="sms"
                        checked={method === 'sms'}
                        onChange={() => setMethod('sms')}
                        className="text-primary focus:ring-primary"
                      />
                      <span>SMS</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="email"
                        checked={method === 'email'}
                        onChange={() => setMethod('email')}
                        className="text-primary focus:ring-primary"
                      />
                      <span>Email</span>
                    </label>
                  </div>
                </div>

                {method === 'email' && (
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send OTP'}
                </button>
              </form>
            )}

            {/* Step 2: OTP Verification */}
            {step === 'otp' && (
              <form onSubmit={handleVerifyOTP}>
                <div className="mb-6 text-center">
                  <p className="text-gray-600 mb-4">
                    OTP sent to <strong>{phone}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={() => setStep('phone')}
                    className="text-primary text-sm hover:underline"
                  >
                    Change number
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value.replace(/\D/g, '').substring(0, 6))}
                    placeholder="000000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-primary focus:border-transparent"
                    maxLength={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>

                <button
                  type="button"
                  onClick={handleRequestOTP}
                  className="w-full mt-4 text-primary text-sm hover:underline"
                >
                  Resend OTP
                </button>
              </form>
            )}

            {/* Step 3: Name (for new users) */}
            {step === 'name' && (
              <form onSubmit={handleCompleteName}>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4 text-center">
                    Welcome! Please enter your name to complete registration
                  </p>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {loading ? 'Creating Account...' : 'Complete Registration'}
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <Link href="/" className="text-gray-600 text-sm hover:text-primary">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

