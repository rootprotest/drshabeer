'use client';

import Image from 'next/image';
import React from 'react';

const BannerSubSection = () => {
    return (
        <section className="banner-sub ovr-flw">
            <div className="container-fluid px-0 ovr-flw">
                <div className="row">
                    {/* Left Box */}
                    <div className="col-md-6 svtm p-4">
                        <div className="row d-flex align-items-center">
                            <div className="col-5">
                                <Image
                                    src="/img/bg/Rectal Bleeding.webp"
                                    alt="Precision Surgery"
                                    width={200}
                                    height={200}
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <div className="col-7">
                                <p className="ban-sub-hed">Precision Surgery / Robotic Surgery</p>
                                <p className="ban-sub-cont">
                                    See if you qualify to skip the pre-procedure office visit.
                                </p>
                                <a className="read-more-test" href="/robotic-surgeries">
                                    Begin Questionnaire
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Box */}
                    <div className="col-md-6 svtm bg-wh-b p-4">
                        <div className="row d-flex align-items-center">
                            <div className="col-5">
                                <Image
                                    src="/img/bg/RoboticSurgery_home.webp"
                                    alt="Rectal Bleeding"
                                    width={200}
                                    height={200}
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <div className="col-7">
                                <p className="ban-sub-hed">
                                    Experiencing Rectal Bleeding, Itching, or Pain
                                </p>
                                <p className="ban-sub-cont">
                                    See if you qualify to skip the pre-procedure office visit.
                                </p>
                                <a className="read-more-test" href="/rectal-bleeding-treatment">
                                    Begin Questionnaire
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSubSection;
