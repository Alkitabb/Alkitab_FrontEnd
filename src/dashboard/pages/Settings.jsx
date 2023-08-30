import * as React from 'react';
import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { InputAdornment, TextField } from '@mui/material';
import FormInput from '../../reusableComponents/FormInput';
import { useFormik } from 'formik';
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

  const [value, ] = React.useState(0);

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

  return (
    <section className='lg:px-10 md:px-10 px-3 py-2 bg-white rounded-xl w-full border-primary-10 border border-opacity-20'>

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
                <section className='flex flex-col gap-[24px] px-0'>
                  {/* First Name Input ==========>>>>>>>>>> */}
                  <FormInput
                    placeholder={'First Name'}
                    inputType={'text'}
                    name={'firstName'}
                    label={'First Name'}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {/* Last Name Input ==========>>>>>>>>>> */}
                  <FormInput
                    placeholder={'Last Name'}
                    inputType={'text'}
                    name={'lastName'}
                    label={'Last Name'}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {/* Email Input ==========>>>>>>>>>> */}
                  <FormInput
                    placeholder={'Your Email Address'}
                    inputType={'email'}
                    name={'email'}
                    label={'Email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />

                  {/* <<<<<<<<<<========== Mobile Number Section ==========>>>>>>>>>> */}
                  {/* <<<<<<<<<<====================>>>>>>>>>> */}
                  <div className='grid lg:grid-cols-[1fr,2fr] md:grid-cols-[1fr,2fr] grid-cols-1 gap-3'>

                    {/* Area code ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'+234'}
                      inputType={'number'}
                      name={'dailCode'}
                      label={'Dail Code'}
                      value={formik.values.dailCode}
                      onChange={formik.handleChange}

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
                  <div className='grid lg:grid-cols-2 md:grid-cols-[1fr,2fr] grid-cols-1 gap-3'>
                    {/* Country ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'Country'}
                      inputType={'text'}
                      name={'country'}
                      label={'Country'}
                      value={formik.values.country}
                      onChange={formik.handleChange}
                    />
                    {/* State ==========>>>>>>>>>> */}
                    <FormInput
                      placeholder={'State'}
                      inputType={'text'}
                      name={'state'}
                      label={'State'}
                      value={formik.values.state}
                      onChange={formik.handleChange}
                    />
                  </div>
                </section>

                {/* <<<<<<<<<<========== Profile image Section ==========>>>>>>>>>>*/}
                {/* <<<<<<<<<<====================>>>>>>>>>> */}
                <section className=''>
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