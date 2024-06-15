import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/Admin/Dashboard";
import ExpressDashboard from "./Pages/Express/Dashboard";
import AddBus from "./components/popups/AddBus";
import AdminRegistration from "./Pages/Admin/AdminRegistration";
import { useEffect, useState } from "react";
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
      <Route path="/admin" element={adminLogedIn ? <AdminDashboard login={setAdminLogedIn}/> : <Adminlogin login={setAdminLogedIn}/>}></Route>
      <Route path="/admin/signup" element={ <AdminRegistration/> }></Route>
      <Route path="/express" element={<ExpressDashboard/>}></Route>
      <Route path="/sandbox" element={<Notification message='Bus removed Successfully'/>}></Route>
    </Routes>
  )
}