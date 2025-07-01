import AboutSection1 from '@/components/Home/AboutSection1';
import FAQSection from '@/components/Home/FAQSection';
import WhyChooseSection1 from '@/components/WhyChooseSection1';
import BariatricBanner from '@/components/BreadcrumbBanner';
import Head from 'next/head';

// SEO Metadata
export const metadata = {
    title: "Dr. Meghnad G. Joshi | About Us",
    description:
        "Dr. Meghnad G. Joshi is a renowned specialist in minimally invasive and robotic surgery, dedicated to providing advanced, patient-centered healthcare solutions.",
    keywords:
        "Dr. Meghnad G. Joshi, Gastrointestinal Surgeon, Laparoscopic Surgeon, Colorectal Surgeon, Metabolic Surgery"
};

export default function About() {
    return (
        <>
            {/* SEO Metadata */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.drshabeerahmed.com/aboutus" />
                {/* Open Graph / Social Media SEO */}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content="/img/seo/dr-shabeer-ahmed-about.jpg" />
                <meta property="og:url" content="https://www.drshabeerahmed.com/aboutus" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Dr. Meghnad G. Joshi Clinic" />
            </Head>

            {/* Banner Section */}
            {/* <BariatricBanner title="About Us" imageSrc="/img/bannerslider/Bariatric Surgery 2.webp" /> */}
              <div className='mt-5'></div>
            {/* Main Content */}
            <AboutSection1 />
            <WhyChooseSection1 />
            <FAQSection />
        </>
    );
}