import * as React from 'react';
import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { InputAdornment, TextField } from '@mui/material';
import FormInput from '../../reusableComponents/FormInput';
import { useFormik } from 'formik';
import FormSelect from '../../reusableComponents/FormAutoCompleteInput';
import ImageUpload from '../../reusableComponents/ImageUpload';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function Settings() {
  const [value] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };



  const formik = useFormik({
    initialValues: {
      firstName: '', // Initialize fields
      email: '',
    },
    onSubmit: (values) => {
      // console.log(values); // Handle form submission
    },
  });
  // console.log(formik.values);

  // <<<<<<<<<<=========== Country Lisy, Fetching from github ==========>>>>>>>>>>
  // <<<<<<<<<<=====================>>>>>>>>>>
  const [areaCode, setAreaCode] = React.useState([])
  const [userCountry, setUserCountry] = React.useState([])

  React.useEffect(() => {
    
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {

        const dailCode = data.map(item => item.ccn3);
        setAreaCode(dailCode);

        const country = data.map(item => item.name.common);
        setUserCountry(country);

      })
      .catch(err => console.error(err));

  }, []);
  // console.log(userCountry);

  return (
    <section className='px-10 py-2 bg-white rounded-2xl w-full mb-36'>

        {/* <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{ py: 0 }} label="Account" {...a11yProps(0)} />
            <Tab sx={{ py: 0 }} label="Business" {...a11yProps(1)} />
            <Tab sx={{ py: 0 }} label="Security" {...a11yProps(2)} />
          </Tabs>
        </Box> */}

        <Box
          sx={{
            marginTop: 0,
            width: '100%'
          }}
        >

          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            className='lg:grid lg:grid-cols-[80%,20%] md:flex md:flex-col sm:flex sm:flex-col'
          >

            <div className='pt-0' >

              {/* <<<<<<<<<<========== Page Header Section ==========>>>>>>>>>> */}
              {/* <<<<<<<<<<====================>>>>>>>>>> */}
              <header>
                <CustomTabPanel value={value} index={0}>
                  <h3 className='text-sub-heading-3 font-medium'>
                    Account Settings
                  </h3>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <h3 className='text-sub-heading-3 font-medium'>
                    Business Settings
                  </h3>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <h3 className='text-sub-heading-3 font-medium'>
                    Security Settings
                  </h3>
                </CustomTabPanel>
              </header>

              {/* Tab One for Account setting ==========>>>>>>>>>> */}
              <CustomTabPanel value={value} index={0} >
                <section className=' lg:grid lg:grid-cols-[2fr,1fr] gap-20 md:flex md:flex-col-reverse flex flex-col-reverse'>
                  {/* <<<<<<<<<<========== Account Setting Form Section ==========>>>>>>>>>>*/}
                  {/* <<<<<<<<<<====================>>>>>>>>>> */}
                  <section className='flex flex-col gap-[10px] px-0'>
                    {/* First Name Input ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'First Name'}
                      inputType={'text'}
                      name={'firstName'}
                      label={'First Name'}
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.9849 15.3457C8.11731 15.3457 4.81445 15.9305 4.81445 18.2724C4.81445 20.6143 8.09636 21.22 11.9849 21.22C15.8525 21.22 19.1545 20.6343 19.1545 18.2933C19.1545 15.9524 15.8735 15.3457 11.9849 15.3457Z" stroke="#5E6366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z" stroke="#5E6366" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      }
                    />
                    {/* Last Name Input ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'Last Name'}
                      inputType={'text'}
                      name={'lastName'}
                      label={'Last Name'}
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.9849 15.3457C8.11731 15.3457 4.81445 15.9305 4.81445 18.2724C4.81445 20.6143 8.09636 21.22 11.9849 21.22C15.8525 21.22 19.1545 20.6343 19.1545 18.2933C19.1545 15.9524 15.8735 15.3457 11.9849 15.3457Z" stroke="#5E6366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z" stroke="#5E6366" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      }
                    />
                    {/* Email Input ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'Your Email Address'}
                      inputType={'email'}
                      name={'email'}
                      label={'Email'}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.9024 8.85156L13.4591 12.4646C12.6196 13.1306 11.4384 13.1306 10.5989 12.4646L6.11816 8.85156" stroke="#5E6366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="#5E6366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                      }
                    />

                    {/* <<<<<<<<<<========== Mobile Number Section ==========>>>>>>>>>> */}
                    {/* <<<<<<<<<<====================>>>>>>>>>> */}
                    <div className='grid grid-cols-[1fr,2fr] gap-3'>

                      {/* Area code ==========>>>>>>>>>> */}
                      <FormSelect
                        label={'Dail code'}
                        placeholder={'Select an option'}
                        menuList={areaCode}
                      />

                      {/* Phone Number ==========>>>>>>>>>> */}
                      <FormInput
                        placeholder={'44 - 444 - 444'}
                        inputType={'number'}
                        name={'phoneNumber'}
                        label={'Phone'}
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                      />

                    </div>

                    {/* Address ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'No. 93 Skyfield Apartments'}
                      inputType={'text'}
                      name={'address'}
                      label={'Address'}
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="#5E6366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="#5E6366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      }
                    />

                    {/* City ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'Yaba'}
                      inputType={'text'}
                      name={'city'}
                      label={'City'}
                      value={formik.values.city}
                      onChange={formik.handleChange}
                    />

                    {/* <<<<<<<<<<========== Country & State Section ==========>>>>>>>>>> */}
                    {/* <<<<<<<<<<====================>>>>>>>>>> */}
                    <div className='grid grid-cols-2 gap-3'>
                      {/* Country ==========>>>>>>>>>> */}
                      <FormSelect
                        label={'Country'}
                        menuList={userCountry}
                        placeholder={'Select an option'}
                      />
                      {/* State ==========>>>>>>>>>> */}
                      <FormSelect
                        label={'State'}
                        placeholder={'Select an option'}
                      />
                    </div>
                  </section>

                  {/* <<<<<<<<<<========== Profile image Section ==========>>>>>>>>>>*/}
                  {/* <<<<<<<<<<====================>>>>>>>>>> */}
                  <section className='md:mt-10'>
                    <ImageUpload />
                  </section>
                </section>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>




            </div>


            <div className='text-end pt-7'>
              <button type='submit' onClick={formik.handleSubmit} className='text-white bg-primary-100 hover:bg-primary-90 px-10 py-3 rounded-xl'>
                Update
              </button>
            </div>


          </Box>

        </Box>


    </section>

  );
}