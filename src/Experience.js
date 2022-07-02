
import { BsPatchCheckFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import React,{useContext} from 'react'
import { AppContext } from './App';
const Experience = () => {
  const { modeMessage } = useContext(AppContext);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className={modeMessage?'container container-daymode':'container container-nightmode'}>

      <div className="experience-container">
        <div className='experience-title'>
          <h1 className={modeMessage?'daytext':''} >My Experience</h1>
          <h5>The Skills I have</h5>
          
        </div>
        <div className="experience-frontend">
          <h3 className={modeMessage?'daytext':''} >Frontend Development</h3>
          <div className="experience-content">

            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >HTML</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Experience</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >CSS</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Experience</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >Bootstrap</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Intermediate</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >JavaScript</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Experience</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >JQuery</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Intermediate</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >React</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3 className={modeMessage?'daytext':''} >Backend Development</h3>
          <div className="experience-content">

            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >Asp.Net</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Begginer</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >PHP</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Intermediate</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >Node.js</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Experienced</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >MySQL</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Intermediate</small>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className={modeMessage?'icons-daymode':'icons-nightmode'} />
              <h4 className={modeMessage?'daytext':''} >MongoDB</h4>
              <small className={modeMessage?'text-light daytext':'text-light'}>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience