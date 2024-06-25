
import React from 'react'
import style from "./button.module.css"
const b="images/playbutton.png"
const Button = (props) => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"flex-start", flexDirection:"row"}}>
     
     
          <button className={style.cmp}><h5 >{props.data}</h5></button>
          <img  className={style.play}src={b} alt='uploadimage'/>
          <p id={style.w}>Watch Video</p>
        </div>

    
    </>
  )
}

export default Button
