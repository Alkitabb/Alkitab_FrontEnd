import React from 'react'
import Box from '@mui/material/Box';
import FormInput from '../../../../reusableComponents/FormInput';
import { Switch } from '@mui/material';
import Quill from '../../../../reusableComponents/Quill';
import ImageUpload from '../../../../reusableComponents/ImageUpload';


function AddInventory() {


    //<<<<<<<<<<============ Fotm Switch ==========>>>>>>>>>> Start
    //<<<<<<<<<<======================>>>>>>>>>>
    const [discount, setDiscount] = React.useState(false);
    const handleDiscountSwitchChange = (event) => {
        setDiscount(event.target.checked);
    };
    const [expiry, setExpiry] = React.useState(false);
    const handleExpirySwitchChange = (event) => {
        setExpiry(event.target.checked);
    };
    //<<<<<<<<<<======================>>>>>>>>>> End
    return (
        <section>
            <header className='flex items-center gap-3 justify-end mb-4'>
                <button className='bg-black-90 hover:bg-black-100 transition-all duration-300 rounded-[12px] py-2 px-3 lg:px-6 text-label-1 lg:text-paragraph-2 text-white flex items-center gap-3'>
                    Save as Draft
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className='bg-primary-90 hover:bg-primary-100 transition-all duration-300 rounded-[12px] py-2 px-3 lg:px-6 text-label-1 lg:text-paragraph-2 text-white'>
                    Save and Publish
                </button>
            </header>

            <div className='grid lg:grid-cols-[2fr,1fr] gap-3'>
                <section className='p-6 bg-white min-h-screen h-full rounded-xl w-full border-primary-10 border border-opacity-20'>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="on"
                        // onSubmit={formik.handleSubmit}
                        className='lg:grid lg:grid-cols-2 gap-10 md:flex md:flex-col sm:flex sm:flex-col'
                    >
                        <section className='flex flex-col gap-[24px] px-0'>
                            {/* First Name Input ==========>>>>>>>>>> */}
                            <FormInput
                                placeholder={'Product Name'}
                                inputType={'text'}
                                name={'productName'}
                                label={'Product Name'}
                            // value={formik.values.firstName}
                            // onChange={formik.handleChange}
                            />
                            <FormInput
                                placeholder={'Product Category'}
                                inputType={'text'}
                                name={'productCategory'}
                                label={'Product Category'}
                            // value={formik.values.firstName}
                            // onChange={formik.handleChange}
                            />

                            <span className='grid grid-cols-2 gap-3'>
                                <FormInput
                                    inputType={'number'}
                                    name={'sellingPrice'}
                                    label={'Selling Price'}
                                // value={formik.values.firstName}
                                // onChange={formik.handleChange}
                                />
                                <FormInput
                                    inputType={'number'}
                                    name={'costPrice'}
                                    label={'Cost Price'}
                                // value={formik.values.firstName}
                                // onChange={formik.handleChange}
                                />
                            </span>

                            {/* Quantity In Stock ==========>>>>>>>>>> */}
                            <FormInput
                                inputType={'number'}
                                name={'quantityInStock'}
                                label={'Quantity In Stock'}
                            // value={formik.values.firstName}
                            // onChange={formik.handleChange}
                            />

                            {/* Order Type ==========>>>>>>>>>> */}
                            <FormInput
                                inputType={'text'}
                                name={'orderType'}
                                label={'Order Type'}
                            // value={formik.values.firstName}
                            // onChange={formik.handleChange}
                            />

                            {/* <<<<<<<<<<========== Discount ==========>>>>>>>>>> */}
                            <span>
                                <span className='flex justify-between items-center mb-5'>
                                    <p className='text-paragraph-1 font-medium text-black-30'>Discount</p>
                                    <span className='flex items-center gap-2'>
                                        <p component="legend" className='text-paragraph-2 mr-1 text-[#83898C]'>Add Address</p>
                                        <Switch
                                            checked={discount}
                                            onChange={handleDiscountSwitchChange}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                            size='small'
                                        // color='secondary'
                                        />
                                    </span>
                                </span>
                                {
                                    discount &&
                                    <span className='grid grid-cols-2 gap-3'>
                                        <FormInput
                                            inputType={'number'}
                                            name={'discountType'}
                                            label={'Type'}
                                        // value={formik.values.firstName}
                                        // onChange={formik.handleChange}
                                        />
                                        <FormInput
                                            inputType={'number'}
                                            name={'discountValue'}
                                            label={'Value'}
                                        // value={formik.values.firstName}
                                        // onChange={formik.handleChange}
                                        />
                                    </span>
                                }
                            </span>
                            {/* <<<<<<<<<<========== Expiry ==========>>>>>>>>>> */}
                            <span>
                                <span className='flex justify-between items-center mb-5'>
                                    <p className='text-paragraph-1 font-medium text-black-30'>Expiry</p>
                                    <span className='flex items-center gap-2'>
                                        <p component="legend" className='text-paragraph-2 mr-1 text-[#83898C]'>Add Expiry Date</p>
                                        <Switch
                                            checked={expiry}
                                            onChange={handleExpirySwitchChange}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                            size='small'
                                        // color='secondary'
                                        />
                                    </span>
                                </span>
                                {
                                    expiry &&
                                    <FormInput
                                        inputType={'number'}
                                        name={'discountType'}
                                        label={'Type'}
                                        // value={formik.values.firstName}
                                        // onChange={formik.handleChange}
                                        icon={
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9849 15.3457C8.11731 15.3457 4.81445 15.9305 4.81445 18.2724C4.81445 20.6143 8.09636 21.22 11.9849 21.22C15.8525 21.22 19.1545 20.6343 19.1545 18.2933C19.1545 15.9524 15.8735 15.3457 11.9849 15.3457Z" stroke="#5E6366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z" stroke="#5E6366" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        }
                                    />
                                }
                            </span>

                        </section>

                        <section className='flex flex-col gap-[20px] px-0'>
                            {/* <<<<<<<<<<========== Short Description Area ==========>>>>>>>>>> */}
                            <textarea className='border border-[#E0E3E7] hover:border-[#B2BAC2] focus:border-[#6F7E8C] p-3 outline-none rounded-md' placeholder='Short Description' name="" id="" cols="30" rows="5"></textarea>

                            {/* <<<<<<<<<<========== Long Description Area ==========>>>>>>>>>> */}
                            <span className='flex flex-col gap-2'>
                                <label htmlFor="productLongDescription" className='text-[#5E6366] text-paragraph-2'>Product Long Description</label>
                                <Quill />
                                {/* <p htmlFor="productLongDescription" className='text-[#5E6366] text-paragraph-2'>Add a long description for your product</p> */}
                            </span>
                        </section>

                    </Box>
                </section>

                <section className='p-5 bg-white rounded-xl w-full h-full border-primary-10 border border-opacity-20 '>
                    <div>
                        <ImageUpload variant={'lg'} />
                    </div>
                    <div>
                        <header className='my-5'>
                            <p>Additional Images</p>
                        </header>
                        <ImageUpload />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default AddInventory
