'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { sanityClient } from '@/../sanity/client';
import { urlForImage } from '@/../sanity/image';
import { kickstarterSectionQuery } from '@/../sanity/queries';

type KickstarterData = {
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
    backgroundImage: {
      asset: {
        url: string;
      };
    };
  };
  
  export default function KickstarterSection() {
    const [data, setData] = useState<KickstarterData | null>(null);
  
    useEffect(() => {
      sanityClient.fetch(kickstarterSectionQuery).then(setData);
    }, []);
  
    if (!data) return null;
  
    return (
      <section
        className="relative bg-cover bg-center text-white brightness-125"
        style={{
          backgroundImage: `url(${urlForImage(data.backgroundImage).url()})`,
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold max-w-4xl leading-snug">
            {data.title}
          </h2>
          <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
  {data.description}
</p>

          <a
            href={data.buttonUrl}
            className="mt-4 w-fit bg-[#132845] text-white px-6 py-2 text-sm font-semibold rounded"
          >
            {data.buttonLabel}
          </a>
        </div>
  
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30 z-0" />
      </section>
    );
  }