// pages/piles-treatment.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Piles Treatment - Causes & Surgery Options | Bangalore",
    description:
        "Learn about piles (hemorrhoids) causes, symptoms, and treatment options including lifestyle changes, minimally invasive procedures, and laser surgery.",
    keywords:
        "piles treatment, hemorrhoids, piles surgery, laser piles treatment, piles causes, piles symptoms, Bangalore"
};

export default function PilesTreatmentPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Piles Treatment"
                imageSrc="/img/bannerslider/piles 1.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Hemorrhoid bleeding2.webp"
                            alt="Piles Treatment"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What Are Piles (Hemorrhoids)?</h3>
                        <p className="text-justify">
                            Piles, also known as hemorrhoids, are swollen and inflamed blood vessels in the rectum or anus.
                            They can cause discomfort, pain, and sometimes bleeding, especially during bowel movements.
                            Piles are classified into two main types — internal and external — and may require lifestyle changes, medical treatments, or surgical intervention depending on severity.
                        </p>
                    </Col>
                </Row>

                {/* Types of Hemorrhoids */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Types of Hemorrhoids</h4>

                        <h6>1. Internal Hemorrhoids</h6>
                        <p className="text-justify">
                            These develop inside the rectum and are usually painless but can cause bleeding.
                            In more severe cases, they may protrude from the anus — called prolapsed hemorrhoids.
                        </p>
                        <ul>
                            <li><strong>Grade I:</strong> Small swellings inside the lining of the rectum; not visible externally.</li>
                            <li><strong>Grade II:</strong> Larger swellings that may come out during bowel movement but go back in by themselves.</li>
                            <li><strong>Grade III:</strong> Swellings that protrude and need to be pushed back manually.</li>
                            <li><strong>Grade IV:</strong> Protruded hemorrhoids that cannot be pushed back and may require urgent medical attention.</li>
                        </ul>

                        <h6>2. External Hemorrhoids</h6>
                        <p className="text-justify">
                            These form under the skin around the anus and can be painful, especially if a blood clot forms (thrombosed hemorrhoid).
                        </p>

                        {/* Common Symptoms */}
                        <h4 className="mt-4">Common Symptoms of Piles</h4>
                        <ul>
                            <li>Pain or discomfort in the anal region, especially while sitting or during bowel movements</li>
                            <li>Bright red blood after a bowel movement (painless bleeding is common in internal hemorrhoids)</li>
                            <li>Itching or irritation around the anus</li>
                            <li>Swelling or a lump near the anus</li>
                            <li>Mucus discharge after passing stool causing irritation</li>
                        </ul>

                        {/* Causes of Piles */}
                        <h4 className="mt-4">Causes of Piles</h4>
                        <ul>
                            <li>Chronic constipation or diarrhea</li>
                            <li>Straining during bowel movements</li>
                            <li>Sitting for long periods, especially on the toilet</li>
                            <li>Pregnancy (due to increased pressure in the pelvic area)</li>
                            <li>Obesity</li>
                            <li>Poor diet low in fiber</li>
                            <li>Family history plays an important role in predisposition.</li>
                        </ul>

                        {/* Treatment Options */}
                        <h4 className="mt-4">Treatment Options for Piles</h4>

                        <h6>1. Lifestyle Changes</h6>
                        <p className="text-justify">
                            For mild cases, lifestyle modifications often provide relief:
                        </p>
                        <ul>
                            <li><strong>Diet:</strong> Increase fiber intake with fruits, vegetables, and whole grains.</li>
                            <li><strong>Hydration:</strong> Drink plenty of water to soften stools and reduce straining.</li>
                            <li><strong>Exercise:</strong> Regular physical activity helps improve digestion and prevent constipation.</li>
                        </ul>

                        <h6>2. Topical Treatments</h6>
                        <p className="text-justify">
                            Creams, ointments, and suppositories can help relieve discomfort and reduce inflammation.
                            These are typically used in early stages or for symptomatic relief.
                        </p>

                        <h6>3. Minimally Invasive Procedures</h6>
                        <p className="text-justify">
                            For more persistent or severe cases, non-surgical treatments include:
                        </p>
                        <ul>
                            <li><strong>Rubber Band Ligation:</strong> A rubber band is placed at the base of the hemorrhoid to cut off its blood supply.</li>
                            <li><strong>Sclerotherapy:</strong> Injection of a solution that shrinks the hemorrhoid.</li>
                            <li><strong>Infrared Coagulation:</strong> Heat is used to destroy the hemorrhoidal tissue.</li>
                            <li><strong>Laser Hemorrhoidoplasty (LHP):</strong> Laser energy is used to shrink internal hemorrhoids with minimal pain and faster recovery.</li>
                        </ul>

                        <h6>4. Surgical Treatment</h6>
                        <p className="text-justify">
                            Surgery may be required when conservative treatments fail or in advanced cases:
                        </p>
                        <ul>
                            <li><strong>Hemorrhoidectomy:</strong> Complete surgical removal of hemorrhoids (used for large or severe cases).</li>
                            <li><strong>Hemorrhoidopexy:</strong> Stapling procedure that repositions the hemorrhoids and reduces blood flow to them.</li>
                            <li><strong>Laser Surgery:</strong> A modern, minimally invasive option with reduced bleeding, less pain, and quicker recovery.</li>
                        </ul>

                        {/* Benefits of Laser Treatment */}
                        <h4 className="mt-4">Benefits of Laser Piles Treatment</h4>
                        <ul>
                            <li><strong>Minimally Invasive:</strong> No cuts or stitches required in most cases.</li>
                            <li><strong>Less Bleeding:</strong> Laser seals blood vessels as it treats the hemorrhoids.</li>
                            <li><strong>Faster Recovery:</strong> Most patients resume normal activities within a few days.</li>
                            <li><strong>Outpatient Procedure:</strong> Usually performed on a daycare basis without hospitalization.</li>
                            <li><strong>Lower Risk of Recurrence:</strong> Especially when combined with lifestyle changes.</li>
                        </ul>

                        {/* Prevention */}
                        <h4 className="mt-4">Prevention Tips</h4>
                        <ul>
                            <li>Eat a high-fiber diet to avoid constipation</li>
                            <li>Avoid prolonged sitting on the toilet</li>
                            <li>Don't strain during bowel movements</li>
                            <li>Keep weight under control</li>
                            <li>Stay hydrated and maintain regular physical activity</li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Piles are a common condition that can be effectively managed with proper diagnosis and treatment.
                            Whether through lifestyle changes, non-invasive methods, or surgical options like laser hemorrhoidoplasty — effective solutions exist to reduce discomfort and improve quality of life.
                            If you experience persistent symptoms, consult a specialist to determine the best course of treatment tailored to your condition.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}