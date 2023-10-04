import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from '../userAccount/pages/Profile'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className='w-full'
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Settings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <header className='text-paragraph-2 mb-5'>
        Account Settings
      </header>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', padding: 2 }}
      >
        <Tabs
          orientation="vertical"
          variant="standard"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', textAlign: 'left', textTransform:'none', width: '130px' }}
        >
          <Tab sx={{
            textTransform:'none',
            textAlign:'start',
            display:'flex',
            flexDirection: 'row',
            width:'100%',
            justifyContent:'space-between'
          }} label="Profile" {...a11yProps(0)} />

          <Tab sx={{
            textTransform:'none',
            textAlign:'start',
            display:'flex',
            flexDirection: 'row',
            width:'100%',
            justifyContent:'space-between'
          }} label="Preferences" {...a11yProps(1)} />

           <Tab sx={{
            textTransform:'none',
            textAlign:'start',
            display:'flex',
            flexDirection: 'row',
            width:'100%',
            justifyContent:'space-between'
          }}  label="Security" {...a11yProps(2)} />
          
        </Tabs>
        <TabPanel value={value} index={0}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </section>
  );
}
