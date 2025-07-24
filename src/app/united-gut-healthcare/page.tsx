"use client";

import Image from "next/image";

export default function IntroducingPage() {
  return (
    <div className="introducing-page">
      {/* Hero Banner Section */}
      <section className="intro-banner">
        <Image
          src="/img/banner/united-gut-health.jpg"
          alt="United Gut Health Care Banner"
          fill
          priority
          className="intro-banner-image"
        />
        <div className="intro-banner-overlay">
          <h1 className="intro-title">United Gut Health Care</h1>
          <h2 className="intro-subtitle">
            A Multidisciplinary Approach to Digestive Health
          </h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="intro-content container">
        <p className="intro-paragraph">
          At United Gut Healthcare, we understand that digestive health is crucial to overall well-being. Our comprehensive approach integrates various specialties to provide you with the most effective and personalized care for your gastrointestinal needs.
        </p>

        <div className="intro-points">
          <div className="intro-point">
            <h4>1. Comprehensive Care</h4>
            <p>
              We bring together a team of experts from different fields, including gastroenterologists, dietitians, surgeons, and mental health professionals, to address every aspect of gut health. This multidisciplinary approach ensures that all facets of your condition are considered, leading to more effective treatment plans.
            </p>
          </div>

          <div className="intro-point">
            <h4>2. Personalized Treatment Plans</h4>
            <p>
              Every patient is unique. Our team collaborates to create individualized treatment strategies tailored to your specific symptoms and health goals. By combining insights from various specialties, we aim to offer a holistic solution that improves your quality of life.
            </p>
          </div>

          <div className="intro-point">
            <h4>3. Advanced Diagnostics and Therapies</h4>
            <p>
              Utilizing the latest advancements in medical technology and research, our team provides accurate diagnostics and cutting-edge therapies. This includes non-invasive procedures, innovative treatments, and evidence-based practices.
            </p>
          </div>

          <div className="intro-point">
            <h4>4. Focus on Prevention and Education</h4>
            <p>
              Beyond treating current issues, we emphasize preventive care and patient education. Our goal is to empower you with knowledge and strategies to maintain optimal gut health and prevent future problems.
            </p>
          </div>

          <div className="intro-point">
            <h4>5. Compassionate Care</h4>
            <p>
              At United Gut Healthcare, we prioritize compassionate, patient-centered care. Our team is dedicated to supporting you through every step of your treatment journey, ensuring that your concerns are heard and addressed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
