import { Avatar } from '@mui/material'
import React from 'react'

function Profile() {
  return (
    <section>
      <div className='flex justify-between items-center p-5 rounded-xl border border-background'>
        <div className='flex items-center gap-5'>
          {/* Avatar */}
          <Avatar
            alt="Daniel Esuola"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            // src="/static/images/avatar/1.jpg"
            sx={{ width: 90, height: 90 }}
          />

          <div className='flex flex-col gap-1 text-black-30'>
            <h3 className='text-sub-heading-3 font-bold text-black-60'>Esuola Daniel Okikiola</h3>
            <p className='text-paragraph-1'>Software Engineer</p>
            <p className='text-label-1'>Lagos, Nigeria</p>
          </div>
        </div>
        <div>
          <button>Edit</button>
        </div>
      </div>
    </section>
  )
}

export default Profile
