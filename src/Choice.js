import React from 'react'
import style from "./choice.module.css" 
const Choice = () => {
  return (
    <>
      <p className={style.choice}>Choice plan according your choice</p>
     <h1 className={style.ja}>JAHA JAAO WAHA KHAO<span id={style.plans}> PLANS</span></h1> 
    </>
  )
}

export default Choice
