import React, { useState } from 'react';

const IMAGE_UPLOAD_SIZE = '172px'; // Change this to your desired size
const DEFAULT_IMAGE_URL =
    'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1693074768/portfolioImages/inventoryApp/Image_xc9ufw.png';

function ImageUpload({ variant }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageDelete = () => {
        setSelectedImage(null);
    };

    const getContainerClassName = () => {
        switch (variant) {
            case 'large':
                return 'lg:w-full md:w-[372px] h-[302px] px-8';
            case 'small':
                return 'w-[100px] h-[100px]';
            default:
                return 'w-[172px] h-[172px]';
        }
    };

    return (
        <div className={`${getContainerClassName()} bg-background flex flex-col justify-center items-center gap-3 rounded-2xl border border-[#E0E3E7] relative`}>
            {selectedImage && (
                <span className="flex gap-1 top-3 right-3 absolute transition-all duration-300">
                    <label htmlFor="image-upload-input" title="Upload avatar" className="cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="8" fill="#FFF2E2" />
                            <g clip-path="url(#clip0_546_8002)">
                                <path d="M19.3337 19.3333L16.0003 16L12.667 19.3333" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 16V23.5" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.9919 21.3249C23.8047 20.8818 24.4467 20.1806 24.8168 19.3321C25.1868 18.4835 25.2637 17.5359 25.0354 16.6388C24.807 15.7417 24.2865 14.9462 23.5558 14.3778C22.8251 13.8094 21.9259 13.5005 21.0002 13.4999H19.9502C19.698 12.5243 19.2278 11.6185 18.5752 10.8507C17.9225 10.0829 17.1042 9.47311 16.182 9.06708C15.2597 8.66104 14.2573 8.46937 13.2503 8.50647C12.2433 8.54358 11.2578 8.80849 10.3679 9.28129C9.47795 9.7541 8.7068 10.4225 8.1124 11.2362C7.51799 12.05 7.11579 12.9879 6.93603 13.9794C6.75627 14.9709 6.80363 15.9903 7.07456 16.961C7.34548 17.9316 7.83291 18.8281 8.50021 19.5832" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.3337 19.3333L16.0003 16L12.667 19.3333" stroke="#1C1D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_546_8002">
                                    <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </label>

                    <label htmlFor="image-delete" onClick={handleImageDelete} title="Delete Avatar" className="cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="8" fill="#FFF2E2" />
                            <path d="M22.1042 13.8906C22.1042 13.8906 21.6517 19.5031 21.3892 21.8673C21.2642 22.9965 20.5667 23.6581 19.4242 23.679C17.25 23.7181 15.0733 23.7206 12.9 23.6748C11.8008 23.6523 11.115 22.9823 10.9925 21.8731C10.7283 19.4881 10.2783 13.8906 10.2783 13.8906" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.2567 11.1999H9.125" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.5335 11.2C19.8793 11.2 19.316 10.7375 19.1877 10.0966L18.9852 9.08331C18.8602 8.61581 18.4368 8.29248 17.9543 8.29248H14.4268C13.9443 8.29248 13.521 8.61581 13.396 9.08331L13.1935 10.0966C13.0652 10.7375 12.5018 11.2 11.8477 11.2" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </label>
                </span>
            )}

            <label htmlFor="image-upload-input" className={`flex flex-col ${selectedImage ? 'hidden' : ''} ${variant === 'small' ? 'text-[10px]' : ''} text-[#6F7E8C] text-paragraph-2 font-medium items-center gap-2 cursor-pointer`}>
                {selectedImage ? (
                    <img className="w-[100px] rounded-xl transition-all duration-300" src={selectedImage} alt="Uploaded" />
                ) : (
                    <img className="w-[100%] h-[100%]" htmlFor="image-upload-input" src={DEFAULT_IMAGE_URL} alt="Uploaded" />
                )}

                {variant !== 'small' && (
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Your SVG content */}
                    </svg>
                )}

                Upload Image
            </label>

            {variant === 'large' && !selectedImage && (
                <p className="flex text-center text-label-1 text-black-30">
                    Upload a cover image for your product. File Format jpeg, png Recommended Size 600x600 (1:1)
                </p>
            )}

            <input id="image-upload-input" className="hidden" type="file" accept="image/*" onChange={handleImageChange} />
        </div>
    );
}

export default ImageUpload;
