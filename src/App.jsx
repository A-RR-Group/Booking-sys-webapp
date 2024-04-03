import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Pages/Admin/Index";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Adminlogin/>}></Route>
      <Route path="/sandbox" element={<AdminDashboard/>}></Route>
    </Routes>
  )
}