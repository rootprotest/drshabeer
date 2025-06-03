// pages/bariatric-surgery.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Bariatric Surgery - Types, Benefits & Procedures | Bangalore",
    description:
        "Know about different types of bariatric surgery like gastric bypass, sleeve gastrectomy, and mini gastric bypass. Learn how it helps in weight loss and improves health.",
    keywords:
        "bariatric surgery, gastric bypass, sleeve gastrectomy, weight loss surgery, obesity treatment, Bangalore"
};

export default function BariatricSurgery() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Bariatric Surgery"
                imageSrc="/img/bannerslider/Bariatric Surgery 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Bariatic surgery.webp"
                            alt="Bariatric Surgery"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <p className="text-justify">
                            Bariatric surgery refers to a variety of surgical procedures designed to help people with obesity lose weight by making changes to their digestive system.
                            These surgeries alter the stomach and/or intestines to limit food intake, reduce nutrient absorption, or change the way the body digests food, leading to significant and long-term weight loss.
                            It is often recommended for individuals with a Body Mass Index (BMI) over 40 or over 35 with related health issues like diabetes, hypertension, or sleep apnea.
                        </p>
                    </Col>
                </Row>

                {/* Types of Surgery */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4 className="mt-4">Types of Bariatric Surgery</h4>

                        <p className="text-justify">
                            <strong>1. Gastric Bypass (Roux-en-Y Gastric Bypass):</strong><br />
                            Procedure: A small pouch is created from the stomach and connected directly to the small intestine.<br />
                            Effect: Reduces food intake and nutrient absorption.
                        </p>

                        <p className="text-justify">
                            <strong>2. Sleeve Gastrectomy:</strong><br />
                            Procedure: About 75–80% of the stomach is removed, leaving a banana-shaped tube.<br />
                            Effect: Reduces food intake and alters hunger hormones.
                        </p>

                        <p className="text-justify">
                            <strong>3. Mini Gastric Bypass Surgery (MGB):</strong><br />
                            MGB, or Single Anastomosis Gastric Bypass, is a simpler alternative to traditional bypass surgery.
                        </p>

                        <p className="text-justify">
                            <strong>1. Procedure:</strong><br />
                            A small stomach pouch is stapled vertically. A loop of intestine (150–200 cm from stomach) is connected to the pouch, bypassing part of the intestine.
                        </p>

                        <p className="text-justify">
                            <strong>2. Mechanism of Weight Loss:</strong><br />
                            Restriction: Limits food intake.<br />
                            Malabsorption: Reduces nutrient and calorie absorption.
                        </p>

                        <p className="text-justify">
                            <strong>3. Advantages:</strong><br />
                            Simpler operation, shorter time, fewer complications, comparable results, possibly reversible.
                        </p>

                        <p className="text-justify">
                            <strong>4. Potential Risks:</strong><br />
                            Includes leaks, infection, nutrient deficiencies (B12, iron, calcium), bile reflux.
                        </p>

                        <p className="text-justify">
                            <strong>5. Long-Term Effects:</strong><br />
                            Patients may lose 50–70% of excess weight in 1–2 years. Requires lifelong diet/vitamins/follow-ups.
                        </p>

                        {/* Advantages */}
                        <h4 className="mt-4">Advantages of Bariatric Surgery</h4>

                        <p className="text-justify">
                            <strong>1. Significant and Long-term Weight Loss:</strong><br />
                            Improves quality of life and overall health.
                        </p>

                        <p className="text-justify">
                            <strong>2. Improvement in Obesity-related Conditions:</strong><br />
                            Diabetes, hypertension, sleep apnea, and heart disease risks are significantly reduced.
                        </p>

                        <p className="text-justify">
                            <strong>3. Better Mobility and Physical Activity:</strong><br />
                            Improved movement, reduced joint pain, increased energy.
                        </p>

                        <p className="text-justify">
                            <strong>4. Improved Mental Health:</strong><br />
                            Better self-esteem, less depression.
                        </p>

                        <p className="text-justify">
                            <strong>5. Increased Longevity:</strong><br />
                            May increase life expectancy.
                        </p>

                        <p className="text-justify">
                            <strong>6. Lower Risk of Certain Cancers:</strong><br />
                            Reduced risk of colon, breast, and uterine cancers.
                        </p>

                        <p className="text-justify">
                            <strong>Please Note:</strong><br />
                            Bariatric surgery is not a quick fix. Requires long-term lifestyle changes and medical follow-up.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}