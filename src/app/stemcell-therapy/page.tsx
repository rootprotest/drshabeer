// pages/stem-cell-therapy.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Stem Cell Therapy - Regenerative Medicine | Bangalore",
    description:
        "Discover the benefits of stem cell therapy for conditions like diabetes, orthopedic injuries, neurological disorders, and autoimmune diseases. Learn how it works and who can benefit.",
    keywords:
        "stem cell therapy, regenerative medicine, diabetes treatment, arthritis treatment, neurological disorders, autoimmune disease, Bangalore"
};

export default function StemCellTherapyPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Stem Cell Therapy"
                imageSrc="/img/bannerslider/stemcellbanner2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Stem Cell Therapy.webp"
                            alt="Stem Cell Therapy"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Stem Cell Therapy?</h3>
                        <p className="text-justify">
                            Stem cell therapy is an advanced medical treatment that utilizes the body’s own regenerative potential to repair damaged tissues, organs, and cells.
                            Stem cells have the unique ability to differentiate into specialized cells, enabling them to treat a variety of diseases.
                            At Dr Shabeer Ahmed Clinic, we use ethically sourced stem cells to provide personalized treatment plans designed to improve outcomes for our patients.
                        </p>
                    </Col>
                </Row>

                {/* Applications of Stem Cell Therapy */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Applications of Stem Cell Therapy</h4>

                        <h6>1. Diabetes</h6>
                        <p className="text-justify">
                            Diabetes is a common condition where stem cell therapy aims to regenerate damaged pancreatic beta cells to help restore insulin production and improve metabolic function.
                        </p>
                        <ul>
                            <li><strong>Type 1:</strong> Focus on regeneration of insulin-producing cells.</li>
                            <li><strong>Type 2:</strong> Enhancing pancreatic function and controlling glucose levels.</li>
                        </ul>

                        <h6>2. Orthopedics / Joint Disorders</h6>
                        <p className="text-justify">
                            Arthritis and joint pain are prevalent, especially among aging populations. Stem cell therapy helps regenerate cartilage and reduce inflammation, offering a natural alternative to surgical treatments.
                        </p>
                        <ul>
                            <li><strong>Osteoarthritis:</strong> Cartilage regeneration, reduced inflammation, improved mobility.</li>
                            <li><strong>Avascular Necrosis (AVN):</strong> Bone tissue regeneration, restoration of blood supply, and prevention of joint collapse.</li>
                            <li><strong>Ligament Injuries:</strong> Faster healing and improved joint stability and strength.</li>
                        </ul>

                        <h6>3. Neurological Disorders</h6>
                        <p className="text-justify">
                            Conditions such as Parkinson’s disease, stroke, and spinal cord injuries can severely affect quality of life. Stem cells offer hope by repairing and regenerating damaged neurons.
                        </p>
                        <ul>
                            <li><strong>Cerebral Palsy:</strong> Repairing brain damage and improving motor skills in children and adults.</li>
                            <li><strong>Autism Spectrum Disorder (ASD):</strong> Reducing neuroinflammation and enhancing neural connectivity.</li>
                            <li><strong>Parkinson’s Disease:</strong> Restoring dopamine-producing neurons and alleviating motor symptoms.</li>
                            <li><strong>Spinal Cord Injuries:</strong> Promoting recovery of lost motor and sensory functions.</li>
                            <li><strong>Stroke Recovery:</strong> Aiding in brain tissue regeneration and restoring cognitive and motor abilities.</li>
                        </ul>

                        <h6>4. Cardiovascular Diseases</h6>
                        <p className="text-justify">
                            Heart disease is one of the leading causes of death. Stem cell therapy offers a promising approach to repairing heart tissues after heart attack or heart failure.
                        </p>
                        <ul>
                            <li><strong>Heart Attack:</strong> Regeneration of damaged heart muscle.</li>
                            <li><strong>Heart Failure:</strong> Improved blood flow and cardiac function.</li>
                        </ul>

                        <h6>5. Liver Disease</h6>
                        <p className="text-justify">
                            Stem cell therapy supports liver tissue regeneration in chronic conditions like cirrhosis and fatty liver disease.
                        </p>
                        <ul>
                            <li><strong>Fatty Liver & Cirrhosis:</strong> Regeneration of liver cells and enhanced detoxification.</li>
                        </ul>

                        <h6>6. Chronic Lung Diseases</h6>
                        <p className="text-justify">
                            For conditions like COPD, pulmonary fibrosis, and asthma, stem cell therapy may help regenerate lung tissue and reduce inflammation.
                        </p>
                        <ul>
                            <li><strong>Lung Tissue Regeneration:</strong> Improved oxygenation and respiratory capacity.</li>
                        </ul>

                        <h6>7. Autoimmune Disorders</h6>
                        <p className="text-justify">
                            Patients with lupus, rheumatoid arthritis, and other autoimmune conditions may benefit from immune system modulation and tissue repair.
                        </p>
                        <ul>
                            <li><strong>Autoimmune Modulation:</strong> Rebalancing immune response to prevent self-attack.</li>
                            <li><strong>Tissue Repair:</strong> Regeneration of affected organs like joints, skin, and nervous system.</li>
                        </ul>

                        <h6>8. Infertility and Reproductive Health</h6>
                        <p className="text-justify">
                            Stem cell therapy is emerging as a new hope for treating both male and female infertility by rejuvenating reproductive cells and tissues.
                        </p>
                        <ul>
                            <li><strong>Female:</strong> Ovarian regeneration for diminished ovarian reserve.</li>
                            <li><strong>Male:</strong> Testicular tissue regeneration for low sperm count or motility.</li>
                        </ul>

                        <h6>9. Skin and Cosmetic Treatments</h6>
                        <p className="text-justify">
                            Used in cosmetic industry for anti-aging, wound healing, and scar reduction.
                        </p>
                        <ul>
                            <li><strong>Skin Rejuvenation:</strong> Regenerates healthy skin cells, promotes collagen production, improves elasticity.</li>
                            <li><strong>Wound Healing:</strong> Accelerated recovery from burns, scars, and injuries.</li>
                        </ul>

                        <h6>10. Anti-Aging and Wellness</h6>
                        <p className="text-justify">
                            Stem cell therapy targets underlying causes of aging, including cellular degeneration, inflammation, and reduced organ function.
                        </p>
                        <ul>
                            <li><strong>Improved Organ Function:</strong> Rejuvenates liver, heart, kidneys, and other vital organs.</li>
                            <li><strong>Boosted Immune System:</strong> Helps fight infections and reduces chronic inflammation.</li>
                            <li><strong>Increase Energy Levels:</strong> Enhanced mitochondrial function and cellular repair.</li>
                            <li><strong>Anti-Inflammatory Effects:</strong> Slows down age-related degeneration.</li>
                            <li><strong>Cognitive Enhancement:</strong> Improves memory, focus, and prevents neurodegenerative diseases.</li>
                        </ul>

                        {/* Benefits of Stem Cell Therapy */}
                        <h4 className="mt-4">Benefits of Stem Cell Therapy</h4>
                        <ul>
                            <li><strong>Minimally Invasive:</strong> No surgery required; often done on an outpatient basis.</li>
                            <li><strong>Personalized Treatment:</strong> Tailored to individual needs based on condition and severity.</li>
                            <li><strong>Holistic Healing:</strong> Activates the body's natural healing mechanisms.</li>
                            <li><strong>Delays or Avoids Surgery:</strong> Offers alternatives to invasive procedures like joint replacement.</li>
                            <li><strong>Fewer Side Effects:</strong> Compared to traditional medications and surgeries.</li>
                            <li><strong>Backed by Research:</strong> Continuously supported by clinical trials and scientific studies.</li>
                        </ul>

                        {/* Treatment Process */}
                        <h4 className="mt-4">Treatment Procedure Overview</h4>
                        <ol>
                            <li><strong>Consultation & Evaluation:</strong> Medical history review and eligibility assessment.</li>
                            <li><strong>Stem Cell Harvesting:</strong> From bone marrow, fat tissue, or umbilical cord blood.</li>
                            <li><strong>Processing in Lab:</strong> Cells are concentrated and prepared for targeted delivery.</li>
                            <li><strong>Administration:</strong> Injected directly into the affected area or delivered intravenously.</li>
                            <li><strong>Post-Treatment Monitoring:</strong> Follow-up visits to assess progress over time.</li>
                        </ol>

                        {/* Duration and Recovery */}
                        <h5 className="mt-4">Duration and Recovery</h5>
                        <ul>
                            <li><strong>Procedure Time:</strong> Typically takes a few hours.</li>
                            <li><strong>Recovery:</strong> Most patients resume normal activities within a day or two.</li>
                            <li><strong>Long-Term Recovery:</strong> Noticeable improvements may take weeks to months. Multiple sessions may be needed.</li>
                        </ul>

                        {/* Why Choose Dr. Shabeer Ahmed Clinic */}
                        <h4 className="mt-4">Why Choose Dr. Shabeer Ahmed Clinic?</h4>
                        <ul>
                            <li><strong>Cutting-Edge Technology:</strong> Latest advancements in regenerative medicine.</li>
                            <li><strong>Personalized Care:</strong> Customized treatment plans based on your unique medical needs.</li>
                            <li><strong>Ethical Standards:</strong> Ethically sourced stem cells with strict quality control.</li>
                            <li><strong>Experienced Team:</strong> Experts in regenerative medicine ensuring high standards of care.</li>
                            <li><strong>State-of-the-Art Facility:</strong> Located in Bangalore with modern infrastructure.</li>
                            <li><strong>International Patient Support:</strong> Special assistance for patients from Arab countries including travel and accommodation support.</li>
                        </ul>

                        {/* Who Can Benefit? */}
                        <h4 className="mt-4">Who Can Benefit?</h4>
                        <p className="text-justify">
                            Candidates include individuals with degenerative diseases, neurological disorders, autoimmune conditions, chronic pain, and those seeking anti-aging solutions.
                            Ideal candidates have not responded well to traditional treatments and are looking for alternatives with fewer side effects.
                        </p>

                        {/* Eligibility Criteria */}
                        <h5 className="mt-4">Eligibility Criteria</h5>
                        <ul>
                            <li><strong>Age:</strong> Suitable for a wide range of ages, with better results in younger patients due to higher regenerative capacity.</li>
                            <li><strong>Medical History:</strong> Comprehensive evaluation is necessary before proceeding.</li>
                            <li><strong>No Active Cancer:</strong> Patients with a history of cancer need careful screening.</li>
                            <li><strong>Realistic Expectations:</strong> Understanding that results vary and multiple sessions may be required.</li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Stem cell therapy offers a holistic and innovative approach to healing and regeneration.
                            Whether you're dealing with chronic illness, injury recovery, or anti-aging concerns, this therapy provides a viable option with minimal risks and long-term benefits.
                            If you're exploring regenerative medicine in Bangalore, consult Dr. Shabeer Ahmed to see if stem cell therapy is right for your condition.
                        </p>

                        {/* Call to Action */}
                        <p className="text-justify mt-3">
                            <strong>Contact Us:</strong> Schedule a consultation today and begin your journey toward natural healing and improved wellness.
                            We offer international patient services, especially for patients from Arab countries.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}