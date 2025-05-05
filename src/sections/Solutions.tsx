'use client'

import { useEffect, useState } from 'react'
import { sanityClient } from '@/../sanity/client'
import { solutionsQuery } from '@/../sanity/queries'
import Image from 'next/image'

interface Solution {
  title: string
  description: string
  image: { asset: { url: string } }
}

export default function Solutions() {
  const [solutions, setSolutions] = useState<Solution[]>([])

  useEffect(() => {
    sanityClient.fetch(solutionsQuery).then(setSolutions)
  }, [])

  return (
    <section className="bg-[#132845] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Our Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 justify-items-center">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-[388px]">
              {/* Image container with fixed size and rounded corners */}
              <div
                className={`relative w-[388px] h-[254px] overflow-hidden rounded-xl ${
                  index === 0 ? 'bg-white p-4' : 'bg-transparent'
                }`}
              >
                <Image
                  src={item.image.asset.url}
                  alt={item.title}
                  fill
                  className="object-contain rounded-xl"
                />
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
      </div>
    </section>
  )
}
