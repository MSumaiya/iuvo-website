/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { sanityClient } from '@/../sanity/client';
import { solutionsPageQuery } from '@/../sanity/queries';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ConnectedHealthSection from '@/sections/ConnectedHealthSection';
import Footer from '@/sections/Footer';

import {
  HeartPulse,
  Thermometer,
  Droplet,
  Brain,
  Stethoscope,
  Activity,
  Flame,
  Users,
 /*  Heart,
  Virus,
  Apple,
  Clock,
  Scan,
  Handshake */
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
type IconName = keyof typeof LucideIcons;

export default function SolutionsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch(solutionsPageQuery).then(setData).catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  const smartWearableFeatures = [
    { icon: HeartPulse, title: 'Heart rate', subtitle: '& variability' },
    { icon: Droplet, title: 'Blood oxygen', subtitle: '& pressure' },
    { icon: Thermometer, title: 'Skin', subtitle: 'temperature' },
    { icon: Brain, title: 'Sleep &', subtitle: 'stress patterns' },
    { icon: Stethoscope, title: 'Respiratory', subtitle: 'rate' },
    { icon: Activity, title: 'Movement', subtitle: 'trends' },
    { icon: Flame, title: 'Glucose', subtitle: 'levels' },
    { icon: Users, title: 'Fertility &', subtitle: 'Menstruation' },
  ];

  return (
    <div>
      <Navbar variant="light" />

      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center text-white flex items-center justify-center px-4 text-center"
        style={{ backgroundImage: `url(${data.heroImage?.asset?.url})` }}
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.heroTitle}</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-4">{data.heroSubtitle}</h2>
          <p className="text-sm md:text-base leading-relaxed">{data.heroDescription}</p>
        </div>
      </section>

      {/* Smart Wearables Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 space-y-24">
        <div className="md:flex gap-10 items-center">
          <Image
            src="/images/iuvo-wearables.png"
            alt="Smart Wearables"
            width={500}
            height={400}
            className="rounded shadow w-full md:w-[45%]"
          />
          <div className="md:w-[55%] mt-6 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4">Smart Wearables</h3>
            <p className="mb-6 text-gray-700">
              Our smart wearables, such as rings, bands, watches and glucose monitors – track real-time biosignals:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-center">
              {smartWearableFeatures.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <item.icon className="w-8 h-8 mb-2 text-black" />
                  <span className="font-semibold leading-tight">{item.title}</span>
                  <span className="leading-tight">{item.subtitle}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              <strong className="block font-semibold">Designed for 24/7 comfort, accuracy, and clinical utility.</strong>
              Data is securely transmitted to our software platform for instant insights.
            </p>
          </div>
        </div>
      </section>

      {/* Transform Wearables Into Actionable Analytics */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/images/actionable-insights.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Transform Wearables Into Actionable Analytics
          </h2>
          <p className="text-sm md:text-base">
            iUvo Health wearables and intelligent software convert data into actionable health insights, lowering risks and boosting well-being.
          </p>
        </div>
      </section>

      {/* AI Health Software */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:flex md:items-center md:gap-16">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">AI Health Software</h2>
          <p className="text-gray-700 mb-6">
            The iUvo Health AI models analyse biometric data to predict risks and improve health outcomes, delivering actionable insights and personalised care.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 text-sm text-center">
            {[
              { label: 'Detect early\nwarning signs', icon: 'HeartPulse' },
              { label: 'Support differential\ndiagnosis', icon: 'Stethoscope' },
              { label: 'Recommend\npersonalised next steps', icon: 'Handshake' },
              { label: 'Lifestyle and\nrecovery insights', icon: 'Apple' },
              { label: 'Enable real-time\npatient monitoring', icon: 'Clock' },
              { label: 'Disease detection\n& outcomes', icon: 'Scan' },
            ].map(({ label, icon }, i) => {
              const IconComponent = LucideIcons[icon as IconName] as React.ElementType;
              return (
                <div key={i} className="flex flex-col items-center text-gray-700">
                  <IconComponent size={32} className="mb-2 text-blue-600" />
                  <p className="whitespace-pre-line text-center">{label}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-6 font-semibold text-sm text-gray-800">
            AI-powered. Always learning. Built for better decisions.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/ai-software.png"
            alt="AI Health Chart"
            width={600}
            height={400}
            className="rounded shadow mx-auto"
          />
        </div>
      </section>
      <ConnectedHealthSection />

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{data.howItWorksTitle}</h2>
          <p className="text-lg text-gray-600">{data.howItWorksSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {data.howItWorksSteps?.map((step: any, index: number) => (
            <div key={index} className="bg-white rounded shadow p-6 text-center">
              {step.image?.asset?.url && (
                <Image
                  src={step.image.asset.url}
                  alt=""
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
              )}
              <h4 className="text-lg font-medium mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        {data.builtToAdaptText && (
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Built to Adapt</h3>
            <p className="text-gray-700 leading-relaxed">{data.builtToAdaptText}</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
