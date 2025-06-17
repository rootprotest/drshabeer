'use client'

import React, { useEffect, useState } from 'react';
import BariatricBanner from '@/components/BreadcrumbBanner';
import Link from 'next/link';
import axios from 'axios';

export default function BlogListPage() {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch blogs
    const fetchBlogs = async () => {
        try {
            const res = await axios.get('/api/posts');
            const data = res.data;
            setBlogs(data);
            setFilteredBlogs(data);
        } catch (err) {
            console.error('Failed to fetch blogs:', err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch on mount
    useEffect(() => {
        fetchBlogs();
    }, []);

    // Filter blogs based on search query
    useEffect(() => {
        const filtered = blogs.filter((blog: any) =>
            blog.title?.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredBlogs(filtered);
    }, [search, blogs]);

    // Handle delete action
    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog?')) return;

        try {
            await axios.delete(`/api/posts/${id}`);
            alert('Blog deleted successfully');
            fetchBlogs();
        } catch (err) {
            console.error('Delete error:', err);
            alert('Failed to delete blog.');
        }
    };

    return (
        <>
            <BariatricBanner
                title="Blog List"
                imageSrc="/img/bannerslider/Surgery For Reflux 2.webp"
            />

            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="mb-0">Blog Posts</h2>
                    <Link href="/admin/blog/blog-form" className="btn btn-success">+ Add Blog</Link>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Show loading */}
                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2">Loading blogs...</p>
                    </div>
                ) : (
                    <div className="table-responsive">
                        {/* Total Count */}
                        <div className="mb-3 text-muted">
                            Showing {filteredBlogs.length} of {blogs.length} Blogs
                        </div>
                        <table className="table table-hover table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th style={{ width: '160px' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBlogs.length > 0 ? (
                                    filteredBlogs.map((post: any) => (
                                        <tr key={post._id}>
                                            <td>{post.title}</td>
                                            <td>{post.author}</td>
                                            <td>{post.category}</td>
                                            <td>
                                                <div className="btn-group" role="group">
                                                    <Link
                                                        href={`/admin/blog/blog-form?id=${post._id}`}
                                                        className="btn btn-sm btn-warning me-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete(post._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="text-center text-muted">
                                            No blogs found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}