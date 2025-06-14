// src/modal/Post.ts
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: String,
    slug: { type: String, unique: true },
    content: String,
    author: String,
    category: String,
    imageUrl: String,
    metaTitle: String,
    metaKeywords: String,
    metaDescription: String,
    date: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
