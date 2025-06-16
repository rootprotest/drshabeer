// src/utils/cloudinary.ts

import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Convert Buffer to Stream
function bufferToStream(buffer: Buffer) {
    const readable = new Readable();
    readable._read = () => { }; // _read is required but you don't have to do anything
    readable.push(buffer);
    readable.push(null);
    return readable;
}

// Upload Function
export async function uploadToCloudinary(buffer: Buffer, folder: string = 'pages') {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: folder,
                resource_type: 'auto'
            },
            (error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );

        bufferToStream(buffer).pipe(stream);
    });
}