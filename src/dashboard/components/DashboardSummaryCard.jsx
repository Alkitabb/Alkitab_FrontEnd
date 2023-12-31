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
    const cardHeight = height ? 'h-[159px]' : 'min-h-[145px]';
    const textColor = className ? 'text-white' : 'text-black-30';

    return (
        <NavLink
            to={clickToPage}
            className={`${cardHeight} ${className || 'bg-white hover:bg-[#FBFCFC]'} rounded-xl w-full flex flex-col justify-between p-5 md:p-5 sm:p-3 transition-all duration-300`}
            title={cardTitle}
        >
            <header className='flex items-center justify-between w-full'>
                <div>{icon}</div>
                <p className={`${textColor} text-label-2 lg:text-label-1`}>This Week</p>
            </header>

            <div className='flex flex-wrap justify-between w-full'>
                {[

                    { title: cardInfoOneTitle, volume: infoOneVolume, percentage: infoOnePercentage },
                    { title: cardInfoTwoTitle, volume: infoTwoVolume, percentage: infoTwoPercentage },
                    { title: cardInfoThreeTitle, volume: infoThreeVolume, percentage: infoThreePercentage },

                ].map(({
                    title,
                    volume,
                    percentage
                }) => (

                    <table className='table-auto' key={title}>
                        <tr className='w-full'>
                            <td className='w-full'>
                                <label className={`${textColor} text-label-1 lg:text-paragraph-2`}>{title}</label>
                                <span className='flex items-center gap-1'>
                                    <h3 className='text-paragraph-1 lg:text-sub-heading-3 font-medium'>{volume}</h3>
                                    <label className={`${className ? 'text-white' : 'text-go'} text-label-2 lg:text-label-3`}>{percentage}</label>
                                </span>
                            </td>
                        </tr>
                    </table>

                ))}
            </div>
        </NavLink>
    );
};

export default DashboardSummaryCard;
