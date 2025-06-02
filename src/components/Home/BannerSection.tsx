'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const BannerSection = () => {
  return (
    <section className="banner-section pt-0 position-relative">
      <div className="col-md-12 position-relative">
        <div className="slider-img position-relative">
          <video className="banner-images w-100" autoPlay playsInline loop muted>
            <source src="/img/bg/banner1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="banner-cont-main text-center">
              <div className="banner-content mt-5">
                <h1 className="d-none">Laparoscopic Surgeon in Bangalore</h1>
                <h2>INTRODUCING</h2>
                <p>
                  <strong>United Gut Healthcare </strong>: A Multidisciplinary Approach to Digestive Health
                </p>
                <p className="fs-6">
                  At United Gut Healthcare, we understand that digestive health is crucial to overall well-being.
                  Our comprehensive approach integrates various specialties to provide you with the most effective
                  and personalized care for your gastrointestinal needs.
                </p>
                <Link href="/introducing" data-aos="fade-up">
                  <button className="btn btn-primary read-more-tes">
                    Read More <FontAwesomeIcon icon={faChevronRight} />
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

export default BannerSection;
