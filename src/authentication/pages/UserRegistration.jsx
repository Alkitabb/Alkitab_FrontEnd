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
import { signUpSchema } from '../ValidationSchema';
import { useFormik } from 'formik';
import CustomizedSnackbars from '../../reusableComponents/CustomizedSnackbars';

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

            name: '',

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

            <div className='bg-background h-screen grid place-content-center'>

                {/* <<<<<<<<<<========== Form Area ===========>>>>>>>>>> */}
                <div className='bg-white flex flex-col px-[34px] py-[44px] gap-[60px] rounded-xl lg:w-[30vw] md:w-[50vw]'>

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
                                {/*  Full Name Input ==========>>>>>>>>>>*/}
                                <TextField
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Your Full Name'
                                    className='bg-background placeholder:text-primary-10'
                                    id="outlined-start-adornment"
                                    sx={{ width: '100%', "& fieldset": { border: 'none' }, }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">

                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94781 16.5801 7.40971C16.5801 4.87162 14.523 2.81448 11.9849 2.81448C9.44679 2.81448 7.3887 4.87162 7.3887 7.40971C7.38013 9.93924 9.42394 11.9973 11.9525 12.0059H11.9849Z" stroke="#6E7079" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </InputAdornment>,
                                    }}
                                />

                                {/*  Email Input ==========>>>>>>>>>>*/}
                                <TextField
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Email Address'
                                    className='bg-background placeholder:text-primary-10'
                                    id="outlined-start-adornment"
                                    sx={{ width: '100%', "& fieldset": { border: 'none' }, }}
                                    type='email'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">

                                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9028 6.85114L12.4596 10.4642C11.6201 11.1302 10.4389 11.1302 9.59944 10.4642L5.11865 6.85114" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </InputAdornment>,
                                    }}
                                />

                                {/*  Password Input ==========>>>>>>>>>>*/}
                                <OutlinedInput
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Create a Strong Password'
                                    id="outlined-adornment-password"
                                    className='bg-background placeholder:text-primary-10'
                                    type={showPassword ? 'text' : 'password'}
                                    sx={{
                                        "& fieldset": { border: 'none' },
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <LuEyeOff /> : <SlEye />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.4232 7.4478V5.3008C13.4232 2.7878 11.3852 0.7498 8.87225 0.7498C6.35925 0.7388 4.31325 2.7668 4.30225 5.2808V5.3008V7.4478" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.683 19.2496H5.042C2.948 19.2496 1.25 17.5526 1.25 15.4576V11.1686C1.25 9.0736 2.948 7.3766 5.042 7.3766H12.683C14.777 7.3766 16.475 9.0736 16.475 11.1686V15.4576C16.475 17.5526 14.777 19.2496 12.683 19.2496Z" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.86279 12.2027V14.4237" stroke="#6E7079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </InputAdornment>
                                    }
                                // label="Password"
                                />
                            </div>

                            <div className='flex flex-col gap-10 mt-10'>

                                <p className='text-paragraph-2 text-black-30 flex justify-center gap-1'>
                                    Already have an account?
                                    <NavLink to='/UserLogin' underline="hover" >
                                        <span className='text-primary-100 text-paragraph-2'>Login</span>
                                    </NavLink>
                                </p>

                                <span className='text-center'>
                                    <button
                                        type='submit'
                                        className='bg-primary-100 hover:bg-primary-90 transition-all duration-300 text-white text-[20px] w-[180px] h-[58px] rounded-xl'>
                                        Get Started
                                    </button>
                                </span>

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
