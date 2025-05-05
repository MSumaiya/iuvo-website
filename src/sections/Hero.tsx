/* export default function Hero() {
    return (
      <section className="relative h-[90vh] bg-cover bg-center text-white flex items-center justify-center px-4" style={{ backgroundImage: "url('/images/hero-bg.webp')" }}>
        <div className="bg-black/40 absolute inset-0 z-0"></div>
  
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empowering Proactive Health<br />
            Through Real-Time Diagnostics
          </h1>
  
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="/shop" className="px-6 py-3 bg-[#132845] text-white rounded-md font-medium hover:bg-blue-700">
              Get Early Access
            </a>
            <a href="/company/individuals" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-blue-600">
              For Individuals
            </a>
            <a href="/company/partners-providers" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-blue-600">
              For Providers & Partners
            </a>
            <a href="/company/public-health" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-blue-600">
              For Public Health Systems
            </a>
          </div>
        </div>
      </section>
    );
  }
   */

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

 /*  useEffect(() => {
    sanityClient.fetch(heroQuery).then((data: { slogan: SetStateAction<string>; backgroundImage: { asset: { url: SetStateAction<string> } }; ctas: SetStateAction<CTA[]> }) => {
      setSlogan(data.slogan)
      setBackgroundUrl(data.backgroundImage?.asset?.url)
      setCtas(data.ctas)
    })
  }, [])
 */
  useEffect(() => {
    sanityClient.fetch(heroQuery).then((data) => {
      console.log("Fetched hero data:", data) // 👀 This helps us debug
      setSlogan(data?.slogan)
      setBackgroundUrl(data?.backgroundImage?.asset?.url)
      setCtas(data?.ctas || [])
    }).catch((error) => {
      console.error("Sanity fetch error:", error) // 👀 This will show network or token issues
    })
  }, [])

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center text-white flex items-center justify-center px-4"
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
                className={i === 0 
                  ? "px-6 py-3 bg-[#132845] text-white rounded-md font-medium hover:bg-white hover:text-[#132845]" 
                  : "px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-[#132845]"
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
