// src/app/[slug]/page.tsx
'use client'
import { getPageBySlug } from '@/lib/db';
import BariatricBanner from '@/components/BreadcrumbBanner';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { Metadata } from 'next';
import DynamicFaqSection from '@/components/DynamicFaq';

export type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

    const { slug } = await params; // ✅ Await params

    const page = await getPageBySlug(slug);

    if (!page) {
        return {
            title: "Blog Post Not Found",
            description: "The requested blog post could not be found.",
        };
    }

    return {
        title: (page as any)?.title || 'Page',
        description: (page as any)?.description || 'No description available',
        keywords: (page as any)?.keywords || '',
    };
}

export default async function Page({ params }: PageProps) {

    const { slug } = await params; // ✅ Await params first
    const page = await getPageBySlug(slug);

    if (!page) return <div>Page Not Found</div>;

    // Convert Mongoose object to plain JSON to avoid hydration issues
    const plainPage = JSON.parse(JSON.stringify(page));

    return (
        <>
            {/* Banner Section */}
            <BariatricBanner
                title={plainPage.bannerTitle || 'Default Banner Title'}
                imageSrc={plainPage.bannerImage || '/fallback-image.jpg'}
            />

            {/* Main Content */}
            <Container className="my-5">
                <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={4} className="mb-4 d-flex justify-content-center">
                        <Image
                            src={plainPage.contentImage || '/fallback-image.jpg'}
                            alt={plainPage.title || 'Content'}
                            width={400}
                            height={300}
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Introduction Section */}
                    {plainPage.introduction && (
                        <Col lg={8} className="mb-4">
                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{ __html: plainPage.introduction }}
                            />
                        </Col>
                    )}

                    {/* Full Introduction Section */}
                    {plainPage.fullintroduction && (
                        <Col lg={12} md={12} className="mx-auto">
                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{ __html: plainPage.fullintroduction }}
                            />
                        </Col>
                    )}
                </Row>

                {/* FAQ Section */}
                {Array.isArray(plainPage.faqs) && plainPage.faqs.length > 0 && (
                    <DynamicFaqSection faqs={plainPage.faqs} />

                )}
            </Container>
        </>
    );
}