import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaSlack  } from 'react-icons/fa';
const Footer = ({ socials }) => {
  return (
    <div className='footer' >
      <div>
        <div id='footer-menu' className='footer-list'>
          <h5>Menu</h5>
          <ul className='footer-link' >
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/about'} >About</Link></li>
            <li><Link to={'/contact'} >Contact</Link></li>
            <li><Link to={'/service'} >Service</Link></li>
            <li><Link to={'/work'} >Work</Link></li>
          </ul>
        </div>
        <div className='footer-list'>
          <h5>{socials.text}</h5>
          <ul className='socail-list'>
            <li ><a href={socials.faceBook}><BsFacebook /></a></li>
            <li ><a href={socials.linkedIn}><BsLinkedin /></a></li>
            <li ><a href={socials.gitHub}><BsGithub /></a></li>
            <li ><a href={socials.hackerRank}><FaSlack /></a></li>
          </ul>
        </div>
        <div className='contact-no'>
          <h3><br /><a className='whatsapp-container' href={socials.whatsApp.url}><p>Join on WhatsApp</p> <BsWhatsapp size={40} /></a></h3>
        </div>
      </div>
      <div><p>Copyright &copy; www.proxmair.com</p></div>
    </div>
  )
}

export default Footer
