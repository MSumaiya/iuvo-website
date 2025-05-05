'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { sanityClient } from '@/../sanity/client'
import { navQuery } from '@/../sanity/queries'

interface NavItem {
  label: string
  slug: string
}

export default function Navbar() {
  const [navItems, setNavItems] = useState<NavItem[]>([])

  useEffect(() => {
    sanityClient.fetch(navQuery).then((data) => setNavItems(data))
  }, [])

  return (
    <nav className="absolute top-16 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <Image
          src="/images/iuvo-navy-logo.png"  // The path to your image
          alt="iUvo Logo"
          width={80}  // Set the width of the image
          height={30}  // Set the height of the image
        />
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="text-white text-sm font-medium hover:text-white/80 transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Shop CTA */}
            <Link
              href="/shop"
              className="ml-2 px-4 py-2 bg-[#132845] text-white rounded hover:bg-gray-200 hover:text-[#132845] text-sm font-medium transition"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
