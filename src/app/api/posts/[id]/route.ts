import { connectDB } from '@/lib/connectDB';
import Post from '@/modal/Post';
import { NextRequest, NextResponse } from 'next/server';

// Correct type for the second argument
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await connectDB();

    const { id } = params;

    if (!id || id === 'undefined') {
        return new NextResponse(JSON.stringify({ message: 'Invalid ID' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return new NextResponse(JSON.stringify({ message: 'Post not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new NextResponse(JSON.stringify({ message: 'Post deleted successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('DELETE /api/posts/[id] error:', error);
        return new NextResponse(JSON.stringify({ message: 'Failed to delete post' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
