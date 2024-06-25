import React from 'react'
import style from "./servemin.module.css"                                                                                                               

const Servemin = (props) => {
  return (
    <>
            
<div className={style.third}>
<div className={style.imt}> 
<img  src={props.im} alt=' imagesupload' width={"70%"} height={"70%"} />
<h1 id={style.im}>{props.data}</h1>
<p id={style.sp}>{props.para}</p>

</div>
</div>
    </>
  )
}

export default Servemin
