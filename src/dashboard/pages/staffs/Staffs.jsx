import React, { useState } from 'react'
import DashboardSummaryCard from '../../components/DashboardSummaryCard'
import Switch from '@mui/material/Switch';
import { DataGrid } from '@mui/x-data-grid';
import { useFormik } from 'formik';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormInput from '../../../reusableComponents/FormInput';
// import FormSelect from '../../../reusableComponents/FormAutoCompleteInput';
import Button from '../../../reusableComponents/Button';
import { addNewStaff } from '../../../schemas/StaffSchema';


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
    { field: 'staffPassword', headerName: 'Password', width: 130 },
    { field: 'staffStatus', headerName: 'Status', width: 130 },
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
      staffPassword: staff.staffPassword,
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
  };
  // <<<<<<<<<<=====================>>>>>>>>>> End


  //<<<<<<<<<<============ Fotm Switch ==========>>>>>>>>>> Start
  //<<<<<<<<<<======================>>>>>>>>>>
  const [checked, setChecked] = React.useState(false);

  const handleSwitchChange = (event) => {

    setChecked(event.target.checked);

  };
  //<<<<<<<<<<======================>>>>>>>>>> End


  return (
    <div>
      <header className='flex items-center justify-end mb-4'>


        <button className='bg-primary-90 hover:bg-primary-100 transition-all duration-300 rounded-[12px] py-2 px-3 lg:px-6 text-label-1 lg:text-paragraph-2 text-white' onClick={handleClickOpen}>
          <span className='flex items-center gap-2 lg:gap-3'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Onboard a New Staff
          </span>
        </button>


        {/* // <<<<<<<<<<=========== Dialog For adding New Staffs ==========>>>>>>>>>> STart
    // <<<<<<<<<<=====================>>>>>>>>>> */}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          className='w-full lg:w-[500px] mx-auto place-content-center grid'
          BackdropProps={{
            style: {
              backdropFilter: 'blur(3px)',
              backgroundColor: 'rgba(0, 0, 0, 0.15)'
            }
          }}
          PaperProps={{
            style: {
              borderRadius: '12px',
              boxShadow: 'none',
            }
          }}
        >

          {/* // <<<<<<<<<<=========== Close Button ==========>>>>>>>>>>
    // <<<<<<<<<<=====================>>>>>>>>>> */}
          <DialogTitle className='text-sub-heading-3 font-medium' id="responsive-dialog-title">
            <span className='flex items-center justify-between'>
              <p className='text-sub-heading-2 text-black-50 leading-tight font-bold'>
                Onboard new staff.
              </p>
              <button className='bg-secondary-30 hover:bg-secondary-50 p-1 rounded-md transition-all duration-300' onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="#1C1D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </span>
          </DialogTitle>

          {/* // <<<<<<<<<<=========== Form Section ==========>>>>>>>>>>
    // <<<<<<<<<<=====================>>>>>>>>>> */}
          <DialogContent>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              autoComplete="on"
              className='flex flex-col gap-3'
            >
              <header>
                <p className='text-paragraph-1 font-medium text-black-30'>Staff Information</p>
              </header>

              <FormInput
                placeholder={'Staff Name'}
                inputType={'text'}
                name={'staffName'}
                label={'Full Name'}
                value={values.staffName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.staffName && touched.staffName ? "error" : ""}
              />

              <FormInput
                placeholder={'Staff Email'}
                inputType={'email'}
                name={'staffEmail'}
                label={'Email'}
                value={values.staffEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.staffEmail && touched.staffEmail ? "error" : ""}
              />


              {/* <<<<<<<<<<========== Mobile Number Section ==========>>>>>>>>>> */}
              {/* <<<<<<<<<<====================>>>>>>>>>> */}
              <section className='grid grid-cols-[1fr,2fr] gap-3'>

                {/* Dail code ==========>>>>>>>>>> */}
                <FormInput
                  placeholder={'+1'}
                  inputType={'number'}
                  name={'dailCode'}
                  label={'Dail Code'}
                  value={values.dailCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.dailCode && touched.dailCode ? "error" : ""}
                />

                {/* Phone Number ==========>>>>>>>>>> */}
                <FormInput
                  placeholder={'Phone'}
                  inputType={'number'}
                  name={'staffPhoneNumber'}
                  label={'Phone'}
                  value={values.staffPhoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.staffPhoneNumber && touched.staffPhoneNumber ? "error" : ""}
                />

              </section>

              <FormInput
                placeholder={'Account Password'}
                inputType={'password'}
                name={'staffPassword'}
                label={'Account Password'}
                value={values.staffPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.staffPassword && touched.staffPassword ? "error" : ""}
              />

              {/* <<<<<<<<<<========== Switch to show address form ==========>>>>>>>>>> */}
              {/* <<<<<<<<<<====================>>>>>>>>>> */}
              <span className='flex items-center mt-5'>
                <p component="legend" className='text-paragraph-2 mr-1 text-[#2B2F32]'>Add Address</p>
                <Switch
                  checked={checked}
                  onChange={handleSwitchChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  size='small'
                  color='warning'
                />
              </span>

              {
                checked &&

                <div className='flex flex-col gap-3'>

                  {/* Address ==========>>>>>>>>>> */}
                  <FormInput
                    placeholder={'Building No., Street Address'}
                    inputType={'text'}
                    label={'Address'}
                    name={'staffStreet'}
                    value={values.staffStreet}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.staffStreet && touched.staffStreet ? "error" : ""}
                  />

                  <FormInput
                    placeholder={'City'}
                    inputType={'text'}
                    name={'staffCity'}
                    label={'City'}
                    value={values.staffCity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.staffCity && touched.staffCity ? "error" : ""}
                  />

                  {/* <<<<<<<<<<========== Mobile Number Section ==========>>>>>>>>>> */}
                  {/* <<<<<<<<<<====================>>>>>>>>>> */}
                  <div className='grid grid-cols-[1fr,2fr] gap-3'>

                    {/* Country ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'Country'}
                      inputType={'text'}
                      name={'staffCountry'}
                      label={'Country'}
                      value={values.staffCountry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.staffCountry && touched.staffCountry ? "error" : ""}
                    />

                    {/* State ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'State'}
                      inputType={'text'}
                      name={'staffState'}
                      label={'State'}
                      value={values.staffState}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.staffState && touched.staffState ? "error" : ""}
                    />

                  </div>
                </div>

              }
            </Box>
          </DialogContent>

          <DialogActions className='mx-auto w-11/12'>
            <span className='flex items-center w-full gap-3 mb-5'>

              <Button onClick={handleClose} btnText={'Cancel'} />

              <Button onClick={onSubmit} type={'submit'} btnText={'Add'} className={'bg-primary-90 text-white border-2 border-primary-100 hover:bg-primary-100'} />

            </span>
          </DialogActions>
        </Dialog>
        {/* // <<<<<<<<<<=====================>>>>>>>>>>  End*/}
      </header>



      {/* <<<<<<<<<<========== Dashboard Summary card  Section =========>>>>>>>>> Start */}
      {/* <<<<<<<<<<===================>>>>>>>>> */}
      <section className='grid lg:grid-cols-2 gap-3'>

        {/* <<<<<<<<<<========== Sales Summary card =========>>>>>>>>> */}
        {/* <<<<<<<<<<===================>>>>>>>>> */}
        <DashboardSummaryCard
          cardInfoOneTitle={'All Staffs'}
          infoOneVolume={rows.length}
          infoOnePercentage={'+450%'}
          cardInfoTwoTitle={'Active'}
          infoTwoVolume={'450'}
          infoTwoPercentage={'+20.00%'}
          cardInfoThreeTitle={'In-Active'}
          infoThreeVolume={'450'}
          infoThreePercentage={'+20.00%'}
          icon={
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#FFCC91" fillOpacity="0.16" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.9927 20.6724C19.0668 20.6724 21.6943 21.1382 21.6943 22.999C21.6943 24.8599 19.0843 25.339 15.9927 25.339C12.9177 25.339 10.291 24.8774 10.291 23.0157C10.291 21.154 12.9002 20.6724 15.9927 20.6724Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.9929 18.0163C13.9746 18.0163 12.3379 16.3805 12.3379 14.3622C12.3379 12.3438 13.9746 10.708 15.9929 10.708C18.0104 10.708 19.6471 12.3438 19.6471 14.3622C19.6546 16.373 18.0296 18.0088 16.0187 18.0163H15.9929Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.7354 17.0679C23.0695 16.8804 24.097 15.7354 24.0995 14.3496C24.0995 12.9837 23.1037 11.8504 21.7979 11.6362" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23.4961 20.2769C24.7886 20.4694 25.6911 20.9227 25.6911 21.856C25.6911 22.4985 25.2661 22.9152 24.5794 23.176" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          } />

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
      <section className='mt-3'>
        {staffInformation.length > 0 ?

          <div style={{ height: '100%', width: '100%', border: 'none' }} className='bg-white rounded-xl'>
            <header className='p-5'>
              <h3 className="text-sub-heading-2 text-black-50 leading-tight font-bold">Staff Information.</h3>
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
              <span className='w-[155px] h-[155px] bg-center bg-contain mx-auto bg-[url("https://res.cloudinary.com/dnzi0xxtx/image/upload/v1696023195/portfolioImages/inventoryApp/achievements___teamwork_team_working_together_assistance_man_woman_people_flag_target_zncmvp.png")]'></span>

              <div className='text-center'>
                <span className='flex flex-col gap-2'>
                  <h3 className='text-paragraph-2 lg:text-sub-heading-3 text-black-30 leading-tight font-bold'>No Staffs Yet?</h3>
                  <p className='text-black-10 text-label-1 lg:text-paragraph-2 flex flex-wrap w-[80%] mx-auto leading-tight'>Onboard new staffs to your Business.</p>
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
        }
      </section>
      {/* <<<<<<<<<<===================>>>>>>>>> End */}

    </div >
  )
}

export default Staffs
