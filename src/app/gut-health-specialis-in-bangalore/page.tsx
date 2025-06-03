// pages/gut-care.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Gut Care - Healthy Digestive System Tips | Bangalore",
    description:
        "Learn how to maintain a healthy digestive system through probiotics, fiber-rich diet, hydration, and stress management.",
    keywords:
        "gut health, gut care, probiotics, prebiotics, digestive health, fiber diet, hydration, Bangalore"
};

export default function GutCarePage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Gut Care"
                imageSrc="/img/bannerslider/gut care banners.jpg"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/icons/Gut-Care.jpg"
                            alt="Gut Care"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <p className="text-justify">
                            Gut care involves maintaining a healthy digestive system through dietary, lifestyle, and sometimes medical interventions.
                            A well-functioning gut is essential for nutrient absorption, immune function, and overall health.
                            Poor gut health can lead to issues such as indigestion, bloating, constipation, or more severe conditions like irritable bowel syndrome (IBS) or leaky gut syndrome.
                        </p>
                    </Col>
                </Row>

                {/* Gut Health Tips */}
                <Row>
                    <Col lg={12} md={12}>
                        <h2>Ways to Support Gut Health</h2>

                        <p className="text-justify">
                            <strong>1. Probiotics and Prebiotics</strong><br />
                            <ul>
                                <li><strong>Probiotics:</strong> Live beneficial bacteria found in fermented foods (like yogurt, kimchi, or kefir) or supplements. They help balance gut microbiota.</li>
                                <li><strong>Prebiotics:</strong> Non-digestible fibers that feed good bacteria, found in foods like garlic, onions, bananas, and asparagus.</li>
                            </ul>
                        </p>

                        <p className="text-justify">
                            <strong>2. High-Fiber Diet</strong><br />
                            Including whole grains, fruits, vegetables, and legumes can enhance digestion and prevent constipation by promoting regular bowel movements.
                        </p>

                        <p className="text-justify">
                            <strong>3. Hydration</strong><br />
                            Drinking adequate water aids digestion, helps prevent constipation, and supports the gut lining.
                        </p>

                        <p className="text-justify">
                            <strong>4. Reducing Stress</strong><br />
                            Chronic stress can negatively impact gut health. Mindfulness practices, meditation, and regular exercise can help reduce stress levels.
                        </p>

                        <p className="text-justify">
                            <strong>5. Limiting Processed Foods</strong><br />
                            Avoiding high-sugar, high-fat, and processed foods supports a healthy microbiome and reduces inflammation.
                        </p>

                        {/* Benefits of Gut Health */}
                        <h2 className="mt-5 mb-4">Advantages of a Healthy Gut</h2>

                        <p className="text-justify">
                            <strong>1. Improved Digestion</strong><br />
                            Efficient digestion reduces bloating, gas, and other discomforts.
                        </p>

                        <p className="text-justify">
                            <strong>2. Enhanced Immune Function</strong><br />
                            A significant portion of the immune system resides in the gut. A balanced microbiome can boost immunity and prevent illness.
                        </p>

                        <p className="text-justify">
                            <strong>3. Better Mental Health</strong><br />
                            The gut-brain connection means a healthy gut can improve mood and cognitive function.
                        </p>

                        <p className="text-justify">
                            <strong>4. Reduced Risk of Chronic Diseases</strong><br />
                            Good gut health lowers the risk of conditions like diabetes, obesity, and heart disease.
                        </p>

                        <p className="text-justify">
                            <strong>5. Hormonal Balance</strong><br />
                            The gut plays a role in hormone regulation, which is crucial for overall well-being.
                        </p>

                        <p className="text-justify mt-3">
                            <strong>Note:</strong> Maintaining gut health requires a long-term commitment to healthy eating habits, lifestyle changes, and regular check-ups when necessary.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}