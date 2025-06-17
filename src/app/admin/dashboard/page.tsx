// src/app/admin/dashboard/page.tsx
import React from 'react';
import Link from 'next/link';
import BariatricBanner from '@/components/BreadcrumbBanner';

export default function AdminDashboard() {
    return (
        <>
            {/* Banner Section */}
            <BariatricBanner
                title="Admin Dashboard"
                imageSrc="/img/bannerslider/Surgery For Reflux 2.webp"
            />

            {/* Dashboard Content */}
            <div className="container my-5">
                <h2 className="mb-4 text-center">Welcome to Admin Panel</h2>
                <p className="text-center text-muted mb-5">Choose an option below to manage your content.</p>

                <div className="row g-4 justify-content-center">
                    {/* Manage Pages Card */}
                    <div className="col-md-4 col-sm-6">
                        <Link href="/admin/page" className="text-decoration-none">
                            <div className="card shadow border-0 h-100 hover-card">
                                <div className="card-body d-flex flex-column align-items-center text-center p-5">
                                    <i className="fas fa-file-alt fa-3x text-primary mb-3"></i>
                                    <h5 className="card-title">Manage Pages</h5>
                                    <p className="text-muted">
                                        Add, edit or delete pages like Anal Fissure, Fistula, Pilonidal Sinus etc.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Manage Blogs Card */}
                    <div className="col-md-4 col-sm-6">
                        <Link href="/admin/blog" className="text-decoration-none">
                            <div className="card shadow border-0 h-100 hover-card">
                                <div className="card-body d-flex flex-column align-items-center text-center p-5">
                                    <i className="fas fa-blog fa-3x text-success mb-3"></i>
                                    <h5 className="card-title">Manage Blogs</h5>
                                    <p className="text-muted">
                                        Create, edit, and organize blog posts for your website.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Settings / Profile Card */}
                    <div className="col-md-4 col-sm-6">
                        <Link href="/admin/settings" className="text-decoration-none">
                            <div className="card shadow border-0 h-100 hover-card">
                                <div className="card-body d-flex flex-column align-items-center text-center p-5">
                                    <i className="fas fa-cog fa-3x text-warning mb-3"></i>
                                    <h5 className="card-title">Settings</h5>
                                    <p className="text-muted">
                                        Update admin profile, change password, or manage site settings.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}