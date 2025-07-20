'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Footer from '@/sections/Footer';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found – iUvo';
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#001f3f] text-white flex flex-col justify-center items-center text-center px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          oops! It&apos;s a <span className="text-7xl">404</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          This page doesn’t exist… but your health journey still does. Let’s get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link href="/">
            <button className="bg-white text-[#001f3f] px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Go Back Home
            </button>
          </Link>
          <Link href="/solutions">
            <button className="bg-white text-[#001f3f] px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Explore Our Solutions
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white text-[#001f3f] px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Contact Support
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
