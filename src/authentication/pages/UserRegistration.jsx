import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { signUpSchema } from '../../schemas/ValidationSchema';
import { useFormik } from 'formik';
import CustomizedSnackbars from '../../reusableComponents/CustomizedSnackbars';
import FormInput from '../../reusableComponents/FormInput';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Cards from '../components/Cards';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import CountrySelect from '../../reusableComponents/CountrySelector';
import { ListItem } from '@mui/material';



function UserRegistration() {
    useEffect(() => { document.title = "Get started with Klusta" }, [])

    // SnackBar Alert ==========>>>>>>>>>>
    const [alert, setAlert] = useState(null);
    const handleAlert = (message, severity) => {
        setAlert({ message, severity });
    };

    // To set Account Usage type
    const [businessType, setBusinessType] = useState('single')
    const handleSelectBusiness = (buttonName) => {
        setBusinessType(buttonName);
    };

    // Form Validation ==========>>>>>>>>>>
    const onSubmit = () => {
        console.log("Submitted");
        console.log(values);
        handleNext()
        handleAlert("Registration Successful", "success")
        // location.href("/login")
    };

    const { values, handleBlur, handleSubmit, handleChange, errors, touched, } = useFormik({
        initialValues: {
            // country: '',
            businessName: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            accountType: businessType
        },
        validationSchema: signUpSchema, //Form Validation schema for Login page
        onSubmit,
    });
    console.log(errors);
    // console.log(values);


    const areValuesFilled = () => {
        for (const key in values) {// Function to check if any values are empty (except for password and confirmPassword)
            if (
                key !== 'password'
                && key !== 'confirmPassword'
                && key !== 'firstName'
                && key !== 'lastName'
                && key !== 'phoneNumber'
                && values[key] === ''
            ) {
                return false;
            }
        }
        return true; // All values are filled
    };

    const areValuesValid = () => {
        let isValid = true
        for (const key in values) {
            if (key !== 'password' && key !== 'confirmPassword' && errors[key]) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    const areAllValuesFilled = () => {
        for (const key in values) {
            if (values[key] === '') {
                return false;
            }
        }
        return true;
    };

    const areAllValuesValid = () => {
        let isValid = true
        for (const key in values) {
            if (errors[key]) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }


    const containsCapitalLetter = password => {
        return /[A-Z]/.test(password) // Check if password contains at least one capital letter
    };

    const containsNumber = password => {
        return /[0-9]/.test(password) // Check if password contains at least one Number
    };

    const containsLowercaseLetters = password => {
        return /[a-z]/.test(password)// Check if password contains LowerCase
    };


    const steps = ['Business Information', 'Personal Information', 'Business Type', 'Password'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        if (!areValuesFilled()) { return; } // Check if any of the form fields are empty

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


    // Custom Stepper Here ===========>>>>>>>>>> Start
    // ==================================================
    const QontoConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 10,
            left: 'calc(-50% + 16px)',
            right: 'calc(50% + 16px)',
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: '#784af4',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: '#784af4',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderTopWidth: 3,
            borderRadius: 1,
        },
    }));

    const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: '#784af4',
        }),
        '& .QontoStepIcon-completedIcon': {
            color: '#784af4',
            zIndex: 1,
            fontSize: 18,
        },
        '& .QontoStepIcon-circle': {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
    }));

    function QontoStepIcon(props) {
        const { active, completed, className } = props;

        return (
            <QontoStepIconRoot ownerState={{ active }} className={className}>
                {completed ? (
                    <Check className="QontoStepIcon-completedIcon" />
                ) : (
                    <div className="QontoStepIcon-circle" />
                )}
            </QontoStepIconRoot>
        );
    }

    QontoStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
    };

    const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        }),
    }));

    function ColorlibStepIcon(props) {
        const { active, completed, className } = props;

        const icons = {
            1: <SettingsIcon />,
            2: <GroupAddIcon />,
            3: <VideoLabelIcon />,
        };

        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        );
    }

    ColorlibStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
    };
    // Custom Stepper Here ===========>>>>>>>>>> End
    // ==================================================


    return (
        <>
            {/* Render Snackbar if there's an alert */}
            {alert && (
                <CustomizedSnackbars
                    open={alert !== null} // Open Snackbar when alert is not null
                    message={alert?.message} // Pass the alert message
                    severity={alert?.severity} // Pass the alert severity
                    onClose={() => setAlert(null)} // Clear the alert when Snackbar is closed
                />
            )}

            <div className='bg-white h-screen grid place-content-center relative'>
                <div className="fixed z-30 bottom-0 text-center w-full p-5 text-paragraph-2 font-thin">Klusta &copy 2023</div>
                {/* <<<<<<<<<<========== Form Area ===========>>>>>>>>>> */}
                <div className='flex flex-col p-[20px] gap-[60px] rounded-xl lg:w-[30vw] md:w-[50vw]'>
                    <div className='flex flex-col gap-[20px]'>
                        {/* <<<<<<<<<<========== Header Section ==========>>>>>>>>>> */}
                        <header>
                            <Box sx={{ width: '100%' }}>
                                <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                        </header>

                        {/* Form Area;The actual form  ===========>>>>>>>>>> Start */}
                        {/* <<<<<<<<<<=====================>>>>>>>>>> */}
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                            sx={{
                                width: '100%'
                            }}
                        >
                            {/* <<<<<<<<<<========== Input fields ==========>>>>>>>>>>*/}
                            {
                                activeStep === 0 &&
                                <section className='gap-[20px] flex flex-col'>
                                    <header className='flex flex-col gap-1 text-center'>
                                        <h3 className='text-sub-heading-2 text-black-50'>Create your  <span className='text-primary-100'> Klusta </span> account</h3>
                                        {/* <p className='text-paragraph-1 text-black-30'>Enter your name as it appears on your government-issued ID (for easy identity verification)</p> */}
                                    </header>
                                    <div className='flex flex-col gap-[20px] px-0 mt-5'>
                                        <ListItem disablePadding>
                                            <CountrySelect
                                                name='country'
                                                value={values.country}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <FormInput
                                                name='businessName'
                                                value={values.businessName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                label='Business Name'
                                                inputType={'text'}
                                                error={errors.businessName && touched.businessName} // Use touched prop
                                                helperText={touched.businessName ? errors.businessName : ''}
                                                touched={touched.businessName} // Pass the touched prop
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <FormInput
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                label='Email Address'
                                                inputType={'email'}
                                                touched={touched.email}
                                                error={errors.email && touched.email}
                                            />
                                        </ListItem>
                                    </div>
                                </section>
                            }

                            {
                                activeStep === 1 &&
                                <section className='gap-[20px] flex flex-col'>
                                    <header className='flex flex-col gap-1 text-center'>
                                        <h3 className='text-sub-heading-2 text-black-50'>Personal Information</h3>
                                    </header>
                                    <div className='flex flex-col gap-[20px] px-0 mt-5'>
                                        <ListItem disablePadding>
                                            <FormInput
                                                name='firstName'
                                                value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                label='First Name'
                                                inputType={'text'}
                                                className={(errors.firstName && touched.firstName) ? 'error' : ''}
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <FormInput
                                                name='lastName'
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                label='Last Name'
                                                inputType={'text'}
                                                className={(errors.lastName || touched.lastName) ? 'error' : ''}
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <FormInput
                                                name='phoneNumber'
                                                value={values.phoneNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                label='Phone Number'
                                                inputType={'number'}
                                                className={(errors.phoneNumber || touched.phoneNumber) ? 'error' : ''}
                                            />
                                        </ListItem>
                                    </div>
                                </section>
                            }

                            {
                                activeStep === 2 &&
                                <section className='gap-[20px] flex flex-col'>
                                    <header className='flex flex-col gap-1 text-center'>
                                        <h3 className='text-sub-heading-2'>How are you planning to use Klusta?</h3>
                                    </header>
                                    <div className='flex lg:flex-row md:flex-col flex-col gap-3 mt-5'>
                                        <ListItem disablePadding>
                                            <Cards
                                                // cardState={'active'}
                                                cardState={businessType === 'single' ? 'active' : 'disabled'}
                                                cardIcon={
                                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.8496 1.25049V3.67049" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12.8496 14.7603V16.7843" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12.8496 11.3249V6.50391" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.7021 17C19.5242 17 21 15.5426 21 13.7431V11.1506C19.7943 11.1506 18.8233 10.1917 18.8233 9.00103C18.8233 7.81035 19.7943 6.85039 21 6.85039L20.999 4.25686C20.999 2.45745 19.5221 1 17.7011 1H4.29892C2.47789 1 1.00104 2.45745 1.00104 4.25686L1 6.93485C2.20567 6.93485 3.17668 7.81035 3.17668 9.00103C3.17668 10.1917 2.20567 11.1506 1 11.1506V13.7431C1 15.5426 2.4758 17 4.29787 17H17.7021Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                }
                                                cardHeader={"Single"}
                                                cardCaption={"Manage your products and sales with Klusta"}
                                                onClick={() => handleSelectBusiness('single')}
                                            />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Cards
                                                cardState={businessType === 'multiple' ? 'active' : 'disabled'}
                                                // cardState={'disabled'}
                                                cardIcon={
                                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.8877 7.89673C18.2827 7.70073 19.3567 6.50473 19.3597 5.05573C19.3597 3.62773 18.3187 2.44373 16.9537 2.21973" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M18.7285 11.2505C20.0795 11.4525 21.0225 11.9255 21.0225 12.9005C21.0225 13.5715 20.5785 14.0075 19.8605 14.2815" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 11.6641C7.67273 11.6641 4.92773 12.1511 4.92773 14.0961C4.92773 16.0401 7.65573 16.5411 10.8867 16.5411C14.1007 16.5411 16.8447 16.0591 16.8447 14.1131C16.8447 12.1671 14.1177 11.6641 10.8867 11.6641Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.8864 8.888C12.9954 8.888 14.7054 7.179 14.7054 5.069C14.7054 2.96 12.9954 1.25 10.8864 1.25C8.77741 1.25 7.06741 2.96 7.06741 5.069C7.05941 7.171 8.75641 8.881 10.8584 8.888H10.8864Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4.88509 7.89673C3.48909 7.70073 2.41609 6.50473 2.41309 5.05573C2.41309 3.62773 3.45409 2.44373 4.81909 2.21973" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.044 11.2505C1.693 11.4525 0.75 11.9255 0.75 12.9005C0.75 13.5715 1.194 14.0075 1.912 14.2815" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                }
                                                cardHeader={"Multiple"}
                                                cardCaption={"Manage multiple businesses with Klusta"}
                                                onClick={() => handleSelectBusiness('multiple')}
                                            />
                                        </ListItem>
                                    </div>
                                </section>
                            }

                            {
                                activeStep === 3 &&
                                <section className='gap-[20px] flex flex-col'>
                                    <header className='flex flex-col gap-1 text-center'>
                                        <h3 className='text-sub-heading-2'>Create your password</h3>
                                        <p className='text-paragraph-1 text-black-30'>Create a strong and secure password for signing in to your Klusta account.</p>
                                    </header>
                                    <ListItem disablePadding>
                                        {/*  Password Input ==========>>>>>>>>>>*/}
                                        <FormInput
                                            name='password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            label='Password'
                                            inputType={'password'}
                                            className={(errors.password || touched.password) ? 'error' : ''}
                                        />
                                    </ListItem>

                                    <ul className='flex w-full justify-between my-3'>
                                        <li>
                                            <span className='text-center'>
                                                <h3 className={`${values.password.length >= 8 && 'text-primary-100'} font-bold text-sub-heading-3 transition-all duration-300`}>8+</h3>
                                                <p className='text-paragraph-2 text-black-30'>Characters</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-center'>
                                                <h3 className={`${containsCapitalLetter(values.password) && 'text-primary-100'} font-bold text-sub-heading-3 transition-all duration-300`}>AA</h3>
                                                <p className='text-paragraph-2 text-black-30'>Uppercase</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-center'>
                                                <h3 className={`${containsLowercaseLetters(values.password) && 'text-primary-100'} font-bold text-sub-heading-3 transition-all duration-300`}>Aa</h3>
                                                <p className='text-paragraph-2 text-black-30'>Lowercase</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-center'>
                                                <h3 className={`${containsNumber(values.password) && 'text-primary-100'} font-bold text-sub-heading-3 transition-all duration-300`}>123</h3>
                                                <p className='text-paragraph-2 text-black-30'>Numbers</p>
                                            </span>
                                        </li>
                                    </ul>

                                    {/*  Confirm Password Input ==========>>>>>>>>>>*/}
                                    <ListItem disablePadding>
                                        <FormInput
                                            name='confirmPassword'
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            label='Confirm Password'
                                            inputType={'password'}
                                            className={(errors.confirmPassword || touched.confirmPassword) ? 'error' : ''}
                                        />
                                    </ListItem>
                                </section>
                            }


                            <div className='flex flex-col gap-2 mt-10'>
                                <span className='text-center'>
                                    {activeStep === steps.length ? (
                                        <React.Fragment>
                                            <Typography sx={{ mt: 0, mb: 5 }}>
                                                Registration completed - please hold on...
                                            </Typography>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', pt: 0, gap: 1.5 }}>

                                                <button
                                                    type="submit"
                                                    className={`
                                                    ${!areValuesFilled() || !areValuesValid() ? 'cursor-no-drop bg-opacity-80'
                                                            : 'hover:bg-primary-90'} ${activeStep === 3 && 'hidden'} bg-primary-100 transition-all duration-300 text-white w-full py-4 rounded-sm text-paragraph-2 font-bold
                                                    `}
                                                    onClick={handleNext}
                                                    disabled={!areValuesFilled() || !areValuesValid()}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </button>

                                                <button
                                                    type="submit"
                                                    className={`
                                                    ${!areAllValuesFilled() || !areAllValuesValid() ? 'cursor-no-drop bg-opacity-80' : 'hover:bg-primary-90'} 

                                                    ${activeStep === 3 ? 'block'
                                                            : 'hidden'} bg-primary-100 transition-all duration-300 text-white w-full py-4 rounded-sm text-paragraph-2 font-bold
                                                    `}
                                                    onClick={handleSubmit}
                                                    disabled={!areAllValuesFilled() || !areAllValuesValid()}
                                                >
                                                    Finish
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
                            </div>
                        </Box>
                        {/* <<<<<<<<<<=====================>>>>>>>>>> End */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRegistration
