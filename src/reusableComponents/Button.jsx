import React from 'react'

function Button({ onClick, btnText, className }) {

    return (
        <button className={` ${className || 'border-2 border-primary-90 hover:bg-primary-10 text-primary-90'} px-10 py-3 rounded-[12px]  text-paragraph-1 w-full transition-all duration-300`} autoFocus onClick={onClick}>
            {btnText}
        </button>
    )

}

export default Button
