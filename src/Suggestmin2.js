import React from 'react'
import style from "./suggestmin.module.css" 
const Suggestmin2 = (props) => {
  return (
    <>
    <div className={style.first}>
    <div  className={style.pn} id={style.g}> <h4 className={style.ch} >   {props.go}</h4> </div>
    <div id={style.rit} className={style.pn}><p className={style.pa}>{props.data}</p></div> 
      <div id={style.c}>
      <img src={props.src1} alt={"no"} width={"85%"} height={"115%"}/>
      </div>
   
      </div>
    </>
  )
}

export default Suggestmin2
