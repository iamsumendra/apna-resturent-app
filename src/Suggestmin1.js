import React from 'react'
import style from "./suggestmin.module.css" 
const Suggestmin1 = (props) => {
  return (
    <>
    <div className={style.first}>
      <div>
      <img src={props.src} alt={"no"} width={"65%"} height={"90%"}/>
      </div>
    <div > <h4 className={style.ch}>  {props.c}</h4> </div>
     <div  className={style.pn}><p className={style.pa}>{props.data}</p></div> 
      </div>

      
    </>
  )
}

export default Suggestmin1
