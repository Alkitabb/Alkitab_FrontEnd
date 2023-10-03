import React from 'react'

function Permissions() {

    const permissionsGranted = [
        { access: 'View Business Performance Metrics' },
        { access: 'Create and Manage Subaccounts & Splits' },
        { access: 'View Users' },
        { access: 'Create New Staffs' },
        { access: 'View Business Settings & Preferences' },
        { access: 'Edit Business Settings & Preferences' },
        { access: 'View Invoices' },
        { access: 'Create and Manage Invoices' },
    ];

    const permissionsDenied = [
        { access: 'create new saff' },
        { access: 'create new saff' },
        { access: 'create new saff' },
        { access: 'create new saff' },
    ];

    return (
        <div className='lg:px-10 md:px-10 px-3 py-2 bg-background rounded-xl w-full'>

            <div>
                <header className='flex flex-col gap-0 my-5'>
                    <h1 className='text-paragraph-1 text-black-50 font-bold'>
                        Hello, Daniel
                    </h1>
                    <p className='text-paragraph-1 text-black-30'>Your current role is Admin.</p>
                </header>


                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:w-[70%] md:w-[100%] gap-8'>
                    <div className='border border-[#3C763D] border-opacity-30 rounded h-fit bg-white'>
                        <header className='w-full p-4 bg-[#DFF0D8] text-[#3C763D] border-b-[#3C763D] border-opacity-30'>
                            <p className='text=paragraph-1'>What you can access</p>
                        </header>
                        <div className='p-4'>
                            {
                                permissionsGranted.map((myAccess, index) => [
                                    <table className='w-full' key={index}>
                                        <tbody>
                                            <tr className='border-b border-black-10 border-opacity-25'>
                                                <td className='py-5 px-3 mb-1 text-black-40 flex flex-wrap'>
                                                    <p className='text-paragraph-1'><span className='text-black-50 font-medium'>Can</span> {myAccess.access}</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ])
                            }
                        </div>
                    </div>

                    <div className='border border-[#EBCCD1] rounded h-fit bg-white'>
                        <header className='w-full p-4 bg-[#F2DEDE] text-[#A94542]'>
                            <p className='text=paragraph-1'>What you can't access</p>
                        </header>
                        <div className='p-3'>
                            <div className='text-center p-5'>
                                <p className='font-medium text-paragraph-1'>You have full access!</p>
                                <p className='text-black-30 text-paragraph-1'>You can access all the sections of the <br /> dashboard. </p>
                            </div>
                            {/* {
                                permissionsDenied.map((myAccess, index) => [
                                    <table className='w-full' key={index}>
                                        <tbody>
                                            <tr className='border-b border-black-10 border-opacity-25'>
                                                <td className='py-5 px-3 mb-1 text-black-40'>
                                                    <p className='text-paragraph-1'><span className='text-black-50 font-medium'>Can</span> {myAccess.access}</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ])
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permissions
