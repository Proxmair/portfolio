import React, { Fragment,useContext } from 'react'
import logo from './assets/Promair_Logo_Color.png'
import {BsSun} from 'react-icons/bs'
import {MdOutlineNightsStay} from 'react-icons/md'
import { AppContext } from './App'
const Header = () => {
    const message="Logo Image"
    const { modeMessage,setmodeMessage } = useContext(AppContext);
  return (
      <Fragment>
          <img className='header-logo'src={logo} alt={message}></img>
          <button onClick={()=>setmodeMessage(!modeMessage)} className={modeMessage?'header-button header-button-daymode':'header-button header-button-nightmode'}>{modeMessage?<BsSun style={{color:"#1c1d1f"}}/>:<MdOutlineNightsStay style={{color:"#e7dfdd"}}/>}<span className='tooltiptext'>{modeMessage?"Day mode":"Night mode"}</span></button>
      </Fragment>
  )
}

export default Header