import React from 'react'

import style from "./purchasemin.module.css"  

const  Purchasemin = (props) => {
  return (
    <>
      
        
          <div className={style.ssouter}>
            <div className={style.pw}>
              <div> <img  className={style.thali} src={props.im} alt='uploadimage' width={"60%"} height={"60%"}/></div>
                <div className={style.ineer}><button id={style.btn}><span id={style.ru}>₹350</span></button>
                <div> 
                 <div className={style.sm}> 
                  <img src={props.im1} alt='uploadimage' width={"30%"} height={"30%"}/>  &nbsp;&nbsp;&nbsp;&nbsp;<p id={style.co}>*</p> <sup id={style.su}>(4.5)</sup>  </div>
                </div>   <p className={style.innerpara} >{props.data}</p>
                <p className={style.in} >{props.para}.</p> </div>
                <button className={style.pu}><p id={style.pur}> {props.btn}</p></button>
           
            </div>
            
    
            
             </div>
          

          
        
          

      
    </>
  )
}

export default Purchasemin
