'use client';

import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import Select from 'react-select';

export default function WhyChooseSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    // Services list for dropdown options
    const services = [
        { label: 'Diarrhea', value: 'Diarrhea' },
        { label: 'Gastritis', value: 'Gastritis' },
        { label: 'Bariatric Surgery', value: 'Bariatric Surgery' },
        { label: 'Obesity', value: 'Obesity' },
        { label: 'Laser Surgery', value: 'Laser Surgery' },
        { label: 'Gastric Balloon', value: 'Gastric Balloon' },
        { label: 'Rectal Bleeding', value: 'Rectal Bleeding' },
        { label: 'Endoscopic Surgery', value: 'Endoscopic Surgery' },
        { label: 'Incisional Hernia', value: 'Incisional Hernia' },
        { label: 'Inguinal Hernia', value: 'Inguinal Hernia' },
        { label: 'Anal Fissure, Anal Fistula', value: 'Anal Fissure, Anal Fistula' },
        { label: 'Abdominal Pain', value: 'Abdominal Pain' },
        { label: 'Surgery For Reflux Disease', value: 'refluxSurgery For Reflux Disease' },
        { label: 'Irritable Bowel Syndrome', value: 'Irritable Bowel Syndrome' },
        { label: 'Cancer Treatment', value: 'Cancer Treatment' },
        { label: 'Stem Cell Therapy', value: 'Stem Cell Therapy' },
        { label: 'Robotic Surgery', value: 'Robotic Surgery' },
        { label: 'Gallstones', value: 'Gallstones' },
        { label: 'Piles', value: 'Piles' },
        { label: 'Gastroesophageal Reflux Disease', value: 'Gastroesophageal Reflux Disease' },
        { label: 'Laparoscopic Surgery', value: 'Laparoscopic Surgery' }
    ];

    const serviceOptions = services.map(item => ({
        value: item.value,
        label: item.label
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
        if (!e.target) return;

        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (selectedOption: any) => {
        setFormData(prev => ({ ...prev, service: selectedOption?.value || '' }));
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
        <section className="why-choose-section">
            <div className="container">
                <div className="row" id="abt-faqs">
                    <div className="col-md-8">
                        <h3>Queen Elizabeth Hospital, Birmingham</h3>
                        <p className="abt-cont">
                            He further established a laparoscopic centre at Queen Elizabeth Hospital, Birmingham, where he performed around 240 cases of colorectal cancer laparoscopically.
                            His work was recognized by the Association of Laparoscopic Surgery (ALS), and he became a “Preceptor” who trained surgeons across the UK.
                        </p>

                        <h3>Areas of Expertise</h3>
                        <p className="abt-cont">
                            Advanced laparoscopic surgery especially for gastrointestinal cancer.
                            He has a passion for Video-Assisted Thoracic Surgery (VATS), Bariatric Surgery, and Metabolic Surgery.
                            Robotic Surgery and Stem Cell Therapy bhi unki expertise me include hain.
                        </p>

                        <h3>Education & Training</h3>
                        <p className="abt-cont">
                            After completing his Doctor of Medicine with honors from Madras University (1986), he pursued an MS from Mysore University (1989).
                            Further training in Republic of Ireland (1989-1996), FRCS from England (1995), MMAS from Dundee University (2002)
                        </p>

                        <p className="abt-cont">
                            Appointed as consultant colorectal surgeon in Ireland (1998-2001), then Scotland (2002-2006)
                        </p>

                        <p className="abt-cont">
                            Currently pursuing Ph.D. in Stem Cell Regenerative and Tissue Engineering
                        </p>

                        <h3>Work Experience</h3>
                        <p className="abt-cont">
                            Dr. Shabeer Ahmed has over 38 years of experience in Gastrointestinal and Laparoscopic Surgery.
                        </p>
                    </div>

                    {/* Appointment Form */}
                    <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card contact-form-card w-100 form-bg1">
                            <h3 className="abt-form-heed text-center">Book An Appointment</h3>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone"
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <Select
                                            name="service"
                                            options={serviceOptions}
                                            value={serviceOptions.find(opt => opt.value === formData.service) || null}
                                            onChange={handleSelectChange}
                                            placeholder="Select Service..."
                                            isSearchable
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Message"
                                            rows={4}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="form-group mb-0 text-center">
                                        <button type="submit" className="btn btn-primary prime-btn w-100">
                                            Send Message
                                        </button>
                                        {status && <p className="mt-3">{status}</p>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}