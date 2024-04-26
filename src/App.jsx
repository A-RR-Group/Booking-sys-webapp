import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Pages/Admin/Index";
import AdminDashboard from "./Pages/Admin/Dashboard";
import Expresslogin from "./Pages/Express/Login";
import ExpressDashboard from "./Pages/Express/Dashboard";
import AddBus from "./components/popups/AddBus";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Adminlogin/>}></Route>
      <Route path="/dashboard" element={<AdminDashboard/>}></Route>
      <Route path="/express" element={<ExpressDashboard/>}></Route>
      <Route path="/sandbox" element={<AddBus/>}></Route>
    </Routes>
  )
}