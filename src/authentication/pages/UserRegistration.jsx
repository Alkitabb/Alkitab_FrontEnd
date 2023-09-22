import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { signUpSchema } from '../../schemas/ValidationSchema';
import { useFormik } from 'formik';
import CustomizedSnackbars from '../../reusableComponents/CustomizedSnackbars';
import FormInput from '../../reusableComponents/FormInput';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cards from '../components/Cards';




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


    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    // const isStepOptional = (step) => {
    //     return step === 1;
    // };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //         // You probably want to guard against something like this,
    //         // it should never occur unless someone's actively trying to break something.
    //         throw new Error("You can't skip a step that isn't optional.");
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            {/* <Navbar /> */}

            <div className='bg-white h-screen grid place-content-center relative'>
                <div className="fixed z-30 bottom-0 text-center w-full p-5 text-paragraph-2 font-thin">Klusta &copy 2023</div>

                {/* <<<<<<<<<<========== Form Area ===========>>>>>>>>>> */}
                <div className='flex flex-col px-[20px] py-[44px] gap-[60px] rounded-xl lg:w-[30vw] md:w-[50vw]'>

                    <div className='flex flex-col gap-[30px]'>

                        {/* <<<<<<<<<<========== Header Section ==========>>>>>>>>>> */}
                        <header className='flex flex-col gap-[30px]'>

                            <Box sx={{ width: '100%' }}>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        const isActiveStep = index === activeStep;
                                        const customStepIconStyle = {
                                            color: isActiveStep ? '#7017E0' : '#9e9e9e', // Set different colors for active and inactive steps
                                        };

                                        if (isStepSkipped(index)) {
                                            stepProps.completed = false;
                                        }
                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel
                                                    StepIconProps={{
                                                        style: customStepIconStyle,
                                                    }}
                                                    {...labelProps}></StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>

                            </Box>


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
                            {
                                activeStep === 0 &&
                                <section className='gap-[30px] flex flex-col'>
                                    <header className='flex flex-col gap-1 text-center'>
                                        <h3 className='text-sub-heading-2'>Create your  <span className='text-primary-100'> Klusta </span> account</h3>
                                        <p className='text-paragraph-1 text-black-30'>Enter your name as it appears on your government-issued ID (for easy identity verification)</p>
                                    </header>
                                    <div className='flex flex-col gap-[30px] px-0 mt-5'>
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
                                            label='Email'
                                            inputType={'email'}
                                        />

                                    </div>
                                </section>
                            }

                            {
                                activeStep === 1 &&
                                <section className='gap-[30px] flex flex-col'>
                                    <header className='flex flex-col gap-1 text-center'>
                                        <h3 className='text-sub-heading-2'>How are you planning to use Klusta?</h3>
                                    </header>
                                    <div className='flex gap-3 mt-5'>
                                        <Cards
                                            activeState={"active"}
                                            cardIcon={
                                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.8496 1.25049V3.67049" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.8496 14.7603V16.7843" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.8496 11.3249V6.50391" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7021 17C19.5242 17 21 15.5426 21 13.7431V11.1506C19.7943 11.1506 18.8233 10.1917 18.8233 9.00103C18.8233 7.81035 19.7943 6.85039 21 6.85039L20.999 4.25686C20.999 2.45745 19.5221 1 17.7011 1H4.29892C2.47789 1 1.00104 2.45745 1.00104 4.25686L1 6.93485C2.20567 6.93485 3.17668 7.81035 3.17668 9.00103C3.17668 10.1917 2.20567 11.1506 1 11.1506V13.7431C1 15.5426 2.4758 17 4.29787 17H17.7021Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            }
                                            cardHeader={"Single"}
                                            cardCaption={"Manage your products and sales with Klusta"}
                                        />
                                        <Cards
                                            activeState={"disabled"}
                                            cardIcon={
                                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.8877 7.89673C18.2827 7.70073 19.3567 6.50473 19.3597 5.05573C19.3597 3.62773 18.3187 2.44373 16.9537 2.21973" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M18.7285 11.2505C20.0795 11.4525 21.0225 11.9255 21.0225 12.9005C21.0225 13.5715 20.5785 14.0075 19.8605 14.2815" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8867 11.6641C7.67273 11.6641 4.92773 12.1511 4.92773 14.0961C4.92773 16.0401 7.65573 16.5411 10.8867 16.5411C14.1007 16.5411 16.8447 16.0591 16.8447 14.1131C16.8447 12.1671 14.1177 11.6641 10.8867 11.6641Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8864 8.888C12.9954 8.888 14.7054 7.179 14.7054 5.069C14.7054 2.96 12.9954 1.25 10.8864 1.25C8.77741 1.25 7.06741 2.96 7.06741 5.069C7.05941 7.171 8.75641 8.881 10.8584 8.888H10.8864Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M4.88509 7.89673C3.48909 7.70073 2.41609 6.50473 2.41309 5.05573C2.41309 3.62773 3.45409 2.44373 4.81909 2.21973" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M3.044 11.2505C1.693 11.4525 0.75 11.9255 0.75 12.9005C0.75 13.5715 1.194 14.0075 1.912 14.2815" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            }
                                            cardHeader={"Multi"}
                                            cardCaption={"Manage multiple businesses with Fullgap"}
                                        />
                                    </div>
                                </section>
                            }

                            {
                                activeStep === 2 &&
                                <section className='gap-[30px] flex flex-col'>
                                    <header className='flex flex-col gap-1 text-center'>
                                        <h3 className='text-sub-heading-2'>Create your password</h3>
                                        <p className='text-paragraph-1 text-black-30'>Create a strong and secure password for signing in to your Klusta account.</p>
                                    </header>
                                    {/*  Password Input ==========>>>>>>>>>>*/}
                                    <FormInput
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label='Password'
                                        inputType={'password'}
                                    />

                                    <ul className='flex w-full justify-between my-3'>
                                        <li>
                                            <span className='text-center'>
                                                <h3 className='font-bold text-sub-heading-3'>12+</h3>
                                                <p className='text-paragraph-2'>Characters</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-center'>
                                                <h3 className='font-bold text-sub-heading-3'>AA</h3>
                                                <p className='text-paragraph-2'>Uppercase</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-center'>
                                                <h3 className='font-bold text-sub-heading-3'>Aa</h3>
                                                <p className='text-paragraph-2'>Lowercase</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-center'>
                                                <h3 className='font-bold text-sub-heading-3'>123</h3>
                                                <p className='text-paragraph-2'>Numbers</p>
                                            </span>
                                        </li>
                                    </ul>

                                    {/*  Confirm Password Input ==========>>>>>>>>>>*/}
                                    <FormInput
                                        name='confirmPassword'
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label='Confirm Password'
                                        inputType={'password'}
                                    />

                                </section>
                            }


                            <div className='flex flex-col gap-10 mt-10'>

                                <span className='text-center'>


                                    {activeStep === steps.length ? (
                                        <React.Fragment>
                                            <Typography sx={{ mt: 2, mb: 1 }}>
                                                All steps completed - you&apos;re finished
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                <Box sx={{ flex: '1 1 auto' }} />
                                                <Button onClick={handleReset}>Reset</Button>
                                            </Box>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                            <Box sx={{ display: 'flex', flexDirection: 'column', pt: 0, gap: 1.5 }}>

                                                <button className='bg-primary-100 hover:bg-primary-90 transition-all duration-300 text-white w-full py-4 rounded-sm text-paragraph-2 font-bold' onClick={handleNext}>
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </button>

                                                <button className={`${activeStep > 0 ? 'block' : 'hidden'} bg-white text-primary-100 w-full py-4 rounded-sm text-paragraph-2 font-bold border`}
                                                    color="inherit"
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    sx={{ mr: 1 }}
                                                >
                                                    Previous
                                                </button>
                                                <Box sx={{ flex: '1 1 auto' }} />

                                            </Box>
                                        </React.Fragment>
                                    )}
                                </span>
                                <p className='text-paragraph-2 text-black-30 flex justify-center gap-1'>
                                    Already have an account?
                                    <NavLink to='/login' underline="hover" >
                                        <span className='text-primary-100 text-paragraph-2'>Sign In</span>
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
