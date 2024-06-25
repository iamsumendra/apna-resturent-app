import React from 'react'
import Servemin from './Servemin'

const src1="images/girl.png"
const src2="images/asset.png"
const src3="images/TakeAway.png"

const eat="Eat Multiple restaurants"
const you="You only need a few steps in ordering food"
const instant  ="Instant Meal service"
const delevery="IDelivery that is always ontime even faster"
const everyday="Everyday New Meal"
const quality ="Not only fast for us quality is also number one"
const Serve = () => {
  return (
    <>
   
    <div style={{display:'flex', justifyContent:'space-around', marginRight:"8%",marginLeft:"8%"}}>
      <Servemin data={eat} para={you} im={src2} />
    
      <Servemin data={instant} para={delevery} im={src3} />

      <Servemin data={everyday} para={quality} im={src1} />
      </div>
    </>
  )
}

export default Serve
