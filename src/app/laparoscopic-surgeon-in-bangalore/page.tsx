// pages/laparoscopic.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Laparoscopic Surgery - Benefits & Procedures | Bangalore",
    description:
        "Understand the benefits of laparoscopic surgery including smaller incisions, faster recovery, reduced pain, and precision. Learn about common laparoscopic procedures like gallbladder removal, hernia repair, and more.",
    keywords:
        "laparoscopic surgery, minimally invasive surgery, laparoscopy, gallbladder removal, hernia repair, appendectomy, gynecological laparoscopy, bariatric surgery, Bangalore"
};

export default function LaparoscopicPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Laparoscopic Surgery"
                imageSrc="/img/bannerslider/laroscopic 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/icons/Robotic Surgery.webp"
                            alt="Laparoscopic Surgery"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Laparoscopic Surgery?</h3>
                        <p className="text-justify">
                            Laparoscopic surgery, also known as minimally invasive surgery, involves small incisions, a camera (laparoscope), and specialized instruments to perform surgical procedures.
                            It is widely used in abdominal, pelvic, and other types of surgeries, offering patients quicker recovery, minimal scarring, and reduced postoperative pain.
                            This modern approach has revolutionized many surgical fields due to its efficiency and patient-friendly outcomes.
                        </p>
                    </Col>
                </Row>

                {/* Benefits of Laparoscopic Surgery */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Benefits of Laparoscopic Surgery</h4>

                        <ul>
                            <li><strong>Smaller Incisions:</strong> Unlike traditional open surgery, laparoscopic procedures use small cuts, leading to less visible scarring.</li>
                            <li><strong>Faster Recovery:</strong> Patients typically experience shorter hospital stays and can return to normal activities sooner.</li>
                            <li><strong>Reduced Pain and Discomfort:</strong> Smaller incisions mean less pain and lower dependence on strong pain medications after surgery.</li>
                            <li><strong>Lower Risk of Infection:</strong> Smaller wounds reduce the risk of infections and post-surgical complications.</li>
                            <li><strong>Enhanced Precision:</strong> The laparoscope provides a magnified view, allowing surgeons to operate with high accuracy.</li>
                            <li><strong>Less Blood Loss:</strong> Controlled incisions and precise tools help minimize bleeding during surgery.</li>
                            <li><strong>Better Cosmetic Outcome:</strong> Minimal scarring improves aesthetic results.</li>
                        </ul>

                        {/* Common Procedures */}
                        <h4 className="mt-4">Common Procedures Performed Using Laparoscopic Surgery</h4>

                        <ul>
                            <li><strong>Gallbladder Removal (Cholecystectomy):</strong> Preferred method for treating gallstones or gallbladder inflammation.</li>
                            <li><strong>Hernia Repair:</strong> Many types of hernias — including inguinal, umbilical, and incisional — are effectively treated using laparoscopic techniques.</li>
                            <li><strong>Appendectomy:</strong> Removing an inflamed appendix through small incisions with minimal trauma.</li>
                            <li><strong>Gynecological Surgeries:</strong> Used for endometriosis, ovarian cysts, tubal ligation, and hysterectomy.</li>
                            <li><strong>Bariatric Surgery:</strong> Weight-loss procedures like gastric bypass and sleeve gastrectomy are commonly performed laparoscopically.</li>
                            <li><strong>Colon and Rectal Surgery:</strong> Includes resection of diseased bowel segments for conditions like diverticulitis or cancer.</li>
                        </ul>

                        {/* Limitations and Considerations */}
                        <h4 className="mt-4">Limitations and Considerations</h4>
                        <p className="text-justify">
                            Although laparoscopic surgery offers many advantages, it may not be suitable for all cases.
                            Certain conditions such as severe obesity, extensive abdominal scarring, or emergency situations may require conversion to open surgery.
                            Surgeons must assess each case individually to determine the safest and most effective approach.
                        </p>

                        {/* Conclusion */}
                        <h5 className="mt-4">Conclusion</h5>
                        <p className="text-justify">
                            Laparoscopic surgery is a modern, patient-friendly alternative to traditional open surgery, offering significant benefits including faster healing, less pain, and better cosmetic outcomes.
                            However, it's important to consult with a specialist to determine if laparoscopic surgery is appropriate for your medical condition.
                        </p>

                        {/* Note */}
                        <p className="text-justify mt-3">
                            <strong>Note:</strong> Not every patient is a candidate for laparoscopic surgery. Your surgeon will evaluate your health, medical history, and the nature of the procedure before recommending the best approach.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}