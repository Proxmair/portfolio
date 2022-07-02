import CV from './assets/cv.pdf'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {BsDownload} from 'react-icons/bs'
import {IoCallOutline} from 'react-icons/io5'
import React,{useContext} from 'react'
import { AppContext } from './App';
import MyImage from './assets/myImage.png'
const Home = () => {
    const { modeMessage } = useContext(AppContext);
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
            className={modeMessage?'container container-daymode':'container container-nightmode'}>
            <div className='header-container'>
                <div><h3 className={modeMessage?'daytext':''}>Hello I am</h3>
                    <h1  className={modeMessage?'daytext':''}>Umair ul Islam</h1>
                    <h5>A Fullstack MERN Developer</h5>
                    <h3  className={modeMessage?'daytext':''}>Welcome to my Page</h3>
                </div>
                <div >
              <img  className={modeMessage?'image-daymode':'image-nightmode'} src={MyImage} alt={'My image'}/>
                </div>
                <div>
                <a href={CV} download className='btn-1' ><span className='btn'>Download Now</span> <span className='btn' >Portfolio <BsDownload/></span></a>
                <Link className='btn btn-3' to="./contact"><span>Contact Me <IoCallOutline/></span></Link>
                </div>
            </div>

        </motion.div>
    )
}

export default Home