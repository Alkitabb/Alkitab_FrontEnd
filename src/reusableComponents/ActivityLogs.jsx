import React from 'react'

function ActivityLogs() {
    return (
        <div className='border-primary-10 border border-opacity-20 p-5 bg-white h-full rounded-xl w-full flex flex-col transition-all duration-300'>
            <header>
                <h3 className="text-sub-heading-3 text-black-50 font-bold">Activity Logs</h3>
            </header>
            <section className='h-full w-full grid place-content-center'>
                <div className='w-[180px] h-[180px] bg-center bg-contain mx-auto bg-[url("https://res.cloudinary.com/dnzi0xxtx/image/upload/v1696102516/portfolioImages/inventoryApp/product_development___idea_thought_innovation_teamwork_working_together_document_people_2x_1_ddr9ye.png")] bg-no-repeat'></div>

                <div className='text-center'>
                    <span className='flex flex-col gap-2'>
                        <h3 className='text-paragraph-2 lg:text-sub-heading-3 text-black-30 leading-tight font-bold'>No Activities yet</h3>
                        <p className='text-black-10 text-label-1 lg:text-paragraph-2 flex flex-wrap w-1/2 mx-auto leading-tight'>Activities performed on your account will appear here.</p>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default ActivityLogs