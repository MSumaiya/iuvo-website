// app/why-iuvo/page.tsx
import { sanityClient } from '@/../sanity/client';
import { whyIuvoPageQuery } from '@/../sanity/queries';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import Image from 'next/image';

export default async function WhyIuvoPage() {
  const data = await sanityClient.fetch(whyIuvoPageQuery);

  if (!data) return <p className="p-6 text-gray-600">Content not found.</p>;

  const {
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroImage,
    aboutTitle,
    aboutSubTitle,
    aboutText,
    aboutImage,
    team,
    mission,
    vision,
    sections,
  } = data;

  return (
    <div className="text-gray-800">
      <Navbar variant="light" />

      {/* Hero Section */}
      <div className="pt-20 relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        {heroImage?.asset?.url && (
          <Image
            src={heroImage.asset.url}
            alt="Hero Image"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
        )}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">{heroTitle}</h1>
          <h2 className="text-xl md:text-2xl mb-4 max-w-2xl">{heroSubtitle}</h2>
          <p className="max-w-2xl text-md md:text-lg">{heroDescription}</p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#001f3f] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {aboutImage?.asset?.url && (
            <Image
              src={aboutImage.asset.url}
              alt="About iUvo"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          )}
          <div>
            <h2 className="text-3xl font-semibold mb-4">{aboutTitle}</h2>
            <h3 className="text-xl font-semibold mb-4">{aboutSubTitle}</h3>
            <p className="text-lg leading-relaxed">{aboutText}</p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {team[0]?.image?.asset?.url && (
              <div className="flex justify-start">
                <Image
                  src={team[0].image.asset.url}
                  alt={team[0].name}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg transform -rotate-3"
                />
              </div>
            )}
            <div className="text-center px-4">
              <h2 className="text-3xl font-semibold mb-6">Leadership</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                iUvo is led by a diverse and globally-minded team with deep expertise
                in digital health, AI, product innovation, and international business.
                Our leadership includes serial entrepreneurs, clinical researchers,
                data scientists, and regulatory strategists.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                Together, we’re not just building a product — we’re building a movement
                toward smarter, safer and more equitable care.
              </p>
            </div>
            {team[1]?.image?.asset?.url && (
              <div className="flex justify-end">
                <Image
                  src={team[1].image.asset.url}
                  alt={team[1].name}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg transform rotate-3"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Mission</h2>
            <p className="text-lg">{mission}</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-2">Vision</h2>
            <p className="text-lg">{vision}</p>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      <section className="py-20 px-0 space-y-24">
        {sections?.map((section: any, idx: number) => {
          if (idx === 0) {
            return (
              <div
                key={idx}
                className="grid md:grid-cols-2 items-center gap-10 px-4 max-w-6xl mx-auto"
              >
                <div>
                  <h3 className="text-3xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    iUvo gives individuals control over their health like never before. Our smart wearables continuously monitor vital signs and biosignatures thus providing real-time insights through our mobile app. Users can track health trends, receive personalized recommendations, and securely share their data with healthcare professionals.
                  </p>
                  <p className="mt-4 font-semibold italic text-gray-800">
                    No guesswork. Just clarity.
                  </p>
                </div>
                {section.image?.asset?.url && (
                  <div className="flex justify-center md:justify-end">
                    <Image
                      src={section.image.asset.url}
                      alt={section.title}
                      width={400}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            );
          }

          if (idx === 1) {
            return (
              <div
                key={idx}
                className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
              >
                {section.image?.asset?.url && (
                  <Image
                    src={section.image.asset.url}
                    alt={section.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="z-0"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 text-center">
                  <div className="text-white max-w-2xl">
                    <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
                    <p className="text-lg leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          if (idx === 2) {
            return (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 items-center gap-10 px-4 max-w-6xl mx-auto min-h-[300px]"
              >
                {section.image?.asset?.url && (
                  <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]">
                    <Image
                      src={section.image.asset.url}
                      alt={section.title}
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
                <div className="bg-white shadow-lg p-6 md:-ml-40 z-10 relative max-w-md">
                  <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                  <p className="text-gray-700 text-md leading-relaxed">{section.text}</p>
                </div>
              </div>
            );
          }

          return null;
        })}
      </section>

      <Footer />
    </div>
  );
}
