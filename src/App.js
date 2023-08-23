import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import UserRegistration from './authentication/pages/UserRegistration'
import UserRegistration from './authentication/pages/UserRegistration'
import UserLogin from './authentication/pages/UserLogin'
import UserDashboard from './dashboard/UserDashboard'
import Sales from './dashboard/pages/Sales'
import Staffs from './dashboard/pages/staffs/Staffs'
import Inventory from './dashboard/pages/Inventory'
import Notifications from './dashboard/pages/Notifications'
import Settings from './dashboard/pages/Settings'
import Dashboard from './dashboard/pages/Dashboard'

function App() {
  return (
    <>

      <Routes>

        <Route path='/UserLogin' element={<UserLogin />} />

        <Route path='/UserRegistration' element={<UserRegistration />} />

        {/* <<<<<<<<<<========== Dashboard ==========>>>>>>>>>> */}
        {/* <<<<<<<<<<===============================>>>>>>>>>> */}
        <Route path='/' element={<UserDashboard />} children={[

          <Route path='/' element={<Dashboard />} />,

          <Route path='/Sales' element={<Sales />} />,

          <Route path='/Staffs' element={<Staffs />} />,

          <Route path='/Inventory' element={<Inventory />} />,

          <Route path='/Notifications' element={<Notifications />} />,
          
          <Route path='/Settings' element={<Settings />} />,

        ]} />

      </Routes>

    </>
  )
}

export default App
