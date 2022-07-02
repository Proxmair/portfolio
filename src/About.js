
import { motion } from 'framer-motion'
import ME from './assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import React,{useContext} from 'react'
import { AppContext } from './App';
const About = () => {
  const { modeMessage } = useContext(AppContext);
  const experience='So i started working and making projects in this field about eight months ago in which i worked in software house named Expertezo as an intern in which i was selected as a software designer creating full stack web apps. After completing my internship i worked as a freelancer where I built about five full stack portfolios on the MongoDB Express React Node (MERN) architecture.';
  const clients='In freelancing i created about five porfolios not only this i we done many worked for clients that have bug in the site or needs modification in their sites especially converting their sites into the modern technology for better performance and user interface';
  const megaprojects='To enhance my learning and upgrading my development expertise in further move ahead to create a full stack ecommerce site and Artifiacial Intelligence (AI) chatbot, creating for this i we created a complete professional shopping app that covers all the payment models and admin organization access and another project is of the chatbot in the site that can respond to question that have been asked by the customer most of the time.'
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className={modeMessage?'container container-daymode':'container container-nightmode'}>

      <div className='about-container' >
        <div className='about-title'>
          <h1 className={modeMessage?'daytext':''} >About me</h1>
          <h5>Get to Know</h5>
        </div>
        <div className="about-exp">
          <h3 className={modeMessage?'daytext':''}>Experience <FaAward className={modeMessage?'icons-daymode':'icons-nightmode'} /></h3>
          <h5>8 months in field</h5>
          <p className={modeMessage?'daytext':''}>{experience}</p>
        </div>
        <div className="about-cli">
          <h3 className={modeMessage?'daytext':''} >Clients <FiUsers className={modeMessage?'icons-daymode':'icons-nightmode'} /></h3>
          <h5>5 clients</h5>
          <p className={modeMessage?'daytext':''} >{clients}</p>
        </div>
        <div className="about-pro">
          <h3 className={modeMessage?'daytext':''} >Projects <VscFolderLibrary className={modeMessage?'icons-daymode':'icons-nightmode'} /></h3>
          <h5>2 Mega completed Projects</h5>
          <p className={modeMessage?'daytext':''} >{megaprojects}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About