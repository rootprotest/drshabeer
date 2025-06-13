// models/Post.ts
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    slug: { type: String, unique: true },
    author: String,
    date: { type: Date, default: Date.now },
    content: String,
    category: String,
    imageUrl: String,
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);