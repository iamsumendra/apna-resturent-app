import React from 'react'
import  Purchasemin from './Purchasemin'

const src1="images/timz.png";
const src2="images/icon.png";
const Days=`10 Days | 7 Thali’s `
const plan=`In This plan you can take 7 meals on duration of 10 days .`
const purcase="Purchase Now"
const Purchase = () => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-around", marginLeft:"5%" , marginRight:"5%"}}>
      < Purchasemin  im={src1} im1={src2}  data={Days} para={plan} btn={purcase}/>
      < Purchasemin im={src1} im1={src2}  data={Days} para={plan} btn={purcase}/>
      
      < Purchasemin  im={src1} im1={src2}  data={Days} para={plan} btn={purcase}/>
      </div>
    </>
  )
}

export default Purchase
