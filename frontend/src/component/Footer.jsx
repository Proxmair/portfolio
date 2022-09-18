import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaHackerrank } from 'react-icons/fa';
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
            <li ><a href={socials.hackerRank}><FaHackerrank /></a></li>
          </ul>
        </div>
        <div className='contact-no'>
          <h3><br /><a href={socials.whatsApp.url}>WhatsApp</a></h3>
          <img src={socials.whatsApp.image} alt={'WhatsApp QR code'} />
        </div>
      </div>
      <div><p>Copyright &copy; www.proxmair.com</p></div>
    </div>
  )
}

export default Footer
