/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { sanityClient } from '@/../sanity/client';
import { investorRelationsQuery } from '@/../sanity/queries';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

export default function InvestorRelationsPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch(investorRelationsQuery).then(setData).catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div>
      <Navbar variant="light" />

      <main className="max-w-6xl mx-auto px-4 py-16">
        {data.sections?.map((section: any, index: number) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 mb-16"
          >
            <div className="md:w-1/2">
              {section.imageUrl && (
                <Image
                  src={section.imageUrl}
                  alt={section.title}
                  width={500}
                  height={400}
                  className="rounded shadow"
                />
              )}
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
              <p className="text-gray-700 mb-4">{section.description}</p>
              {section.buttonText && section.buttonUrl && (
                <a
                  href={section.buttonUrl}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {section.buttonText} &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
            Load More
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
