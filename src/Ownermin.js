import React from 'react'
import style from "./ownermin.module.css"  
const Ownermin= (props) => {
  return (
    <>
      
        <div className={style.se_div}>
             <p id={style.test}>{props.data1}</p>
             <h3>{props.heading}</h3>

        </div>
        

<div className={style.div_outer}>

    <div className={style.div_inner}>
        <div className={style.rad}>
           <img src={props.sr} alt='uploadimage' width={50} height={50}/>
        </div> 
        
        <div className={style.well}><h5>Willians Jhone </h5> <p>CEO & Co-Founder</p></div>
    
    </div>
    <div className={style.inp}>
<p>{props.pa}</p>
    </div>
</div>
      
    </>
  )
}

export default Ownermin
