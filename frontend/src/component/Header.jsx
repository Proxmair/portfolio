import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Promair_Icon_Color.png';
import { CgInfo } from 'react-icons/cg';
import { IoCallOutline } from 'react-icons/io5';
import { RiServerLine } from 'react-icons/ri';
import { MdOutlineLibraryBooks, MdManageAccounts } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='header'>
            <Link to={'/'}><img src={Logo} alt={'Logo'} /></Link>
            <div>
                <Link to={'/'}><AiOutlineHome /><p>Home</p></Link>
                <Link to={'/about'}><CgInfo /><p>About</p></Link>
                <Link to={'/contact'}><IoCallOutline /><p>Contact</p></Link>
                <Link to={'/service'}><RiServerLine /><p>Service</p></Link>
                <Link to={'/work'}><MdOutlineLibraryBooks /><p>Work</p></Link>
            </div>
            <Link to={'/account'}><MdManageAccounts /></Link>
            <div id="header-menucross-icon" className={`${open ? "open" : ""}`} onClick={() => setOpen(!open)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className='header-small' >
                <ul className="slide" style={open ? { height: "320px" } : { height: "0px" }}>
                    <li><Link onClick={() => setOpen(!open)} to={'/'}><AiOutlineHome /><p>Home</p></Link></li>
                    <li><Link onClick={() => setOpen(!open)} to={'/about'}><CgInfo /><p>About</p></Link></li>
                    <li><Link onClick={() => setOpen(!open)} to={'/contact'}><IoCallOutline /><p>Contact</p></Link></li>
                    <li><Link onClick={() => setOpen(!open)} to={'/service'}><RiServerLine /><p>Service</p></Link></li>
                    <li><Link onClick={() => setOpen(!open)} to={'/work'}><MdOutlineLibraryBooks /><p>Work</p></Link></li>
                    <li><Link onClick={() => setOpen(!open)} to={'/account'}><MdManageAccounts /><p>Account</p></Link></li>
                </ul>
            </nav>
        </nav>
    )
}

export default Header
