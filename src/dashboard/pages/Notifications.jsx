import React from 'react'
import { PiMoneyThin } from 'react-icons/pi'
import { BsShieldLock } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'

function Notifications() {
  const tableData = [
    {
      notificationTitle: 'A payment of $6.45 has been applied to your financial account.',
      notificationDate: 'Sept 30',
      notificationIcon: <PiMoneyThin />
    },
    {
      notificationTitle: 'You changed your password.',
      notificationDate: 'Sept 12',
      notificationIcon: <BsShieldLock />
    },
    {
      notificationTitle: 'Created a new staff account.',
      notificationDate: 'Sept 10',
      notificationIcon: <CgProfile />
    },
    {
      notificationTitle: 'A payment of $24.19 has been applied to your financial account.',
      notificationDate: 'Sept 30',
      notificationIcon: <PiMoneyThin />
    },
    {
      notificationTitle: 'Created an account',
      notificationDate: 'Aug 12',
      notificationIcon: <CgProfile />
    },
  ]



  return (
    <div>
      <section>

        <header className='text-paragraph-2 mb-5'>
          Most Recent
        </header>
        <div className='w-full py-2 bg-primary-100 bg-opacity-5 rounded-2xl'>
          <span className='flex items-center justify-between w-[90%] mx-auto'>
            <span className='flex flex-col gap-0'>
              <p className='text-sub-heading-2 text-black-50 leading-tight font-bold'>
                No new notifications.
              </p>
              <p className='text-paragraph-2 text-black-30 leading-snug'>New notifications will appear here...</p>
            </span>

            <div className='w-[13vw]'>
              <img src="https://res.cloudinary.com/dnzi0xxtx/image/upload/v1696017730/portfolioImages/inventoryApp/data_management___reciept_document_paper_page_woman_people_pages_rfmbis.png" alt="notification" />
            </div>
          </span>
        </div>
      </section>

      <section>

        <header className='text-paragraph-2 my-5'>
          Earlier
        </header>

        <div className='bg-white rounded-xl p-5'>
          {
            tableData.map((data, index) =>
              <table key={index} className='w-full'>
                <tr className='border-b border-black-10 border-opacity-25'>
                  <td className='flex items-center gap-5 py-7 px-5'>
                    <div>
                      {data.notificationIcon}
                    </div>
                    <div>
                      <h3 className='text-sub-heading-3 text-black-60'>
                        {data.notificationTitle}
                      </h3>

                      <p className='text-paragraph-2 text-black-20'>
                        {data.notificationDate}
                      </p>
                    </div>

                    <button className='ms-auto'>
                      <AiOutlineClose />
                    </button>
                  </td>
                </tr>
              </table>
            )

          }
        </div>
      </section>
    </div>
  )
}

export default Notifications
