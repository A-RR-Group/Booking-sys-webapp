import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Pages/Admin/Index";
import AddExpress from "./components/popups/AddExpress";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Adminlogin/>}></Route>
      <Route path="/sandbox" element={<AddExpress/>}></Route>
    </Routes>
  )
}