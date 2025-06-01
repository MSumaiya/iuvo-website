'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { sanityClient } from '@/../sanity/client';
import { healthDataPageQuery } from '@/../sanity/queries';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

export default function HealthDataPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch(healthDataPageQuery).then(setData).catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div>
      <Navbar variant="light" />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${data.backgroundImage?.asset?.url})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <h2 className="text-2xl font-semibold mb-2">{data.subtitle}</h2>
          <p className="text-base">{data.description}</p>
        </div>
      </section>

      {/* Placeholder section */}
      <div className="h-[300px] bg-[#0A2342]"></div>

      <Footer />
    </div>
  );
}
