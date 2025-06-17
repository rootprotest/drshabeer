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
function bufferToStream(buffer: Buffer): Readable {
    const readable = new Readable();
    readable._read = () => { }; // _read required for Readable stream
    readable.push(buffer);
    readable.push(null);
    return readable;
}

// Upload Function with Types
export async function uploadToCloudinary(buffer: Buffer, folder: string = 'pages'): Promise<{ secure_url: string; public_id: string }> {
    try {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: folder,
                    resource_type: 'auto',
                },
                (error, result) => {
                    if (result) {
                        resolve({
                            secure_url: result.secure_url,
                            public_id: result.public_id,
                        });
                    } else {
                        console.error('Cloudinary Upload Error:', error);
                        reject(error || new Error('Cloudinary upload failed'));
                    }
                }
            );

            bufferToStream(buffer).pipe(stream);
        });
    } catch (error) {
        console.error('Upload to Cloudinary failed:', error);
        throw error;
    }
}