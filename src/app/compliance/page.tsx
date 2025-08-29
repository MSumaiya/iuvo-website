'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import { sanityClient } from '@/../sanity/client';
import { compliancePageQuery } from '@/../sanity/queries';

type Section = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type ComplianceDoc = {
  title?: string;
  heroImageUrl?: string;
  lastUpdated?: string;
  sections?: Section[];
};

export default function CompliancePage() {
  const [data, setData] = useState<ComplianceDoc | null>(null);

  useEffect(() => {
    sanityClient.fetch<ComplianceDoc>(compliancePageQuery)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  const updated =
    data.lastUpdated &&
    new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(data.lastUpdated));

  return (
    <div className="bg-white">
      <Navbar variant="light" />

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#0A2342]">
          {data.title ?? 'Compliance & Regulatory Integrity'}
        </h1>

        {data.heroImageUrl && (
          <div className="mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.heroImageUrl}
              alt={data.title ?? 'Compliance & Regulatory Integrity'}
              className="w-full h-[280px] md:h-[340px] object-cover rounded-md"
            />
          </div>
        )}

        {updated && (
          <p className="text-xs text-gray-500 mt-4">Last Updated {updated}</p>
        )}
         <p className="mt-6 space-y-8">At iUvo, we know trust is earned and built on a foundation of transparency, security, and strict adherence to global health and data protection regulations. Our wearable health ecosystem is meticulously designed to meet the highest compliance standards, ensuring regulatory readiness across international markets. From initial development to deployment, we integrate robust safeguards to protect user data and uphold industry best practices.</p>
        
        <div className="mt-6 space-y-8">
          {data.sections?.map((s, idx) => (
            <section key={idx} className="space-y-2">
              {s.heading && (
                <h2 className="text-base md:text-lg font-semibold text-[#0A2342]">
                  {s.heading}
                </h2>
              )}

              {s.paragraphs?.map((p, i) => (
                <p key={i} className="text-[13px] md:text-[14px] text-gray-700 leading-relaxed">
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
      </main>

      <Footer />
    </div>
  );
}
