import React from 'react'

export default function Button({ onClick, btnText, btnIcon, className, type }) {
    return (
        <button
            autoFocus
            type={type}
            className={` 
            ${className || 'border-2 border-primary-90 hover:bg-primary-100 hover:bg-opacity-10 text-primary-90'} px-10 py-2 rounded-[8px]  text-paragraph-1 w-full transition-all duration-300
            `}
            onClick={onClick}
        >
            <span className='flex items-center gap-2 lg:gap-3'>
                {btnIcon}
                {btnText}
            </span>
        </button>
    )
};