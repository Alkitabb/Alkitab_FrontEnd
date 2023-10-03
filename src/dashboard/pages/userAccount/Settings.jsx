import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import Profile from './pages/Profile';
import Permissions from './pages/Permissions';

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Settings() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



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
    <div className='lg:px-10 md:px-10 px-3 py-2 bg-white rounded-xl w-full'>

      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
          indicatorColor="primary"
          textColor="inherit"
          variant='standard'
        >
          <Tab sx={{ py: 0 }} label="Profile" {...a11yProps(0)} />
          {/* <Tab sx={{ py: 0 }} label="Permissions" {...a11yProps(1)} /> */}
          <Tab sx={{ py: 0 }} label="Security" {...a11yProps(2)} />
        </Tabs>
      </Box>

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
            {/* <header>
              <CustomTabPanel value={value} index={0}>
                <span className='text-sub-heading-1 text-black-50 leading-tight font-bold'>
                  My Account
                </span>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <span className='text-sub-heading-1 text-black-50 leading-tight font-bold'>
                  Permissions
                </span>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <span className='text-sub-heading-1 text-black-50 leading-tight font-bold'>
                  Security Settings
                </span>
              </CustomTabPanel>
            </header> */}

            {/* Tab One for Account setting ==========>>>>>>>>>> */}
            <CustomTabPanel value={value} index={0} >
              <Profile />
            </CustomTabPanel>

            {/* <CustomTabPanel value={value} index={1}>
              <Permissions />
            </CustomTabPanel> */}

            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </div>
        </Box>

      </Box>


    </div>

  );
}