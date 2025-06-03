// pages/irritable-bowel-syndrome.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Irritable Bowel Syndrome (IBS) - Causes & Treatment | Bangalore",
    description:
        "Understand Irritable Bowel Syndrome (IBS), its causes, types, symptoms, and treatment options including dietary changes, medications, and lifestyle modifications.",
    keywords:
        "ibs, irritable bowel syndrome, ibs treatment in bangalore, low fodmap diet, gut health, digestive issues"
};

export default function IBSPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Irritable Bowel Syndrome"
                imageSrc="/img/bannerslider/Surgery For Reflux 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/irritable bowel syndrime.webp"
                            alt="Irritable Bowel Syndrome"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Irritable Bowel Syndrome (IBS)?</h3>
                        <p className="text-justify">
                            Irritable Bowel Syndrome (IBS) is a common functional gastrointestinal disorder characterized by chronic abdominal pain, discomfort, bloating, and changes in bowel habits — such as diarrhea, constipation, or both.
                            It affects the large intestine but does not cause permanent damage or increase the risk of other serious digestive diseases like cancer or inflammatory bowel disease (IBD).
                        </p>
                    </Col>
                </Row>

                {/* Causes of IBS */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Causes of IBS</h4>
                        <ul>
                            <li><strong>Gut-Brain Axis Dysfunction:</strong> Miscommunication between the brain and the gut can lead to altered bowel function and sensitivity.</li>
                            <li><strong>Abnormal Intestinal Motility:</strong> People with IBS may experience irregular muscle contractions in the intestines — leading to diarrhea or constipation.</li>
                            <li><strong>Increase Gut Sensitivity:</strong> The intestinal lining may be more sensitive, causing pain or discomfort from normal gut activity like gas or stool movement.</li>
                            <li><strong>Gut Microbiota Imbalance:</strong> An imbalance in gut bacteria (dysbiosis) may contribute to IBS symptoms.</li>
                            <li><strong>Post-Infectious IBS:</strong> IBS can develop after a severe gastrointestinal infection like gastroenteritis.</li>
                            <li><strong>Food Sensitivities:</strong> Certain foods like dairy, gluten, fatty foods, and high-FODMAP foods can trigger symptoms.</li>
                            <li><strong>Stress and Psychological Factors:</strong> Stress, anxiety, and depression can worsen IBS symptoms due to the gut-brain connection.</li>
                            <li><strong>Hormonal Changes:</strong> Symptoms often worsen during menstruation, suggesting a hormonal link.</li>
                            <li><strong>Medications:</strong> Antibiotics and other drugs can affect gut flora and worsen symptoms.</li>
                        </ul>

                        {/* Types of IBS */}
                        <h5 className="mt-4">Types of IBS</h5>
                        <p className="text-justify">
                            IBS is classified based on the predominant bowel habit:
                        </p>
                        <ul>
                            <li><strong>IBS with Diarrhea (IBS-D):</strong> Frequent loose stools, urgency, and abdominal discomfort.</li>
                            <li><strong>IBS with Constipation (IBS-C):</strong> Infrequent, hard stools, difficulty passing stool, and abdominal bloating.</li>
                            <li><strong>IBS with Mixed Bowel Habits (IBS-M):</strong> Alternating episodes of diarrhea and constipation.</li>
                            <li><strong>IBS Unclassified (IBS-U):</strong> Symptoms that don’t fit neatly into the above categories but still involve significant bowel habit changes and discomfort.</li>
                        </ul>

                        {/* Symptoms */}
                        <h5 className="mt-4">Common Symptoms of IBS</h5>
                        <ul>
                            <li>Abdominal pain or cramping, often relieved by a bowel movement</li>
                            <li>Bloating and gas</li>
                            <li>Diarrhea, constipation, or alternating between the two</li>
                            <li>Mucus in the stool</li>
                            <li>Feeling of incomplete evacuation after a bowel movement</li>
                        </ul>

                        {/* Diagnosis */}
                        <h5 className="mt-4">How is IBS Diagnosed?</h5>
                        <p className="text-justify">
                            IBS is diagnosed primarily based on symptoms and by ruling out other conditions. Doctors use the Rome IV criteria, which includes abdominal pain at least one day per week in the last three months, along with two or more of the following:
                        </p>
                        <ul>
                            <li>Pain related to defecation</li>
                            <li>Changes in stool frequency</li>
                            <li>Changes in stool appearance</li>
                        </ul>
                        <p className="text-justify">
                            Additional tests like blood tests, stool tests, or colonoscopy may be performed to exclude other conditions such as celiac disease or IBD.
                        </p>

                        {/* Treatment Options */}
                        <h5 className="mt-4">Treatment Options for IBS</h5>

                        <h6>1. Dietary and Lifestyle Changes</h6>
                        <ul>
                            <li><strong>Low FODMAP Diet:</strong> A diet low in fermentable carbohydrates can significantly reduce symptoms.</li>
                            <li><strong>Fiber Intake (for IBS-C):</strong> Soluble fiber like psyllium can help with constipation without worsening bloating.</li>
                            <li><strong>Avoid Trigger Foods:</strong> Dairy, fatty foods, caffeine, alcohol, and spicy foods should be avoided if they aggravate symptoms.</li>
                            <li><strong>Stay Hydrated:</strong> Drinking plenty of water helps manage constipation.</li>
                            <li><strong>Regular Exercise:</strong> Physical activity improves digestion and reduces stress levels.</li>
                        </ul>

                        <h6>2. Medications</h6>
                        <ul>
                            <li><strong>Antispasmodics:</strong> E.g., hyoscine, dicyclomine — relieve abdominal cramping and pain.</li>
                            <li><strong>Laxatives (for IBS-C):</strong> Osmotic laxatives like polyethylene glycol can ease constipation.</li>
                            <li><strong>Antidiarrheal Medications (for IBS-D):</strong> Loperamide helps reduce diarrhea.</li>
                            <li><strong>Bile Acid Sequestrants (for IBS-D):</strong> These reduce diarrhea by binding excess bile acids.</li>
                            <li><strong>Antidepressants:</strong> Low-dose tricyclic antidepressants (TCAs) or SSRIs may help reduce pain and regulate bowel movements.</li>
                            <li><strong>Gut-Targeted Antibiotics:</strong> Rifaximin is sometimes used to treat IBS-D by altering gut bacteria.</li>
                            <li><strong>Serotonin Modulators:</strong> Alosetron and similar drugs affect gut motility and sensitivity (used under specialist guidance).</li>
                        </ul>

                        <h6>3. Psychological Therapies</h6>
                        <ul>
                            <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps manage stress and anxiety linked to IBS.</li>
                            <li><strong>Gut-Directed Hypnotherapy:</strong> Focuses on reducing gut hypersensitivity and improving gut function.</li>
                            <li><strong>Stress Management:</strong> Yoga, meditation, and breathing exercises can reduce symptom severity.</li>
                        </ul>

                        <h6>4. Probiotics</h6>
                        <p className="text-justify">
                            Some evidence suggests that probiotics may improve IBS symptoms by balancing gut bacteria. However, effectiveness varies among individuals and strains.
                        </p>

                        <h6>5. Monitoring and Support</h6>
                        <ul>
                            <li><strong>Symptom Diary:</strong> Keeping a record of food intake, bowel habits, and stress levels helps identify triggers.</li>
                            <li><strong>Education and Follow-up:</strong> Understanding IBS and regular check-ups with a healthcare provider ensures better management and timely adjustments to treatment plans.</li>
                        </ul>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Irritable Bowel Syndrome is a manageable condition with proper lifestyle changes, dietary adjustments, and medical support.
                            While it doesn't cause permanent damage, persistent symptoms should be evaluated by a specialist to rule out other underlying conditions and ensure effective symptom control.
                            If you're experiencing chronic digestive issues, consult your doctor to explore personalized treatment options.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}