import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Pages/Admin/Index";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Adminlogin/>}></Route>
    </Routes>
  )
}