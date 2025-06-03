// pages/gastroesophageal.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Gastroesophageal Reflux Disease (GERD) - Causes & Treatment | Bangalore",
    description:
        "Understand the causes, symptoms, and treatment options for Gastroesophageal Reflux Disease (GERD), including lifestyle changes, medications, and surgical interventions.",
    keywords:
        "gerd, gastroesophageal reflux disease, acid reflux, heartburn treatment, gerd surgery, Bangalore"
};

export default function GastroesophagealPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Gastroesophageal Reflux Disease"
                imageSrc="/img/bannerslider/Gastroesophageal 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Gastroesophageal reflux disease.webp"
                            alt="Gastroesophageal Reflux Disease"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <p className="text-justify">
                            GERD is a chronic digestive disorder where stomach acid or bile flows back into the esophagus, causing irritation to the esophageal lining.
                            This backflow is known as acid reflux, and when it becomes frequent or persistent, it is classified as GERD.
                            It can be diagnosed and graded according to severity using endoscopy.
                        </p>
                    </Col>
                </Row>

                {/* Causes of GERD */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>What Causes GERD?</h4>

                        <ul>
                            <li>
                                <strong>Weak Lower Esophageal Sphincter (LES):</strong> The LES is a ring of muscle at the junction between the esophagus and stomach.
                                If it weakens or relaxes abnormally, acid can escape into the esophagus.
                            </li>
                            <li>
                                <strong>Hiatal Hernia:</strong> A condition where part of the stomach pushes up through the diaphragm into the chest cavity,
                                which can impair the function of the LES and lead to reflux.
                            </li>
                            <li>
                                <strong>Obesity:</strong> Increased pressure on the abdomen can weaken the LES and contribute to acid reflux.
                            </li>
                            <li>
                                <strong>Pregnancy:</strong> Hormonal changes and increased abdominal pressure during pregnancy can lead to GERD.
                            </li>
                            <li>
                                <strong>Delayed Stomach Emptying:</strong> Conditions that slow the emptying of the stomach can increase the risk of GERD by allowing food and acid to linger.
                            </li>
                            <li>
                                <strong>Dietary Factors:</strong> Certain foods and beverages like fatty or fried foods, chocolate, caffeine, alcohol, citrus fruits, spicy foods, and tomato-based products can relax the LES or increase stomach acid.
                            </li>
                            <li>
                                <strong>Lifestyle Factors:</strong> Smoking, eating large meals, eating late at night, and lying down immediately after eating can also trigger GERD.
                            </li>
                        </ul>

                        {/* Symptoms */}
                        <h5 className="mt-4">What Are the Symptoms of GERD?</h5>
                        <ul>
                            <li><strong>Heartburn:</strong> A burning sensation in the chest, especially after eating or at night.</li>
                            <li><strong>Regurgitation:</strong> A sour or bitter taste in the mouth due to acid or food coming back up.</li>
                            <li><strong>Dysphagia:</strong> Difficulty swallowing.</li>
                            <li><strong>Chest Pain:</strong> Sometimes confused with heart-related pain.</li>
                            <li><strong>Chronic Cough, Sore Throat, or Hoarseness:</strong> Often due to irritation from acid.</li>
                            <li><strong>Laryngitis and Wheezing:</strong> Due to irritation of the airways and throat.</li>
                        </ul>

                        {/* Diagnosis */}
                        <h5 className="mt-4">How is GERD Diagnosed?</h5>
                        <ul>
                            <li><strong>Clinical Evaluation:</strong> Based on symptoms like heartburn and regurgitation.</li>
                            <li><strong>Endoscopy:</strong> Allows visualization of the esophagus and stomach lining.</li>
                            <li><strong>Esophageal pH Monitoring:</strong> Measures acid levels in the esophagus.</li>
                            <li><strong>Manometry:</strong> Measures the pressure and function of the esophagus.</li>
                            <li><strong>Barium Swallow X-ray:</strong> Identifies structural abnormalities like hiatal hernias.</li>
                        </ul>

                        {/* Treatment */}
                        <h5 className="mt-4">Treatment of GERD</h5>

                        <h6>1. Lifestyle and Dietary Modifications</h6>
                        <ul>
                            <li><strong>Weight loss:</strong> Reduces pressure on the abdomen and LES.</li>
                            <li><strong>Diet changes:</strong> Avoid spicy, fatty, caffeinated, and acidic foods.</li>
                            <li><strong>Eat smaller meals:</strong> Large meals can cause excess stomach acid production.</li>
                            <li><strong>Avoid lying down after eating:</strong> Wait at least 2–3 hours before lying down or going to bed.</li>
                            <li><strong>Elevate the head of the bed:</strong> Helps prevent nighttime reflux.</li>
                            <li><strong>Quit smoking and reduce alcohol consumption:</strong> Both can worsen symptoms.</li>
                        </ul>

                        <h6>2. Medications</h6>
                        <ul>
                            <li><strong>Antacids:</strong> Neutralize stomach acid (e.g., Tums, Maalox).</li>
                            <li><strong>H2 Blockers:</strong> Reduce acid production (e.g., ranitidine, famotidine).</li>
                            <li><strong>Proton Pump Inhibitors (PPIs):</strong> Stronger acid reducers that heal the esophagus (e.g., omeprazole, esomeprazole).</li>
                            <li><strong>Prokinetics:</strong> Improve stomach emptying (e.g., metoclopramide).</li>
                        </ul>

                        <h6>3. Surgery and Other Procedures</h6>
                        <ul>
                            <li><strong>Fundoplication:</strong> A surgical procedure where the top of the stomach is wrapped around the LES to strengthen it.</li>
                            <li><strong>LINX Device:</strong> A ring of magnetic beads placed around the LES to prevent reflux.</li>
                            <li><strong>Endoscopic Treatments:</strong> Techniques like the Stretta procedure to tighten the LES without surgery.</li>
                        </ul>

                        {/* Complications */}
                        <h5 className="mt-4">Complications of Untreated GERD</h5>
                        <ul>
                            <li><strong>Esophagitis:</strong> Inflammation and damage to the esophagus.</li>
                            <li><strong>Esophageal Strictures:</strong> Narrowing of the esophagus due to scar tissue.</li>
                            <li><strong>Barrett’s Esophagus:</strong> Pre-cancerous changes in the esophageal lining.</li>
                            <li><strong>Esophageal Cancer:</strong> Long-term GERD increases the risk of esophageal adenocarcinoma.</li>
                        </ul>

                        <p className="mt-3">
                            <strong>Note:</strong> Early treatment can help manage GERD effectively and prevent permanent complications.
                            If you experience persistent symptoms, consult a specialist for proper diagnosis and care.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}