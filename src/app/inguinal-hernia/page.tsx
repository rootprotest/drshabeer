// pages/inguinal-hernia.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Inguinal Hernia - Causes & Treatment | Bangalore",
    description:
        "Understand what an inguinal hernia is, its symptoms, diagnosis, and treatment options like laparoscopic and robotic-assisted surgery.",
    keywords:
        "inguinal hernia, hernia treatment in bangalore, laparoscopic hernia repair, robotic hernia surgery"
};

export default function InguinalHerniaPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Inguinal Hernia"
                imageSrc="/img/bannerslider/Inguinal%20hernia%202.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Inguinal%20Hernia.webp"
                            alt="Inguinal Hernia"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is an Inguinal Hernia?</h3>
                        <p className="text-justify">
                            An inguinal hernia occurs when a portion of the intestines or abdominal tissue pushes through a weak spot in the inguinal canal — a small passage that runs through the lower abdomen and groin.
                            This condition is more common in men but can also occur in women. The hernia may appear as a noticeable bulge in the groin area, often increasing in size when coughing, bending, or lifting heavy objects.
                            It commonly causes discomfort or pain, especially during physical activity or exertion.
                        </p>
                    </Col>
                </Row>

                {/* Types of Inguinal Hernias */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Types of Inguinal Hernias</h4>
                        <ul>
                            <li>
                                <strong>Indirect Inguinal Hernia:</strong> Usually due to developmental defects and is more common in men.
                            </li>
                            <li>
                                <strong>Direct Inguinal Hernia:</strong> Develops over time due to weakening of abdominal muscles, often related to aging, chronic constipation, prostatic issues, or COPD-related coughing.
                            </li>
                        </ul>

                        {/* Symptoms */}
                        <h5 className="mt-4">Common Symptoms</h5>
                        <ul>
                            <li>A visible bulge in the groin or scrotum</li>
                            <li>Pain or discomfort, especially when bending, coughing, or lifting</li>
                            <li>A feeling of heaviness or pressure in the groin</li>
                            <li>In some cases, swelling or a burning sensation</li>
                            <li>Nausea or vomiting (may suggest complications)</li>
                        </ul>

                        {/* Diagnosis */}
                        <h5 className="mt-4">How is Inguinal Hernia Diagnosed?</h5>
                        <p className="text-justify">
                            Diagnosis typically begins with a physical exam. Your doctor may ask you to stand and cough to see if the hernia bulge appears.
                            Imaging tests such as ultrasound, CT scan, or MRI may be ordered if the diagnosis is unclear or to assess the severity of the hernia.
                        </p>

                        {/* Treatment Options */}
                        <h5 className="mt-4">Treatment Options</h5>
                        <ul>
                            <li>
                                <strong>Surgery:</strong> Surgery is the primary treatment for inguinal hernias.
                            </li>
                            <li>
                                <strong>Laparoscopic Hernia Repair (TEP / TAPP):</strong> Minimally invasive procedure using small incisions and a camera (laparoscope).
                                Results in less postoperative pain and quicker recovery compared to open surgery.
                            </li>
                            <li>
                                <strong>Robotic-Assisted Hernia Surgery:</strong> Offers enhanced precision and flexibility, slightly better than laparoscopic surgery in complex cases.
                            </li>
                        </ul>

                        {/* Complications */}
                        <h5 className="mt-4">Complications of Untreated Inguinal Hernias</h5>
                        <p className="text-justify">
                            If left untreated, inguinal hernias can lead to serious complications:
                        </p>
                        <ul>
                            <li>
                                <strong>Incarceration:</strong> When a portion of the intestines gets trapped in the hernia sac, it can block bowel function and cause severe pain.
                            </li>
                            <li>
                                <strong>Strangulation:</strong> When the blood supply to the trapped intestine is cut off, it leads to tissue death and requires emergency surgery.
                            </li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Inguinal hernias are a common but treatable condition. Early diagnosis and appropriate surgical intervention can prevent complications and help you return to your daily activities with minimal discomfort.
                            If you suspect you have a hernia, consult your doctor to discuss the best treatment options for your individual case.
                        </p>

                        {/* When to Seek Medical Help */}
                        <h5 className="mt-4">When to Seek Medical Help</h5>
                        <p className="text-justify">
                            If you experience severe pain, nausea, vomiting, or if the hernia becomes swollen or discolored, seek immediate medical attention — this may indicate a strangulated hernia requiring emergency surgery.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}