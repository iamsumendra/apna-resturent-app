import React from 'react'
import Storemin from './Storemin'
const google="images/Googleplaylogo.png"
const apple="images/Applelogo.png"
const mobile="images/mobile.png"
const Elli="images/Ellipse.png"
const easy="It’s Now More Easy to Purchase Plan by Our Mobile App"
const need=`All you need to do is downlode one of the best delivery apps,
             make a and most companies are opting for mobile app devlopment for food delivery`
const Store = () => {
  return (
    <>
    <Storemin ap={apple} go={google} m={mobile} e={Elli} data={easy} data1={need}/>
      
    </>
  )
}

export default Store
