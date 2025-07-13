'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

export default function ShopPage() {
  return (
    <div>
      <Navbar variant="light" />

      <main className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-6">iUvo Health Shop</h1>
        <p className="text-gray-700 text-lg mb-12">
          We’re working on something exciting!  
          Soon you’ll be able to explore wearables, accessories, and more — built for better health.
        </p>
        <div className="text-sm text-gray-500">Coming soon in 2025 🎉</div>
      </main>

      <Footer />
    </div>
  );
}
