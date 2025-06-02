'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const faqs = [
    {
        question: 'How do I book an appointment with a doctor?',
        answer:
            'Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.',
    },
    {
        question: 'Can I request a specific doctor when booking my appointment?',
        answer:
            'Yes, you can usually request a specific doctor when booking your appointment, though availability may vary based on their schedule.',
    },
    {
        question: 'What should I do if I need to cancel or reschedule my appointment?',
        answer:
            'If you need to cancel or reschedule, contact the doctor as soon as possible to inform them and reschedule for another available time slot.',
    },
    {
        question: "What if I'm running late for my appointment?",
        answer:
            "If you know you'll be late, please call the doctor's office. They may be able to accommodate or reschedule you depending on their policy.",
    },
    {
        question: 'Can I book appointments for family members or dependents?',
        answer:
            'Yes, you can book for family members or dependents. You may need to provide their details and consent.',
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
                        <div className="section-header-one text-center mb-4">
                            <h5>Get Your Answer</h5>
                            <h2 className="section-title">Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    {/* Image + Patients Counter */}
                    <div className="col-lg-6 col-md-12 text-center">
                        <div className="faq-img">
                            <Image
                                src="/img/faq-img.png"
                                className="img-fluid"
                                width={500}
                                height={400}
                                alt="FAQ"
                            />
                            <div className="faq-patients-count">
                                <div className="faq-smile-img me-3">
                                    <Image
                                        src="/img/icons/smiling-icon.svg"
                                        width={40}
                                        height={40}
                                        alt="Smile Icon"
                                    />
                                </div>
                                <div className="faq-patients-content">
                                    <h4>
                                        <span className="count-digit">{count}</span>k+
                                    </h4>
                                    <p className="mb-0">Happy Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="col-lg-6 col-md-12">
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
