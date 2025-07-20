'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { sanityClient } from '@/../sanity/client';
import { navQuery } from '@/../sanity/queries';

interface NavItem {
  label: string;
  slug: string;
}

interface NavbarProps {
  variant?: 'transparent' | 'light' | 'dark';
}

export default function Navbar({ variant = 'light' }: NavbarProps) {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    sanityClient.fetch(navQuery).then((data) => setNavItems(data));
  }, []);

  const baseStyle =
    variant === 'transparent'
      ? 'bg-transparent text-white'
      : variant === 'dark'
      ? 'bg-[#001f3f] text-white'
      : 'bg-white text-[#001f3f]';

  const linkHover =
    variant === 'transparent'
      ? 'hover:text-white/80'
      : 'hover:text-[#003366]';

  const isTransparent = variant === 'transparent';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`${
        isTransparent ? 'absolute top-0 left-0 w-full z-10' : 'w-full'
      } ${baseStyle} py-4`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between min-h-[80px] md:min-h-[100px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/iuvo-navy-logo.png"
              alt="iUvo Logo"
              width={80}
              height={30}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className={`text-sm font-medium capitalize transition border-b-2 pb-1 ${
                  pathname === item.slug
                    ? isTransparent
                      ? 'border-white text-white'
                      : 'border-[#001f3f] text-[#001f3f]'
                    : 'border-transparent'
                } ${linkHover}`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/shop"
              className={`px-4 py-2 rounded transition text-sm font-semibold ${
                isTransparent
                  ? 'bg-[#001f3f] text-white hover:bg-white hover:text-[#001f3f]'
                  : 'bg-[#001f3f] text-white hover:bg-[#003366]'
              }`}
            >
              Shop
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-4 pt-2 ${baseStyle}`}>
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium capitalize transition border-b border-gray-300 pb-1 ${
                  pathname === item.slug
                    ? isTransparent
                      ? 'text-white'
                      : 'text-[#001f3f]'
                    : ''
                } ${linkHover}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className={`w-fit px-4 py-2 rounded transition text-sm font-semibold ${
                isTransparent
                  ? 'bg-[#001f3f] text-white hover:bg-white hover:text-[#001f3f]'
                  : 'bg-[#001f3f] text-white hover:bg-[#003366]'
              }`}
            >
              Shop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
