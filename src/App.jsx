import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import { Contact } from "./pages/contact/Contact"
import './style/App.css'
import { Portafolio } from "./pages/portafolio/Portafolio"
import { ButtonTheme } from "./components/ButtonTheme"

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex items-start lg:items-center fixed top-0 bottom-0 m-2 mt-3 z-0">
        <div className="lg:bg-gray-400 relative lg:-left-3 lg:rounded-tr-3xl lg:rounded-br-3xl lg:dark:bg-gray-600  transition-all duration-500 ease">
          <ButtonTheme />
        </div>
      </div>
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
