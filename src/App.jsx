import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/Admin/Dashboard";
import ExpressDashboard from "./Pages/Express/Dashboard";
import AddBus from "./components/popups/AddBus";
import AdminRegistration from "./Pages/Admin/AdminRegistration";
import React, { useEffect, useState } from "react";
import Adminlogin from "./Pages/Admin/Index";
import Notification from "./components/pages/Notification";
import { verifyToken } from "./utils/apiFunctions";

export default function App() {
  const [adminLogedIn, setAdminLogedIn] = useState(false);
  const admin_token = localStorage.getItem("access_token");

  useEffect(() => {
    // Verify the token (if there is one) and set login state
    if(admin_token){
      if(verifyToken()){
        setAdminLogedIn(true);
      } else {
        setAdminLogedIn(false);
      }
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Adminlogin/>}></Route>
      <Route path="/admin" element={<Adminlogin/>}></Route>
      <Route path="/sandbox" element={<DesktopOnly/>}></Route>
    </Routes>
  )
}