'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/img/logo-2-01.svg'; // adjust path if needed
import { useState } from 'react';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="header header-custom header-fixed header-one home-head-one">
            <div className="container">
                <nav className="navbar navbar-expand-lg header-nav d-flex justify-content-between align-items-center">
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-content">
                                <Link href="/">Home</Link>
                                <Link href="/aboutus">About us</Link>
                                <Link href="/news">News & updates</Link>
                                <Link href="/contact">Contact us</Link>
                            </div>
                        )}
                    </div>

                    <div className="navbar-header">
                        <a id="mobile_btn" href="javascript:void(0);" className="mobile-menu-btn">
                            <span className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                    </div>

                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <Link href="/" className="menu-logo">
                                <Image src={logo} alt="Logo" className="img-fluid" />
                            </Link>
                            <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                <i className="fas fa-times"></i>
                            </a>
                        </div>
                        <ul className="main-nav">
                            <li>
                                <Link href="/" className="navbar-brand logo mx-50">
                                    <Image src={logo} alt="Logo" className="img-fluid" />
                                </Link>
                            </li>
                            <li className="login-link">
                                <Link href="/login">Login / Signup</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="nav header-navbar-rht">
                        <li className="register-btn">
                            <Link href="/register" className="btn reg-btn">
                                English
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
