// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { ChangeEvent } from 'react';
import BariatricBanner from '@/components/BreadcrumbBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('An error occurred while sending the message.');
        }
    };
    return (
        <>
            <Head>
                <title>Contact Dr. Shabeer Ahmed - Gastrointestinal & Bariatric Surgeon | Bangalore</title>
                <meta name="description" content="Get in touch with Dr. Shabeer Ahmed for expert consultation on gastrointestinal, laparoscopic, and bariatric surgery in Bangalore." />
                <meta name="keywords" content="dr shabeer ahmed contact, contact bariatric surgeon, contact gi surgeon, contact weight loss doctor, contact Bangalore" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.drshabeerahmed.com/contact" />

                {/* Open Graph / Social Media Tags */}
                <meta property="og:title" content="Contact Dr. Shabeer Ahmed - Gastrointestinal & Bariatric Surgeon | Bangalore" />
                <meta property="og:description" content="Reach out to Dr. Shabeer Ahmed for advanced GI, Laparoscopic, and Bariatric Surgery consultations in Bangalore." />
                <meta property="og:image" content="/img/seo/contact-dr-shabeer-ahmed.jpg" />
                <meta property="og:url" content="https://www.drshabeerahmed.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Dr Shabeer Ahmed Clinic" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Dr. Shabeer Ahmed - Gastrointestinal & Bariatric Surgeon | Bangalore" />
                <meta name="twitter:description" content="Get in touch with Dr. Shabeer Ahmed for expert care in gastrointestinal and bariatric surgery in Bangalore." />
                <meta name="twitter:image" content="/img/seo/contact-dr-shabeer-ahmed.jpg" />
            </Head>

            <BariatricBanner title="Contact Us" imageSrc="/img/bannerslider/Bariatric Surgery 2.webp" />

            <section className="contact-section py-5">
                <div className="container">
                    <div className="row">
                        {/* Left Side - Contact Info */}
                        <div className="col-lg-5 col-md-12">
                            <div className="section-inner-header contact-inner-header mb-4">
                                <h6>Get in Touch</h6>
                                <h2>Have Any Question?</h2>
                            </div>

                            <div className="card contact-card mb-3">
                                <div className="card-body d-flex align-items-start">
                                    <div className="contact-icon me-3">
                                        <FontAwesomeIcon icon={faMapPin} size="lg" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Address</h4>
                                        <p>8432 Mante Highway, Aminaport, USA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card contact-card mb-3">
                                <div className="card-body d-flex align-items-start">
                                    <div className="contact-icon me-3">
                                        <FontAwesomeIcon icon={faPhone} size="lg" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Phone Number</h4>
                                        <p>+1 315 369 5943</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card contact-card">
                                <div className="card-body d-flex align-items-start">
                                    <div className="contact-icon me-3">
                                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Email Address</h4>
                                        <p>drshabeerahmed@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="col-lg-7 col-md-12 d-flex">
                            <div className="card contact-form-card w-100">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Email Address</label>
                                                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Phone Number</label>
                                                <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Services</label>
                                                <input type="text" name="service" className="form-control" value={formData.service} onChange={handleChange} />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <label className="form-label">Message</label>
                                                <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-primary prime-btn w-100">Send Message</button>
                                                {status && <p className="mt-3">{status}</p>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <div className="contact-map mt-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d-76.13077892422932!3d36.82498697224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae976cfe9f8af%3A0xa61eac05156fbdb9!2sBeachStreet%20USA!5e0!3m2!1sen!2sin!4v1669777904208!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location Map"
                ></iframe>
            </div>
        </>
    );
}