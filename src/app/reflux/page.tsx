// pages/surgery-for-reflux-disease.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Surgery for Reflux Disease - GERD Treatment | Bangalore",
    description:
        "Learn about surgery options for GERD including fundoplication, LINX device, and endoscopic treatments. Find expert care in Bangalore.",
    keywords:
        "gerd surgery, reflux disease treatment, laparoscopic fundoplication, linx device, acid reflux treatment, Bangalore"
};

export default function SurgeryForRefluxPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Surgery for Reflux Disease"
                imageSrc="/img/bannerslider/Surgery For Reflux 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Reflux surgery.webp"
                            alt="Surgery for Reflux Disease"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Surgery for Reflux Disease?</h3>
                        <p className="text-justify">
                            Surgery for reflux disease, also known as Gastroesophageal Reflux Disease (GERD), is an increasingly popular treatment option for patients suffering from chronic acid reflux.
                            It involves minimally invasive procedures that strengthen the lower esophageal sphincter (LES), preventing stomach contents from flowing back into the esophagus.
                            This can be a long-term solution for those who don't respond well to medications or lifestyle changes.
                        </p>
                    </Col>
                </Row>

                {/* What is GERD? */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Understanding GERD</h4>
                        <p className="text-justify">
                            GERD is a chronic digestive disorder where stomach acid or bile flows back into the esophagus, causing irritation to the esophageal lining.
                            This backflow is known as acid reflux, and when it becomes frequent or persistent, it is classified as GERD.
                            Left untreated, GERD can lead to complications such as esophagitis, Barrett’s esophagus, or even esophageal cancer.
                        </p>

                        {/* Causes of GERD */}
                        <h5 className="mt-4">Common Causes of GERD</h5>
                        <ul>
                            <li><strong>Weak Lower Esophageal Sphincter (LES):</strong> The LES is a ring of muscle at the junction between the esophagus and stomach. If it weakens or relaxes abnormally, acid can escape into the esophagus.</li>
                            <li><strong>Hiatal Hernia:</strong> A condition where part of the stomach pushes up through the diaphragm into the chest cavity, which can impair the function of the LES and lead to reflux.</li>
                            <li><strong>Obesity:</strong> Increased pressure on the abdomen can weaken the LES and contribute to acid reflux.</li>
                            <li><strong>Pregnancy:</strong> Hormonal changes and increased abdominal pressure during pregnancy can lead to GERD.</li>
                            <li><strong>Delayed Stomach Emptying:</strong> Conditions that slow the emptying of the stomach can increase the risk of GERD by allowing food and acid to linger.</li>
                            <li><strong>Dietary & Lifestyle Factors:</strong> Fatty foods, chocolate, caffeine, alcohol, smoking, and eating late at night can trigger GERD symptoms.</li>
                        </ul>

                        {/* Symptoms */}
                        <h5 className="mt-4">Common Symptoms of GERD</h5>
                        <ul>
                            <li><strong>Heartburn:</strong> A burning sensation in the chest, especially after meals or at night.</li>
                            <li><strong>Regurgitation:</strong> Sour or bitter taste in the mouth due to acid coming back up.</li>
                            <li><strong>Chest Pain:</strong> Often mistaken for heart-related pain.</li>
                            <li><strong>Dysphagia:</strong> Difficulty swallowing due to narrowing of the esophagus.</li>
                            <li><strong>Chronic Cough, Sore Throat, or Hoarseness:</strong> Due to irritation from acid exposure.</li>
                            <li><strong>Laryngitis and Wheezing:</strong> Acid can irritate the throat and airways, causing voice changes and breathing issues.</li>
                        </ul>

                        {/* Diagnosis */}
                        <h5 className="mt-4">How is GERD Diagnosed?</h5>
                        <ul>
                            <li><strong>Clinical Evaluation:</strong> Based on symptoms like heartburn and regurgitation.</li>
                            <li><strong>Endoscopy:</strong> Allows visualization of the esophagus and stomach lining to check for inflammation or damage.</li>
                            <li><strong>Esophageal pH Monitoring:</strong> Measures acid levels in the esophagus over a period of time.</li>
                            <li><strong>Manometry:</strong> Evaluates the function and pressure of the esophageal muscles and LES.</li>
                            <li><strong>Barium Swallow X-ray:</strong> Helps identify structural abnormalities like hiatal hernias.</li>
                        </ul>

                        {/* Treatment Options */}
                        <h4 className="mt-4">Treatment Options for GERD</h4>

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

                        <h6>3. Surgical Treatments</h6>
                        <p className="text-justify"><strong>a. Fundoplication:</strong> A surgical procedure where the top of the stomach is wrapped around the LES to strengthen it and prevent acid reflux.</p>
                        <p className="text-justify"><strong>b. LINX Device:</strong> A small, flexible ring of magnetic beads placed around the LES to keep it closed and prevent reflux without altering anatomy.</p>
                        <p className="text-justify"><strong>c. Endoscopic Treatments:</strong> Minimally invasive techniques like the Stretta procedure help tighten the LES using heat energy.</p>

                        {/* Benefits of Surgery */}
                        <h5 className="mt-4">Benefits of Surgical Treatment for GERD</h5>
                        <ul>
                            <li><strong>Long-term Relief:</strong> Offers a permanent or long-lasting solution compared to temporary medication use.</li>
                            <li><strong>Improved Quality of Life:</strong> Patients often experience better sleep, reduced pain, and improved digestion post-surgery.</li>
                            <li><strong>Reduced Risk of Complications:</strong> Prevents progression to Barrett’s esophagus and lowers cancer risk.</li>
                            <li><strong>Minimally Invasive:</strong> Laparoscopic and robotic-assisted surgeries allow faster recovery and minimal discomfort.</li>
                            <li><strong>No Long-term Medication Dependence:</strong> Many patients no longer require daily PPIs after successful surgery.</li>
                        </ul>

                        {/* Risks and Considerations */}
                        <h5 className="mt-4">Risks and Considerations</h5>
                        <p className="text-justify">
                            While surgery for reflux disease is generally safe, there are some risks:
                        </p>
                        <ul>
                            <li><strong>Post-operative bloating or gas buildup:</strong> Some patients may experience difficulty burping or bloating after surgery.</li>
                            <li><strong>Infection or bleeding:</strong> Rare but possible after any surgery.</li>
                            <li><strong>Swallowing difficulties:</strong> May occur temporarily or rarely persistently if the wrap is too tight.</li>
                            <li><strong>Recurrence:</strong> Though uncommon, GERD can return if lifestyle changes aren’t maintained.</li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Surgery for reflux disease is a highly effective option for patients who do not respond to medications or lifestyle changes.
                            Whether you opt for laparoscopic fundoplication, the LINX device, or endoscopic treatment — each has its own set of benefits and considerations.
                            If you're experiencing persistent GERD symptoms, consult a specialist to determine whether surgical intervention is right for your condition.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}