'use client';

export default function FaqSection() {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header-one" data-aos="fade-up">
                            <h5>Get Your Answer</h5>
                            <h2 className="section-title">Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="faq-info" data-aos="fade-up">
                            <div className="accordion" id="faq-details">
                                {/* FAQ Item 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            1. Who is a candidate for bariatric surgery?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#faq-details"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Individuals with a BMI over 40, or over 35 with obesity-related conditions like type 2 diabetes or hypertension, may be candidates. A thorough evaluation by a healthcare provider is required to assess eligibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            2. What is the recovery process like after bariatric surgery?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#faq-details"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                The recovery process typically involves a hospital stay of a few days, followed by several weeks of rest. A special diet will be recommended to help your body adjust to the changes. Follow-up care includes regular check-ups and long-term nutritional guidance.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            3. What are the risks associated with bariatric surgery?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#faq-details"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Common risks include infection, blood clots, and nutritional deficiencies. It’s important to follow post-surgery care instructions closely to minimize these risks and ensure a smooth recovery.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
