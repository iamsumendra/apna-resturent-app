import style from "./storemin.module.css"  
import React from 'react'

const Storemin = (props) => {
  return ( 
    <>
      <div className={style.maindiv}>
        
        <div className={style.first_div}>  
            <div className={style.he}><h1>It’s Now<span>More Easy to</span> <span> Purchase Plan </span>by Our Mobile<span>App</span> </h1></div>



            <div className={style.pe}><p>{props.data1}</p></div>
            <div className={style.sr}>
            <div className={style.st}>
                    <div className={style.i}><img src={props.go} alt="uploadimage" width={"80%"} height={"90%"}/></div>
                    <div className={style.get}> <p id={style.sp}>Get it on</p><p>Google Play</p></div>
            </div>
            <div className={style.st} id={style.le}>
                    <div className={style.i}><img src={props.ap} alt="uploadimage" width={"80%"} height={"90%"}/></div>
                    <div className={style.get}> <p id={style.sp}>Download on the</p><p>App Store</p></div>
            </div>
            </div>
        </div>
       <div className={style.second_div}>
       <img src={props.m} alt="no" width={"100%"} height={"100%"}/>
       </div>
      </div>
    </>
  )
}

export default Storemin
