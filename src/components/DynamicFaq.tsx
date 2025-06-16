// components/FaqSection.tsx
'use client'

import React, { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

interface Props {
    faqs: FAQ[];
}

export default function DynamicFaqSection({ faqs }: Props) {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="faq-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header-one aos" data-aos="fade-up">
                            <h5>Get Your Answer</h5>
                            <h2 className="section-title">Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    {/* FAQ Accordion */}
                    <div className="col-lg-12 col-md-12">
                        <div className="faq-info">
                            {faqs.map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                            onClick={() => toggleAccordion(index)}
                                            aria-expanded={openIndex === index}
                                        >
                                            {item.question}
                                        </button>
                                    </h2>
                                    <div
                                        className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">{item.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}