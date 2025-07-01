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
                            src="/img/Dr. Meghnad G. Joshi.png"
                            alt="Dr. Meghnad G. Joshi.png"
                            width={600}
                            height={500}
                            className="img-fluid"
                        />
                    </div>

                    {/* Text Column */}
                    <div className="col-lg-6 col-md-12">
                        <div className="section-inner-header about-inner-header">
                            <h2>
                                Dr. Meghnad G. Joshi</h2>
                        </div>

                        <div className="about-content">
                            <div className="about-content-details">
                                <h4>
                                    M.Sc. Ph.D. PDD


                                </h4>
                                <p>
                                    Meghnad G Joshi earned a PhD from the Department of Zoology, Shivaji University, Kolhapur, India in 2006. He Joined Karolinska Institute, Sweden as a Postdoctoral fellow in 2007-2008 for fetal and adult hepatocyte transplantation studies. He worked for Sahlgrenska University Hospital, Department of transplantation surgery, Göteborg, Sweden from 2008-2010. In 2009, he was awarded with TTS New Key Opinion Leader, Sweden. He was appointed as a visiting Assistant professor by Kansas Medical Center, USA from 2010 to 2012.


                                </p>
                                {/* <Link href="/aboutus">
                                    <button className="btn text-white bg-primary mt-2" type="button">
                                        Read More
                                    </button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
