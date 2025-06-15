'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import BariatricBanner from '@/components/BreadcrumbBanner';

export default function BlogPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('/api/posts');
                setPosts(res.data);
            } catch (error) {
                console.error('Failed to fetch blog posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Head>
                {/* Basic SEO */}
                <title>Blog - Dr. Shabeer Ahmed | Gastroenterologist in Bangalore</title>
                <meta name="description" content="Explore insightful articles on gastrointestinal health, treatments, and expert advice by Dr. Shabeer Ahmed, a leading gastroenterologist in Bangalore." />
                <meta name="keywords" content="gastro blog, dr shabeer blog, digestive health blog, Bangalore gastro blog" />

                {/* Open Graph */}
                <meta property="og:title" content="Blog - Dr. Shabeer Ahmed" />
                <meta property="og:description" content="Explore insightful articles on gastrointestinal health, treatments, and expert advice by Dr. Shabeer Ahmed." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/blog" />
                <meta property="og:image" content="/img/seo/blog-og-image.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog - Dr. Shabeer Ahmed" />
                <meta name="twitter:description" content="Explore insightful articles on gastrointestinal health." />
                <meta name="twitter:image" content="/img/seo/blog-og-image.jpg" />
                <meta name="twitter:site" content="@drshabeergastro" />

                {/* Canonical URL */}
                <link rel="canonical" href="/blog" />
            </Head>

            {/* Banner Section */}
            <BariatricBanner
                title="Latest Blogs"
                imageSrc="/img/bannerslider/Diarrhea BANNER.webp"
            />

            <div className="container my-5">
                <div className="row blog-grid-row">
                    {posts.length > 0 ? (
                        posts.map((post: any) => {
                            const imageUrl = post.imageUrl || "/img/placeholder.jpg";

                            return (
                                <div key={post._id} className="col-md-4 col-sm-12 mb-4">
                                    {/* Blog Post */}
                                    <div className="blog grid-blog border rounded shadow-sm overflow-hidden">
                                        <div className="blog-image">
                                            <Link href={`/blog/${post.slug}`}>
                                                <Image
                                                    src={imageUrl}
                                                    alt={post.title}
                                                    width={600}
                                                    height={400}
                                                    className="img-fluid"
                                                />
                                            </Link>
                                        </div>
                                        <div className="blog-content p-3">
                                            <ul className="entry-meta meta-item list-inline mb-2 small text-muted">
                                                <li className="list-inline-item">
                                                    <i className="far fa-clock me-1"></i> {new Date(post.date).toLocaleDateString()}
                                                </li>
                                            </ul>
                                            <h3 className="blog-title h5">
                                                <Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark fw-bold">
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <p className="mb-0 text-truncate-2-lines">
                                                {post.excerpt || post.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
                                            </p>
                                            <Link href={`/blog/${post.slug}`} className="btn btn-link mt-2 p-0 text-primary">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                    {/* /Blog Post */}
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h4 className="text-muted">No blog posts found.</h4>
                            <p className="text-secondary">We couldn't find any blog posts at the moment.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <Link className="page-link" href="#">
                                Previous
                            </Link>
                        </li>
                        <li className="page-item active">
                            <Link className="page-link" href="#">1</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" href="#">2</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" href="#">3</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" href="#">Next</Link>
                        </li>
                    </ul>
                </nav>
                {/* /Pagination */}
            </div>
        </>
    );
}