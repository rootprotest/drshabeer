import { connectDB } from '@/lib/connectDB';
import Post from '@/modal/Post';
import { NextRequest, NextResponse } from 'next/server';

// Define type for params
export type BlogPostProps = {
    params: Promise<{ id: string }>;
};

// Correctly typed DELETE handler
export async function DELETE(req: NextRequest, { params }: BlogPostProps): Promise<NextResponse> {
    try {
        // Connect to DB
        await connectDB();

        const { id } = await params;

        if (!id || id === 'undefined') {
            return NextResponse.json(
                { message: 'Invalid ID' },
                { status: 400 }
            );
        }

        // Find and delete post
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: 'Post deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('DELETE /api/posts/[id] error:', error);
        return NextResponse.json(
            { message: 'Failed to delete post' },
            { status: 500 }
        );
    }
}