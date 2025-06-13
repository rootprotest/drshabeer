import { notFound } from 'next/navigation';
import axios from 'axios';
import { Metadata } from 'next';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `Blog - ${params.slug}`,
    };
}

export default async function BlogPost({ params }: Props) {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?slug=${params.slug}`);
        const post = res.data;

        if (!post) return notFound();

        return (
            <div className="container my-5">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <img src={post.imageUrl} alt={post.title} className="w-full mb-6 rounded" />
                <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching post:', error);
        return notFound();
    }
}
