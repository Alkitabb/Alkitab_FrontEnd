import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserRegistration from "./authentication/pages/UserRegistration";
import UserLogin from "./authentication/pages/UserLogin";
import UserDashboard from "./dashboard/UserDashboard";
import Sales from "./dashboard/pages/Sales";
import Staffs from "./dashboard/pages/staffs/Staffs";
import Inventory from "./dashboard/pages/inventory/Inventory";
import Notifications from "./dashboard/pages/Notifications";
// import Settings from './dashboard/pages/Settings'
import Dashboard from "./dashboard/pages/Dashboard";
import InternetConnectionChecker from "./reusableComponents/internetConnection/InternetConnectionChecker";
import ErrorPage from "./reusableComponents/ErrorPage";
import Settings from "./dashboard/pages/userAccount/Settings";
import Permissions from "./dashboard/pages/userAccount/pages/Permissions";
// import AddInventory from './dashboard/pages/inventory/pages/AddInventory'

function App() {
  useEffect(() => { document.title = "Stoqhive" }, [])
  
  return (
    <>
      <InternetConnectionChecker />

      <Routes>
        <Route path="/login" element={<UserLogin />} />

        <Route path="/register" element={<UserRegistration />} />

        {/* Error Page */}
        <Route path="*" element={<ErrorPage />} />

        {/* <<<<<<<<<<========== Dashboard ==========>>>>>>>>>> Start */}
        {/* <<<<<<<<<<===============================>>>>>>>>>> */}

        <Route
          path="/"
          element={<UserDashboard />}
          children={[
            <Route path="/" element={<Dashboard />} />,

            <Route path="/Sales" element={<Sales />} />,

            <Route path="/Staffs" element={<Staffs />} />,

            <Route path="/Inventory" element={<Inventory />} />,

            <Route path="/Notifications" element={<Notifications />} />,

            <Route path="/Settings" element={<Settings />} />,

            <Route path="/Permissions" element={<Permissions />} />,
          ]}
        />

        {/* <<<<<<<<<<===============================>>>>>>>>>> End */}
      </Routes>
    </>
  );
}

export default App;
