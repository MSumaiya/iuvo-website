'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import Image from 'next/image';

export default function InvestorRelationsDetailPage() {
  return (
    <div>
      <Navbar variant="light" />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Investor Relations</h1>

        <div className="mb-10">
          <Image
            src="/images/compliance.jpg" // Change this to match your actual image
            alt="Investor working"
            width={1200}
            height={500}
            className="rounded shadow"
          />
        </div>

        <p className="text-sm text-gray-500 mb-2">Last Updated: 7 July 2025</p>

        <h2 className="text-xl font-semibold mb-2">
          Invest in the Future of Precision Health
        </h2>
        <p className="mb-6 text-gray-800">
          iUVO is transforming precision health through diagnostics, machine health data, and globally scalable wearable technology. We&apos;re building a smarter, more accessible, and more efficient future — across individuals, providers, and public health systems.
        </p>

        <h3 className="text-lg font-semibold mb-2">Why iUVO</h3>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>Multi-year R&D investment into the intersection of wearables, digital health, and AI – positioning to exceed projections by 2030.</li>
          <li>Mission-driven and patient-focused with a proven leadership team in clinical research, software development, and international scale-up.</li>
          <li>Strategic alignment with global government health policies (including Saudi Arabia Vision 2030).</li>
          <li>Low-burden data compliance and high-trust security framework for B2B and B2G environments.</li>
          <li>Designed for global scale — built for rapid deployment, remote access, and long-term economic resilience.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Our Timeline</h3>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>2021–2022: Clinical validation and early-stage research</li>
          <li>2023–2024: Seed financing and pilot programs with strategic hospitals</li>
          <li>2025: Public launch of iuvohealth.com</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Use of Funds</h3>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>Regulatory compliance and certifications (EU, US, MENA, India)</li>
          <li>R&D in wearable AI + remote diagnostics</li>
          <li>Infrastructure and platform development</li>
          <li>Go-to-market expansion across EMEA, SEA, LATAM, and Africa</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
        <p className="mb-6 text-gray-800">
          To make precision health more accessible, scalable, and intelligent for every person and every healthcare system on the planet.
        </p>

        <h3 className="text-lg font-semibold mb-2">Investor Materials</h3>
        <ul className="list-disc list-inside mb-6 text-blue-700">
          <li>
            <a href="#" className="hover:underline">
              Investor Pitch Deck (secure access)
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Financial Projections (upon request)
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Product Roadmap (under NDA)
            </a>
          </li>
        </ul>

        <p className="text-sm">
          Or email us directly at{' '}
          <a href="mailto:invest@iuvohealth.com" className="text-blue-700 hover:underline">
            invest@iuvohealth.com
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
