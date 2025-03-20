import React from 'react'
import CV from '../assets/Umair_ul_Islam_CV.pdf'
const Home = () => {
  return (
    <div className='container'>
      <h2>Hi,I'm Umair ul Islam</h2>
      <h1>I lead and build scalable <br />solutions for web and mobile.</h1>
      <h3>I am a Full Stack Developer Team Lead with over three years of experience in designing and optimizing scalable
        web applications. I manage development workflows, review code, resolve blockers, and implement strategic
        solutions to enhance efficiency. Furthermore, I collaborate with product managers for accurate estimations and
        conduct performance evaluations to drive team growth. Passionate about innovation and problem-solving, I
        thrive in fast-paced environments and am committed to delivering high-quality software solutions.</h3>
      <a href={CV} download="Umair_ul_Islam_CV.pdf" className='icon-conatiner'><p >Download CV</p></a>
    </div>
  )
}

export default Home
