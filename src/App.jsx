import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import { Contact } from "./pages/contact/contact"
import './style/App.css'
import { Portafolio } from "./pages/portafolio/Portafolio"

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portafolio" element={<Portafolio />} />
        <Route path="/*" element={<Navigate to={'/'}></Navigate>} />
      </Routes>
    </BrowserRouter>
  )
}
