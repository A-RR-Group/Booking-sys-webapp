import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Pages/Admin/Index";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddStation from "./components/popups/AddStationComponent";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Adminlogin/>}></Route>
      <Route path="/dashboard" element={<AdminDashboard/>}></Route>
      <Route path="/sandbox" element={<AddStation/>}></Route>
    </Routes>
  )
}