// pages/gallstones.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FAQSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Gallstones - Causes, Symptoms & Treatment | Bangalore",
    description:
        "Learn about Gallstones causes, symptoms, risk factors and treatment options like Laparoscopic Cholecystectomy and ERCP.",
    keywords:
        "gallstones, gallbladder stones, laparoscopic cholecystectomy, ERCP, gallstone treatment in bangalore"
};

export default function EndoscopicPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Endoscopic Surgery"
                imageSrc="/img/bannerslider/Rectal Bleeding 1960x430 (1).webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Endoscopic%20surgery.webp"
                            alt="Endoscopic Surgery"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <p className="text-justify">
                            Gallstones form when substances in bile (such as cholesterol or bilirubin) become imbalanced and crystallize, creating solid particles in the gallbladder.
                            There are two main types of gallstones: cholesterol and pigment stones — most common being cholesterol stones, which are not directly linked to abnormal lipid profiles.
                        </p>
                    </Col>
                </Row>

                {/* Causes of Gallstones */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>What Causes Gallstones?</h4>

                        <p className="text-justify">
                            <strong>1. Excess cholesterol in bile:</strong><br />
                            If the liver secretes more cholesterol than bile can dissolve, excess cholesterol can form crystals and eventually stones.
                        </p>

                        <p className="text-justify">
                            <strong>2. Excess bilirubin:</strong><br />
                            Conditions like liver cirrhosis, biliary tract infections, or hemolytic anemia can cause the liver to produce too much bilirubin.
                        </p>

                        <p className="text-justify">
                            <strong>3. Incomplete emptying of the gallbladder:</strong><br />
                            If the gallbladder doesn't empty completely or often enough, bile becomes concentrated and stones can form.
                        </p>

                        {/* Risk Factors */}
                        <h6 className="mt-4">What Are the Risk Factors?</h6>
                        <p className="text-justify">
                            <strong>Risk Factors:</strong> Obesity, rapid weight loss, pregnancy, gender (more common in women), age, diabetes, cirrhosis, and certain blood disorders.
                        </p>

                        <ul className="text-justify">
                            <li>Pain in the upper right abdomen (biliary colic), especially radiating to the back</li>
                            <li>Nausea and vomiting</li>
                            <li>Jaundice (yellowing of the skin and eyes, if bile flow is blocked due to a stone in the common bile duct)</li>
                            <li>Fever and chills (if infection occurs)</li>
                        </ul>

                        {/* Treatment Options */}
                        <h6 className="mt-4">What Treatment Options Are Available?</h6>
                        <ol className="text-justify">
                            <li>
                                <strong>Medications:</strong> Medications and alternative therapies have very limited role.
                            </li>
                            <li>
                                <strong>Surgical Treatment:</strong>
                                <ul>
                                    <li>
                                        <strong>Laparoscopic Cholecystectomy</strong> (gallbladder removal): The most common treatment for symptomatic gallstones. It is minimally invasive and removing the gallbladder is the definitive solution.
                                    </li>
                                    <li>
                                        <strong>ERCP (Endoscopic Retrograde Cholangiopancreatography):</strong> Used to remove stones from the bile ducts.
                                    </li>
                                </ul>
                            </li>
                        </ol>

                        <p className="text-justify">
                            Before deciding on surgery, a careful medical history and assessment is important to rule out concomitant diseases and ensure safe surgical outcomes.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FAQSection />
        </>
    );
}