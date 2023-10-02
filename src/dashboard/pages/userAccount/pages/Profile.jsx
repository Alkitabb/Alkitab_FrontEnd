import React from 'react'
import FormInput from '../../../../reusableComponents/FormInput';
import { useFormik } from 'formik';
import ImageUpload from '../../../../reusableComponents/ImageUpload';

function Profile() {
  const formik = useFormik({
    initialValues: {
      firstName: '', // Initialize fields
      email: '',
    },
    onSubmit: (values) => {
      // console.log(values); // Handle form submission
    },
  });

  return (
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
  )
}

export default Profile
