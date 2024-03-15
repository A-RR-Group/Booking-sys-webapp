import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Pages/Admin/Index";
import PopupTitle from "./components/popups/PopupTitle";

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Adminlogin/>}></Route>
      <Route path="/sandbox" element={<PopupTitle/>}></Route>
    </Routes>
  )
}