// pages/laser-surgery.js

import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: "Laser Surgery for Anorectal Conditions | Bangalore",
    description:
        "Learn how laser surgery is used to treat anorectal conditions like hemorrhoids, anal fissures, fistula-in-ano, pilonidal sinus, and more.",
    keywords:
        "laser surgery, hemorrhoidoplasty, anal fissure treatment, fistula laser surgery, pilonidal sinus treatment, laser rectal polyps removal, Bangalore"
};

export default function LaserSurgeryPage() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Laser Surgery"
                imageSrc="/img/bannerslider/laser surgery 2.webp"
            />

            {/* Main Content */}
            <Container className="my-5">
                {/* Image + Intro Text (col-4 + col-8) */}
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} md={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src="/img/bannerslider/Surgery for cancer.webp"
                            alt="Laser Surgery"
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Description Section */}
                    <Col lg={8} md={8} className="mb-4">
                        <h3>What is Laser Surgery?</h3>
                        <p className="text-justify">
                            Laser surgery is an increasingly popular treatment option for various anorectal conditions due to its precision, technical advancement, minimal invasiveness, and reduced recovery time.
                            It involves the use of laser energy to remove or treat tissues in the anal and rectal area.
                            Below are the common anorectal conditions treated with laser surgery along with their benefits and general approach.
                        </p>
                    </Col>
                </Row>

                {/* Anorectal Conditions Treated with Laser Surgery */}
                <Row>
                    <Col lg={12} md={12}>
                        <h4>Anorectal Conditions Treated with Laser Surgery</h4>

                        {/* Hemorrhoids */}
                        <h6>1. Hemorrhoids: Laser Hemorrhoidoplasty (LHP)</h6>
                        <p className="text-justify">
                            This procedure is used for the treatment of internal hemorrhoids. A laser fiber is introduced into the hemorrhoidal pile, and laser energy is delivered, causing the hemorrhoid to shrink.
                            It cuts off blood flow to the hemorrhoidal vessels, leading to reduced swelling and fibrosis over time.
                        </p>
                        <ul>
                            <li><strong>Strong Family History:</strong> Genetics can strongly influence how body stores fat and how it burns calories.</li>
                            <li><strong>Gene Variations:</strong> Specific genes like those affecting leptin may be altered in some individuals, leading to increased hunger or impaired metabolism.</li>
                        </ul>
                        <p className="text-justify"><strong>Benefits:</strong> Minimal bleeding, less post-operative pain, quicker recovery compared to conventional hemorrhoidectomy.</p>

                        {/* Anal Fissures */}
                        <h6>2. Anal Fissures</h6>
                        <p className="text-justify">
                            Chronic anal fissures can be treated with LASER LIS by carefully removing the fissure tissue and promoting healing.
                            The laser helps reduce muscle spasms in the anal sphincter and promotes blood flow to the area.
                        </p>
                        <ul>
                            <li><strong>Benefits:</strong> Less pain, quicker healing, and reduced risk of infection.</li>
                        </ul>

                        {/* Fistula-in-Ano */}
                        <h6>3. Fistula-in-Ano</h6>
                        <p className="text-justify">
                            Many types of laser procedures like LAFT, FILAC, DLPS, Fixicision, VAAFT are used to ablate the fistula tract from within.
                            These techniques promote healing without extensive cutting of tissues.
                        </p>
                        <ul>
                            <li>LIFT with LASER / Distal laser proximal ligation</li>
                            <li>DLPS (Distal laser proximal sloft)</li>
                            <li>Fixicision (fistula coring with proximal SLOFT)</li>
                            <li>VAAFT with LASER</li>
                            <li><strong>Benefits:</strong> Minimal tissue damage, reduced recurrence rates, quicker recovery, and preservation of anal sphincter function (important for continence).</li>
                        </ul>

                        {/* Pilonidal Sinus */}
                        <h6>4. Pilonidal Sinus</h6>
                        <p className="text-justify">
                            Laser surgery can be used to treat pilonidal sinus disease by ablating the sinus tract and promoting closure.
                            It is particularly beneficial for recurrent cases where traditional surgery has failed.
                        </p>
                        <ul>
                            <li><strong>Benefits:</strong> Faster healing, less pain, and a lower risk of recurrence.</li>
                        </ul>

                        {/* Anal Warts */}
                        <h6>5. Anal Warts (Condyloma)</h6>
                        <p className="text-justify">
                            Laser therapy is effective for removing anal warts caused by HPV.
                            The laser precisely targets the warts, vaporizing them while minimizing damage to surrounding tissues.
                        </p>
                        <ul>
                            <li><strong>Benefits:</strong> Precision removal, reduced scarring, and minimal bleeding.</li>
                        </ul>

                        {/* Rectal Polyps */}
                        <h6>6. Rectal Polyps</h6>
                        <p className="text-justify">
                            Small benign rectal polyps can be removed using laser surgery.
                            The laser precisely cuts the polyp without the need for extensive surgery.
                        </p>
                        <ul>
                            <li><strong>Benefits:</strong> Faster procedure, minimal bleeding, and fewer complications.</li>
                        </ul>

                        {/* Benefits of Laser Surgery */}
                        <h5 className="mt-4">What Are the Benefits of Laser Surgery for Anorectal Conditions?</h5>
                        <ul>
                            <li><strong>Minimally Invasive:</strong> Causes minimal damage to surrounding tissues compared to traditional surgery, leading to faster recovery.</li>
                            <li><strong>Less Bleeding:</strong> Laser seals blood vessels as it cuts, reducing intra and post-op bleeding.</li>
                            <li><strong>Reduced Pain:</strong> Associated with less post-op pain due to reduced trauma and faster healing.</li>
                            <li><strong>Faster Recovery:</strong> Patients resume normal activities sooner.</li>
                            <li><strong>Lower Risk of Infections:</strong> Laser sterilizes tissue during surgery, lowering infection risk.</li>
                            <li><strong>Daycare Procedure:</strong> Most procedures are outpatient based — no hospitalization required.</li>
                            <li><strong>Reduced Recurrence Rates:</strong> Especially for fistulas, recurrence rates are often lower than traditional methods.</li>
                        </ul>

                        {/* Procedure & Recovery */}
                        <h5 className="mt-4">Procedure and Recovery</h5>
                        <ul>
                            <li><strong>Pre-procedure:</strong> Diagnostic tests and sometimes bowel prep before surgery.</li>
                            <li><strong>Procedure:</strong> Done under local, regional, or general anesthesia. Laser fiber is used to target and treat affected tissue.</li>
                            <li><strong>Post-procedure:</strong> Mild discomfort, manageable with medication. Recovery typically takes a few days to a week.</li>
                            <li><strong>Follow-up:</strong> Regular visits with surgeon to monitor healing and prevent recurrence.</li>
                        </ul>

                        {/* Risks and Considerations */}
                        <h5 className="mt-4">Risks and Considerations</h5>
                        <p className="text-justify">
                            While laser surgery has many advantages, there are some risks and considerations:
                        </p>
                        <ul>
                            <li>Mild pain and swelling after surgery</li>
                            <li>Burns to surrounding tissue (rare with experienced surgeons)</li>
                            <li>Recurrence of condition, although rare with laser techniques</li>
                        </ul>

                        <p className="text-justify mt-3">
                            Laser surgery for anorectal conditions offers a modern, less invasive option for patients seeking faster recovery with less discomfort.
                            However, it's important to consult with a specialist to determine if laser treatment is suitable for your specific condition.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* FAQ Section */}
            <FaqSection />
        </>
    );
}