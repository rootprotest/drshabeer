// pages/incisional-hernia.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Incisional Hernia - Causes & Treatment | Bangalore",
    description:
        "Understand what an incisional hernia is, its symptoms, diagnosis, and treatment options like open surgery, laparoscopic repair, and robotic-assisted procedures.",
    keywords:
        "incisional hernia, hernia after surgery, hernia treatment in bangalore, laparoscopic hernia repair, robotic hernia surgery"
};

export default function IncisionalHerniaPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Incisional Hernia"
                imageSrc="/img/bannerslider/Incisional hernia 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Incisional hernia.webp"
                            alt="Incisional Hernia"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is an Incisional Hernia?</h3>
                        <p className="text-justify">
                            An incisional hernia occurs at the site of a previous surgical scar, where part of the intestine protrudes through a weakened spot in the abdominal muscles at the site of the scar.
                            This can develop months or even years after abdominal surgery.
                            Incisional hernias can vary in size and severity — some may remain small, while others can enlarge over time, leading to discomfort and complications.
                            Patients who have had multiple abdominal surgeries or complex operations are at higher risk.
                        </p>
                    </Col>
                </Row>

                {/* Symptoms Section */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Symptoms of an Incisional Hernia</h4>
                        <ul>
                            <li><strong>Bulge near surgical site:</strong> Often visible when standing, coughing, or lifting — may disappear when lying down.</li>
                            <li><strong>Pain or discomfort:</strong> Especially during physical activity, bending, or straining.</li>
                            <li><strong>Nausea or vomiting:</strong> May occur if the intestine becomes incarcerated.</li>
                            <li><strong>Mobility issues:</strong> Larger hernias may make it difficult to sit up or move comfortably.</li>
                            <li><strong>Strangulation:</strong> In severe cases, blood supply to the trapped tissue can be cut off — requires emergency medical attention.</li>
                        </ul>

                        {/* Diagnosis */}
                        <h5 className="mt-4">How is Incisional Hernia Diagnosed?</h5>
                        <p className="text-justify">
                            A physical exam is usually sufficient to diagnose an incisional hernia, as the bulge is often visible when the patient stands or strains abdominal muscles.
                            However, imaging tests such as ultrasound, CT scan, or MRI may be used to assess the size, contents, and plan the best surgical approach for repair.
                        </p>

                        {/* Surgical Approaches */}
                        <h4 className="mt-4">Surgical Approaches to Incisional Hernia Repair</h4>

                        {/* Open Hernia Repair */}
                        <h6>1. Open Hernia Repair</h6>
                        <p className="text-justify">
                            In open surgery, a single incision is made over the site of the hernia. The surgeon pushes the herniated tissue back into the abdomen and repairs the defect in the abdominal wall.
                            A mesh is often used to reinforce the area and reduce recurrence rates.
                        </p>
                        <ul>
                            <li><strong>Advantages:</strong> Suitable for large or complex hernias.</li>
                            <li><strong>Advantages:</strong> Provides excellent visibility and access for the surgeon.</li>
                            <li><strong>Advantages:</strong> Ideal for patients not suitable for minimally invasive procedures.</li>
                        </ul>

                        {/* Laparoscopic Hernia Repair */}
                        <h6>2. Laparoscopic Hernia Repair</h6>
                        <p className="text-justify">
                            Laparoscopic surgery uses small incisions and a camera (laparoscope) to guide the repair.
                            Special instruments are inserted through these incisions to fix the hernia, often using mesh to strengthen the abdominal wall.
                        </p>
                        <ul>
                            <li><strong>Advantages:</strong> Shorter recovery time.</li>
                            <li><strong>Advantages:</strong> Smaller incisions and less scarring.</li>
                            <li><strong>Advantages:</strong> Lower infection risk and less pain.</li>
                            <li><strong>Advantages:</strong> Quicker return to normal activities.</li>
                            <li><strong>Note:</strong> Can be technically challenging and requires specialized skills.</li>
                        </ul>

                        {/* Robotic-Assisted Hernia Repair */}
                        <h6>3. Robotic-Assisted Hernia Repair</h6>
                        <p className="text-justify">
                            Similar to laparoscopy but with enhanced precision using robotic arms controlled by the surgeon.
                            Offers better flexibility and control, making it ideal for complex hernia repairs.
                        </p>
                        <ul>
                            <li><strong>Advantages:</strong> Enhanced precision and flexibility.</li>
                            <li><strong>Advantages:</strong> Similar benefits to laparoscopic surgery (small incisions, faster recovery).</li>
                            <li><strong>Advantages:</strong> Best suited for larger or recurrent hernias.</li>
                        </ul>

                        {/* Mesh Use */}
                        <h6>4. Mesh Use in Hernia Repair</h6>
                        <p className="text-justify">
                            Surgical mesh is commonly used in both open and laparoscopic repairs to provide extra reinforcement to the abdominal wall.
                            It helps distribute tension and significantly reduces recurrence rates.
                        </p>
                        <ul>
                            <li><strong>Benefits of mesh:</strong> Decreases recurrence rates significantly.</li>
                            <li><strong>Risks:</strong> Rare complications include infection, migration, or rejection of mesh.</li>
                        </ul>

                        {/* Recovery */}
                        <h5 className="mt-4">Recovery from Incisional Hernia Surgery</h5>
                        <p className="text-justify">
                            Recovery time depends on the surgical approach and hernia size.
                        </p>
                        <ul>
                            <li><strong>Minimally Invasive Surgery:</strong> Most patients resume light activities within 1–2 weeks and full recovery in 4–6 weeks.</li>
                        </ul>

                        {/* Complications */}
                        <h5 className="mt-4">Complications of Untreated Incisional Hernia</h5>
                        <p className="text-justify">
                            If left untreated, incisional hernias can grow larger and lead to serious complications.
                        </p>
                        <ul>
                            <li><strong>Incarceration:</strong> Hernia becomes trapped, causing bowel obstruction.</li>
                            <li><strong>Strangulation:</strong> Loss of blood supply to herniated tissue, which can cause tissue death and require emergency surgery.</li>
                        </ul>

                        {/* Conclusion */}
                        <p className="text-justify mt-4">
                            <strong>Conclusion:</strong> Incisional hernias are a common complication of abdominal surgery but can be successfully treated with various surgical approaches.
                            Early detection and intervention are key to preventing complications and ensuring smooth recovery.
                            If you suspect you have an incisional hernia or are experiencing symptoms, consult your healthcare provider to discuss the most appropriate treatment options.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}