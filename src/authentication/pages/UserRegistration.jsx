import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
import Logo from '../components/logo.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { FiEye as SlEye } from 'react-icons/fi';
import { FiEyeOff as LuEyeOff } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { signUpSchema } from '../../schemas/ValidationSchema';
import { useFormik } from 'formik';
import CustomizedSnackbars from '../../reusableComponents/CustomizedSnackbars';
import FormInput from '../../reusableComponents/FormInput';


function UserRegistration() {

    // Page Title ==========>>>>>>>>>>
    useEffect(() => {
        document.title = "Get Started"
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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: signUpSchema, //Form Validation schema for Login page
        onSubmit,
    });
    console.log(errors);


    // SnackBar Alert ==========>>>>>>>>>>
    const [alert, setAlert] = useState(null);
    const handleAlert = (message, severity) => {
        setAlert({ message, severity });
    };


    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            {/* <Navbar /> */}

            <div className='bg-white h-screen grid place-content-center'>

                {/* <<<<<<<<<<========== Form Area ===========>>>>>>>>>> */}
                <div className='flex flex-col px-[34px] py-[44px] gap-[60px] rounded-xl lg:w-[30vw] md:w-[50vw]'>

                    <div className='flex flex-col gap-[30px]'>

                        {/* <<<<<<<<<<========== Header Section ==========>>>>>>>>>> */}
                        <header className='flex flex-col gap-[30px]'>

                            <div className='grid place-content-center'>
                                <img src={Logo} alt="FormLogo" title='Novus Vault' />
                            </div>

                            <div className='flex flex-col text-center'>
                                <h3 className='text-sub-heading-3 font-medium'>Get Started with <span className='text-primary-100'> Metrix </span></h3>
                                <p className='text-paragraph-2 text-black-30'>Create your free account</p>
                            </div>

                        </header>

                        {/* <<<<<<<<<<========== Form Area;The actual form  ===========>>>>>>>>>> */}
                        {/* <<<<<<<<<<=====================>>>>>>>>>> */}
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            {/* <<<<<<<<<<========== Input fields ==========>>>>>>>>>>*/}
                            <div className='flex flex-col gap-[30px] px-0'>
                                {/*  First Name Input ==========>>>>>>>>>>*/}
                                <FormInput
                                    name='firstName'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label='First Name'
                                    inputType={'text'}
                                />

                                {/*  Last Name Input ==========>>>>>>>>>>*/}
                                <FormInput
                                    name='lastName'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label='Last Name'
                                    inputType={'text'}
                                />

                                {/*  Email Input ==========>>>>>>>>>>*/}
                                <FormInput
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label='email'
                                    inputType={'email'}
                                />
                          
                                <FormInput
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label='password'
                                    inputType={'password'}
                                />

                            </div>

                            <div className='flex flex-col gap-10 mt-10'>

                                <span className='text-center'>
                                    <button
                                        type='submit'
                                        className='bg-primary-100 hover:bg-primary-90 transition-all duration-300 text-white text-[20px] w-full py-2'>
                                        Next
                                    </button>
                                </span>
                                <p className='text-paragraph-2 text-black-30 flex justify-center gap-1'>
                                    Already have an account?
                                    <NavLink to='/UserLogin' underline="hover" >
                                        <span className='text-primary-100 text-paragraph-2'>Login</span>
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

export default UserRegistration
