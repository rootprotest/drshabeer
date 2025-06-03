// pages/rectal-bleeding.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Rectal Bleeding - Causes & Treatment | Bangalore",
    description:
        "Understand the acute and chronic causes of rectal bleeding including hemorrhoids, anal fissures, colorectal cancer, IBD, and more. Learn when to seek medical attention.",
    keywords:
        "rectal bleeding, moolshoola, causes of rectal bleeding, hemorrhoids treatment, anal fissure surgery, colorectal cancer, IBD, Bangalore"
};

export default function RectalBleedingPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Rectal Bleeding"
                imageSrc="/img/bannerslider/Rectal Bleeding 1960x430 (1).webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Rectal bleeding 2.webp"
                            alt="Rectal Bleeding"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Rectal Bleeding?</h3>
                        <p className="text-justify">
                            Rectal bleeding, also known as hematochezia, refers to the passage of bright red blood through the anus.
                            It can be caused by various conditions, both acute (sudden onset) and chronic (long-term).
                            While some causes are benign like hemorrhoids or anal fissures, others may indicate serious underlying issues such as colorectal cancer or inflammatory bowel disease (IBD).
                        </p>
                    </Col>
                </Row>

                {/* Types of Rectal Bleeding */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Types of Rectal Bleeding</h4>

                        <h5 className="mt-4">Acute Causes of Rectal Bleeding</h5>

                        <ul>
                            <li><strong>Hemorrhoids:</strong> Swollen blood vessels in the rectum or anus that may rupture and cause bright red bleeding, often associated with pain or itching.</li>
                            <li><strong>Anal Fissures:</strong> Small tears in the lining of the anus, usually caused by passing hard stools, leading to painful rectal bleeding.</li>
                            <li><strong>Diverticular Disease:</strong> Diverticula (small pouches in the colon wall) can become inflamed or bleed, causing significant rectal bleeding.</li>
                            <li><strong>Infectious Colitis:</strong> Inflammation of the colon due to bacterial, viral, or parasitic infections, causing diarrhea and rectal bleeding.</li>
                            <li><strong>Ischemic Colitis:</strong> Reduced blood flow to the colon, often causing pain, cramping, and bloody diarrhea.</li>
                            <li><strong>Trauma:</strong> Rectal injuries from objects, surgeries, or accidents can lead to sudden bleeding.</li>
                            <li><strong>Gastrointestinal Malformations (AVMs):</strong> Arteriovenous malformations can result in sudden bleeding in the GI tract.</li>
                            <li><strong>Colorectal Polyps:</strong> These growths can bleed if they become large or are traumatized.</li>
                        </ul>

                        <h5 className="mt-4">Chronic Causes of Rectal Bleeding</h5>

                        <ul>
                            <li><strong>Colorectal Cancer:</strong> Persistent or intermittent rectal bleeding can be a sign of cancer in the colon or rectum, especially in people over 50 or those with risk factors like family history.</li>
                            <li><strong>Inflammatory Bowel Disease (IBD):</strong> Conditions like Crohn’s disease and ulcerative colitis cause chronic inflammation and ulcers in the colon, leading to persistent bleeding.</li>
                            <li><strong>Angiodysplasia:</strong> Abnormal blood vessels in the colon that can cause slow, intermittent bleeding, often seen in elderly patients.</li>
                            <li><strong>Chronic Hemorrhoids:</strong> Long-standing hemorrhoids can bleed over time, especially during bowel movements.</li>
                            <li><strong>Radiation Proctitis:</strong> Bleeding from chronic inflammation of the rectum following radiation therapy for pelvic cancers (e.g., prostate, cervical cancer).</li>
                            <li><strong>Diverticulosis:</strong> Though typically asymptomatic, chronic bleeding can occur when diverticula become inflamed or infected over time.</li>
                            <li><strong>Rectal Ulcers:</strong> These can form due to chronic constipation, straining, or other medical conditions like prolapse.</li>
                            <li><strong>Vascular Ectasia:</strong> Abnormal blood vessels in the GI tract, more common in older adults, can cause chronic bleeding.</li>
                        </ul>

                        {/* When to Seek Medical Help */}
                        <h5 className="mt-4">When to See a Doctor?</h5>
                        <p className="text-justify">
                            If you experience any of the following, it's important to consult a specialist immediately:
                        </p>
                        <ul>
                            <li>Heavy or persistent bleeding</li>
                            <li>Bleeding accompanied by abdominal pain, weight loss, or fatigue</li>
                            <li>Black or tarry stools (melena), which may indicate upper GI bleeding</li>
                            <li>A family history of colorectal cancer or polyps</li>
                            <li>Persistent bleeding despite home remedies or OTC treatments</li>
                        </ul>

                        {/* Diagnosis */}
                        <h5 className="mt-4">How is Rectal Bleeding Diagnosed?</h5>
                        <p className="text-justify">
                            Diagnosis involves a detailed medical history, physical examination, and tests like:
                        </p>
                        <ul>
                            <li><strong>Anoscopy / Proctoscopy:</strong> To examine the rectum directly</li>
                            <li><strong>Colonoscopy:</strong> To visualize the entire colon and identify sources of bleeding</li>
                            <li><strong>Fecal Occult Blood Test:</strong> To detect hidden blood in stool</li>
                            <li><strong>Imaging Studies:</strong> CT scan, MRI, or angiography in selected cases</li>
                        </ul>

                        {/* Treatment Options */}
                        <h5 className="mt-4">Treatment Options</h5>
                        <p className="text-justify">
                            Treatment depends on the underlying cause and severity of bleeding:
                        </p>
                        <ul>
                            <li><strong>Lifestyle Changes:</strong> Fiber-rich diet, hydration, avoiding straining during bowel movements.</li>
                            <li><strong>Medications:</strong> Topical creams, suppositories, laxatives, or anti-inflammatory drugs for IBD.</li>
                            <li><strong>Minimally Invasive Procedures:</strong> Laser therapy, rubber band ligation, infrared coagulation for hemorrhoids.</li>
                            <li><strong>Surgery:</strong> Required in severe cases like colorectal cancer, chronic IBD, or recurrent bleeding.</li>
                        </ul>

                        {/* Prevention */}
                        <h5 className="mt-4">Prevention Tips</h5>
                        <ul>
                            <li>Maintain a high-fiber diet to prevent constipation</li>
                            <li>Stay well-hydrated and avoid excessive straining</li>
                            <li>Exercise regularly and maintain a healthy weight</li>
                            <li>Get regular screenings for colorectal cancer after age 50 or earlier if there's a family history</li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Rectal bleeding can vary from minor to life-threatening depending on the underlying cause.
                            While some causes like hemorrhoids or anal fissures are treatable with simple interventions, others like colorectal cancer or IBD require timely diagnosis and specialized care.
                            If you're experiencing unexplained or persistent rectal bleeding, don't delay seeking professional help to rule out serious conditions and start appropriate treatment.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}