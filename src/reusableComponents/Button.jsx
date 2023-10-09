import React from 'react'

export default function Button({ onClick, btnText, btnIcon, className, type }) {
    return (
        <button
            autoFocus
            type={type}
            className={` 
            ${className || 'border-2 border-primary-90 hover:bg-primary-100 hover:bg-opacity-10 text-primary-90'} px-10 py-2 rounded-[8px] text-paragraph-1 transition-all duration-300 flex items-center text-center
            `}
            onClick={onClick}
        >
            <span className='flex items-center text-center gap-2 lg:gap-3 mx-auto'>
                {btnIcon && <span>{btnIcon} </span>}
                <span>\{btnText}</span>
            </span>
        </button>
    )
};