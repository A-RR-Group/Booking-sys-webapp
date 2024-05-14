import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/Admin/Dashboard";
import ExpressDashboard from "./Pages/Express/Dashboard";
import AddBus from "./components/popups/AddBus";
import AdminRegistration from "./Pages/Admin/AdminRegistration";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard/>}></Route>
      <Route path="/admin/signup" element={<AdminRegistration/>}></Route>
      <Route path="/express" element={<ExpressDashboard/>}></Route>
      <Route path="/sandbox" element={<AddBus/>}></Route>
    </Routes>
  )
}