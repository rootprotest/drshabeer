'use client';

import Image from 'next/image';

const counters = [
    {
        icon: '/img/icons/count-02.svg',
        alt: 'stethoscope',
        count: '38 years',
        label: 'Experience',
    },
    {
        icon: '/img/icons/count-01.svg',
        alt: 'doctor-image',
        count: '15,000+',
        label: 'Laparoscopic Surgeries',
    },
    {
        icon: '/img/icons/count-03.svg',
        alt: 'smiley-icon',
        count: '50,000+',
        label: 'Happy Patients',
    },
    {
        icon: '/img/icons/count-04.svg',
        alt: 'award-icon',
        count: '50,000+',
        label: 'Successful Treatments',
    },
    {
        icon: '/img/icons/Nationion.svg',
        alt: 'nation-icon',
        count: '20+',
        label: 'Nations',
    },
    {
        icon: '/img/icons/research.svg',
        alt: 'research-icon',
        count: '20+',
        label: 'Research Analysts',
    },
];

export default function CounterSection() {
    return (
        <section className="counter-section position-relative">
            {/* Background Images */}
            <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-n1">
                <Image
                    src="/img/bg/counter-bg.png"
                    alt="design-background"
                    layout="fill"
                    objectFit="cover"
                    className="bg-06"
                />
                <Image
                    src="/img/bg/counter-bg-01.png"
                    alt="eye-background"
                    layout="fill"
                    objectFit="contain"
                    className="bg-07 opacity-50"
                />
            </div>

            <div className="container position-relative">
                <div className="text-center mb-4">
                    <h3 className="text-white">Driven by a Commitment to Excellence</h3>
                </div>

                <div className="text-center mb-5">
                    <h5 className="text-white">
                        I continually strive to improve the health and well-being of every patient, one successful treatment at a time
                    </h5>
                </div>

                <div className="row g-4 justify-content-center">
                    {counters.map((item, idx) => (
                        <div className="col-sm-6 col-lg-4" key={idx}>
                            <div className="count-box">
                                <div className="count-icon mb-3">
                                    <Image src={item.icon} alt={item.alt} width={60} height={60} />
                                </div>
                                <div className="count-info">
                                    <h3 className="mb-1">{item.count}</h3>
                                    <p className="mb-0">{item.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
