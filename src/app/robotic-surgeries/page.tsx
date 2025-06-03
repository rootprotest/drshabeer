// pages/robotic-surgery.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Robotic Surgery - Benefits & Applications | Bangalore",
    description:
        "Explore the benefits and applications of robotic surgery in gastrointestinal (GI) diseases like colorectal cancer, GERD, rectal cancer, and more.",
    keywords:
        "robotic surgery, da vinci system, minimally invasive surgery, colorectal cancer treatment, GI surgery, Bangalore"
};

export default function RoboticSurgeryPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Robotic Surgery"
                imageSrc="/img/bannerslider/Robotic Surgery 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Stem Cell Therapy.webp"
                            alt="Robotic Surgery"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Robotic Surgery?</h3>
                        <p className="text-justify">
                            Robotic surgery is revolutionizing the field of gastrointestinal (GI) surgery by offering enhanced precision, flexibility, and control compared to traditional open and laparoscopic surgeries.
                            The use of robotics in treating GI diseases has grown significantly over the past few years, providing a minimally invasive approach that reduces recovery time, minimizes complications, and improves overall patient outcomes.
                        </p>
                    </Col>
                </Row>

                {/* Applications in Gastrointestinal Diseases */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Applications in Gastrointestinal Diseases</h4>

                        <h6>1. Colorectal Surgery</h6>
                        <p className="text-justify">
                            Robotic surgery is used for colon resections in conditions like colorectal cancer, diverticulitis, and inflammatory bowel diseases (Crohn’s disease, ulcerative colitis).
                            The precision of robotic systems helps preserve surrounding nerves and tissues, which is critical in maintaining bowel function and sexual health.
                        </p>

                        <h6>2. Esophageal Surgery</h6>
                        <p className="text-justify">
                            Conditions such as esophageal cancer, achalasia, and gastroesophageal reflux disease (GERD) can be effectively treated using robotic-assisted techniques.
                            These procedures offer greater accuracy and reduced trauma compared to traditional methods.
                        </p>

                        <h6>3. Hepatobiliary Surgery</h6>
                        <p className="text-justify">
                            For diseases of the liver, gallbladder, and pancreas — such as liver tumors, gallstones, and pancreatic cancer — robotic surgery allows precise resections with better outcomes and faster recovery than traditional open surgery.
                        </p>

                        <h6>4. Gastric Surgery</h6>
                        <p className="text-justify">
                            Robotics are increasingly being used in gastric cancer surgeries, ulcer treatments, and bariatric procedures like sleeve gastrectomy and gastric bypass.
                            This technology supports safer and more effective interventions even in complex cases.
                        </p>

                        <h6>5. Rectal Cancer Surgery</h6>
                        <p className="text-justify">
                            Robotic-assisted surgery for rectal cancer is particularly beneficial due to its ability to perform fine dissection in the narrow pelvic space.
                            It helps preserve critical structures, including nerves responsible for bowel, bladder, and sexual function — making it ideal for oncological and functional preservation.
                        </p>

                        {/* Types of Robotic Surgery */}
                        <h4 className="mt-4">Types of Robotic Surgery</h4>

                        <p className="text-justify">
                            <strong>What are the benefits of robotic surgery in colorectal procedures?</strong>
                        </p>

                        <ol>
                            <li>
                                <strong>Minimally Invasive:</strong> Smaller incisions lead to less pain, faster recovery, and minimal scarring.
                            </li>
                            <li>
                                <strong>Enhanced Precision:</strong> Greater accuracy in cutting, suturing, and tissue manipulation, especially useful in complex GI procedures.
                            </li>
                            <li>
                                <strong>Improved Visualization:</strong> 3D, high-definition view enhances depth perception and visibility, helping surgeons navigate diseased anatomy with confidence.
                            </li>
                            <li>
                                <strong>Reduced Complications:</strong> Lower risk of bleeding, infection, and damage to surrounding tissues due to superior control and visibility.
                            </li>
                            <li>
                                <strong>Shorter Hospital Stays:</strong> Patients often recover quicker and can be discharged sooner compared to traditional surgical approaches.
                            </li>
                        </ol>

                        {/* Benefits */}
                        <h4 className="mt-4">Why Choose Robotic Surgery?</h4>

                        <ul>
                            <li><strong>Superior Dexterity:</strong> Robotic arms mimic human hand movements but with greater range and stability.</li>
                            <li><strong>Better Ergonomics:</strong> Surgeons operate from a seated console, reducing fatigue during long procedures.</li>
                            <li><strong>Fewer Conversions to Open Surgery:</strong> Offers improved access in difficult anatomical areas like the pelvis or behind the liver.</li>
                            <li><strong>Patient Safety:</strong> Enhanced control and visualization reduce intraoperative errors and improve outcomes.</li>
                        </ul>

                        {/* Conclusion */}
                        <p className="text-justify mt-4">
                            <strong>Note:</strong> While robotic surgery offers many advantages, suitability depends on individual patient factors and condition severity.
                            If you're considering advanced surgical care in Bangalore, consult your specialist to determine if robotic-assisted surgery is right for your condition.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}