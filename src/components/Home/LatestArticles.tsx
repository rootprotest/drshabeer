'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import BariatricBanner from '@/components/BreadcrumbBanner';

interface BlogPost {
  _id: string;
  title: string;
  excerpt?: string;
  content: string;
  imageUrl?: string;
  slug: string;
  date: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/posts');
        setPosts(res.data);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Blog - Dr. Shabeer Ahmed | Gastroenterologist in Bangalore</title>
        <meta
          name="description"
          content="Explore insightful articles on gastrointestinal health, written by Dr. Shabeer Ahmed and his team of experts."
        />
        <meta
          name="keywords"
          content="gastro blog, dr shabeer blog, gut health articles, digestive wellness, GI surgery insights"
        />
      </Head>

      {/* Banner */}
      <BariatricBanner
        title="Latest Blogs"
        imageSrc="/img/bannerslider/Diarrhea BANNER.webp"
      />

      <div className="container my-5">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary mb-3" role="status" />
            <p>Loading blogs...</p>
          </div>
        ) : (
          <div className="row">
            {posts.length > 0 ? (
              posts.map((post) => {
                const imageUrl = post.imageUrl || '/img/placeholder.jpg';
                const dateFormatted = new Date(post.date).toLocaleDateString();

                return (
                  <div className="col-lg-4 col-md-6 mb-4" key={post._id}>
                    <div className="card h-100 border-0 shadow-sm">
                      <Link href={`/blogs/${post.slug}`}>
                        <div className="position-relative" style={{ height: '220px' }}>
                          <Image
                            src={imageUrl}
                            alt={post.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="card-img-top rounded-top"
                          />
                        </div>
                      </Link>
                      <div className="card-body">
                        <ul className="list-unstyled small text-muted mb-2 d-flex gap-3">
                          <li><i className="far fa-calendar-alt me-1" /> {dateFormatted}</li>
                        </ul>
                        <h5 className="card-title">
                          <Link href={`/blogs/${post.slug}`} className="text-dark text-decoration-none">
                            {post.title}
                          </Link>
                        </h5>
                        <p className="card-text">
                          {post.excerpt || post.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
                        </p>
                        <Link href={`/blogs/${post.slug}`} className="btn btn-sm btn-outline-primary mt-2">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No blog posts found.</h4>
                <p className="text-secondary">We couldn’t find any blog posts at the moment. Please check back later.</p>
              </div>
            )}
          </div>
        )}

        {/* Optional Pagination */}
        {!loading && posts.length > 6 && (
          <div className="d-flex justify-content-center mt-4">
            <ul className="pagination">
              <li className="page-item disabled"><Link className="page-link" href="#">Previous</Link></li>
              <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
              <li className="page-item"><Link className="page-link" href="#">2</Link></li>
              <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
