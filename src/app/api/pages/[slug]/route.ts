import { connectDB } from '@/lib/connectDB';
import Page from '@/modal/Page';
import { uploadToCloudinary } from '@/lib/utils/cloudinary';
import { NextRequest, NextResponse } from 'next/server';

// Define type for params
export type PageProps = {
    params: Promise<{ slug: string }>;
};

// Correctly typed DELETE handler
export async function GET(req: NextRequest, { params }: PageProps): Promise<NextResponse> {
    try {
        await connectDB();

        const { slug } = await params;

        if (!slug) {
            return NextResponse.json(
                { message: 'Invalid slug' },
                { status: 400 }
            );
        }

        const page = await Page.findOne({ slug }).lean();

        if (!page) {
            return NextResponse.json(
                { message: 'Page not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(page, { status: 200 });
    } catch (error) {
        console.error('Error fetching page:', error);
        return NextResponse.json(
            { message: 'Server error' },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest, { params }: PageProps): Promise<NextResponse> {
    try {
        await connectDB();
        const { slug } = await params;

        const formData = await req.formData();

        // Extract data
        const bannerImage = formData.get('bannerImage');
        const contentImage = formData.get('contentImage');

        let bannerImageUrl = '';
        let contentImageUrl = '';

        // Upload Banner Image (if provided)
        if (bannerImage && typeof bannerImage === 'object' && 'arrayBuffer' in bannerImage) {
            const image = bannerImage as unknown as File;
            const arrayBuffer = await image.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const result = await uploadToCloudinary(buffer, 'pages/banner');
            bannerImageUrl = result.secure_url;
        }

        // Upload Content Image (if provided)
        if (contentImage && typeof contentImage === 'object' && 'arrayBuffer' in contentImage) {
            const image = contentImage as unknown as File;
            const arrayBuffer = await image.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const result = await uploadToCloudinary(buffer, 'pages/content');
            contentImageUrl = result.secure_url;
        }

        const existingPage = await Page.findOne({ slug });

        if (!existingPage) {
            return NextResponse.json(
                { message: 'Page not found' },
                { status: 404 }
            );
        }

        // Update fields only if new values are provided
        existingPage.title = (formData.get('title') as string) || existingPage.title;
        existingPage.description = (formData.get('description') as string) || existingPage.description;
        existingPage.keywords = (formData.get('keywords') as string) || existingPage.keywords;
        existingPage.bannerTitle = (formData.get('bannerTitle') as string) || existingPage.bannerTitle;
        existingPage.introduction = (formData.get('introduction') as string) || existingPage.introduction;
        existingPage.fullintroduction = (formData.get('fullintroduction') as string) || existingPage.fullintroduction;

        // Only update images if new ones were uploaded
        if (bannerImageUrl) existingPage.bannerImage = bannerImageUrl;
        if (contentImageUrl) existingPage.contentImage = contentImageUrl;

        await existingPage.save();

        return NextResponse.json({
            message: 'Page updated successfully',
            page: existingPage,
        }, { status: 200 });
    } catch (error: any) {
        console.error('Error updating page:', error.message);
        return NextResponse.json(
            { message: 'Server Error', error: error.message },
            { status: 500 }
        );
    }
}