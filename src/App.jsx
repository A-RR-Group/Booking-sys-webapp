import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Pages/Admin/Index";
import Notification from "./components/Notification";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Adminlogin/>}></Route>
      <Route path="/sandbox" element={<Notification/>}></Route>
    </Routes>
  )
}