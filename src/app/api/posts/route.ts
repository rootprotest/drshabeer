import { connectDB } from '@/lib/connectDB';
import Post from '@/modal/Post';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    try {
        if (slug) {
            const post = await Post.findOne({ slug });
            if (!post) {
                return new Response(JSON.stringify({ message: 'Post not found' }), {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            return new Response(JSON.stringify(post), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            const posts = await Post.find().sort({ date: -1 });
            return new Response(JSON.stringify(posts), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error('GET /api/posts error:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
