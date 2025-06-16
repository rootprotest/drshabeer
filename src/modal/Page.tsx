// modal/Page.ts
import mongoose from 'mongoose';

const FaqSchema = new mongoose.Schema({
    question: String,
    answer: String,
});

const PageSchema = new mongoose.Schema({
    title: String,
    description: String,
    keywords: String,
    slug: { type: String, unique: true },
    bannerTitle: String,
    bannerImage: String,
    contentImage: String,
    introduction: String,
    fullintroduction: String,
    faqs: [FaqSchema],
});

export default mongoose.models.Page || mongoose.model('Page', PageSchema);