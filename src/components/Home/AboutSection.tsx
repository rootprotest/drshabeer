'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section ovr-flw">
            <div className="container ovr-flw" data-aos="fade-left">
                <div className="row align-items-center">
                    {/* Image Column */}
                    <div className="col-lg-6 col-md-12">
                        <Image
                            src="/img/ShabeerAhmed.png"
                            alt="Dr. Shabeer Ahmed"
                            width={600}
                            height={500}
                            className="img-fluid"
                        />
                    </div>

                    {/* Text Column */}
                    <div className="col-lg-6 col-md-12">
                        <div className="section-inner-header about-inner-header">
                            <h2>Dr. Shabeer Ahmed</h2>
                        </div>

                        <div className="about-content">
                            <div className="about-content-details">
                                <h4>
                                    Gastrointestinal, Bariatric, Laparoscopic, General & Colorectal Surgeon
                                </h4>
                                <p>
                                    An eminent senior consultant Gastrointestinal & Laparoscopic and Bariatric
                                    Surgeon with over 36 years of extensive surgical experience. He is also an
                                    acknowledged teacher and mentor by Association of Laparoscopic Surgery (ALS),
                                    UK. His special expertise lies in advanced laparoscopic surgery especially for
                                    gastro-intestinal cancer. He has his passion for Video Assisted Thoracic Surgery
                                    (VATS), Bariatric Surgery and Metabolic Surgery.
                                </p>
                                <Link href="/aboutus">
                                    <button className="btn text-white bg-primary mt-2" type="button">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
