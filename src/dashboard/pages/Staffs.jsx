import React from 'react'
import DashboardSummaryCard from '../components/DashboardSummaryCard'
import ListTable from '../../reusableComponents/ListTable'

function Staffs() {
  return (
    <div>
      <p className="text-paragraph-1 font-medium mb-5">Staffs Summary</p>

      <div className='grid lg:grid-cols-2 gap-5'>
        {/* <<<<<<<<<<========== Sales Summary card =========>>>>>>>>> */}
        <DashboardSummaryCard
          cardInfoOneTitle={'All Staffs'}
          infoOneVolume={'1,250'}
          infoOnePercentage={'+450%'}
          cardInfoTwoTitle={'Active'}
          infoTwoVolume={'450'}
          infoTwoPercentage={'+20.00%'}
          cardInfoThreeTitle={'In-Active'}
          infoThreeVolume={'450'}
          infoThreePercentage={'+20.00%'}
          icon={
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#FFCC91" fill-opacity="0.16" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9927 20.6724C19.0668 20.6724 21.6943 21.1382 21.6943 22.999C21.6943 24.8599 19.0843 25.339 15.9927 25.339C12.9177 25.339 10.291 24.8774 10.291 23.0157C10.291 21.154 12.9002 20.6724 15.9927 20.6724Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9929 18.0163C13.9746 18.0163 12.3379 16.3805 12.3379 14.3622C12.3379 12.3438 13.9746 10.708 15.9929 10.708C18.0104 10.708 19.6471 12.3438 19.6471 14.3622C19.6546 16.373 18.0296 18.0088 16.0187 18.0163H15.9929Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.7354 17.0679C23.0695 16.8804 24.097 15.7354 24.0995 14.3496C24.0995 12.9837 23.1037 11.8504 21.7979 11.6362" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M23.4961 20.2769C24.7886 20.4694 25.6911 20.9227 25.6911 21.856C25.6911 22.4985 25.2661 22.9152 24.5794 23.176" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          } />


        {/* <<<<<<<<<<========== Staff Summary card =========>>>>>>>>> */}
        <DashboardSummaryCard
          cardInfoOneTitle={'Staffs'}
          infoOneVolume={'1,250'}
          infoOnePercentage={'+20.00%'}
          cardInfoTwoTitle={'Purchasing'}
          infoTwoVolume={'80'}
          cardInfoThreeTitle={'Abandoned'}
          infoThreeVolume={'450'}
          icon={
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#FFCC91" fill-opacity="0.16" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 25.9166H14.805C12.2496 25.9166 10.2893 24.9936 10.8461 21.2789L11.4945 16.2446C11.8377 14.391 13.0201 13.6816 14.0574 13.6816H22.5395C23.5921 13.6816 24.7058 14.4444 25.1024 16.2446L25.7508 21.2789C26.2237 24.5741 24.3168 25.9166 21.7615 25.9166Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.876 13.4988C21.876 11.5104 20.2641 9.89847 18.2757 9.89847V9.89847C17.3182 9.89441 16.3985 10.2719 15.72 10.9476C15.0416 11.6232 14.6601 12.5413 14.6602 13.4988V13.4988" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.7471 17.2515H20.709" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.8878 17.2515H15.8496" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          } />
      </div>

      <div className='mt-5'>
        <ListTable/>
      </div>
    </div>
  )
}

export default Staffs
