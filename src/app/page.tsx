// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
//import styles from "./page.module.css";
import Hero from "@/sections/Hero";
import Navbar from "@/components/Navbar";
import Solutions from "@/sections/Solutions";
import CompanySection from "@/sections/CompanySection";
import HowItWorks from "@/sections/HowItWorks";
import HealthData from "@/sections/HealthData";
import KickstarterSection from "@/sections/KickstarterSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
  <main>
      <Navbar />
      <Hero />
      <Solutions />
      <CompanySection />
      <HowItWorks />
      <HealthData />
      <KickstarterSection />
      <Footer />
  </main>
  );
}
