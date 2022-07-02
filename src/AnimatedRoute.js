import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Home from './Home.js'
import About from './About.js'
import Experience from './Experience.js'
import Service from './Service.js'
import Testimonial from './Testimonial.js'
import Contact from './Contact.js'
import {AnimatePresence} from 'framer-motion'
const AnimatedRoute = () => {
    const location=useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/service" element={<Service />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute