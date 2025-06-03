// pages/gastritis.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Gastritis - Causes, Diagnosis & Treatment | Bangalore",
    description:
        "Understand the types of gastritis and how procedures like EGD, liver biopsy, and ERCP help in diagnosis and treatment.",
    keywords:
        "gastritis, acute gastritis, chronic gastritis, EGD, ERCP, liver biopsy, gastritis treatment in bangalore"
};

export default function GastritisPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Gastritis"
                imageSrc="/img/bannerslider/Diarrhea BANNER.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Diarrhea.webp"
                            alt="Gastritis"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <p className="text-justify">
                            Gastritis is the inflammation of the stomach lining, which can manifest in two distinct forms.
                            Acute gastritis occurs suddenly and can be triggered by infections, irritants, or stress.
                            Chronic gastritis develops gradually over time, often due to prolonged exposure to irritants like alcohol, medications, or autoimmune disorders.
                            Both types can cause discomfort and may require medical attention for effective symptom management.
                        </p>
                    </Col>
                </Row>

                {/* Types of Gastritis */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Types of Gastritis</h4>

                        <p className="text-justify">
                            <strong>1. What is Esophagogastroduodenoscopy (EGD)?</strong><br />
                            EGD is a procedure used to examine the lining of the esophagus, stomach, and duodenum using a flexible tube with a camera.
                            It helps diagnose conditions like gastritis, ulcers, or tumors and assess their severity.
                        </p>

                        <p className="text-justify">
                            <strong>2. How Does a Liver Biopsy Relate to Gastritis?</strong><br />
                            A liver biopsy may be performed to rule out liver conditions that could contribute to gastritis symptoms.
                            It involves removing a small tissue sample from the liver to check for diseases like cirrhosis or fatty liver, especially when alcohol use is suspected.
                        </p>

                        <p className="text-justify">
                            <strong>3. What is ERCP (Endoscopic Retrograde Cholangiopancreatography)?</strong><br />
                            ERCP combines endoscopy and X-ray imaging to examine bile ducts, pancreatic ducts, and gallbladder.
                            It's useful when gastritis is linked to bile reflux, helping both diagnose and treat the underlying issue.
                        </p>

                        {/* Advantages of Gastritis Diagnosis */}
                        <h4 className="mt-4">Advantages of Gastritis Diagnosis and Management</h4>

                        <p className="text-justify">
                            <strong>1. Early Diagnosis with EGD:</strong><br />
                            EGD allows early detection of inflammation, ulcers, or malignancies, enabling timely treatment and potentially preventing complications like bleeding or perforation.
                        </p>

                        <p className="text-justify">
                            <strong>2. Guided Treatment through EGD:</strong><br />
                            EGD provides direct visualization of the stomach lining, allowing doctors to tailor treatment — such as prescribing antibiotics for H. pylori or recommending lifestyle changes.
                        </p>

                        <p className="text-justify">
                            <strong>3. Role of Liver Biopsy in Gastritis Management:</strong><br />
                            In cases where alcohol use or autoimmune disease is suspected, a liver biopsy ensures a comprehensive approach by addressing both gastric and liver health.
                        </p>

                        <p className="text-justify">
                            <strong>4. ERCP for Bile Reflux-induced Gastritis:</strong><br />
                            ERCP helps identify and treat bile reflux-related gastritis with minimally invasive techniques, offering relief by correcting abnormal bile flow.
                        </p>

                        <p className="text-justify">
                            <strong>5. Minimally Invasive Procedures:</strong><br />
                            Techniques like EGD and ERCP are minimally invasive, providing accurate diagnostic insights and therapeutic options with quick recovery times and minimal discomfort.
                        </p>

                        <p className="text-justify mt-3">
                            Effective management of gastritis begins with identifying its root cause. If you experience persistent symptoms, consult a specialist to explore the best diagnostic and treatment options for your condition.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}