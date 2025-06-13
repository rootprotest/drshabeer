// utils/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Convert Buffer to Stream
function bufferToStream(buffer: Buffer) {
    const readable = new Readable();
    readable._read = () => { };
    readable.push(buffer);
    readable.push(null);
    return readable;
}

export async function uploadToCloudinary(buffer: Buffer) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error);
            }
        });

        bufferToStream(buffer).pipe(stream);
    });
}