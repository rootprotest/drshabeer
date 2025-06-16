// lib/db.ts
import { connectDB } from './connectDB';
import Page from '@/modal/Page';

export const getPageBySlug = async (slug: string) => {
    await connectDB();

    const page = await Page.findOne({ slug }).lean();

    if (!page) {
        console.warn(`No page found for slug: ${slug}`);
        return null;
    }

    return page;
};