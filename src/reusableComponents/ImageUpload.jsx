import React, { useState } from 'react';

function ImageUpload() {
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

    const handleImageDelete = () => { setSelectedImage(null) }

    return (
        <div className="bg-background w-[172px] h-[172px] flex flex-col justify-center items-center gap-5 rounded-xl border border-primary-10 relative">

            <span className={`${selectedImage ? 'flex' : 'hidden'} absolute gap-1 top-3 right-3 transition-all duration-300`}>
                <label label htmlFor="image-upload-input" title='Upload avatar' className='cursor-pointer'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#FFF2E2" />
                        <g clipPath="url(#clip0_181_9611)">
                            <path d="M19.3337 19.3333L16.0003 16L12.667 19.3333" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 16V23.5" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.9919 21.3249C23.8047 20.8818 24.4467 20.1806 24.8168 19.3321C25.1868 18.4835 25.2637 17.5359 25.0354 16.6388C24.807 15.7417 24.2865 14.9462 23.5558 14.3778C22.8251 13.8094 21.9259 13.5005 21.0002 13.4999H19.9502C19.698 12.5243 19.2278 11.6185 18.5752 10.8507C17.9225 10.0829 17.1042 9.47311 16.182 9.06708C15.2597 8.66104 14.2573 8.46937 13.2503 8.50647C12.2433 8.54358 11.2578 8.80849 10.3679 9.28129C9.47795 9.7541 8.7068 10.4225 8.1124 11.2362C7.51799 12.05 7.11579 12.9879 6.93603 13.9794C6.75627 14.9709 6.80363 15.9903 7.07456 16.961C7.34548 17.9316 7.83291 18.8281 8.50021 19.5832" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.3337 19.3333L16.0003 16L12.667 19.3333" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_181_9611">
                                <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                            </clipPath>
                        </defs>
                    </svg>
                </label>

                <label htmlFor='image-delete' onClick={handleImageDelete} title='Delete Avatar' className='cursor-pointer'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#FFF2E2" />
                        <path d="M22.1042 13.8896C22.1042 13.8896 21.6517 19.5021 21.3892 21.8663C21.2642 22.9955 20.5667 23.6571 19.4242 23.678C17.25 23.7171 15.0733 23.7196 12.9 23.6738C11.8008 23.6513 11.115 22.9813 10.9925 21.8721C10.7283 19.4871 10.2783 13.8896 10.2783 13.8896" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23.2567 11.1999H9.125" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.5335 11.1995C19.8793 11.1995 19.316 10.737 19.1877 10.0962L18.9852 9.08283C18.8602 8.61533 18.4368 8.29199 17.9543 8.29199H14.4268C13.9443 8.29199 13.521 8.61533 13.396 9.08283L13.1935 10.0962C13.0652 10.737 12.5018 11.1995 11.8477 11.1995" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </label>
            </span>

            {selectedImage ?
                <img className="w-[90%] rounded-xl transition-all duration-300" src={selectedImage} alt="Uploaded" />
                :
                <img className="w-[46px] h-[46px]" htmlFor="image-upload-input" src='https://res.cloudinary.com/dnzi0xxtx/image/upload/v1691800086/portfolioImages/inventoryApp/Image_ghzops.png' alt="Uploaded" />
            }

            <label label htmlFor="image-upload-input" className={`${selectedImage ? 'hidden' : 'flex'} text-primary-100 text-paragraph-2 font-medium items-center gap-3 cursor-pointer`}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_181_8058)">
                            <path d="M11.1663 10.6667L8.49967 8L5.83301 10.6667" stroke="#5570F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.5 8V14" stroke="#5570F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.0933 12.2598C14.7435 11.9053 15.2572 11.3444 15.5532 10.6656C15.8493 9.98674 15.9108 9.22865 15.7281 8.51095C15.5454 7.79326 15.129 7.15683 14.5444 6.70212C13.9599 6.24741 13.2406 6.00032 12.5 5.99983H11.66C11.4582 5.21932 11.0821 4.49472 10.5599 3.88049C10.0378 3.26626 9.3832 2.77839 8.64537 2.45356C7.90754 2.12874 7.10567 1.9754 6.30005 2.00508C5.49443 2.03476 4.70602 2.24669 3.99409 2.62494C3.28216 3.00318 2.66525 3.5379 2.18972 4.18888C1.7142 4.83987 1.39243 5.59018 1.24863 6.38342C1.10482 7.17666 1.14271 7.99218 1.35945 8.76867C1.57619 9.54515 1.96613 10.2624 2.49997 10.8665" stroke="#5570F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.1663 10.6667L8.49967 8L5.83301 10.6667" stroke="#5570F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_181_8058">
                                <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                </svg>
                Upload Image
            </label>

            <input
                id="image-upload-input"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
        </div >
    );
}

export default ImageUpload;
