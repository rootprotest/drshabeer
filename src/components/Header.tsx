// src/app/components/Header.tsx or src/app/layout/header.tsx
'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/img/logo-2-01.svg';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkCookie = () => {
            const authCookie = document.cookie
                .split('; ')
                .find(row => row.trim().startsWith('adminAuth='));

            console.log('All Cookies:', document.cookie);
            console.log('adminAuth Cookie:', authCookie);
            setIsAuthenticated(!!authCookie);
        };

        checkCookie(); // Initial check
        setTimeout(checkCookie, 1000); // 1s delay ke baad dubara check karo
    }, []);

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            await fetch('/api/auth/logout', { method: 'GET' });
            document.cookie = 'adminAuth=; Path=/admin; Max-Age=0;';
            window.location.href = '/login';
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <header className="header header-custom header-fixed header-one home-head-one">
            <div className="container">
                <nav className="navbar navbar-expand-lg header-nav d-flex justify-content-between align-items-center">
                    {/* Mobile Dropdown Menu */}
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-content">
                                <Link href="/">Home</Link>
                                <Link href="/aboutus">About us</Link>
                                <Link href="/news-updates">News & updates</Link>
                                <Link href="/contact">Contact us</Link>

                                {/* Conditional Logout Link */}
                                {isAuthenticated ? (
                                    <Link href="/api/auth/logout" onClick={handleLogout} className="text-danger">
                                        Logout
                                    </Link>
                                ) : (
                                    <Link href="/login">Login</Link>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Logo + Desktop Menu */}
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <Link href="/" className="menu-logo">
                                <Image src={logo} alt="Logo" className="img-fluid" />
                            </Link>
                            <a id="menu_close" className="menu-close" href="#">
                                <i className="fas fa-times"></i>
                            </a>
                        </div>

                        <ul className="main-nav">
                            <li>
                                <Link href="/" className="navbar-brand logo mx-100">
                                    <Image src={logo} alt="Logo" className="img-fluid" />
                                </Link>
                            </li>

                            {/* Show Login / Logout in desktop nav */}
                            <li className="login-link">
                                {isAuthenticated ? (
                                    <Link href="/api/auth/logout" onClick={handleLogout} className="text-danger">
                                        Logout
                                    </Link>
                                ) : (
                                    <Link href="/login">Login</Link>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* Right-side register button or language selector */}
                    <ul className="nav header-navbar-rht">
                        <li className="register-btn">
                            <Link href={isAuthenticated ? '/admin/dashboard' : '/login'} className="btn reg-btn">
                                {isAuthenticated ? 'Admin Panel' : 'English'}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}