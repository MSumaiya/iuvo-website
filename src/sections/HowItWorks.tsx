// components/sections/HowItWorks.tsx
'use client'


import Image from 'next/image'
import { sanityClient } from '@/../sanity/client'
import { howItWorksQuery } from '@/../sanity/queries'
import { urlForImage } from '@/../sanity/image'
import { useEffect, useState } from 'react'

interface HowItWorksData {
  title: string
  description: string
  buttonLabel: string
  image: {
    asset: {
      _ref: string
    }
  }
}

export default function HowItWorks() {
  const [data, setData] = useState<HowItWorksData | null>(null)

  useEffect(() => {
    sanityClient.fetch(howItWorksQuery).then((res) => setData(res))
  }, [])

  if (!data) return null

  return (
    <section className="relative bg-[#0F2640] py-16 px-4 sm:px-6 lg:px-20">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center relative z-10">
      {/* Image */}
      <div className="relative w-full md:w-[460px] h-[320px] md:h-[380px] rounded-xl overflow-hidden">
        <Image
          src={urlForImage(data.image).url()}
          alt={data.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content Card */}
      <div className="bg-white shadow-lg rounded-md p-6 md:p-8 max-w-lg md:-ml-15 mt-6 md:mt-0 z-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0F2640] mb-4">
          {data.title}
        </h2>
        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-5">
          {data.description}
        </p>
        <button className="bg-[#0F2640] text-white text-sm font-medium px-5 py-2 rounded">
          {data.buttonLabel}
        </button>
      </div>
    </div>
  </section>
  )
}
