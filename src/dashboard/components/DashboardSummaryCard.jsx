import React from 'react'
import { NavLink } from 'react-router-dom'

function DashboardSummaryCard({ height, className, icon, clickToPage }) {
    const cardTitle = clickToPage

    return (
        <NavLink to={clickToPage} className={`${height ? 'h-[159px]' : 'h-[145px]'} ${className || 'bg-white'} rounded-2xl w-full flex flex-col justify-between p-5`} title={cardTitle}>

            <header className='flex items-center justify-between'>
                <div>
                    {icon}
                </div>

                <p className='text-label-1 text-black-10'>This Week</p>
            </header>

            <div className='flex gap-10'>
                <div>
                    <label className={`${className ? 'text-white' : 'text-paragraph-2 text-black-30'}`}>Sales</label>
                    <h3 className={`${className ? 'text-white' : 'text-subheading-3 font-medium text-black-60'}`}>₦4,000.00</h3>
                </div>

                <div>
                    <label className={`${className ? 'text-white' : 'text-paragraph-2 text-black-30'}`}>Volume</label>
                    <span className='flex items-center gap-1'>
                        <h3 className="text-subheading-2 font-medium">450</h3>
                        <label className={`${className ? 'text-primary-10' : 'text-go'} text-label-1`}>+20,000</label>
                    </span>
                </div>
            </div>

        </NavLink>
    )
}

export default DashboardSummaryCard
