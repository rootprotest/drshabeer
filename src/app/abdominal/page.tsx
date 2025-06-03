import BariatricBanner from '@/components/BreadcrumbBanner';
import FaqSection from '@/components/FaqSection';
import Head from 'next/head';
import Image from 'next/image';

export default function Abdominal() {
    return (
        <>
            <Head>
                <title>Abdominal pain/ acute and Chronic</title>
                <meta name="description" content="Details about Bariatric Surgery types, advantages, and procedures." />
            </Head>

            <BariatricBanner title="Abdominal pain/ acute and Chronic" imageSrc="/img/bannerslider/Abdominal Pain 2.webp" />

            <div className="content">
                <div className="container my-5">
                    {/* Blog Section */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-section">
                                <div className="blog-container">
                                    <div className="blog-content">

                                        {/* Image */}
                                        <div className="blog-image mb-4">
                                            <img
                                                src="/img/bannerslider/ABDOMINAL PAIN.webp"
                                                alt="Laser Surgery for Anorectal Conditions"
                                                className="img-fluid"
                                            />
                                        </div>

                                        {/* Intro Text */}
                                        <div className="blog-text mb-4">
                                            <h3>What is Abdominal Pain / Acute and Chronic?</h3>
                                            <p>
                                                Anal fissure, anal fistula is an increasingly popular treatment option for various anorectal conditions due to its precision, technical advancement, minimal invasiveness, and reduced recovery time.
                                                It involves the use of laser energy to remove or treat tissues in the anal and rectal area.
                                                Below are the common anorectal conditions treated with laser surgery along with their benefits and general approach:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Laser Treatments Section */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12">

                            <h4>Anorectal Conditions Treated with Laser Surgery</h4>

                            {/* Hemorrhoids */}
                            <p className="txt-just">
                                <strong>1. Hemorrhoids: Laser Hemorrhoidoplasty (LHP)</strong>
                                <br />
                                This procedure is used for treating internal hemorrhoids. A laser fiber is introduced into the hemorrhoidal pile, and laser energy is delivered, causing the hemorrhoid to shrink. It cuts off blood flow to the hemorrhoidal vessels, leading to reduced swelling and fibrosis over time.
                            </p>
                            <ul>
                                <li><strong>Strong Family History:</strong> Genetics can strongly influence how body stores fat and how it burns calories.</li>
                                <li><strong>Gene Variations:</strong> Specific genes like those affecting leptin may be altered in some individuals, leading to increased hunger or impaired metabolism.</li>
                            </ul>
                            <p className="txt-just"><strong>Benefits:</strong> Minimal bleeding, less post-operative pain, quicker recovery compared to conventional hemorrhoidectomy.</p>

                            {/* Anal Fissures */}
                            <p className="txt-just">
                                <strong>2. Anal Fissures</strong><br />
                                Chronic anal fissures can be treated with LASER LIS by carefully removing the fissure tissue and promoting healing.
                                The laser helps reduce muscle spasms in the anal sphincter and promotes blood flow to the area.
                            </p>
                            <ul>
                                <li><strong>Benefits:</strong> Less pain, quicker healing, and reduced risk of infection.</li>
                            </ul>

                            {/* Fistula-in-Ano */}
                            <p className="txt-just">
                                <strong>3. Fistula-in-Ano</strong><br />
                                Many types of Laser, like Laser Ablation of Fistula Tract (LAFT), FILAC, DLPS, Fixicision, VAAFT with LASER.
                                In this procedure, a laser probe is inserted into the fistula tract, and laser energy is used to ablate the tract from within. This promotes healing without extensive cutting of tissues.
                            </p>
                            <ul>
                                <li>LIFT with LASER / Distal laser proximal ligation</li>
                                <li>DLPS (Distal laser proximal sloft)</li>
                                <li>Fixicision (fistula coring with proximal SLOFT)</li>
                                <li>VAAFT with LASER</li>
                                <li><strong>Benefits:</strong> Minimal tissue damage, reduced recurrence rates, quicker recovery, and preservation of anal sphincter function.</li>
                            </ul>

                            {/* Pilonidal Sinus */}
                            <p className="txt-just">
                                <strong>4. Pilonidal Sinus:</strong><br />
                                Laser surgery can be used to treat pilonidal sinus disease by ablating the sinus tract and promoting closure. It is particularly beneficial for recurrent cases where traditional surgery has failed.
                            </p>
                            <ul>
                                <li><strong>Benefits:</strong> Faster healing, less pain, and a lower risk of recurrence.</li>
                            </ul>

                            {/* Anal Warts */}
                            <p className="txt-just">
                                <strong>5. Anal Warts (Condyloma):</strong><br />
                                Laser therapy is effective for removing anal warts caused by HPV. The laser precisely targets the warts, vaporizing them while minimizing damage to surrounding tissues.
                            </p>
                            <ul>
                                <li><strong>Benefits:</strong> Precision removal, reduced scarring, and minimal bleeding.</li>
                            </ul>

                            {/* Rectal Polyps */}
                            <p className="txt-just">
                                <strong>6. Rectal Polyps:</strong><br />
                                Small benign rectal polyps can be removed using laser surgery. The laser precisely cuts the polyp without the need for extensive surgery.
                            </p>
                            <ul>
                                <li><strong>Benefits:</strong> Faster procedure, minimal bleeding, and fewer complications.</li>
                            </ul>

                            {/* Benefits of Laser Surgery */}
                            <h5 className="mt-4">What are the Benefits of Laser Surgery for Anorectal Conditions:</h5>
                            <ul>
                                <li><strong>Minimally Invasive:</strong> Causes minimal damage to surrounding tissues compared to traditional surgery, leading to faster recovery.</li>
                                <li><strong>Less Bleeding:</strong> Laser seals blood vessels as it cuts, reducing intra and post-op bleeding.</li>
                                <li><strong>Reduced Pain:</strong> Associated with less post-op pain due to reduced trauma and faster healing.</li>
                                <li><strong>Faster Recovery:</strong> Patients can resume normal activities sooner.</li>
                                <li><strong>Lower Risk of Infections:</strong> Laser sterilizes tissue during surgery, lowering infection risk.</li>
                                <li><strong>Daycare Procedure:</strong> Most procedures are outpatient based — no hospitalization required.</li>
                                <li><strong>Reduced Recurrence Rates:</strong> Especially for fistula, recurrence rates are often lower than traditional methods.</li>
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
                            <p>Laser surgery has many advantages, but some risks include:</p>
                            <ul>
                                <li>Mild pain and swelling after surgery</li>
                                <li>Burns to surrounding tissue (rare with experienced surgeons)</li>
                                <li>Recurrence of condition, although rare with laser techniques</li>
                            </ul>
                            <p>
                                Laser surgery for anorectal conditions offers a modern, less invasive option for patients seeking faster recovery with less discomfort.
                                However, it's important to consult with a specialist to determine if laser treatment is suitable for your specific condition.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <FaqSection />
        </>
    );
}
