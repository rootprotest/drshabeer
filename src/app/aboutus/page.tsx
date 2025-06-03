'use client'
import AboutSection from '@/components/Home/AboutSection';
import FAQSection from '@/components/Home/FAQSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import BariatricBanner from '@/components/BreadcrumbBanner';
import Head from 'next/head';

// SEO Metadata
const pageMetadata = {
    title: "About Dr. Shabeer Ahmed - Gastrointestinal & Laparoscopic Surgeon | Bangalore",
    description:
        "Learn about Dr. Shabeer Ahmed, a Senior Consultant in Gastrointestinal Surgery, Laparoscopic Surgery, and Bariatric Surgery with over 36 years of experience.",
    keywords:
        "about dr shabeer ahmed, gastrointestinal surgeon, laparoscopic surgeon, weight loss surgeon, obesity treatment, liver disease specialist, Bangalore",
};

export default function About() {
    return (
        <>
            {/* SEO Metadata */}
            <Head>
                <title>{pageMetadata.title}</title>
                <meta name="description" content={pageMetadata.description} />
                <meta name="keywords" content={pageMetadata.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.drshabeerahmed.com/aboutus" />
                {/* Open Graph / Social Media SEO */}
                <meta property="og:title" content={pageMetadata.title} />
                <meta property="og:description" content={pageMetadata.description} />
                <meta property="og:image" content="/img/seo/dr-shabeer-ahmed-about.jpg" />
                <meta property="og:url" content="https://www.drshabeerahmed.com/aboutus" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Dr. Shabeer Ahmed Clinic" />
            </Head>

            {/* Banner Section */}
            <BariatricBanner title="About Us" imageSrc="/img/bannerslider/Bariatric Surgery 2.webp" />

            {/* Main Content */}
            <AboutSection />
            <WhyChooseSection />
            <FAQSection />
        </>
    );
}