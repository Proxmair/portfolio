import React from 'react'
import { BrowserRouter as Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Work from './component/Work.jsx'
import Service from './component/Service.jsx'
import Auth from './component/Auth.jsx'
import Admin from './component/Admin.jsx'
const AnimatedRoute = ({isAuthenticated ,service,work,about}) => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About about={about} />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/work' element={<Work work={work} />} />
                <Route path='/service' element={<Service service={service} />} />
                <Route path='/account' element={isAuthenticated ? <Admin /> : <Auth />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute