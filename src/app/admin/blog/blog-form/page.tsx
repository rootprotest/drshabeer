'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import TipTapEditor from '@/components/TipTapEditor'

export default function AddEditBlogForm() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [metaTitle, setMetaTitle] = useState('')
    const [metaKeywords, setMetaKeywords] = useState('')
    const [metaDescription, setMetaDescription] = useState('')
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [isEdit, setIsEdit] = useState(false)

    // Load post for edit
    useEffect(() => {
        if (id) {
            fetch(`/api/posts?id=${id}`)
                .then(res => res.json())
                .then(post => {
                    setTitle(post.title || '')
                    setContent(post.content || '')
                    setAuthor(post.author || '')
                    setCategory(post.category || '')
                    setMetaTitle(post.metaTitle || '')
                    setMetaKeywords(post.metaKeywords || '')
                    setMetaDescription(post.metaDescription || '')

                    if (post.imageUrl) {
                        setPreviewUrl(post.imageUrl)
                    }
                })
                .catch(err => {
                    console.error('Error fetching post:', err)
                    alert('Failed to load blog data')
                })

            setIsEdit(true)
        }
    }, [id])

    // Handle image change and preview
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setImage(file)

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = new FormData()
        if (isEdit && id) {
            formData.append('id', id)
        }

        formData.append('title', title)
        formData.append('content', content)
        formData.append('author', author)
        formData.append('category', category)
        formData.append('metaTitle', metaTitle)
        formData.append('metaKeywords', metaKeywords)
        formData.append('metaDescription', metaDescription)
        if (image) {
            formData.append('image', image)
        }

        const method = isEdit ? 'PUT' : 'POST'
        const endpoint = '/api/posts'

        try {
            const res = await fetch(endpoint, {
                method,
                body: formData,
            })

            if (res.ok) {
                alert(isEdit ? 'Blog updated successfully!' : 'Blog created successfully!')
                window.location.href = '/admin/blog'
            } else {
                alert('Failed to save blog.')
            }
        } catch (err) {
            alert('An error occurred while saving the blog.')
            console.error(err)
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">{isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
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
                        required
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
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Health Care">Health Care</option>
                    </select>
                </div>

                {/* Image Upload with Preview */}
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Image Upload</label>
                    <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {previewUrl && (
                        <div className="mt-3">
                            <img src={previewUrl} alt="Preview" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
                        </div>
                    )}
                </div>

                {/* Content Editor */}
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <TipTapEditor content={content} onChange={setContent} />
                </div>

                {/* Meta Fields */}
                <div className="mb-3">
                    <label htmlFor="metaTitle" className="form-label">Meta Title</label>
                    <input
                        type="text"
                        id="metaTitle"
                        className="form-control"
                        placeholder="SEO Meta Title"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="metaKeywords" className="form-label">Meta Keywords</label>
                    <input
                        type="text"
                        id="metaKeywords"
                        className="form-control"
                        placeholder="SEO Meta Keywords"
                        value={metaKeywords}
                        onChange={(e) => setMetaKeywords(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="metaDescription" className="form-label">Meta Description</label>
                    <textarea
                        id="metaDescription"
                        className="form-control"
                        rows={3}
                        placeholder="SEO Meta Description"
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    {isEdit ? 'Update Post' : 'Submit'}
                </button>
            </form>
        </div>
    )
}