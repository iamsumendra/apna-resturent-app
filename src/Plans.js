import React from 'react'
import style from "./plan.module.css"
import Button from "./Button" 
const data1="dowenload app"

const Plans = () => {
  return (
    <>
    <Button data={data1}/>

        <p className={style.pa}>WHAT WE SERVE</p>
      <h1    className={style.ce}>Plans that always make </h1>
      <h1 className={style.ce}>you fall in love</h1>

    </>
  )
}

export default Plans
