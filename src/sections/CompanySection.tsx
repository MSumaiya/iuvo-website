'use client'

import { useEffect, useState } from 'react'
import { sanityClient } from '@/../sanity/client'
import { companySectionQuery } from '@/../sanity/queries'
import Image from 'next/image'
import Link from 'next/link'

interface CompanySectionData {
  heading: string
  description: string
  image: { asset: { url: string } }
  cta: { label: string; href: string }
}

export default function CompanySection() {
  const [data, setData] = useState<CompanySectionData | null>(null)

  useEffect(() => {
    sanityClient.fetch(companySectionQuery).then(setData)
  }, [])

  if (!data) return null

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-white">
      
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* 📝 Text Part */}
        <div className="w-full md:w-1/2 z-10 p-16 ">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132845] mb-4">
            {data.heading}
          </h2>
          <p className="text-gray-700 text-base mb-6">
            {data.description}
          </p>
          {data.cta?.label && data.cta?.href && (
            <Link
              href={data.cta.href}
              className="inline-block px-6 py-3 bg-[#132845] text-white rounded hover:bg-[#0f1f36] text-sm font-medium transition"
            >
              {data.cta.label}
            </Link>
          )}
        </div>

        {/* 🖼️ Image and Blue Skew */}
        <div className="p-20 relative md:w-1/2 flex justify-center items-center">
          
          {/* Blue Skewed Background */}
          <div className="absolute w-[511px] h-[654px] bg-[#6D95C1] top-0 right-[-255px] scale-x-[-1] z-0" style={{
    transform: "scaleX(-1) skewX(-35deg)",
  }} />

          {/* Image */}
          <div className="relative w-[581px] h-[450px] md:w-[460px] md:h-[460px] rounded-xl overflow-hidden brightness-180 z-10">
            <Image
              src={data.image.asset.url}
              alt={data.heading}
              fill
              className="object-cover rounded-xl"
              
            />
          </div>

        </div>

      </div>
    </section>
  )
}





