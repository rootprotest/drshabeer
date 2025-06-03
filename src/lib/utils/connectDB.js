import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
        isConnected = true;
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};