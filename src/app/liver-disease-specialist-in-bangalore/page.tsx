// pages/liver-disease-specialist.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Liver Disease Specialist in Bangalore | Dr. Shabeer Ahmed",
    description:
        "Find expert liver disease treatment in Bangalore. Learn about symptoms, causes, and advanced medical & surgical care for liver conditions by Dr. Shabeer Ahmed.",
    keywords:
        "liver disease specialist bangalore, dr shabeer ahmed, liver surgery, fatty liver, hepatitis, cirrhosis, bariatric surgeon, gastrointestinal surgeon"
};

export default function LiverDiseasePage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Liver Disease Specialist"
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
                            alt="Liver Disease Specialist"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Liver Disease?</h3>
                        <p className="text-justify">
                            The liver is the powerhouse of the body, responsible for detoxification, protein synthesis, and digestive functions.
                            Most people don't realize its importance until health issues arise.
                            In Bangalore, expert care for liver diseases is available under the guidance of experienced specialists like Dr. Shabeer Ahmed — a renowned Liver Disease and Liver Surgery Specialist.
                        </p>
                    </Col>
                </Row>

                {/* Symptoms and Causes */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Liver Diseases: Symptoms and Common Causes</h4>
                        <p className="text-justify">
                            Liver diseases vary from mild to severe — including fatty liver, hepatitis, cirrhosis, and even cancer.
                            Symptoms often include fatigue, jaundice, unexplained weight loss, abdominal pain, and swelling if not treated early.
                        </p>

                        <h6>Underlying Causes</h6>
                        <ul>
                            <li><strong>Unhealthy Habits:</strong> Excessive alcohol consumption and high-fat diets can severely affect liver function.</li>
                            <li><strong>Infections:</strong> Viral hepatitis (A, B, C) can lead to chronic conditions.</li>
                            <li><strong>Genetic Factors:</strong> Inherited diseases such as Wilson's disease or hemochromatosis.</li>
                            <li><strong>Diet & Stress:</strong> Psychological stress and poor dietary habits can worsen existing liver conditions.</li>
                            <li><strong>Obesity:</strong> Non-alcoholic fatty liver disease (NAFLD) is increasingly common due to sedentary lifestyles.</li>
                        </ul>

                        {/* Early Diagnosis */}
                        <h4 className="mt-4">Importance of Early Diagnosis</h4>
                        <p className="text-justify">
                            Timely diagnosis and treatment are crucial for managing liver diseases effectively.
                            Regular liver function tests and imaging studies can help detect abnormalities early, preventing complications like liver failure or cancer.
                        </p>

                        {/* Treatment Options */}
                        <h4 className="mt-4">Treatment Options for Liver Diseases</h4>
                        <p className="text-justify">
                            Treatment depends on the severity and type of liver condition. It includes both medical and surgical approaches tailored to individual needs.
                        </p>

                        <h6>Medical Treatment</h6>
                        <ul>
                            <li><strong>Medications:</strong> Antiviral therapies for hepatitis, supplements for genetic disorders.</li>
                            <li><strong>Lifestyle Changes:</strong> Healthy diet, regular exercise, and avoiding alcohol help prevent further damage.</li>
                        </ul>

                        <h6>Surgical Procedures</h6>
                        <ul>
                            <li><strong>Liver Resection:</strong> Removal of diseased portions to preserve healthy tissue.</li>
                            <li><strong>Liver Transplantation:</strong> For end-stage liver disease.</li>
                            <li><strong>Minimally Invasive Surgeries:</strong> Laparoscopic techniques reduce recovery time and complications.</li>
                        </ul>

                        <p className="text-justify">
                            When surgery is required, consulting a top Liver Surgery Specialist in Bangalore ensures access to the latest technology and expertise.
                        </p>

                        {/* Maintain Healthy Liver */}
                        <h4 className="mt-4">Maintaining a Healthy Liver</h4>
                        <ul>
                            <li><strong>Adopt a Healthy Diet:</strong> Include fruits, vegetables, whole grains, and lean proteins; avoid processed and high-fat foods.</li>
                            <li><strong>Moderate Alcohol Consumption:</strong> Limit or avoid alcohol to prevent cirrhosis.</li>
                            <li><strong>Stay Physically Active:</strong> Exercise regularly to reduce liver fat accumulation.</li>
                            <li><strong>Regular Screenings:</strong> At-risk individuals should schedule routine liver function tests.</li>
                        </ul>

                        {/* Meet Dr. Shabeer Ahmed */}
                        <h4 className="mt-4">Meet Dr. Shabeer Ahmed - A Trusted Name in Liver Care</h4>
                        <p className="text-justify">
                            Dr. Shabeer Ahmed has over 36 years of experience and is a Senior Consultant in Gastrointestinal, Laparoscopic, and Bariatric Surgery.
                            He specializes in minimally invasive procedures and has made significant contributions to surgical care worldwide.
                        </p>

                        <h6>Expertise and Achievements</h6>
                        <ul>
                            <li><strong>Advanced Surgeries:</strong> LAPAROSCOPIC Techniques for GI cancers and VATS (Video-Assisted Thoracic Surgery).</li>
                            <li><strong>Pioneering Techniques:</strong> Internationally recognized for innovations in laparoscopic surgery.</li>
                            <li><strong>Patient-Centered Approach:</strong> Personalized treatment plans that address each patient's unique needs.</li>
                        </ul>

                        {/* Why Choose Dr. Ahmed */}
                        <h4 className="mt-4">Why Choose Dr. Shabeer Ahmed?</h4>
                        <p className="text-justify">
                            His commitment to excellence makes him one of the most trusted Liver Disease Specialists in Bangalore.
                            Whether you're dealing with liver disease or seeking preventive care, his expertise ensures optimal outcomes and improved quality of life.
                        </p>

                        {/* Take First Step */}
                        <h4 className="mt-4">Taking the First Step Towards Liver Health</h4>
                        <p className="text-justify">
                            If you're looking for a <strong>Liver Disease Specialist in Bangalore</strong> or a <strong>Liver Surgery Specialist</strong>, Dr. Shabeer Ahmed offers world-class care tailored to your needs.
                            Don't delay — take the first step towards better liver health today.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}