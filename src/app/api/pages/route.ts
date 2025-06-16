// src/app/api/pages/route.ts
import { connectDB } from '@/lib/connectDB';
import Page from '@/modal/Page';
import { uploadToCloudinary } from '@/lib/utils/cloudinary';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const formData = await req.formData();

        const bannerImage = formData.get('bannerImage') as File | null;
        const contentImage = formData.get('contentImage') as File | null;

        let bannerImageUrl = '';
        let contentImageUrl = '';

        if (bannerImage) {
            const arrayBuffer = await bannerImage.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const result: any = await uploadToCloudinary(buffer, 'pages/banner');
            bannerImageUrl = result.secure_url;
        }

        if (contentImage) {
            const arrayBuffer = await contentImage.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const result: any = await uploadToCloudinary(buffer, 'pages/content');
            contentImageUrl = result.secure_url;
        }

        const faqs = JSON.parse(formData.get('faqs') as string || '[]');

        const newPage = new Page({
            title: formData.get('title'),
            description: formData.get('description'),
            keywords: formData.get('keywords'),
            slug: formData.get('slug'),
            bannerTitle: formData.get('bannerTitle'),
            introduction: formData.get('introduction'),
            fullintroduction: formData.get('fullintroduction'),
            bannerImage: bannerImageUrl,
            contentImage: contentImageUrl,
            faqs,
        });

        await newPage.save();

        return new Response(
            JSON.stringify({ message: 'Page created', page: newPage }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error: any) {
        console.error('Error saving page:', error);
        return new Response(
            JSON.stringify({ message: 'Server Error', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}