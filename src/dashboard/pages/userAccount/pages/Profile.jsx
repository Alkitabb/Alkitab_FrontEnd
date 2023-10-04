import { Avatar } from '@mui/material'
import React from 'react'

function Profile() {
  return (
    <section className='p-5 flex flex-col gap-5'>

      <div className='flex justify-between items-center p-5 rounded-xl border border-black-10 border-opacity-30'>
        <div className='flex items-center gap-5'>
          {/* Avatar */}
          <Avatar
            alt="Daniel Esuola"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            // src="/static/images/avatar/1.jpg"
            sx={{ width: 90, height: 90 }}
          />

          <div className='flex flex-col text-black-30'>
            <h3 className='text-sub-heading-3 font-bold text-black-50'>Daniel Esuola</h3>
            <p className='text-paragraph-1'>Software Engineer</p>
            <p className='text-paragraph-2'>Leeds, United Kingdom</p>
          </div>
        </div>
        <div>
          <button>Edit</button>
        </div>
      </div>

      <div className='p-5 flex flex-col gap-5 rounded-xl border border-black-10 border-opacity-30'>
        <div className='flex justify-between w-full items-center gap-5'>
          <header className='text-paragraph-2'>
            <h3 className='text-paragraph-2 font-medium text-black-50'> Personal Information</h3>
          </header>

          <div>
            <button>Edit</button>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div>
            <span className='flex flex-col text-black-30 '>
              <p className='text-paragraph-2'>First Name</p>
              <h3 className='text-paragraph-1 font-bold text-black-50'>Okikiola</h3>
            </span>
          </div>
          <div>
            <span className='flex flex-col text-black-30 '>
              <p className='text-paragraph-2'>Last Name</p>
              <h3 className='text-paragraph-1 font-bold text-black-50'>Esuola</h3>
            </span>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div>
            <span className='flex flex-col text-black-30 '>
              <p className='text-paragraph-2'>Email address</p>
              <h3 className='text-paragraph-1 font-bold text-black-50'>esuoladaniel002@gmail.com</h3>
            </span>
          </div>
          <div>
            <span className='flex flex-col text-black-30 '>
              <p className='text-paragraph-2'>Phone</p>
              <h3 className='text-paragraph-1 font-bold text-black-50'>+234 806 843 7620</h3>
            </span>
          </div>
        </div>
        <div>
          <span className='flex flex-col text-black-30 '>
            <p className='text-paragraph-2'>Bio</p>
            <h3 className='text-paragraph-1 font-bold text-black-50'>Software Engineer</h3>
          </span>
        </div>
      </div>

      <div className='p-5 flex flex-col gap-5 rounded-xl border border-black-10 border-opacity-30'>
        <div className='flex justify-between w-full items-center gap-5'>
          <header className='text-paragraph-2'>
            <h3 className='text-paragraph-2 font-medium text-black-50'> Address</h3>
          </header>

          <div>
            <button>Edit</button>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div>
            <span className='flex flex-col text-black-30 '>
              <p className='text-paragraph-2'>Country</p>
              <h3 className='text-paragraph-1 font-bold text-black-50'>United Kingdom</h3>
            </span>
          </div>
          <div>
            <span className='flex flex-col text-black-30 '>
              <p className='text-paragraph-2'>City / State</p>
              <h3 className='text-paragraph-1 font-bold text-black-50'>Leeds, East London</h3>
            </span>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div>
            <span className='flex flex-col text-black-30 '>
              <p className='text-paragraph-2'>Post Code</p>
              <h3 className='text-paragraph-1 font-bold text-black-50'>ERT 2345</h3>
            </span>
          </div>
          <div>
            <span className='flex flex-col text-black-30 '>
              <p className='text-paragraph-2'>TAX ID</p>
              <h3 className='text-paragraph-1 font-bold text-black-50'>AS45645746</h3>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
