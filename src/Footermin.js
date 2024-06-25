import React from 'react'
import style from "./footermin.module.css"  
const Footermin = (props) => {
  return (
    <>
      <div className={style.main_div}>
           <div className={style.first}>
                 <div><img src={props.sr1} alt="uploadimage" width={"100%"} height={"90%"}></img></div>
                 <div className={style.pa}><p>{props.data}</p></div>
                 <div className={style.la}>
                  <div>  <img src={props.sr2} alt="uploadimage" width={"100%"} height={"100%"}></img></div>
                  <div><img src={props.sr3} alt="uploadimage" width={"100%"} height={"100%"}></img></div>
                  <div> <img src={props.sr4} alt="uploadimage" width={"100%"} height={"100%"}></img> </div></div>
          </div>
          <div className={style.second}>
       <table>
        <tr><th>about us</th><th>Company</th><th>Get in touch</th></tr>
        <tr><td>About Us</td><td>Partnership</td><td    ></td></tr>
        <tr><td>Restaurant</td><td>Terms of Use</td><td>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor</td></tr>
        <tr><td>Contact</td><td>Privacy</td><td></td></tr>
        <tr><td>Company</td><td>Sitemap</td><td><button className={style.em}>Email</button><button className={style.sub}>Subscribe</button></td></tr>
       </table>
          </div>

      </div>
      <div className={style.last}>
      <img src={props.sr5} alt="imageload" width={"5%"} height={"4%"}></img>
<p className={style.copy}>Copyright © 2022 Foodhut.</p>

      </div>
    </>
  )
}

export default Footermin
