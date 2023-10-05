import React, { useEffect } from 'react'
import Loader from './component/Loader.jsx'
import Background from './component/Background.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/Header.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Work from './component/Work.jsx'
import Service from './component/Service.jsx'
import Auth from './component/Auth.jsx'
import Admin from './component/Admin.jsx'
import Footer from './component/Footer.jsx'
import { useDispatch, useSelector } from "react-redux";
import { loadUser, getUser } from "./actions/user";
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.login);
  const { loading: userLoading, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Router>
      {(loading || userLoading) ? (
        <Loader />
      ) : (
        <>
          <Background />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About about={user.about} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/work' element={<Work work={user.work} />} />
            <Route path='/service' element={<Service service={user.service} />} />
            <Route path='/account' element={isAuthenticated ? <Admin /> : <Auth />} />
          </Routes>
          <Footer socials={user.socials} />
        </>
      )}
    </Router>
  )
}

export default App