import React from 'react'

function Cards({ cardCaption, cardIcon, cardHeader, activeState }) {
    return (
        <button className={`${activeState === 'active' ? 'border-primary-100 hover:bg-black-10 hover:bg-opacity-10' : 'cursor-default'} border border-black-30 p-4 w-full rounded-md text-left relative`}>
            <div className='my-3'>{cardIcon}</div>
            <p className='text-sub-paragraph-1 font-bold'>{cardHeader}</p>
            <p className='flex flex-wrap text-paragraph-2'>{cardCaption}</p>

            {/* <div className={`${activeState === 'disabled' ? 'block' : 'hidden'} absolute bg-primary-10 text-prima\ p-2 w-full text-center z-10 right-0 bottom-0`}>
                <p className='text-label-3 font-medium'>Coming soon</p>
            </div> */}
        </button>
    )
}

export default Cards
