import React from 'react'
import {BsDownload} from 'react-icons/bs';
import CV from '../assets/Umair CV.pdf'
const Home = () => {
  return (
    <div className='container'>
        <h2>Hi,I'm Umair</h2>
        <h1>I Build things on <br/> webs and phones</h1>
        <h3>A Full Stack Developer that can build an advance ecommerce and buisness apps for you.<br/>Having issue in the sales or marketing why not having a SEO friendly site that is highly optimezed and designed to stands you up in the feild.</h3>
        <a href={CV} download className='icon-conatiner'><p >Resuame</p><BsDownload/></a>    
    </div>
  )
}

export default Home