"use client";

import Image from 'next/image';
import Link from 'next/link';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Button } from 'react-bootstrap';

const specialities = [
    {
        title: 'Gut Care',
        href: '/gut-health-specialis-in-bangalore',
        icon: '/img/icons/Gut Care.svg',
    },
    {
        title: 'Gastroenterology',
        href: '/best-gastroenterologist-in-bangalore',
        icon: '/img/icons/Gastroenterology.svg',
    },
    {
        title: 'Bariatric Surgery',
        href: '/bariatric-surgery-specialist-bangalore',
        icon: '/img/icons/Bariatric Surgery.svg',
    },
    {
        title: 'Laparoscopic',
        href: '/laparoscopic-surgeon-in-bangalore',
        icon: '/img/icons/Laparoscopic.svg',
    },
    {
        title: 'Proctology',
        href: '/proctology-specialist-in-bangalore',
        icon: '/img/icons/Proctology.svg',
    },
];

export default function SpecialitiesSection() {
    return (
        <section className="specialities-section-one">
            <div className="container">
                <div className="text-center mb-5 aos" data-aos="fade-up">
                    <h2 className="section-title">Specialities</h2>
                </div>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                    }}
                    className="specialities-swiper"
                >
                    {specialities.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link href={item.href} className="text-decoration-none">
                                <div className="specialities-item text-center p-3">
                                    <div className="specialities-img mb-2 d-flex justify-content-center">
                                        <span>
                                            <Image
                                                src={item.icon}
                                                alt={`${item.title} icon`}
                                                width={60}
                                                height={60}
                                                priority
                                            />
                                        </span>
                                    </div>
                                    <p className="fs-6 mb-0 text-dark">{item.title}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="specialities-btn aos mt-5 text-center" data-aos="fade-up">
                    <Link href="/">
                        <Button className="btn">See All Specialities</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
