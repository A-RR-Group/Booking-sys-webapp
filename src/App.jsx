import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Pages/Admin/Index";
import DesktopOnly from "./Pages/DesktopOnly";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Adminlogin/>}></Route>
      <Route path="/sandbox" element={<DesktopOnly/>}></Route>
    </Routes>
  )
}