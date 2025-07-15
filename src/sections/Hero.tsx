'use client'

import { useEffect, useState } from 'react'
import { sanityClient } from '../../sanity/client'
import { heroQuery } from '../../sanity/queries'

interface CTA {
  label: string
  href: string
}

export default function Hero() {
  const [slogan, setSlogan] = useState('')
  const [backgroundUrl, setBackgroundUrl] = useState('')
  const [ctas, setCtas] = useState<CTA[]>([])

  useEffect(() => {
    sanityClient
      .fetch(heroQuery)
      .then((data) => {
        console.log("Fetched hero data:", data)
        setSlogan(data?.catchSlogan || '') // ✅ UPDATED here
        setBackgroundUrl(data?.backgroundImage?.asset?.url)
        setCtas(data?.ctas || [])
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error)
      })
  }, [])

  return (
    <section
      className="relative pt-32 h-[90vh] bg-cover bg-center text-white flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="bg-black/40 absolute inset-0 z-0"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {slogan?.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {ctas.map((cta, i) => (
            <a
              key={i}
              href={cta.href}
              className={
                i === 0
                  ? 'px-6 py-3 bg-[#132845] text-white rounded-md font-medium hover:bg-white hover:text-[#132845]'
                  : 'px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-[#132845]'
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
