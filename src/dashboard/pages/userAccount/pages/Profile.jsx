import React from 'react';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FormInput from '../../../../reusableComponents/FormInput';
import ImageUpload from '../../../../reusableComponents/ImageUpload';
import { useFormik } from 'formik';
import { AiOutlineClose } from 'react-icons/ai';


// Section ==========>>>>>>>>>>
function Section({ title, children, onEditClick }) {
  return (
    <div className='p-5 flex flex-col gap-5 rounded-xl border border-black-10 border-opacity-30'>
      <div className='flex justify-between w-full items-center gap-5'>
        <header className='text-paragraph-2'>
          <h3 className='text-paragraph-2 font-medium text-black-50'>{title}</h3>
        </header>
      </div>

      {children}
    </div>
  );
}

// Info Item ==========>>>>>>>>>>
function InfoItem({ label, value }) {
  return (
    <div>
      <span className='flex flex-col text-black-30 '>
        <p className='text-paragraph-2'>{label}</p>
        <h3 className='text-paragraph-1 font-bold text-black-50'>{value}</h3>
      </span>
    </div>
  );
}


function Profile() {
  const { values, handleChange, handleBlur, errors, } = useFormik({
    initialValues: {
      firstName: 'Okikiola',
      lastName: 'Esuola',
      phoneNumber: '8068437620',
      email: 'esuoladaniel0002@gmail.com',
      address: '',
      address: '',
    }
  })

  // Profile edit form ==========>>>>>>>>>>
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 400, padding: 4 }}
      role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='flex flex-col gap-12'>
        <div className='text-right w-full'>
          <button className='ms-auto p-3'>
            <AiOutlineClose />
          </button>
        </div>
        <h1 className='text-sub-heading-1 text-black-50 leading-tight font-bold'>
          Basic Data
        </h1>
        <ImageUpload variant={'small'} />
        <List >
          <ListItem
            sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}
            disablePadding>
            <FormInput
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              label='First Name'
              inputType={'text'}
            />
            <FormInput
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              label='Last Name'
              inputType={'text'}
            />
            <FormInput
              name='phoneNumber'
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              label='Phone'
              inputType={'text'}
            />
            <FormInput
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label='Email Address'
              inputType={'email'}
            />
          </ListItem>
        </List>

      </div>
    </Box>
  );


  return (
    <section className='px-5 flex flex-col gap-5'>

      <section className='p-5 rounded-xl border border-black-10 border-opacity-30'>
        <div className='flex justify-between w-full items-center gap-5'>
          <header className='text-paragraph-2'>
            <h3 className='text-paragraph-2 font-medium text-black-50'>Profile</h3>
          </header>

          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <button onClick={toggleDrawer(anchor, true)}>Edit</button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

        </div>
        <div className='flex items-center gap-5'>
          <Avatar
            alt="Daniel Esuola"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            sx={{ width: 90, height: 90 }}
          />
          <div className='flex flex-col text-black-30'>
            <h3 className='text-sub-heading-3 font-bold text-black-50'>Daniel Esuola</h3>
            <p className='text-paragraph-1'>Software Engineer</p>
            <p className='text-paragraph-2'>Leeds, United Kingdom</p>
          </div>
        </div>
      </section>

      <Section title='Personal Information'>
        <div className='grid grid-cols-2'>
          <InfoItem label='First Name' value='Okikiola' />
          <InfoItem label='Last Name' value='Esuola' />
        </div>
        <div className='grid lg:grid-cols-2 lg:gap-0 md:grid-cols-2 gap-5 grid-cols-1'>
          <InfoItem label='Email address' value='esuoladaniel002@gmail.com' />
          <InfoItem label='Phone' value='+234 806 843 7620' />
        </div>
        <InfoItem label='Bio' value='Software Engineer' />
      </Section>

      <Section title='Address'>
        <div className='grid grid-cols-2'>
          <InfoItem label='Country' value='United Kingdom' />
          <InfoItem label='City / State' value='Leeds, East London' />
        </div>
        <div className='grid grid-cols-2'>
          <InfoItem label='Post Code' value='ERT 2345' />
          <InfoItem label='TAX ID' value='AS45645746' />
        </div>
      </Section>
    </section>
  );
}

export default Profile;
