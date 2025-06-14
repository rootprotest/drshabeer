// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import axios from 'axios';
import { Metadata } from 'next';
import BariatricBanner from '@/components/BreadcrumbBanner';

export type BlogPostProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?slug=${slug}`);
        const post = res.data;

        if (!post) {
            return {
                title: "Blog Post Not Found",
                description: "The requested blog post could not be found.",
            };
        }

        return {
            title: post.metaTitle || post.title,
            description: post.metaDescription || post.content.substring(0, 160),
            openGraph: {
                title: post.metaTitle || post.title,
                description: post.metaDescription || post.content.substring(0, 160),
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
                siteName: "Dr. Shabeer Ahmed | Gastroenterologist",
                images: [
                    {
                        url: post.imageUrl.startsWith('http')
                            ? post.imageUrl
                            : `${process.env.NEXT_PUBLIC_SITE_URL}${post.imageUrl}`,
                        width: 800,
                        height: 600,
                        alt: post.title,
                    },
                ],
                locale: 'en_US',
                type: 'article',
            },
            twitter: {
                card: 'summary_large_image',
                title: post.metaTitle || post.title,
                description: post.metaDescription || post.content.substring(0, 160),
                images: [post.imageUrl],
            },
            keywords: post.metaKeywords?.split(',') || ['health', 'gastro', 'blog'],
        };
    } catch (error) {
        return {
            title: "Blog Post Not Found",
            description: "The requested blog post could not be found."
        };
    }
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params;

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?slug=${slug}`);
        const post = res.data;

        if (!post) return notFound();

        return (
            <>
                <BariatricBanner
                    title={post.title}
                    imageSrc="/img/bannerslider/Diarrhea BANNER.webp"
                />
                <div className="container my-5">
                    <h1 className="text-3xl font-bold mb-4 d-none">{post.title}</h1>
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full rounded"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                        {new Date(post.date).toLocaleDateString()}
                    </p>
                    <div className='mt-4' dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                </div>
            </>

        );
    } catch (error) {
        console.error('Error fetching post:', error);
        return notFound();
    }
}