// src/app/admin/page/page-form/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import TipTapEditor from '@/components/TipTapEditor';
import Image from 'next/image';

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

export default function AdminPage({ searchParams }: { searchParams: Promise<{ slug?: string }> }) {
    const { slug } = React.use(searchParams);

    const [formData, setFormData] = useState<FormDataType>({
        title: '',
        description: '',
        keywords: '',
        slug: '',
        bannerTitle: '',
        introduction: '',
        fullintroduction: '',
        faqs: [{ question: '', answer: '' }]
    });

    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [contentPreview, setContentPreview] = useState<string | null>(null);

    // Fetch existing page data if editing
    useEffect(() => {
        if (!slug) {
            setLoading(false);
            return;
        }

        setIsEditing(true);
        fetch(`/api/pages/${slug}`)
            .then(res => res.json())
            .then(data => {
                setFormData(data);

                // Set existing images for preview
                if (data.bannerImage) setBannerPreview(data.bannerImage);
                if (data.contentImage) setContentPreview(data.contentImage);

                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load page:', err);
                setLoading(false);
            });
    }, [slug]);

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

    // Image preview handler
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setImagePreview: (val: string | null) => void) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
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

        if (bannerImageInput?.files?.[0]) {
            formDataToSend.append("bannerImage", bannerImageInput.files[0]);
        }

        if (contentImageInput?.files?.[0]) {
            formDataToSend.append("contentImage", contentImageInput.files[0]);
        }

        const method = isEditing ? 'PUT' : 'POST';
        const url = isEditing ? `/api/pages/${slug}` : '/api/pages';

        const res = await fetch(url, {
            method,
            body: formDataToSend,
        });

        if (!res.ok) {
            alert(`Error ${isEditing ? 'updating' : 'saving'} page`);
        } else {
            alert(`Page ${isEditing ? 'updated' : 'created'} successfully`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>{isEditing ? 'Edit Page' : 'Add New Page'}</h2>

            <form onSubmit={handleSubmit}>
                {/* Meta Fields */}
                <div className="mb-3">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.title}
                    />
                </div>

                <div className="mb-3">
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.description}
                    />
                </div>

                <div className="mb-3">
                    <label>Keywords</label>
                    <input
                        type="text"
                        name="keywords"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.keywords}
                    />
                </div>

                <div className="mb-3">
                    <label>Slug (URL)</label>
                    <input
                        type="text"
                        name="slug"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.slug}
                        readOnly={isEditing}
                    />
                </div>

                <div className="mb-3">
                    <label>Banner Title</label>
                    <input
                        type="text"
                        name="bannerTitle"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.bannerTitle}
                    />
                </div>

                {/* Banner Image with Preview */}
                <div className="mb-3">
                    <input
                        type="file"
                        name="bannerImage"
                        className="form-control"
                        onChange={(e) => handleImageChange(e, setBannerPreview)}
                    />
                    {bannerPreview && (
                        <div className="mt-3">
                            <Image src={bannerPreview} alt="Banner Preview" width={400} height={300} className="img-fluid rounded" />
                        </div>
                    )}
                </div>
                <div className="mb-3">

                    <input
                        type="file"
                        name="contentImage"
                        className="form-control"
                        onChange={(e) => handleImageChange(e, setContentPreview)}
                    />
                    {contentPreview && (
                        <div className="mt-3">
                            <Image src={contentPreview} alt="Content Preview" width={400} height={300} className="img-fluid rounded" />
                        </div>
                    )}
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
                    <button type="button" className="btn btn-secondary btn-sm mb-4" onClick={addFaq}>Add FAQ</button>
                </div>

                <button type="submit" className="btn btn-primary">
                    {isEditing ? 'Update Page' : 'Create Page'}
                </button>
            </form>
        </div>
    );
}