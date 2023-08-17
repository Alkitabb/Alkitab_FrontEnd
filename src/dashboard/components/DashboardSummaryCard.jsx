import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSummaryCard = ({
    height,
    className,
    icon,
    clickToPage,
    cardInfoOneTitle,
    cardInfoTwoTitle,
    cardInfoThreeTitle,
    infoOneVolume,
    infoTwoVolume,
    infoThreeVolume,
    infoOnePercentage,
    infoTwoPercentage,
    infoThreePercentage,
}) => {
    const cardTitle = clickToPage;
    const cardHeight = height ? 'h-[159px]' : 'h-[145px]';
    const textColor = className ? 'text-white' : 'text-black-30';

    return (
        <NavLink
            to={clickToPage}
            className={`${cardHeight} ${className || 'bg-white'} rounded-2xl w-full flex flex-col justify-between p-5`}
            title={cardTitle}
        >
            <header className='flex items-center justify-between'>
                <div>{icon}</div>
                <p className={`${textColor} text-label-1`}>This Week</p>
            </header>

            <div className='flex justify-between'>
                {[
                    { title: cardInfoOneTitle, volume: infoOneVolume, percentage: infoOnePercentage },
                    { title: cardInfoTwoTitle, volume: infoTwoVolume, percentage: infoTwoPercentage },
                    { title: cardInfoThreeTitle, volume: infoThreeVolume, percentage: infoThreePercentage },
                ].map(({ title, volume, percentage }) => (
                    <div key={title}>
                        <label className={`${textColor} text-paragraph-2`}>{title}</label>
                        <span className='flex items-center gap-1'>
                            <h3 className='text-subheading-2 font-medium'>{volume}</h3>
                            <label className={`${className ? 'text-primary-10' : 'text-go'} text-label-1`}>{percentage}</label>
                        </span>
                    </div>
                ))}
            </div>
        </NavLink>
    );
};

export default DashboardSummaryCard;
