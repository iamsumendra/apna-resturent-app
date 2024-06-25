import React from 'react'
import style from "./mainmincomponent.module.css"
const Mainmincomponent = (props) => {
  return (
    <>
    <div className={style.first}>
    <div className={style.inner}> 
    <h1 id={style.he1}> {props.A} </h1>   
    <h1 id={style.he2}> {props.B}</h1>  
    <h1 className={style.at}> {props.C}<span id={style.te}>  {props.D }</span> </h1>
    <div className={style.para}>
            
                          <p  className={style.pp}>
                      {props.data}    
                            
                             </p>
                        </div>

</div>

     
     <div className={style.myimz}>
     <img  className={style.main_image} src={props.im} alt='uploadimages' width={"90%"} height={"100%"} /></div>
    
    </div>
      
    </>
  )
}

export default Mainmincomponent
