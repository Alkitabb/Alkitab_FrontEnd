import React, { useState } from 'react'
import DashboardSummaryCard from '../../components/DashboardSummaryCard'
import { DataGrid } from '@mui/x-data-grid';
import { useFormik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import FormSelect from '../../../reusableComponents/FormAutoCompleteInput';
import { addNewStaff } from '../../../schemas/StaffSchema';
import { NavLink } from 'react-router-dom';
import AddInventory from './pages/AddInventory';


// const [rows, setRows] = useState([]);
function Staffs() {

  // <<<<<<<<<<========== Adding Date for when the staff was added ==========>>>>>>>>>> Start
  // <<<<<<<<<<====================>>>>>>>>>>
  const date = new Date();
  const dateStaffWassAdded = date
  // <<<<<<<<<<====================>>>>>>>>>> End


  // Staff Information ==========>>>>>>>>>> Start
  // ===================>>>>>>>>>>
  const [staffInformation, setStaffInformation] = useState([]);

  const onSubmit = () => {
    setStaffInformation(e => [...e, values]); // Use functional update
    // console.log(values);

    handleClose();
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      staffName: '',
      staffEmail: '',
      dailCode: '',
      staffPhoneNumber: '',
      staffCity: '',
      staffStreet: '',
      staffState: '',
      staffCountry: '',
      staffSince: dateStaffWassAdded,
      staffStatus: '',
    },
    onSubmit,
    // onSubmit: () => handleSave(values)
    validationSchema: addNewStaff
  })
  console.log(errors)



  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Full Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'phoneNumber', headerName: 'Phone', width: 130,
      valueGetter: (params) =>
        `+(${params.row.dailCode || ''}) ${params.row.phoneNumber || ''}`,
    },
    {
      field: 'address', headerName: 'Address', sortable: false, width: 150,
      valueGetter: (params) =>
        `${params.row.staffStreet || ''} ${params.row.staffCity || ''} ${params.row.staffCountry || ''}`,
    },
    { field: 'staffSince', headerName: 'Staff Since', width: 130 },
    { field: 'staffStatus', headerName: 'Staff Status', width: 130 },
  ];



  const rows = staffInformation.map((staff, i) => (
    {
      id: i + 1,
      name: staff.staffName,
      email: staff.staffEmail,
      dailCode: staff.dailCode,
      phoneNumber: staff.staffPhoneNumber,
      staffStreet: staff.staffStreet,
      staffCity: staff.staffCity,
      staffCountry: staff.staffCountry,
      staffSince: staff.staffSince,
    }
  ));



  // <<<<<<<<<<=========== Dialog Customization ==========>>>>>>>>>>
  // <<<<<<<<<<=====================>>>>>>>>>>
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);

    // Clear form values ==========>>>>>>>>>>
    // values.staffName = '';
    // values.staffEmail = '';
    // values.staffPhoneNumber = '';
    // values.staffSince = '';
    // values.staffStatus = '';
    // ==========>>>>>>>>>>
  };
  // <<<<<<<<<<=====================>>>>>>>>>> End


  //<<<<<<<<<<============ Fotm Switch ==========>>>>>>>>>> Start
  //<<<<<<<<<<======================>>>>>>>>>>
  const [checked, setChecked] = React.useState(false);

  const handleSwitchChange = (event) => {

    setChecked(event.target.checked);

  };
  //<<<<<<<<<<======================>>>>>>>>>> End


  const [page, setPage] = useState(1)
  console.log(page);

  return (
    <>
      {
        page === 1 &&
        <section>
          <header className='flex items-center justify-end mb-4'>
            <button className='bg-primary-90 hover:bg-primary-100 transition-all duration-300 rounded-[12px] py-2 px-3 lg:px-6 text-label-1 lg:text-paragraph-2 text-white' onClick={() => setPage(2)}>
              <span className='flex items-center gap-2 lg:gap-3'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Add Inventory Item
              </span>
            </button>
          </header>

          {/* <<<<<<<<<<========== Dashboard Summary card  Section =========>>>>>>>>> Start */}
          {/* <<<<<<<<<<===================>>>>>>>>> */}
          <section className='grid lg:grid-cols-2 gap-3'>

            {/* <<<<<<<<<<========== Sales Summary card =========>>>>>>>>> */}
            {/* <<<<<<<<<<===================>>>>>>>>> */}
            <DashboardSummaryCard
              cardInfoOneTitle={'Inventory'}
              infoOneVolume={'45'}
              cardInfoTwoTitle={'Active'}
              infoTwoVolume={'32'}
              infoTwoPercentage={'+24%'}
              className={' bg-primary-90 hover:bg-primary-100 transition-all duration-300 text-white'}
              icon={
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.669922" width="36" height="36" rx="8" fill="white" fillOpacity="0.16" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.5191 21.1101C26.5191 24.0918 24.7616 25.8493 21.7799 25.8493H15.2949C12.3058 25.8493 10.5449 24.0918 10.5449 21.1101V14.6101C10.5449 11.6326 11.6399 9.87508 14.6224 9.87508H16.2891C16.8874 9.87592 17.4508 10.1568 17.8091 10.6359L18.5699 11.6476C18.9299 12.1259 19.4933 12.4076 20.0916 12.4084H22.4499C25.4391 12.4084 26.5424 13.9301 26.5424 16.9726L26.5191 21.1101Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.9043 20.0525H22.1835" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />

            {/* <<<<<<<<<<========== Staff Summary card =========>>>>>>>>> */}
            {/* <<<<<<<<<<===================>>>>>>>>> */}
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
                  <rect width="36" height="36" rx="8" fill="#FFCC91" fillOpacity="0.16" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.7615 25.9166H14.805C12.2496 25.9166 10.2893 24.9936 10.8461 21.2789L11.4945 16.2446C11.8377 14.391 13.0201 13.6816 14.0574 13.6816H22.5395C23.5921 13.6816 24.7058 14.4444 25.1024 16.2446L25.7508 21.2789C26.2237 24.5741 24.3168 25.9166 21.7615 25.9166Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.876 13.4988C21.876 11.5104 20.2641 9.89847 18.2757 9.89847V9.89847C17.3182 9.89441 16.3985 10.2719 15.72 10.9476C15.0416 11.6232 14.6601 12.5413 14.6602 13.4988V13.4988" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.7471 17.2515H20.709" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.8878 17.2515H15.8496" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              } />
          </section>
          {/* <<<<<<<<<<===================>>>>>>>>> End */}



          {/* <<<<<<<<<<========== Table Resndering Staff Information =========>>>>>>>>> Start */}
          {/* <<<<<<<<<<===================>>>>>>>>> */}
          <section className='mt-3'> {
            staffInformation.length > 0 ?
              <div style={{ height: '100%', width: '100%', border: 'none' }} className='bg-white rounded-xl'>
                <header className='p-5'>
                  <h3 className="text-sub-heading-3 font-medium">Inventory Items</h3>
                </header>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10, 15]}
                  checkboxSelection
                  sx={{
                    width: '100%'
                  }}
                />
              </div>
              :
              <section className='p-5 py-20 bg-white rounded-xl w-full h-full grid place-content-center'>
                <div className='max-w-[262px] w-full flex flex-col gap-5'>

                  {/* Images ==========>>>>>>>>>> */}
                  <span className='w-[140px] h-[140px] bg-center bg-contain mx-auto bg-[url("https://res.cloudinary.com/dnzi0xxtx/image/upload/v1692783193/portfolioImages/inventoryApp/staffIcon_h0syk7.png")]'></span>

                  <div className='text-center'>
                    <span className='flex flex-col gap-2'>
                      <h3 className='text-paragraph-2 lg:text-sub-heading-3 font-medium'>No Staffs Yet?</h3>
                      <p className='text-black-30 text-label-1 lg:text-paragraph-2'>Add products to your store and start selling to see orders here.</p>
                    </span>

                    {/* Button ==========>>>>>>>>>> */}
                    <button className='bg-primary-90 hover:bg-primary-100 transition-all duration-300 rounded-[12px] py-2 px-6 text-label-1 lg:text-paragraph-2 text-white mt-4' onClick={handleClickOpen}>
                      <span className='flex items-center gap-2 lg:gap-3'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Add Staff
                      </span>
                    </button>
                  </div>
                </div>
              </section>
          } </section>
          {/* <<<<<<<<<<===================>>>>>>>>> End */}

        </section >
      }
      {
        page === 2 &&
        <AddInventory />
      }
    </>

  )
}

export default Staffs
