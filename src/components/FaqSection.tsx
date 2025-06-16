'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const faqs = [
    {
        question: '1. Who is a candidate for bariatric surgery?',
        answer:
            'Individuals with a BMI over 40, or over 35 with obesity-related conditions like type 2 diabetes or hypertension, may be candidates. A thorough evaluation by a healthcare provider is required to assess eligibility.',
    },
    {
        question: '2. What is the recovery process like after bariatric surgery?',
        answer:
            'The recovery process typically involves a hospital stay of a few days, followed by several weeks of rest. A special diet will be recommended to help your body adjust to the changes. Follow-up care includes regular check-ups and long-term nutritional guidance.',
    },
    {
        question: '3. What are the risks associated with bariatric surgery?',
        answer:
            'Common risks include infection, blood clots, and nutritional deficiencies. Its important to follow post-surgery care instructions closely to minimize these risks and ensure a smooth recovery.',
    },
];

const FAQSection = () => {
    // Move state and effect here inside component
    const [count, setCount] = useState(0);
    const target = 95;

    useEffect(() => {
        let start = 0;
        const end = target;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 50);

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(counter);
            } else {
                setCount(Math.ceil(start));
            }
        }, 50);

        return () => clearInterval(counter);
    }, []);

    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <section className="faq-section">
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
                            <div className="accordion" id="faq-details">
                                {faqs.map((item, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                                type="button"
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
            </div>
        </section>
    );
};

export default FAQSection;
