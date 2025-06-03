// pages/surgery-for-cancers.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FAQSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Surgery for Cancers - Laser Treatment | Bangalore",
    description:
        "Learn how laser surgery is used to treat various anorectal conditions like hemorrhoids, anal fissures, fistula-in-ano, pilonidal sinus, and more.",
    keywords:
        "laser surgery for cancer, laser treatment for anorectal conditions, hemorrhoids treatment, anal fissure laser, fistula treatment in bangalore"
};

export default function SurgeryForCancersPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Surgery for Cancers"
                imageSrc="/img/bannerslider/Surgery For Reflux 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Surgery for cancer.webp"
                            alt="Surgery for Cancers"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <p className="text-justify">
                            Surgery for cancers is an increasingly popular treatment option for various anorectal conditions due to its precision, technical advancement, minimal invasiveness, and reduced recovery time.
                            It involves the use of laser energy to remove or treat tissues in the anal and rectal area.
                        </p>
                    </Col>
                </Row>

                {/* Conditions Treated with Laser Surgery */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Anorectal Conditions Treated with Laser Surgery</h4>

                        {/* Hemorrhoids */}
                        <h6>1. Hemorrhoids: Laser Hemorrhoidoplasty (LHP)</h6>
                        <p>
                            This procedure is used for the treatment of internal hemorrhoids. A laser fiber is introduced into the hemorrhoidal pile, and laser energy is delivered, causing the hemorrhoid to shrink.
                        </p>
                        <ul>
                            <li><strong>Strong Family History:</strong> Genetics can strongly influence how body stores fat and how it burns calories.</li>
                            <li><strong>Gene Variations:</strong> Specific genes, such as those affecting leptin, may be altered in some individuals.</li>
                        </ul>
                        <p><strong>Benefits:</strong> Minimal bleeding, less post-operative pain, quicker recovery.</p>

                        {/* Anal Fissures */}
                        <h6>2. Anal Fissures</h6>
                        <p>Chronic anal fissures can be treated with LASER LIS by carefully removing the fissure tissue and promoting healing.</p>
                        <ul>
                            <li><strong>Benefits:</strong> Less pain, quicker healing, reduced risk of infection.</li>
                        </ul>

                        {/* Fistula-in-Ano */}
                        <h6>3. Fistula-in-Ano</h6>
                        <p>Many types of Laser like LAFT, FILAC, DLPS, Fixicision, VAAFT are used to ablate the fistula tract from within.</p>
                        <ul>
                            <li><strong>Benefits:</strong> Minimal tissue damage, reduced recurrence rates, quicker recovery, preservation of anal sphincter function.</li>
                        </ul>

                        {/* Pilonidal Sinus */}
                        <h6>4. Pilonidal Sinus</h6>
                        <p>Laser surgery can be used to treat pilonidal sinus disease by ablating the sinus tract and promoting closure.</p>
                        <ul>
                            <li><strong>Benefits:</strong> Faster healing, less pain, lower recurrence rate.</li>
                        </ul>

                        {/* Anal Warts */}
                        <h6>5. Anal Warts (Condyloma)</h6>
                        <p>Laser therapy removes anal warts caused by HPV precisely.</p>
                        <ul>
                            <li><strong>Benefits:</strong> Precision removal, reduced scarring, minimal bleeding.</li>
                        </ul>

                        {/* Rectal Polyps */}
                        <h6>6. Rectal Polyps</h6>
                        <p>Small benign rectal polyps can be removed using laser surgery.</p>
                        <ul>
                            <li><strong>Benefits:</strong> Faster procedure, minimal bleeding, fewer complications.</li>
                        </ul>

                        {/* Benefits of Laser Surgery */}
                        <h5 className="mt-4">What are the Benefits of Laser Surgery for Anorectal Conditions:</h5>
                        <ul>
                            <li><strong>Minimally Invasive:</strong> Less tissue damage, faster recovery.</li>
                            <li><strong>Less Bleeding:</strong> Seals blood vessels as it cuts.</li>
                            <li><strong>Reduced Pain:</strong> Faster healing and less trauma.</li>
                            <li><strong>Faster Recovery:</strong> Patients resume activities sooner.</li>
                            <li><strong>Lower Risk of Infections:</strong> Sterilizes tissue during surgery.</li>
                            <li><strong>Daycare Procedure:</strong> Outpatient basis.</li>
                            <li><strong>Reduced Recurrence Rates:</strong> Especially for fistulas.</li>
                        </ul>

                        {/* Procedure and Recovery */}
                        <h5 className="mt-4">Procedure and Recovery</h5>
                        <ul>
                            <li><strong>Pre-procedure:</strong> Diagnostic tests and bowel prep.</li>
                            <li><strong>Procedure:</strong> Local/General anesthesia; laser fiber used precisely.</li>
                            <li><strong>Post-procedure:</strong> Mild discomfort, manageable with meds.</li>
                            <li><strong>Follow-up:</strong> Regular visits ensure proper healing.</li>
                        </ul>

                        {/* Risks */}
                        <h5 className="mt-4">Risks and Considerations</h5>
                        <ul>
                            <li>Mild pain and swelling post-surgery</li>
                            <li>Burns to surrounding tissue (rare)</li>
                            <li>Possible recurrence (though rare)</li>
                        </ul>

                        <p className="mt-3">
                            Laser surgery for anorectal conditions offers a modern, less invasive option for patients, particularly those looking for faster recovery with less discomfort.
                            However, it’s important to consult with a specialist to determine if laser treatment is suitable for your specific condition.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FAQSection />
        </>
    );
}