import React from 'react'

import style from "./rupe.module.css" 
const Rupe = (props) => {
  return (
    <>
           <div className={style.bu}>
        
        <button > <img src={props.sr}   width={"25%"}
            height={"25%"}
            alt="uploadimage"/> <span id={style.col}>{props.data}</span></button> 
        </div> 
    </>
  )
}

export default Rupe
