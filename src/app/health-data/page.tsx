'use client';

import { useEffect, useState } from 'react';
import { sanityClient } from '@/../sanity/client';
import { healthDataPageQuery } from '@/../sanity/queries';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

/* ========= Types ========= */

type IntelligenceItem = {
  _key?: string;
  title?: string;
  text?: string;
  iconUrl?: string;
};

type Metric = {
  _key?: string;
  value?: string;
  label?: string;
  sublabel?: string;
  iconUrl?: string;
};

type HealthDataDoc = {
  // Hero
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImageUrl?: string;

  // Intelligence
  intelligenceHeading?: string;
  intelligenceIntro?: string;
  intelligenceItems?: IntelligenceItem[];

  // Beyond Data
  beyondHeading?: string;
  beyondIntro?: string;
  bullets?: string[];
  metrics?: Metric[];

  // CTA
  ctaLine?: string;
  ctaSubline?: string;
  ctaBackgroundUrl?: string;

  // Evolution
  evolutionHeading?: string;
  evolutionIntro?: string;
  evolutionSubheading?: string;
  evolutionBullets?: string[];
};

/* ========= Fallbacks ========= */

const DEFAULT_EVOLUTION_INTRO =
  'Inspired by emotional AI pioneers, we’re introducing a next-gen framework.';

const BULLETS: string[] = [
  'Biometric signal collection with medical-grade accuracy.',
  'Actionable insights for individuals, providers, and health systems.',
  'Role-based dashboards with secure access controls.',
  'APIs and connectors for seamless interoperability.',
  'Continuous improvement via feedback and analytics.',
];

const METRICS: Metric[] = [
  { value: '35%', label: 'Better Outcomes', sublabel: '', iconUrl: '/icons/metrics/trend-up.svg' },
  { value: '97%', label: 'Accuracy Rate', sublabel: '', iconUrl: '/icons/metrics/target.svg' },
  { value: '24/7', label: 'Monitoring', sublabel: '', iconUrl: '/icons/metrics/heartbeat.svg' },
  { value: 'Real-time', label: 'Processing', sublabel: '', iconUrl: '/icons/metrics/bolt.svg' },
];

const EVOLUTION_BULLETS: string[] = [
  'Sovereign AI Agent: Your AI adapts with your body and behavior. It belongs to you.',
  'Emotional Signal Mapping: Capturing emotional shifts to enhance context, prediction, and intervention.',
  'Zero-Knowledge Sharing Protocols: Contribute to research or insurance models—without exposing raw data.',
  'Optional Tokenized Rewards: Future plans include reward models for shared compute and insights.',
];

const defaultIntelligence: IntelligenceItem[] = [
  {
    title: 'Predictive Analytics',
    text:
      'Our advanced AI models analyze biometric and emotional trends to accurately forecast potential health risks, enabling timely, personalized preventative interventions before symptoms arise or conditions worsen.',
  },
  {
    title: 'Real-time Insights',
    text:
      'Our neuroadaptive technology processes multi-signal inputs—such as HRV, stress, and cognitive load—in real time, enabling early detection of subtle signs of health deterioration or hormonal imbalance.',
  },
  {
    title: 'Patient Empowerment',
    text:
      'Personalized dashboards and real-time alerts equip users to actively manage their health, encouraging a more engaged, proactive, and informed approach to maintaining wellness and preventing potential issues.',
  },
  {
    title: 'Provider Support',
    text:
      'We offer clinicians tools that deliver actionable insights from comprehensive datasets and clinical guidelines, enhancing their ability to make timely, accurate, and well-informed decisions for patient care.',
  },
  {
    title: 'Data Security',
    text:
      'Our solution ensures end-to-end encryption, adheres to HIPAA and GDPR compliance, enables zero-knowledge data sharing, and performs all processing on-device with no cloud dependency for maximum privacy.',
  },
  {
    title: 'System Integration',
    text:
      'iUvo fully supports FHIR and HL7 standards, offers open API endpoints with sub-200ms latency, and guarantees 99.98% up-time to enable seamless, reliable integration with EMRs, insurers, and other healthcare systems.',
  },
];

/* ========= Page ========= */

export default function HealthDataPage() {
  const [data, setData] = useState<HealthDataDoc | null>(null);

  useEffect(() => {
    sanityClient
      .fetch<HealthDataDoc>(healthDataPageQuery)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  // Normalize all data sources BEFORE rendering (prevents union-type headaches)
  const heroBg = data.backgroundImageUrl ?? '/images/health-data-hero.jpg';

  const intelligence: IntelligenceItem[] =
    data.intelligenceItems?.length ? data.intelligenceItems : defaultIntelligence;

  const bullets: string[] = data.bullets?.length ? data.bullets : BULLETS;

  const metrics: Metric[] = data.metrics?.length ? data.metrics : METRICS;

  const ctaBg = data.ctaBackgroundUrl ?? '/images/mesh-dark.jpg';
  const ctaLine = data.ctaLine ?? 'Ready To Deploy. Built To Evolve. Designed To Serve.';
  const ctaSub =
    data.ctaSubline ??
    'We’re building not just a device or a dashboard—but the foundation of a sovereign, emotionally-aware health intelligence stack. A system designed to predict, personalize, and empower.';

  const evolutionBullets: string[] =
    data.evolutionBullets?.length ? data.evolutionBullets : EVOLUTION_BULLETS;

  return (
    <div className="bg-white">
      <Navbar variant="light" />

      {/* Hero */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data.title ?? 'Health Data'}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            {data.subtitle ?? 'Transforming Health Data Into Actionable Intelligence'}
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            {data.description ??
              'iUvo captures, analyzes, and translates biometric data into insights that empower users, enable providers, and inform health systems.'}
          </p>
        </div>
      </section>

      {/* Complete Healthcare Intelligence */}
      <section className="bg-[#0A2342] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            {data.intelligenceHeading ?? 'Complete Healthcare Intelligence'}
          </h3>
          {data.intelligenceIntro && (
            <p className="text-center text-white/80 max-w-3xl mx-auto mt-3 mb-8 text-sm leading-relaxed">
              {data.intelligenceIntro}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {intelligence.map((item) => (
              <div
                key={item._key ?? item.title ?? Math.random().toString(36)}
                className="rounded-xl border border-white/15 bg-white/5 p-5 hover:bg-white/10 transition h-full"
              >
                <div className="flex items-start gap-4">
                  {item.iconUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.iconUrl}
                      alt=""
                      className="w-10 h-10 object-contain mt-1 rounded"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold">▢</span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm leading-relaxed opacity-90">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Data Collection */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold">
            {data.beyondHeading ?? 'Beyond Data Collection'}
          </h3>

          <div className="mt-3 grid gap-10 lg:grid-cols-[1fr_418px]">
            {/* LEFT: intro + bullets */}
            <div>
              {(data.beyondIntro ?? '').length > 0 && (
                <p className="text-gray-600 max-w-3xl mb-6">{data.beyondIntro}</p>
              )}

              <ul className="space-y-3">
                {bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {/* circle + tick (Figma style) */}
                    <svg
                      className="mt-1 w-5 h-5 shrink-0 text-[#0A2342]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="16 8 10.5 14 8 11.5" />
                    </svg>
                    <p className="text-gray-700">{b}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: metrics card */}
            <div className="rounded-[10px] bg-[#F5F6FA] p-4 lg:w-[418px] h-[290px]">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 h-full">
                {metrics.map((m, i) => (
                  <div
                    key={m._key ?? `${m.label ?? 'metric'}-${i}`}
                    className="text-center flex flex-col items-center justify-center"
                  >
                    {m.iconUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={m.iconUrl}
                        alt=""
                        className="mx-auto mb-2 w-8 h-8 object-contain"
                      />
                    )}

                    <div className="text-3xl font-extrabold text-[#0A2342] leading-none">
                      {m.value}
                    </div>
                    <div className="text-sm font-medium mt-1 text-[#0A2342]/90">
                      {m.label}
                    </div>
                    {m.sublabel && (
                      <div className="text-xs text-gray-500 mt-0.5">{m.sublabel}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA banner */}
      <section
        className="relative py-16 md:py-20 text-white text-center"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">{ctaLine}</h3>
          <p className="text-xs md:text-sm text-white/80 leading-relaxed">{ctaSub}</p>
        </div>
      </section>

      {/* What’s New in Our Evolution */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold">
            {data.evolutionHeading ?? 'What’s New in Our Evolution'}
          </h3>

          <p className="text-gray-600 max-w-3xl mt-2 mb-6">
            {data.evolutionIntro ?? DEFAULT_EVOLUTION_INTRO}
          </p>

          <h4 className="text-lg font-semibold mb-4">
            {data.evolutionSubheading ?? 'Core Components Include:'}
          </h4>

          <ul className="space-y-3">
            {evolutionBullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {/* rounded tick */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#001f3f] mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
