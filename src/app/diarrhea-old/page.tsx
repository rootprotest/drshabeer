// pages/diarrhea.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Diarrhea - Causes, Symptoms & Treatment | Bangalore",
    description:
        "Understand the causes of diarrhea including bacterial, viral, and parasitic infections, and learn about treatment options like hydration, medications, and dietary changes.",
    keywords:
        "diarrhea, causes of diarrhea, treatment for diarrhea, infectious diarrhea, non-infectious diarrhea, Bangalore"
};

export default function DiarrheaPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Diarrhea"
                imageSrc="/img/bannerslider/Diarrhea BANNER.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                <Row>
                    <Row>
                        {/* Image Section */}
                        <Col lg={4} md={4} className="mb-4 d-flex align-items-center">
                            <Image
                                src="/img/bannerslider/Diarrhea.webp"
                                alt="Diarrhea"
                                width={400}
                                height={300}
                                className="img-fluid rounded"
                            />
                        </Col>

                        {/* Content Section */}
                        <Col lg={8} md={8} className="mb-4 d-flex align-items-center">
                            <p className="text-justify">
                                Diarrhea is the passage of loose, watery stools occurring more than 3 times a day.
                                It can be acute (less than 2 weeks), persistent (2–4 weeks), or chronic (more than 4 weeks).
                                Chronic diarrhea may indicate a serious condition requiring medical attention.
                                Complications include dehydration, electrolyte imbalances, and malnutrition if left untreated.
                            </p>
                        </Col>
                    </Row>

                    <Col lg={12} md={12} className="mx-auto">

                        <h4 className="mt-4">Causes of Diarrhea</h4>

                        {/* Infectious Causes */}
                        <h6>1. Infectious Causes</h6>
                        <ul>
                            <li><strong>Bacterial:</strong> E.g., E. coli, Salmonella, Shigella, Campylobacter (from contaminated food).</li>
                            <li><strong>Viral:</strong> E.g., Rotavirus, Norovirus, Adenovirus.</li>
                            <li><strong>Parasitic:</strong> E.g., Giardia lamblia, Entamoeba histolytica.</li>
                        </ul>

                        {/* Non-Infectious Causes */}
                        <h6>2. Non-Infectious Causes</h6>
                        <ul>
                            <li><strong>Food intolerance/allergies:</strong> e.g., lactose intolerance, gluten sensitivity.</li>
                            <li><strong>Medications:</strong> antibiotics, magnesium-containing antacids, chemotherapy.</li>
                            <li><strong>Malabsorption syndromes:</strong> celiac disease, pancreatic insufficiency.</li>
                            <li><strong>Inflammatory bowel disease:</strong> Crohn’s disease, ulcerative colitis.</li>
                            <li><strong>Irritable bowel syndrome (IBS)</strong></li>
                            <li><strong>Endocrine disorders:</strong> hyperthyroidism, adrenal insufficiency.</li>
                            <li><strong>Post-surgical changes:</strong> post-cholecystectomy, bowel surgeries.</li>
                            <li><strong>Tumors:</strong> carcinoid syndrome, Zollinger-Ellison syndrome.</li>
                            <li><strong>Toxins:</strong> alcohol, food poisoning (e.g., Clostridium difficile).</li>
                            <li><strong>Stress and anxiety</strong></li>
                        </ul>

                        {/* Symptoms */}
                        <h5 className="mt-4">Signs and Symptoms of Severe Diarrhea</h5>
                        <ul>
                            <li>Fever, severe pain, or vomiting.</li>
                            <li>Blood or mucus in stool.</li>
                            <li>Unexplained weight loss.</li>
                            <li>Signs of dehydration: dry skin, irritability, confusion, nausea, light-headedness, fatigue.</li>
                        </ul>

                        {/* Investigations */}
                        <h5 className="mt-4">Investigations for Diarrhea</h5>

                        <h6>1. Stool Tests</h6>
                        <ul>
                            <li>Stool culture for bacterial pathogens.</li>
                            <li>Ova and parasite examination for parasitic infections.</li>
                            <li>Fecal leukocytes or calprotectin for inflammation (e.g., IBD).</li>
                            <li>Fecal fat test for malabsorption.</li>
                        </ul>

                        <h6>2. Blood Tests</h6>
                        <ul>
                            <li>Complete blood count (CBC).</li>
                            <li>Electrolytes for dehydration assessment.</li>
                            <li>CRP/ESR for inflammation.</li>
                            <li>Thyroid function tests.</li>
                            <li>Anti-TTG antibodies for celiac disease.</li>
                        </ul>

                        <h6>3. Endoscopy and Biopsy</h6>
                        <ul>
                            <li>Colonoscopy/sigmoidoscopy for IBD or tumors.</li>
                            <li>Upper endoscopy with biopsy for celiac disease.</li>
                        </ul>

                        {/* Management */}
                        <h5 className="mt-4">Management of Diarrhea</h5>

                        <h6>1. Rehydration</h6>
                        <ul>
                            <li><strong>Oral rehydration solution (ORS):</strong> for mild to moderate dehydration.</li>
                            <li><strong>Intravenous fluids:</strong> for severe dehydration.</li>
                        </ul>

                        <h6>2. Medications</h6>
                        <ul>
                            <li>Antibiotics for confirmed bacterial infections.</li>
                            <li>Antiparasitic drugs for parasitic infections.</li>
                            <li>Anti-motility agents (e.g., Loperamide) in non-infectious diarrhea.</li>
                            <li>Probiotics to restore gut flora.</li>
                            <li>Cholestyramine for bile salt diarrhea.</li>
                            <li>Steroids or immunosuppressants for IBD.</li>
                        </ul>

                        <h6>3. Dietary Modifications</h6>
                        <ul>
                            <li>Avoid dairy, high-fat, and high-fiber foods during acute episodes.</li>
                            <li>Lactose-free diet if intolerant.</li>
                            <li>Gluten-free diet for celiac disease.</li>
                        </ul>

                        <h6>4. Address Underlying Causes</h6>
                        <ul>
                            <li>Example: Gluten-free diet for celiac disease, medications for IBD or thyroid conditions.</li>
                        </ul>

                        <h6>5. Prevention</h6>
                        <ul>
                            <li>Vaccination (e.g., rotavirus for infants).</li>
                            <li>Safe food handling and hygiene practices.</li>
                            <li>Clean drinking water access.</li>
                        </ul>

                        <p>
                            If you experience persistent or severe diarrhea, it's important to consult a specialist for proper diagnosis and treatment.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}