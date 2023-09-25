import React from 'react';

export default function Cards({ cardCaption, cardIcon, cardHeader, cardState, onClick }) {
    // const [value, setValue] = React.useState(accountType);

    const buttonClasses = `border ${cardState === 'active' ? 'border-primary-100 hover:bg-black-10 hover:bg-opacity-10' : 'cursor-no-drop'} border-black-10 p-4 w-full rounded-md text-left relative overflow-hidden`;

    const comingSoonClasses = `absolute text-white text-label-3 w-full text-center pt-3 py-3 bg-primary-100 -rotate-45 -right-[30%] top-[68%] z-0`;

    return (
        <div onChange={onClick} aria-label="disabled tabs example" className='flex-wrap flex'>
            <button type='submit' className={buttonClasses} disabled={cardState === 'disabled'}>
                <div className='my-5'>{cardIcon}</div>
                <p className='text-sub-paragraph-1 font-medium text-black-60'>{cardHeader}</p>
                <p className='flex flex-wrap text-paragraph-2 font-light text-black-30'>{cardCaption}</p>
                {cardState === 'disabled' && <p className={comingSoonClasses}>Coming soon</p>}
            </button>
        </div>
    );
}