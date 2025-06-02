import type { Metadata } from "next";
import AboutSection from "@/components/Home/AboutSection";
import BannerSection from "@/components/Home/BannerSection";
import BannerSubSection from "@/components/Home/BannerSubSection";
import CounterSection from "@/components/Home/CounterSection";
import FAQSection from "@/components/Home/FAQSection";
import GutHealthLibrary from "@/components/Home/GutHealthLibrary";
import LatestArticles from "@/components/Home/LatestArticles";
import SpecialitiesSection from "@/components/Home/SpecialitiesSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

export const metadata: Metadata = {
  title: "Dr Shabeer Ahmed | Gastrointestinal & Laparoscopic Surgeon",
  description: "Dr. Shabeer Ahmed is a renowned Gastrointestinal and Laparoscopic Surgeon, specializing in advanced minimally invasive procedures with exceptional patient care.",
  keywords: "Dr Shabeer Ahmed, Gastrointestinal Surgeon, Laparoscopic Surgeon, Colorectal Surgeon, Metabolic Surgery",
};

export default function Home() {
  return (
    <>
      <div className="mt-5">
        <BannerSection />
        <BannerSubSection />
        <AboutSection />
        <CounterSection />
        <SpecialitiesSection />
        <GutHealthLibrary />
        <LatestArticles />
        <FAQSection />
        <TestimonialSection />
      </div>
    </>
  );
}
