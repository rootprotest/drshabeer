// src/app/admin/blog/page.tsx
'use client'

import React, { useState } from 'react'
import axios from 'axios'
import TipTapEditor from '@/components/TipTapEditor' // Ensure path is correct

export default function AdminPanel() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState<File | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('author', author);
        formData.append('category', category);
        if (image) formData.append('image', image);

        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                alert('Blog post saved successfully!');
            } else {
                alert('Failed to save post.');
            }
        } catch (err) {
            alert('An error occurred.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Create New Blog Post</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Title */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="Enter blog title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Author */}
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        id="author"
                        className="form-control"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                {/* Category */}
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        id="category"
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Health Care">Health Care</option>
                    </select>
                </div>

                {/* Image Upload */}
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Image Upload</label>
                    <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                </div>

                {/* Content Editor */}
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <TipTapEditor content={content} onChange={setContent} />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}