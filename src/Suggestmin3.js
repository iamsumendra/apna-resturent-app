import React from 'react'
import style from "./suggestmin.module.css" 
const Suggestmin3 = (props) => {
  return (
    <>
    <div className={style.first}>
      <div id={style.a}>
      <img  className={style.im3}src={props.src1} alt={"uploadimage"} width={"65%"} height={"100%"}/>
      </div>
    <div id={style.rite} className={style.pn}> <h4 className={style.ch} id={style.a}>   {props.h}</h4> </div>
     <div id={style.rite} className={style.pn}><p className={style.pa } id={style.ab} >{props.data}</p></div> 
      </div>
    </>
  )
}

export default Suggestmin3
