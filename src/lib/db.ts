// lib/db.ts
import { connectDB } from './connectDB';
import Page from '@/modal/Page';

export const getPageBySlug = async (slug: string) => {
    await connectDB();
    // lean() use karne se sirf plain JS object milta hai
    return await Page.findOne({ slug }).lean();
};