"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const items = [
    { img: '/img/icons/Diarrhoea 1.webp', alt: 'Diarrhea', title: 'Diarrhea', link: 'diarrhea.html' },
    { img: '/img/icons/Gastritis 1.webp', alt: 'Gastritis', title: 'Gastritis', link: 'gastritis-treatment-In-bangalore.html' },
    { img: '/img/icons/Bariatric Surgery 1.webp', alt: 'Bariatric Surgery', title: 'Bariatric Surgery', link: 'bariatric-surgery-specialist-bangalore.html' },
    { img: '/img/icons/Obesity 1.webp', alt: 'Obesity', title: 'Obesity', link: 'weight-loss-surgeon-bangalore.html' },
    { img: '/img/icons/laser surgery 1.webp', alt: 'Laser surgery', title: 'Laser surgery', link: 'laser-surgery-doctors-in-bangalore.html' },
    { img: '/img/icons/Gastric Balloons 1.webp', alt: 'Gastritis Balloon', title: 'Gastritis Balloon', link: 'swallowable-balloon.html' },
];

const GutHealthLibrary = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="experts-section-sixteen testimonial-section ovr-flw">
            <div className="container">
                <div className="row mb-4" data-aos="fade-up">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">Gut Health Library</h2>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                    }}
                    className="gut-health-swiper"
                >
                    {items.map(({ img, alt, title, link }, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={`test_imgs gut-health text-center ${activeIndex === idx ? 'active-slide' : 'inactive-slide'}`}>
                                <div className="main-reviewimages">
                                    <img src={img} alt={alt} className="img-fluid" />
                                </div>
                                <h4 className="fs-5 mt-4">
                                    <Link href={link}>{title}</Link>
                                </h4>
                                <div className="testimonal-contents bg-trans">
                                    <Link href={link} className="read-more-test btn btn-outline-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="btns-lot mt-5 text-center">
                    <Link href="/guthealth-list" className="btn btn-primary mx-4 bg-primary">
                        Explore More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GutHealthLibrary;
