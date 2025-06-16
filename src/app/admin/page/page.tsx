// src/app/admin/page/page.tsx
'use client'
import React, { useState } from 'react';
import TipTapEditor from '@/components/TipTapEditor';


interface Faq {
    question: string;
    answer: string;
}

type FaqKeys = keyof Faq;

interface FormDataType {
    title: string;
    description: string;
    keywords: string;
    slug: string;
    bannerTitle: string;
    introduction: string;
    fullintroduction: string;
    faqs: Faq[];
}


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

    // Handle normal input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle TipTap editor changes
    const handleEditorChange = (html: string, field: string) => {
        setFormData(prev => ({ ...prev, [field]: html }));
    };

    // Handle FAQ changes
    const handleFaqChange = (index: number, field: FaqKeys) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const updatedFaqs = [...formData.faqs];
        updatedFaqs[index][field] = value;
        setFormData({ ...formData, faqs: updatedFaqs });
    };

    // Add new FAQ item
    const addFaq = () => {
        setFormData({
            ...formData,
            faqs: [...formData.faqs, { question: '', answer: '' }]
        });
    };

    // Submit handler
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        for (const key in formData) {
            if (!Object.prototype.hasOwnProperty.call(formData, key)) continue;

            const keyTyped = key as keyof FormDataType;
            const value = (formData as Record<keyof FormDataType, any>)[keyTyped];

            if (key === 'faqs') {
                formDataToSend.append(key, JSON.stringify(value));
            } else {
                formDataToSend.append(key, value);
            }
        }

        const bannerImageInput = document.querySelector('input[name="bannerImage"]') as HTMLInputElement;
        const contentImageInput = document.querySelector('input[name="contentImage"]') as HTMLInputElement;

        if (bannerImageInput.files?.[0]) {
            formDataToSend.append("bannerImage", bannerImageInput.files[0]);
        }

        if (contentImageInput.files?.[0]) {
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
                    <TipTapEditor
                        content={formData.introduction}
                        onChange={(html) => handleEditorChange(html, 'introduction')}
                    />
                </div>

                {/* Full Content */}
                <div className="mb-3">
                    <label>Full Content</label>
                    <TipTapEditor
                        content={formData.fullintroduction}
                        onChange={(html) => handleEditorChange(html, 'fullintroduction')}
                    />
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
                                    onChange={handleFaqChange(index, 'question')}
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    placeholder="Answer"
                                    className="form-control"
                                    value={faq.answer}
                                    onChange={handleFaqChange(index, 'answer')}
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