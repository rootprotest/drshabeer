'use client';
import Image from 'next/image';

export default function BariatricBanner({ title = 'Default Title', imageSrc }) {
    const isValidImage =
        typeof imageSrc === 'string' ||
        (typeof imageSrc === 'object' && 'src' in imageSrc);

    return (
        <div className="breadcrumb-bar-two">
            <div className="mt-3 position-relative">
                <div className="row align-items-center position-relative m-0">
                    <div className="p-0">
                        {isValidImage ? (
                            <Image
                                src={imageSrc}
                                alt={title}
                                className="img-fluid w-100"
                                priority
                                width={1920}
                                height={500}
                            />
                        ) : (
                            <div className="bg-secondary img-fluid w-100" style={{ height: '500px' }}>
                                <p className="text-white text-center pt-5">Image Not Available</p>
                            </div>
                        )}
                    </div>

                    <div
                        className="col-12 text-center position-absolute"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2,
                        }}
                    >
                        <h2 className="breadcrumb-title text-white fw-bold" style={{ fontSize: '2.5rem' }}>
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}