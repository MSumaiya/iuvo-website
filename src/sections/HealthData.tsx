'use client';

import { useEffect, useState } from 'react';
import { sanityClient } from '@/../sanity/client';
import { urlForImage } from '@/../sanity/image';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { healthDataQuery } from '@/../sanity/queries';

type HealthDataType = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: {
    asset: {
      _ref: string;
    };
  };
};

export default function HealthData() {
  const [data, setData] = useState<HealthDataType | null>(null);

  useEffect(() => {
    sanityClient.fetch(healthDataQuery).then(setData);
  }, []);

  if (!data) return null;

  return (
    <section className="relative py-20 z-10 bg-white overflow-hidden">
      {/* Skewed Background Shape */}
      <div
  className="absolute left-0 top-1/2 -translate-y-1/2 w-[506px] h-[648px] bg-[#6D95C1] -z-10"
  style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
/>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-2">
        {/* Image */}
        <div className="relative w-full md:w-1/2 max-w-md rounded-xl shadow-xl overflow-hidden z-10">
          <Image
            src={urlForImage(data.image).url()}
            alt={data.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 max-w-xl bg-white p-8 z-10">
          <h2 className="text-2xl font-bold text-[#132845] mb-4">{data.title}</h2>
          <p className="text-sm text-[#132845] mb-6 leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
          <a
            href={data.buttonUrl}
            className="inline-flex items-center bg-[#132845] text-white px-4 py-2 text-sm"
          >
            {data.buttonLabel}
            <span className="mx-2 h-4 w-px bg-white" />
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}



/* decor */

/* position: absolute;
width: 506px;
height: 648px;
left: 0px;
top: calc(50% - 648px/2);

background: #6D95C1; */

/* Inside auto layout */
/* flex: none;
order: 1;
flex-grow: 0;
z-index: 1; */
