// pages/stomach-ulcer-surgery.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Stomach Ulcer Surgery - Treatment & Recovery | Bangalore",
    description:
        "Understand stomach ulcer causes, symptoms, and surgical treatment options like laparoscopic surgery for severe cases in Bangalore.",
    keywords:
        "stomach ulcer surgery, gastric ulcer treatment, laparoscopic ulcer repair, H. pylori infection, Bangalore"
};

export default function StomachUlcerSurgeryPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Stomach Ulcer Surgery"
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
                            alt="Stomach Ulcer Surgery"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Stomach Ulcer Surgery?</h3>
                        <p className="text-justify">
                            Gastric ulcers or stomach ulcers are painful sores that develop on the lining of the stomach.
                            They can significantly impact daily life, causing discomfort, nausea, and in severe cases, dangerous complications such as internal bleeding.
                            If you're seeking surgical intervention for stomach ulcers in Bangalore, it's important to consult a seasoned surgeon to ensure optimal care and outcomes.
                        </p>
                    </Col>
                </Row>

                {/* Understanding Stomach Ulcers */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Understanding Stomach Ulcers</h4>
                        <p className="text-justify">
                            Stomach ulcers occur when the protective lining of the stomach erodes, often due to an imbalance between digestive acids and the body’s natural defenses.
                            These ulcers can lead to serious complications if left untreated, including internal bleeding, perforation, and obstruction.
                        </p>

                        {/* Common Causes */}
                        <h5 className="mt-4">Common Causes of Stomach Ulcers</h5>
                        <ul>
                            <li><strong>H. pylori Infection:</strong> A bacterium that compromises the integrity of the stomach lining.</li>
                            <li><strong>Long-term use of NSAIDs:</strong> Medications like ibuprofen and aspirin can damage the mucosal barrier over time.</li>
                            <li><strong>Excessive Acid Production:</strong> Conditions like Zollinger-Ellison syndrome increase acid levels beyond normal limits.</li>
                            <li><strong>Lifestyle Factors:</strong> Smoking, alcohol, stress, and poor diet can contribute to ulcer formation.</li>
                        </ul>

                        {/* Symptoms */}
                        <h5 className="mt-4">Symptoms of Stomach Ulcers</h5>
                        <p className="text-justify">
                            The symptoms of gastric ulcers can vary from mild discomfort to intense pain:
                        </p>
                        <ul>
                            <li>Persistent abdominal pain or burning sensation, especially between meals or at night</li>
                            <li>Nausea or vomiting, sometimes with blood</li>
                            <li>Black or tarry stools (indicative of internal bleeding)</li>
                            <li>Weight loss or appetite changes</li>
                            <li>Bloating, burping, and heartburn</li>
                        </ul>
                        <p className="text-justify mt-3">
                            It’s crucial to seek medical advice if symptoms persist, as early diagnosis can prevent life-threatening complications.
                        </p>

                        {/* Diagnosis */}
                        <h5 className="mt-4">How Are Stomach Ulcers Diagnosed?</h5>
                        <ul>
                            <li><strong>Upper GI Endoscopy:</strong> Most accurate method; allows direct visualization and biopsy if needed.</li>
                            <li><strong>Helicobacter pylori Test:</strong> Blood, breath, or stool test to detect the presence of H. pylori.</li>
                            <li><strong>Imaging Tests:</strong> Barium swallow X-ray can help identify ulcers.</li>
                        </ul>

                        {/* Treatment Options */}
                        <h4 className="mt-4">Treatment Options for Stomach Ulcers</h4>

                        <h6>1. Medical Management</h6>
                        <ul>
                            <li><strong>Proton Pump Inhibitors (PPIs):</strong> Reduce acid production and promote healing (e.g., omeprazole, pantoprazole).</li>
                            <li><strong>Antibiotics:</strong> Used to eliminate H. pylori infections.</li>
                            <li><strong>H2 Receptor Blockers:</strong> Decrease acid secretion and offer symptomatic relief.</li>
                            <li><strong>Antacids:</strong> Provide quick but temporary relief by neutralizing stomach acid.</li>
                            <li><strong>Mucosal Protective Agents:</strong> Sucralfate and misoprostol protect the stomach lining.</li>
                        </ul>

                        <h6>2. Surgical Treatment</h6>
                        <p className="text-justify">
                            Surgery may be required in cases of:
                        </p>
                        <ul>
                            <li><strong>Perforation:</strong> Hole in the stomach wall caused by deep ulcers.</li>
                            <li><strong>Obstruction:</strong> Scar tissue blocks food passage through the digestive tract.</li>
                            <li><strong>Bleeding:</strong> When endoscopic treatments fail to control heavy bleeding.</li>
                            <li><strong>Cancerous Ulcers:</strong> Some ulcers are cancerous and require surgical removal.</li>
                        </ul>

                        {/* Types of Surgeries */}
                        <h5 className="mt-4">Types of Stomach Ulcer Surgeries</h5>
                        <ul>
                            <li><strong>Laparoscopic Surgery:</strong> Minimally invasive approach for ulcer repair or excision. Ideal for patients with perforation or recurrent bleeding.</li>
                            <li><strong>Vagotomy:</strong> Cutting specific nerves responsible for excessive acid production to reduce gastric secretions.</li>
                            <li><strong>Partial Gastrectomy:</strong> Removal of part of the stomach where the ulcer is located, particularly for malignant or uncontrolled ulcers.</li>
                            <li><strong>Endoscopic Hemostasis:</strong> Non-surgical but effective for controlling active bleeding from ulcers.</li>
                        </ul>

                        {/* Benefits of Laparoscopic Surgery */}
                        <h4 className="mt-4">Benefits of Laparoscopic Surgery for Stomach Ulcers</h4>
                        <ul>
                            <li><strong>Minimally Invasive:</strong> Smaller incisions mean less post-operative pain and scarring.</li>
                            <li><strong>Faster Recovery:</strong> Patients can resume normal activities within a week or two after surgery.</li>
                            <li><strong>Lower Risk of Infections:</strong> Reduced exposure of internal organs lowers the risk of post-op infections.</li>
                            <li><strong>Improved Cosmetic Outcome:</strong> Minimal scarring improves appearance after recovery.</li>
                            <li><strong>Less Postoperative Discomfort:</strong> Less trauma to surrounding tissues means reduced pain and faster healing.</li>
                        </ul>

                        {/* Why Choose Dr. Shabeer Ahmed */}
                        <h4 className="mt-4">Why Choose Dr. Shabeer Ahmed for Stomach Ulcer Surgery in Bangalore?</h4>
                        <p className="text-justify">
                            Dr. Shabeer Ahmed is an eminent authority in gastrointestinal and laparoscopic surgery, boasting over 36 years of unmatched surgical expertise.
                            He specializes in minimally invasive techniques, offering patients advanced care with better outcomes and quicker recovery times.
                        </p>

                        <ul>
                            <li><strong>Experience:</strong> Over 36 years of experience in complex gastrointestinal surgeries.</li>
                            <li><strong>Expertise in Laparoscopic Techniques:</strong> Offers safer, less painful procedures with minimal recovery time.</li>
                            <li><strong>Comprehensive Care:</strong> From diagnosis to post-op support, Dr. Ahmed ensures personalized attention and long-term health management.</li>
                            <li><strong>State-of-the-Art Facilities:</strong> Located in Bangalore with modern infrastructure for optimal surgical outcomes.</li>
                        </ul>

                        {/* Prevention */}
                        <h5 className="mt-4">Prevention Tips</h5>
                        <p className="text-justify">
                            While some ulcers cannot be completely prevented, lifestyle modifications can reduce the risk:
                        </p>
                        <ul>
                            <li>Avoid prolonged use of NSAIDs unless prescribed with gastroprotective agents.</li>
                            <li>Limit alcohol consumption and smoking.</li>
                            <li>Maintain good hygiene to avoid H. pylori infection.</li>
                            <li>Adopt a balanced diet rich in fruits, vegetables, and fiber.</li>
                            <li>Manage stress effectively through yoga, meditation, or counseling.</li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Stomach ulcers are treatable conditions, but they require prompt and appropriate intervention to prevent complications.
                            Whether through medications, endoscopic treatment, or surgery — understanding your options and consulting with an expert is key to managing this condition effectively.
                            If you're experiencing persistent ulcer symptoms, schedule a consultation with Dr. Shabeer Ahmed today and take the first step toward lasting relief and improved health.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}