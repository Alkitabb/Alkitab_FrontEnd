import { Box } from '@mui/system'
import React from 'react'
import DashboardSummaryCard from '../components/DashboardSummaryCard'
import Doughnut from '../charts/Doughnut'
import ActivityLogs from '../../reusableComponents/ActivityLogs'
import BarChart from '../charts/Bar'

function Dashboard() {
  return (
    <section className='flex flex-col gap-5 md:gap-5 sm:gap-3 h-fit'>
      <div className='grid lg:grid-cols-3 gap-3 lg:gap-5 sm:gap-3'>
        {/* <<<<<<<<<<========== Sales Summary card =========>>>>>>>>> */}
        <DashboardSummaryCard
          cardInfoOneTitle={'Sales'}
          clickToPage={'/Sales'}
          infoOneVolume={'₦4,000'}
          cardInfoTwoTitle={'Volume'}
          infoTwoVolume={'450'}
          infoTwoPercentage={'+20.00%'}
          icon={
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#5570F1" fillOpacity="0.12" />
              <path fillRule="evenodd" clipRule="evenodd" d="M22.3986 19.5743C22.9609 19.5743 23.4328 20.0384 23.3468 20.5936C22.8424 23.8603 20.0459 26.2857 16.6731 26.2857C12.9416 26.2857 9.91699 23.2612 9.91699 19.5305C9.91699 16.4568 12.2521 13.5936 14.881 12.9462C15.4459 12.8068 16.0249 13.2041 16.0249 13.7857C16.0249 17.7261 16.1573 18.7454 16.9056 19.2998C17.6538 19.8541 18.5337 19.5743 22.3986 19.5743Z" stroke="#5570F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M26.0778 16.293C26.1225 13.7614 23.0128 9.68072 19.2234 9.75089C18.9286 9.75616 18.6927 10.0018 18.6795 10.2956C18.5839 12.3772 18.7129 15.0746 18.7848 16.2974C18.8067 16.6781 19.1058 16.9772 19.4857 16.9991C20.7427 17.0711 23.5383 17.1693 25.59 16.8588C25.869 16.8167 26.0734 16.5746 26.0778 16.293Z" stroke="#5570F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          } />


        {/* <<<<<<<<<<========== Staff Summary card =========>>>>>>>>> */}
        <DashboardSummaryCard
          cardInfoOneTitle={'Staffs'}
          clickToPage={'/Staffs'}
          infoOneVolume={'1,250'}
          infoOnePercentage={'+20.00%'}
          cardInfoTwoTitle={'Active'}
          infoTwoPercentage={'+20%'}
          infoTwoVolume={'80'}
          icon={
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.666992" width="36" height="36" rx="8" fill="#FFCC91" fillOpacity="0.16" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16.6597 20.6723C19.7338 20.6723 22.3613 21.1382 22.3613 22.999C22.3613 24.8598 19.7513 25.339 16.6597 25.339C13.5847 25.339 10.958 24.8773 10.958 23.0157C10.958 21.154 13.5672 20.6723 16.6597 20.6723Z" stroke="#1C1D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16.6599 18.0165C14.6415 18.0165 13.0049 16.3807 13.0049 14.3623C13.0049 12.344 14.6415 10.7082 16.6599 10.7082C18.6774 10.7082 20.314 12.344 20.314 14.3623C20.3215 16.3732 18.6965 18.009 16.6857 18.0165H16.6599Z" stroke="#1C1D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22.4023 17.068C23.7365 16.8805 24.764 15.7355 24.7665 14.3497C24.7665 12.9838 23.7707 11.8505 22.4648 11.6363" stroke="#1C1D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24.1631 20.2768C25.4556 20.4693 26.3581 20.9227 26.3581 21.856C26.3581 22.4985 25.9331 22.9152 25.2464 23.176" stroke="#1C1D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          } />

        {/* <<<<<<<<<<========== Summary card =========>>>>>>>>> */}
        <DashboardSummaryCard
          cardInfoOneTitle={'Sales'}
          clickToPage={'/Sales'}
          infoOneVolume={'450'}
          cardInfoTwoTitle={'Pending'}
          infoTwoVolume={'50'}
          cardInfoThreeTitle={'Completed'}
          infoThreeVolume={'445'}
          icon={
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.333008" width="36" height="36" rx="8" fill="#FFCC91" fillOpacity="0.16" />
              <path fillRule="evenodd" clipRule="evenodd" d="M22.0945 25.9167H15.138C12.5827 25.9167 10.6223 24.9937 11.1791 21.279L11.8275 16.2447C12.1708 14.3911 13.3531 13.6817 14.3904 13.6817H22.8725C23.9251 13.6817 25.0388 14.4445 25.4354 16.2447L26.0838 21.279C26.5567 24.5742 24.6498 25.9167 22.0945 25.9167Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22.209 13.4987C22.209 11.5103 20.5971 9.89835 18.6087 9.89835V9.89835C17.6512 9.89429 16.7315 10.2718 16.0531 10.9474C15.3746 11.6231 14.9932 12.5411 14.9932 13.4987V13.4987" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.0801 17.2515H21.042" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.2208 17.2515H16.1826" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          } />
      </div>



      <Box
        component="div"
        className='lg:grid lg:grid-cols-[4fr,1.95fr] lg:gap-5 md:flex md:flex-col sm:flex sm:flex-col h-full'
      >

        <div className='flex flex-col gap-3 lg:gap-5 md:gap-5'>
          <div className='lg:grid lg:grid-cols-2 gap-5 md:flex md:flex-col sm:flex sm:flex-col'>

            <div className='flex flex-col mb-3 lg:mb-0 md:mb-5 sm:mb-5'>
              <Doughnut />
            </div>

            <div className='flex flex-col justify-between gap-3 lg:gap-5'>
              <DashboardSummaryCard
                cardInfoOneTitle={'Inventory'}
                infoOneVolume={'45'}
                cardInfoTwoTitle={'Active'}
                infoTwoVolume={'32'}
                infoTwoPercentage={'+24%'}
                height={'159px'}
                clickToPage={'/Inventory'}
                className={' bg-primary-90 hover:bg-primary-100 transition-all duration-300 text-white'}
                icon={
                  <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.669922" width="36" height="36" rx="8" fill="white" fillOpacity="0.16" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.5191 21.1101C26.5191 24.0918 24.7616 25.8493 21.7799 25.8493H15.2949C12.3058 25.8493 10.5449 24.0918 10.5449 21.1101V14.6101C10.5449 11.6326 11.6399 9.87508 14.6224 9.87508H16.2891C16.8874 9.87592 17.4508 10.1568 17.8091 10.6359L18.5699 11.6476C18.9299 12.1259 19.4933 12.4076 20.0916 12.4084H22.4499C25.4391 12.4084 26.5424 13.9301 26.5424 16.9726L26.5191 21.1101Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.9043 20.0525H22.1835" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />

              <DashboardSummaryCard height={'159px'}
                cardInfoOneTitle={'Abandoned Cart'}
                infoOneVolume={'45%'}
                infoOnePercentage={'+24%'}
                cardInfoTwoTitle={'Customers'}
                infoTwoVolume={'32'}
                icon={
                  <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.669922" width="36" height="36" rx="8" fill="#FFCC91" fillOpacity="0.16" />
                    <g clip-path="url(#clip0_181_4413)">
                      <path d="M25.3363 26.3333C25.7965 26.3333 26.1696 25.9602 26.1696 25.5C26.1696 25.0398 25.7965 24.6667 25.3363 24.6667C24.876 24.6667 24.5029 25.0398 24.5029 25.5C24.5029 25.9602 24.876 26.3333 25.3363 26.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.1702 26.3333C16.6305 26.3333 17.0036 25.9602 17.0036 25.5C17.0036 25.0398 16.6305 24.6667 16.1702 24.6667C15.71 24.6667 15.3369 25.0398 15.3369 25.5C15.3369 25.9602 15.71 26.3333 16.1702 26.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50293 8.83333H12.8363L15.0696 19.9917C15.1458 20.3753 15.3545 20.72 15.6592 20.9652C15.9639 21.2105 16.3452 21.3408 16.7363 21.3333H24.8363C25.2273 21.3408 25.6086 21.2105 25.9133 20.9652C26.218 20.72 26.4267 20.3753 26.5029 19.9917L27.8363 13H13.6696" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_181_4413">
                        <rect width="20" height="20" fill="white" transform="translate(8.66992 8)" />
                      </clipPath>
                    </defs>
                  </svg>
                } />
            </div>

          </div>

          <div>
            <BarChart />
          </div>
        </div>


        <div>
          <ActivityLogs />
        </div>

      </Box>

    </section>
  )
}

export default Dashboard
