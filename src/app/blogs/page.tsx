// app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import BariatricBanner from '@/components/BreadcrumbBanner';

export const metadata = {
    title: "Blog - Dr. Shabeer Ahmed | Gastroenterologist in Bangalore",
    description:
        "Explore insightful articles on gastrointestinal health, treatments, and expert advice by Dr. Shabeer Ahmed, a leading gastroenterologist in Bangalore.",
    keywords:
        "gastro blog, dr shabeer blog, digestive health blog, Bangalore gastro blog",
};

export default async function BlogPage() {
    let posts = [];

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`);
        posts = res.data;
    } catch (error) {
        console.error('Failed to fetch blog posts:', error);
    }

    // Generate blog URLs for OG tags
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drshabeer.vercel.app';
    const blogUrl = `${siteUrl}/blog`;

    return (
        <>
            <Head>
                {/* Basic SEO */}
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />

                {/* Open Graph (Facebook, LinkedIn, etc.) */}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={blogUrl} />
                <meta property="og:image" content={`${siteUrl}/img/seo/blog-og-image.jpg`} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content={`${siteUrl}/img/seo/blog-og-image.jpg`} />
                <meta name="twitter:site" content="@drshabeergastro" />

                {/* Canonical URL */}
                <link rel="canonical" href={blogUrl} />
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
                            const postUrl = `${siteUrl}/blog/${post.slug}`;
                            const imageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : `${siteUrl}${post.imageUrl}`;

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
                                            <Link href={`/blogs/${post.slug}`} className="btn btn-link mt-2 p-0 text-primary">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                    {/* /Blog Post */}

                                    {/* Structured Data */}
                                    <script
                                        type="application/ld+json"
                                        dangerouslySetInnerHTML={{
                                            __html: JSON.stringify({
                                                '@context': 'https://schema.org',
                                                '@type': 'BlogPosting',
                                                headline: post.title,
                                                description: post.excerpt || post.content.substring(0, 160),
                                                image: imageUrl,
                                                datePublished: new Date(post.date).toISOString(),
                                                url: postUrl,
                                                author: {
                                                    '@type': 'Person',
                                                    name: post.author || 'Dr. Shabeer Ahmed',
                                                },
                                            }),
                                        }}
                                    />
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
                        <li className="page-item">
                            <Link className="page-link" href="#">
                                1
                            </Link>
                        </li>
                        <li className="page-item active">
                            <Link className="page-link" href="#">
                                2
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" href="#">
                                3
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" href="#">
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /Pagination */}
            </div>
        </>
    );
}