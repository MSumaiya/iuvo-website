import Hero from "@/sections/Hero";
import Navbar from "@/components/Navbar";
import Solutions from "@/sections/Solutions";
import CompanySection from "@/sections/CompanySection";
import HowItWorks from "@/sections/HowItWorks";
import HealthData from "@/sections/HealthData";
import KickstarterSection from "@/sections/KickstarterSection";
import Footer from "@/sections/Footer";

import { sanityClient } from "../../sanity/client";
import { solutionsQuery } from "../../sanity/queries";

export default async function Home() {
  const data = await sanityClient.fetch(solutionsQuery);

  return (
    <main>
      <Navbar variant="transparent" />
      <Hero />
      <Solutions data={data} />
      <CompanySection />
      <HowItWorks />
      <HealthData />
      <KickstarterSection />
      <Footer />
    </main>
  );
}
