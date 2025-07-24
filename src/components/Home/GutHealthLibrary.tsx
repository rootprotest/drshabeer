"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const items = [
    { img: '/img/icons/Diarrhoea 1.webp', alt: 'Diarrhea', title: 'Diarrhea', link: 'diarrhea' },
    { img: '/img/icons/Gastritis 1.webp', alt: 'Gastritis', title: 'Gastritis', link: 'gastritis-treatment-In-bangalore' },
    { img: '/img/icons/Bariatric Surgery 1.webp', alt: 'Bariatric Surgery', title: 'Bariatric Surgery', link: 'bariatric-surgery-specialist-bangalore' },
    { img: '/img/icons/Obesity 1.webp', alt: 'Obesity', title: 'Obesity', link: 'weight-loss-surgeon-bangalore' },
    { img: '/img/icons/laser surgery 1.webp', alt: 'Laser surgery', title: 'Laser surgery', link: 'laser-surgery-doctors-in-bangalore' },
    { img: '/img/icons/Gastric Balloons 1.webp', alt: 'Gastritis Balloon', title: 'Gastritis Balloon', link: 'swallowable-balloon' },
    { img: '/img/icons/Rectal Bleeding 1.webp', alt: 'Rectal Bleeding', title: 'Rectal Bleeding', link: 'rectal-bleeding-treatment' },
    { img: '/img/icons/Endoscopic 1.webp', alt: 'Endoscopic Surgery', title: 'Endoscopic Surgery', link: 'best-doctors-for-endoscopy-in-bangalore' },
    { img: '/img/icons/Incisional hernia 1.webp', alt: 'Incisional hernia', title: 'Incisional hernia', link: 'incisional-hernia' },
    { img: '/img/icons/Inguinal hernia 1.webp', alt: 'Inguinal hernia', title: 'Inguinal hernia', link: 'inguinal-hernia' },
    { img: '/img/icons/Anal fissure, anal fistula 1.webp', alt: 'Anal fissure, anal fistula', title: 'Anal fissure, anal fistula', link: 'fissure' },
    { img: '/img/icons/Abdominal Pain 1.webp', alt: 'Abdominal Pain/ Acute And Chronic', title: 'Abdominal Pain/ Acute And Chronic', link: 'abdominal' },
    { img: '/img/icons/Surgery For 1.webp', alt: 'Surgery For Reflux Disease', title: 'Surgery For Reflux Disease', link: 'reflux' },
    { img: '/img/icons/Irritable Bowel 1.webp', alt: 'Irritable Bowel Syndrome', title: 'Irritable Bowel Syndrome', link: 'irritable' },
    { img: '/img/icons/Surgery For 1.webp', alt: 'Surgery For Cancers', title: 'Surgery For Cancers', link: 'cancer-treatment-in-bangalore' },
    { img: '/img/icons/stem cell small size.webp', alt: 'Stem Cell Therapy', title: 'Stem Cell Therapy', link: 'stemcell-therapy' },
    { img: '/img/icons/Robotic Surgery.webp', alt: 'Robotic Surgery', title: 'Robotic Surgery', link: 'robotic-surgeries' },
    { img: '/img/icons/Gallstones.webp', alt: 'Gallstones', title: 'Gallstones', link: 'gallstones-treatments' },
    { img: '/img/icons/piles.webp', alt: 'Piles', title: 'Piles', link: 'piles-treatment-in-bangalore' },
    { img: '/img/icons/Reflux Disease.webp', alt: 'Gastroesophageal Reflux Disease', title: 'Gastroesophageal Reflux Disease', link: 'gastroesophageal' },
    { img: '/img/icons/Laparoscopic.svg', alt: 'Laparoscopic', title: 'Laparoscopic', link: 'laparoscopic-surgeon-in-bangalore' },
];

const GutHealthLibrary = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="experts-section-sixteen testimonial-section ovr-flw">
            <div className="container-fluid">
                <div className="row mb-4" data-aos="fade-up">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">Gut Health Library</h2>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    slidesPerView={5}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 5 },
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
                    <Link href="/providers" className="btn btn-primary mx-4 bg-primary">
                        Explore More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GutHealthLibrary;


