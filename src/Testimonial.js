import React,{useContext} from 'react'
import { AppContext } from './App';
import {motion} from 'framer-motion'
const Testimonial = () => {
  const { modeMessage } = useContext(AppContext);
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100vw"}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}
     className='container'>Testimonial</motion.div>
  )
}

export default Testimonial