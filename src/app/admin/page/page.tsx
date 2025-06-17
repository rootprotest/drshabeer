// src/app/admin/pages/page.tsx
'use client'

import React, { useEffect, useState } from 'react';
import BariatricBanner from '@/components/BreadcrumbBanner';
import Link from 'next/link';

export default function PageList() {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch all pages from API
    useEffect(() => {
        const fetchPages = async () => {
            try {
                const res = await fetch('/api/pages');
                const data = await res.json();
                setPages(data);
            } catch (error) {
                console.error('Failed to fetch pages:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPages();
    }, []);

    // Handle delete action
    const handleDelete = async (slug: string) => {
        if (!confirm('Are you sure you want to delete this page?')) return;

        try {
            const res = await fetch(`/api/pages/${slug}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setPages(pages.filter((page: any) => page.slug !== slug));
                alert('Page deleted successfully');
            } else {
                alert('Failed to delete the page');
            }
        } catch (error) {
            console.error('Error deleting page:', error);
            alert('An error occurred while deleting the page.');
        }
    };

    const filteredPages = Array.isArray(pages)
        ? pages.filter((page: any) =>
            page.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.slug?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <>
            <BariatricBanner
                title="Pages List"
                imageSrc="/img/bannerslider/Surgery For Reflux 2.webp"
            />

            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Manage Pages</h2>
                    <Link href="/admin/page/page-form" className="btn btn-primary">Add New Page</Link>
                </div>

                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by title or slug..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="form-control"
                    />
                </div>

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p>Loading pages...</p>
                    </div>
                ) : (
                    <>
                        {/* Total Count */}
                        <div className="mb-3 text-muted">
                            Showing {filteredPages.length} of {pages.length} pages
                        </div>

                        <div className="table-responsive mb-5">
                            <table className="table table-hover table-striped table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Title</th>
                                        <th>Slug</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPages.length > 0 ? (
                                        filteredPages.map((page: any) => (
                                            <tr key={page._id}>
                                                <td>{page.title}</td>
                                                <td>{page.slug}</td>
                                                <td>
                                                    <Link
                                                        href={`/admin/page/page-form?slug=${page.slug}`}
                                                        className="btn btn-sm btn-warning me-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(page.slug)}
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={3} className="text-center">
                                                No matching pages found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {/* Pagination */}
                {!loading && (
                    <nav aria-label="Page navigation example mt-5">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <button className="page-link">Previous</button>
                            </li>
                            <li className="page-item active">
                                <button className="page-link">1</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">2</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">Next</button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
}