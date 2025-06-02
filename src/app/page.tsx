import AboutSection from "@/components/Home/AboutSection";
import BannerSection from "@/components/Home/BannerSection";
import BannerSubSection from "@/components/Home/BannerSubSection";
import CounterSection from "@/components/Home/CounterSection";
import FAQSection from "@/components/Home/FAQSection";
import GutHealthLibrary from "@/components/Home/GutHealthLibrary";
import LatestArticles from "@/components/Home/LatestArticles";
import SpecialitiesSection from "@/components/Home/SpecialitiesSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

import { Container } from 'react-bootstrap';

export default function Home() {
  return (
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
  );
}
