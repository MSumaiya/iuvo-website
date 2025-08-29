// src/app/vision-2030/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import { sanityClient } from '@/../sanity/client';
import { vision2030PageQuery } from '@/../sanity/queries';

type Section = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Vision2030Doc = {
  title?: string;
  heroImageUrl?: string;
  // make sure this matches your GROQ field
  lastUpdated?: string;
  sections?: Section[];
};

const FALLBACK: Vision2030Doc = {
  title: 'Vision 2030',
  heroImageUrl: '/images/vision-hero.jpg',
  lastUpdated: new Date().toISOString(),
  sections: [
    {
      heading: 'Vision 2030',
      paragraphs: [
        'Content will appear here once you publish the Vision 2030 document in Sanity.',
      ],
    },
  ],
};

export default function Vision2030Page() {
  const [data, setData] = useState<Vision2030Doc | null>(null);

  useEffect(() => {
    sanityClient.fetch<Vision2030Doc>(vision2030PageQuery).then(setData).catch(console.error);
  }, []);

  const page = data ?? FALLBACK;

  const updated =
    page.lastUpdated &&
    new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(page.lastUpdated));

  return (
    <div className="bg-white">
      <Navbar variant="light" />

      {/* Wider container + slimmer gutters */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-6 py-8 md:py-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#0A2342]">
          {page.title ?? 'Vision 2030'}
        </h1>

        {page.heroImageUrl && (
          <div className="mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.heroImageUrl}
              alt={page.title ?? 'Vision 2030'}
              className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-md"
            />
          </div>
        )}

        {updated && (
          <p className="text-xs text-gray-500 mt-4">Last Updated {updated}</p>
        )}

        <div className="mt-4 space-y-7">
          {page.sections?.map((s, idx) => (
            <section key={`${s.heading ?? 'sec'}-${idx}`} className="space-y-2">
              {s.heading && (
                <h2 className="text-sm md:text-base font-semibold text-[#0A2342]">
                  {s.heading}
                </h2>
              )}

              {s.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="text-[13px] md:text-[14px] text-gray-700 leading-relaxed"
                >
                  {p}
                </p>
              ))}

              {s.bullets?.length ? (
                <ul className="list-none space-y-1">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        className="mt-[3px] w-4 h-4 shrink-0 text-[#0A2342]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="16 8 10.5 14 8 11.5" />
                      </svg>
                      <span className="text-[13px] md:text-[14px] text-gray-700">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="h-8" />
      </main>

      <Footer />
    </div>
  );
}
