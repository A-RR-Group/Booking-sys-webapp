import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/Admin/Dashboard";
import ExpressDashboard from "./Pages/Express/Dashboard";
import AddBus from "./components/popups/AddBus";
import AdminRegistration from "./Pages/Admin/AdminRegistration";
import { useEffect, useState } from "react";
import Adminlogin from "./Pages/Admin/Index";

export default function App() {
  const [adminLogedIn, setAdminLogedIn] = useState(false);
  const admin_token = localStorage.getItem("access_token");

  useEffect(() => {
    if(admin_token){
      setAdminLogedIn(true);
    }
  }, []);
  return (
    <Routes>
      <Route path="/admin" element={adminLogedIn ? <AdminDashboard login={setAdminLogedIn}/> : <Adminlogin login={setAdminLogedIn}/>}></Route>
      <Route path="/admin/signup" element={ adminLogedIn ? <AdminRegistration/> : <Adminlogin login={setAdminLogedIn}/>}></Route>
      <Route path="/express" element={<ExpressDashboard/>}></Route>
      <Route path="/sandbox" element={<AddBus/>}></Route>
    </Routes>
  )
}