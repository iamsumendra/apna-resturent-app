import React from 'react'
import Footermin from "./Footermin"
const src1="images/logo.png"
const src2="images/Facebook.png"
const src3="images/instagram.png"
const src4="images/twitter.png"
const src5="images/thali.png"
const lorem  =`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor`
const Footer = () => {
  return (
    <>
      <Footermin sr1={src1} sr2={src2}  sr3={src3}  sr4={src4} sr5={src5} data={lorem}/>
    </>
  )
}

export default Footer
