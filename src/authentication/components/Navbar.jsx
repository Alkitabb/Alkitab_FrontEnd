import React from 'react'
import Logo from '../components/logo.svg'

function Navbar() {
  return (
    <nav className='bg-white bg p-3 px-20 absolute z-10 w-screen'>

      <div>
        <img src={Logo} alt="logo.svg" />
      </div>

    </nav>
  )
}

export default Navbar
