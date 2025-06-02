'use client'
import AboutSection from '@/components/Home/AboutSection';
import FAQSection from '@/components/Home/FAQSection';
import WhyChooseSection from '@/components/WhyChooseSection';

import BariatricBanner from '@/components/BreadcrumbBanner';
// Metadata export without explicit typing to avoid build errors

export default function About() {
    return (
        <>
            <BariatricBanner title="About US" imageSrc="/img/bannerslider/Bariatric Surgery 2.webp" />
            <div className="mt-5">
                <AboutSection />
                <WhyChooseSection />
                <FAQSection />
            </div>
        </>

    );
}
