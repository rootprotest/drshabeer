// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer footer-one">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        {/* Contact Us */}
                        <div className="col-lg-8 col-md-8">
                            <div className="row">
                                <div className="col-lg-5 col-md-4">
                                    <div className="footer-widget footer-contact">
                                        <h2 className="footer-title">Contact Us</h2>
                                        <div className="footer-contact-info">
                                            <div className="footer-address">
                                                <p>
                                                    <i className="feather-map-pin"></i> 830 13 Main 3 Block Koramangala Bangalore 560034
                                                </p>
                                            </div>
                                            <div className="footer-address">
                                                <p>
                                                    <i className="feather-phone-call"></i> +91 9071246002
                                                </p>
                                            </div>
                                            <div className="footer-address mb-0">
                                                <p>
                                                    <i className="feather-mail"></i> drshabeerahmed@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* For Patients */}
                                <div className="col-lg-3 col-md-3">
                                    <div className="footer-widget footer-menu">
                                        <h2 className="footer-title">For Patients</h2>
                                        <ul>
                                            <li><Link href="/providers">Provider</Link></li>
                                            <li><Link href="/specialities">GI Health Library</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Patient Resources */}
                                <div className="col-lg-3 col-md-3">
                                    <div className="footer-widget footer-menu">
                                        <h2 className="footer-title">Patient Resources</h2>
                                        <ul>
                                           <li>
  <a
    href="https://www.fortishealthcare.com/doctors/dr-shabeer-ahmed-773?hospital=3514"
    target="_blank"
    rel="noopener noreferrer"
  >
    Schedule Appointment
  </a>
</li>

                                            <li><Link href="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team of Expertise */}
                        <div className="col-lg-2 col-md-2">
                            <div className="footer-widget footer-menu">
                                <h2 className="footer-title">Team of Expertise</h2>
                                <ul>
                                    <li><Link href="/aboutus">Dr. Shabeer Ahmed</Link></li>
                                    <li><Link href="/dr-meghnad">Dr. Meghnad G. Joshi</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="col-lg-2 col-md-3">
                            <div className="footer-widget footer-menu">
                                <h2 className="footer-title">Company</h2>
                                <ul>
                                    <li><Link href="/aboutus">About Us</Link></li>
                                    <li><Link href="/news-updates">News & Events</Link></li>
                                    <li><Link href="/blogs">Blogs </Link></li>
                                    <li><Link href="/announcements">Announcement </Link></li>
                                    <li><Link href="/videos-reels-testimonial">Videos, Reels, Testimonial</Link></li>
                                    <li><Link href="/symtomatic-checker">Symptomatic Checker</Link></li>
                                    <li><Link href="/quizes">Quizzes</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="copyright-text">
                                    <p className="mb-0">
                                        © 2025 Dr. Shabeer Ahmed. All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="copyright-menu">
                                    <ul className="policy-menu">
                                        <li><Link href="/">Privacy Policy</Link></li>
                                        <li><Link href="/">Terms and Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
