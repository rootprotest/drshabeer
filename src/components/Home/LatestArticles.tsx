'use client';

import Image from 'next/image';
import Link from 'next/link';

const articles = [
    {
        title: 'Life After Gallbladder Removal: What to Expect',
        author: 'Dr. Shabeer Ahmed',
        date: '13 Aug, 2024',
        excerpt: 'Gallbladder removal, or a cholecystectomy, is a common surgery for people suffering from ...',
        image: '/img/icons/Life-After-Gallbladder-Removal--What-to-Expect.png',
        link: '/blog-details',
    },
    {
        title: 'Does Junk Food Cause Appendicitis?',
        author: 'Dr. Shabeer Ahmed',
        date: '10 Sep, 2024',
        excerpt: 'There is no direct scientific evidence that junk food causes appendicitis. Appendicitis occurs ...',
        image: '/img/icons/Does-Junk-Food-Cause-Appendicitis.png',
        link: '/blog-details',
    },
    {
        title: 'What is Bariatric Surgery?',
        author: 'Dr. Shabeer Ahmed',
        date: '30 Oct, 2024',
        excerpt: 'Bariatric surgery is a medical procedure designed to help people lose weight by making ...',
        image: '/img/icons/What-is-Bariatric-Surgery.png',
        link: '/bariatric-surgery-specialist-bangalore',
    },
    {
        title: '⁠Stomach Ulcer Treatment',
        author: 'Dr. Shabeer Ahmed',
        date: '08 Nov, 2024',
        excerpt: 'Delve into the impact of digital life on mental health & discover practical strategies to maintain mental well-being.',
        image: '/img/blog/blog-12.jpg',
        link: '/stomach-ulcer-surgery-in-bangalore',
    },
    {
        title: 'Liver Cancer Surgery',
        author: 'Dr. Shabeer Ahmed',
        date: '08 Nov, 2024',
        excerpt: 'Delve into the impact of digital life on mental health & discover practical strategies to maintain mental well-being.',
        image: '/img/blog/blog-12.jpg',
        link: '/liver-disease-specialist-in-bangalore',
    },
];

export default function LatestArticles() {
    return (
        <section className="articles-section py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">Latest Articles</h2>
                    </div>
                </div>
                <div className="row">
                    {articles.map((article, index) => (
                        <div className="col-lg-6 col-md-6 d-flex mb-4" key={index}>
                            <div className="articles-grid w-100 p-3 border rounded d-flex">
                                <div className="articles-left me-3">
                                    <Link href={article.link}>
                                        <div className="articles-img position-relative" style={{ width: '120px', height: '120px' }}>
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className="articles-right flex-grow-1">
                                    <ul className="list-unstyled d-flex gap-3 small text-muted mb-2">
                                        <li><i className="feather-user"></i> {article.author}</li>
                                        <li><i className="feather-calendar"></i> {article.date}</li>
                                    </ul>
                                    <h5>
                                        <Link href={article.link} className="text-dark text-decoration-none">
                                            {article.title}
                                        </Link>
                                    </h5>
                                    <p className="mb-2">{article.excerpt}</p>
                                    <Link href={article.link} className="btn btn-primary btn-sm">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
