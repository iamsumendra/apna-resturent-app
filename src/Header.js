import React from 'react'
import { NavLink } from 'react-router-dom'

import style from "./header.module.css"
const logo="images/LOGOAPNATHALI.png"


const Header = () => {
  return (
    <>

    <div className={style.main_div}> 
        <div className={style.logo}>
  <img className={style.imz} src={logo} alt='uploadimage' width={"50%"} height={"90%"} />
  <h1 className={style.apna}>Apna <span id={style.sp}>Thali</span></h1> </div>
  <div className={style.jaha}><h5 id={style.head}>JAHA JAO WAHA  KHAO</h5></div>
  

  <div className={style.link_nav}>
                    <NavLink className={style.mylink} to="/"><h5 >home</h5></NavLink>
                   
                  <NavLink className={style.mylink} to="/#plans"><h5>plans</h5></NavLink>
                  <NavLink className={style.mylink} to="/#resturent"><h5>resturent</h5></NavLink>
                  <NavLink className={style.mylink} to="/#shope"><h5>shope</h5></NavLink>
  </div>
  </div>
    </>
  )
}

export default Header
