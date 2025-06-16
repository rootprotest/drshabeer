// src/app/admin/page/page.tsx
'use client'
import React, { useState } from 'react';
import TipTapEditor from '@/components/TipTapEditor';

export default function AdminPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        keywords: '',
        slug: '',
        bannerTitle: '',
        introduction: '',
        fullintroduction: '',
        faqs: [{ question: '', answer: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEditorChange = (html, field) => {
        setFormData(prev => ({ ...prev, [field]: html }));
    };

    const handleFaqChange = (index, field, value) => {
        const updatedFaqs = [...formData.faqs];
        updatedFaqs[index][field] = value;
        setFormData({ ...formData, faqs: updatedFaqs });
    };

    const addFaq = () => {
        setFormData({
            ...formData,
            faqs: [...formData.faqs, { question: '', answer: '' }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // Text fields
        for (const key in formData) {
            if (key === 'faqs') {
                formDataToSend.append(key, JSON.stringify(formData[key]));
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }

        // Image fields
        const bannerImageInput = document.querySelector('input[name="bannerImage"]') as HTMLInputElement;
        const contentImageInput = document.querySelector('input[name="contentImage"]') as HTMLInputElement;

        if (bannerImageInput.files && bannerImageInput.files[0]) {
            formDataToSend.append("bannerImage", bannerImageInput.files[0]);
        }

        if (contentImageInput.files && contentImageInput.files[0]) {
            formDataToSend.append("contentImage", contentImageInput.files[0]);
        }

        const res = await fetch('/api/pages', {
            method: 'POST',
            body: formDataToSend,
        });

        if (!res.ok) {
            alert('Error saving page');
        } else {
            alert('Page saved successfully');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add/Edit Page</h2>
            <form onSubmit={handleSubmit}>
                {/* Meta Fields */}
                <div className="mb-3">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label>Keywords</label>
                    <input type="text" name="keywords" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label>Slug (URL)</label>
                    <input type="text" name="slug" className="form-control" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label>Banner Title</label>
                    <input type="text" name="bannerTitle" className="form-control" onChange={handleChange} />
                </div>

                {/* Images */}
                <div className="mb-3">
                    <label>Banner Image</label>
                    <input type="file" name="bannerImage" className="form-control" />
                </div>

                <div className="mb-3">
                    <label>Content Image</label>
                    <input type="file" name="contentImage" className="form-control" />
                </div>

                {/* Introduction */}
                <div className="mb-3">
                    <label>Introduction</label>
                    <TipTapEditor content={formData.introduction} onChange={(html) => handleEditorChange(html, 'introduction')} />
                </div>

                {/* Full Content */}
                <div className="mb-3">
                    <label>Full Content</label>
                    <TipTapEditor content={formData.fullintroduction} onChange={(html) => handleEditorChange(html, 'fullintroduction')} />
                </div>

                {/* FAQs */}
                <div className="mb-3">
                    <label>FAQs</label>
                    {formData.faqs.map((faq, index) => (
                        <div key={index} className="border p-3 mb-3">
                            <div className="mb-2">
                                <input
                                    type="text"
                                    placeholder="Question"
                                    className="form-control"
                                    value={faq.question}
                                    onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    placeholder="Answer"
                                    className="form-control"
                                    value={faq.answer}
                                    onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" className="btn btn-secondary btn-sm" onClick={addFaq}>Add FAQ</button>
                </div>

                <button type="submit" className="btn btn-primary">Save Page</button>
            </form>
        </div>
    );
}