import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { RiBook2Line } from 'react-icons/ri';
import { RiServiceLine } from 'react-icons/ri';
import { IoCallOutline } from 'react-icons/io5';
import { AppContext } from './App';
const Nav = () => {
  const { modeMessage } = useContext(AppContext);
  return (
    <nav>
      <div className={modeMessage?'nav-container nav-container-daymode':'nav-container nav-container-nightmode'} >
        <Link to={`/`}><AiOutlineHome style={modeMessage?{color:"#0e0b16"}:{color:"#e7dfdd"}} /><span className='tooltiptext'>Home</span></Link>
        <Link to={`/about`}><AiOutlineUser style={modeMessage?{color:"#0e0b16"}:{color:"#e7dfdd"}} /><span className='tooltiptext'>About</span></Link>
        <Link to={`/experience`}><RiBook2Line style={modeMessage?{color:"#0e0b16"}:{color:"#e7dfdd"}} /><span className='tooltiptext'>Experience</span></Link>
        <Link to={`/service`}><RiServiceLine style={modeMessage?{color:"#0e0b16"}:{color:"#e7dfdd"}} /><span className='tooltiptext'>Service</span></Link>
        <Link to={`/contact`}><IoCallOutline style={modeMessage?{color:"#0e0b16"}:{color:"#e7dfdd"}} /><span className='tooltiptext'>Contact</span></Link>
      </div>
    </nav>

  )
}

export default Nav

/*
style={modeMessage?{backgroundColor:"#3c67cc7a"}:{backgroundColor:"#4717f67a"}}
*/