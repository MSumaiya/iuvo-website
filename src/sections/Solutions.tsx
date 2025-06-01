'use client';

import Image from 'next/image';

interface Solution {
  _id: string;
  title?: string;
  description?: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
}

interface SolutionsProps {
  data?: Solution[];
}

export default function Solutions({ data = [] }: SolutionsProps) {
  return (
    <section className="bg-[#132845] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Our Solutions
        </h2>

        {/* Solutions grid */}
        {data.length === 0 ? (
          <p className="text-white/60">No solutions available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {data.map((item) => (
              <div
                key={item._id}
                className="flex flex-col items-center w-[388px]"
              >
                {/* Image box */}
               <div
                    className="w-[388px] h-[254px] overflow-hidden rounded-xl relative bg-white"
                  >
                    {item.image?.asset?.url ? (
                      <Image
                        src={item.image.asset.url}
                        alt={item.title || 'Solution image'}
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, 388px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-sm text-gray-600">
                        No image
                      </div>
                    )}
                  </div>

                {/* Text below image */}
                <h3 className="text-white text-lg font-semibold mt-3 mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm leading-snug text-center max-w-[240px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
