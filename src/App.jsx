import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/Admin/Dashboard";
import ExpressDashboard from "./Pages/Express/Dashboard";
import AddBus from "./components/popups/AddBus";
import AdminRegistration from "./Pages/Admin/AdminRegistration";
import React, { useEffect, useState } from "react";
import Adminlogin from "./Pages/Admin/Index";
import Notification from "./components/pages/Notification";
import { verifyToken } from "./utils/apiFunctions";
import DesktopOnly from "./Pages/Other/DesktopOnly";
import ExpressLogin from "./Pages/Express/Login";

export default function App() {
  const [adminLogedIn, setAdminLogedIn] = useState(false);
  const [expressLogedIn, setExpressLogedIn] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const expressAccess = localStorage.getItem("express_access");

  useEffect(() => {
    // Verify the token (if there is one) and set login state
    if(accessToken){
      if(verifyToken()){
        setAdminLogedIn(true);
      } else {
        setAdminLogedIn(false);
      }
    }
    if(expressAccess){
      setExpressLogedIn(true);
    } else {
      setExpressLogedIn(false);
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Adminlogin login={setExpressLogedIn}/>}></Route>
      <Route path="/admin" element={adminLogedIn ? <AdminDashboard login={setExpressLogedIn}/> : <Adminlogin login={setExpressLogedIn}/>}></Route>
      <Route path="/express" element={expressLogedIn ? <ExpressDashboard login={setExpressLogedIn}/> : <ExpressLogin login={setExpressLogedIn}/>}></Route>
      <Route path="/sandbox" element={<DesktopOnly/>}></Route>
    </Routes>
  )
}