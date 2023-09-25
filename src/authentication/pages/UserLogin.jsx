import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import FormInput from '../../reusableComponents/FormInput';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/ValidationSchema';
import CustomizedSnackbars from '../../reusableComponents/CustomizedSnackbars';

function UserLogin() {

  // Page Title ==========>>>>>>>>>>
  useEffect(() => {
    document.title = "Login to your Account"
  }, [])

  // Form Validation ==========>>>>>>>>>>
  const onSubmit = () => {
    if (values.email === 'test@mail.com' && values.password === 'testt') {
      handleAlert('Login successful', 'success');
    } else {
      handleAlert('Email or Password is incorrect, Try again', 'error');
    }
    console.log(values)
  };

  const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema, //Form Validation schema for Login page
    onSubmit,
  });
  console.log(errors);

  
  const areAllValuesFilled = () => {
    for (const key in values) {
      if (values[key] === '') {
        return false;
      }
    }
    return true
  }



  // SnackBar Alert ==========>>>>>>>>>>
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, severity) => {

    setAlert({ message, severity });

  };


  return (
    <>
      {/* <Navbar /> */}

      <div className='bg-white h-screen grid place-content-center relative'>
        <div className="fixed z-30 bottom-0 text-center w-full p-5 text-paragraph-2 font-thin">Klusta &copy 2023</div>

        {/* <<<<<<<<<<========== Form Area ===========>>>>>>>>>> */}
        <div className='bg-white flex flex-col px-[34px] py-[44px] gap-[60px] rounded-xl lg:w-[30vw] md:w-[50vw]'>

          <div className='flex flex-col gap-[30px]'>

            {/* <<<<<<<<<<========== Header Section ==========>>>>>>>>>> */}
            <header className='flex flex-col gap-1 text-center'>
              <h3 className='text-sub-heading-2'>Welcome Back!</h3>
              <p className='text-paragraph-1 text-black-30'>Sign in to your Klusta account</p>
            </header>

            {/* <<<<<<<<<<========== Form Area;The actual form ===========>>>>>>>>>> */}
            {/* <<<<<<<<<<=====================>>>>>>>>>> */}
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              {/* <<<<<<<<<<========== Input fields ==========>>>>>>>>>>*/}
              <div className='flex flex-col gap-[30px] px-0'>
                {/*  Email Input ==========>>>>>>>>>>*/}
                <FormInput
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label='Email'
                  inputType={'email'}
                />
                {/*  Password Input ==========>>>>>>>>>>*/}
                <FormInput
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label='Password'
                  inputType={'password'}
                />
              </div>

              <div className='flex flex-col gap-5 mt-2'>
                {/* Recover Password ==========>>>>>>>>>>*/}
                <span className='text-start'>
                  <Link href="#" underline="hover" >
                    <span className='text-primary-100 text-paragraph-2'>Forgot Password</span>
                  </Link>
                </span>

                <button
                  type="submit"
                  className={`${!areAllValuesFilled() ? 'cursor-no-drop bg-opacity-80' : 'hover:bg-primary-90'}  bg-primary-100 transition-all duration-300 text-white w-full py-4 rounded-sm text-paragraph-2 font-bold`}
                  onClick={handleSubmit}
                  disabled={!areAllValuesFilled()}
                >
                  Sign In
                </button>

                {/*  Password Input ==========>>>>>>>>>>*/}
                <p className='text-paragraph-2 text-black-30 flex justify-center gap-1'>
                  Don’t have an account?
                  <NavLink to={'/register'} underline="hover" >
                    <span className='text-primary-100 text-paragraph-2'>Sign Up</span>
                  </NavLink>
                </p>


                {/* Render Snackbar if there's an alert */}
                {alert && (
                  <CustomizedSnackbars
                    open={alert !== null} // Open Snackbar when alert is not null
                    message={alert?.message} // Pass the alert message
                    severity={alert?.severity} // Pass the alert severity
                    onClose={() => setAlert(null)} // Clear the alert when Snackbar is closed
                  />
                )}
              </div>

            </Box>



          </div>

        </div>

      </div>
    </>
  )
}

export default UserLogin
