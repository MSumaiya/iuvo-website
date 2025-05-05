'use client';

import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#0F1F35] text-white text-sm justify-items-center gap-8">
      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20 py-12 space-x-50">
        {/* Company */}
        <div>
          <h4 className="font-bold mb-3">COMPANY</h4>
          <ul className="space-y-2">
            <li><Link href="#">About iUvo Health</Link></li>
            <li><Link href="#">Individuals</Link></li>
            <li><Link href="#">Providers & Partners</Link></li>
            <li><Link href="#">Public Health Systems</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-bold mb-3">SOLUTIONS</h4>
          <ul className="space-y-2">
            <li><Link href="#">Wearables</Link></li>
            <li><Link href="#">AI Health Software</Link></li>
            <li><Link href="#">Connected Ecosystem</Link></li>
            <li><Link href="#">How it Works</Link></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-bold mb-3">FEATURES</h4>
          <ul className="space-y-2">
            <li><Link href="#">Health Parameters</Link></li>
            <li><Link href="#">Vital Signs</Link></li>
            <li><Link href="#">Biosignatures</Link></li>
            <li><Link href="#">Dashboard</Link></li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h4 className="font-bold mb-3">CORPORATE</h4>
          <ul className="space-y-2">
            <li><Link href="https://iuvohealth.com/corporate/investor-relations">Investor Relations</Link></li>
            <li><Link href="https://iuvohealth.com/corporate/vision-2030">Vision 2030 Aligned</Link></li>
            <li><Link href="https://iuvohealth.com/corporate/compliance">Compliance</Link></li>
            <li><Link href="https://iuvohealth.com/corporate/news">News & Updates</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#061020] text-white w-full">
      <div className="border-t border-[#1E2A3C] px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-4 text-sm text-white/90 flex-wrap justify-center md:justify-start">
            <img src="/logo-footer.svg" alt="iUvo Logo" className="w-6 h-6" />
            <p className="whitespace-nowrap">
              Copyright {currentYear}. iUvo Health. All Rights Reserved.
            </p>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* Right: Social icons */}
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/iuvohealth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#061020] flex items-center justify-center"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://twitter.com/iuvohealth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#061020] flex items-center justify-center"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/iuvohealth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#061020] flex items-center justify-center"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://www.youtube.com/@iuvohealth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#061020] flex items-center justify-center"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@iuvohealth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#061020] flex items-center justify-center"
            >
              <FaTiktok size={16} />
            </a>
            <a
              href="https://www.instagram.com/iuvohealth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#061020] flex items-center justify-center"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
