
import {motion} from 'framer-motion';
import {BiCheck} from 'react-icons/bi';
import React,{useContext} from 'react'
import { AppContext } from './App';
const Service = () => {
  const { modeMessage } = useContext(AppContext);
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100vw"}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}
    className={modeMessage?'container container-daymode':'container container-nightmode'}>
     
      <div className="service-container">
        <div className='service-title'>
        <h1 className={modeMessage?'daytext':''} >Services</h1>
        <h5>What I Offer</h5>
      
        </div>
        <div className="service service1">
          <div className="service-head">
            <h3 className={modeMessage?'daytext':''} >Full Stack App</h3>
          </div>
          <ul className="service-list">
            <li>
            <p className={modeMessage?'daytext':''} > <BiCheck style={{marginRight:'1rem'}}  className={modeMessage?'icons-daymode':'icons-nightmode'}/>Create a complete full stack app with both web and mobo versions</p>
            </li>
            <li>
            <p className={modeMessage?'daytext':''} > <BiCheck style={{marginRight:'1rem'}}  className={modeMessage?'icons-daymode':'icons-nightmode'}/>Designing the User Interface of the application  </p>
            </li>

          </ul>
        </div>
        <div className="service service2 ">
          <div className="service-head">
            <h3 className={modeMessage?'daytext':''} >Chatbot and other tools</h3>
          </div>
          <ul className="service-list">
            <li>
            <p className={modeMessage?'daytext':''} > <BiCheck style={{marginRight:'1rem'}}  className={modeMessage?'icons-daymode':'icons-nightmode'}/>Creating and integrating the modern tools on apps like chat bot voice search and others</p>
            </li>
          </ul>
        </div>
        <div className="service service3 ">
          <div className="service-head">
            <h3 className={modeMessage?'daytext':''} >Fixing or Changing</h3>
          </div>
          <ul className="service-list">
            <li>
              <p className={modeMessage?'daytext':''} > <BiCheck style={{marginRight:'1rem'}}  className={modeMessage?'icons-daymode':'icons-nightmode'}/>Fixing errors anywhere on the MERN stack app </p>
            </li>
          </ul>
        </div>

      </div>
     </motion.div>
  )
}

export default Service