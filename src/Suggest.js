import React from 'react'
   import Suggestmin1 from "./Suggestmin1"
   import Suggestmin2 from "./Suggestmin2"
   import Suggestmin3 from "./Suggestmin3"
   const src3="images/barcode.png"
  const src="images/first.png"
const src1="images/home.png"
const Suggest = () => {
    const c=` CHOOSE PLAN`
    const pa=`Do you want to lose weight, exercise,
    adhere to a therapeutic diet? Our
    dietitian will help you with choosing the
    right program!`
    const go =`Go to Apna Thali partner restaurant`
const h=`Scan & eat`
  return (
    <div style={{display:"flex", justifyContent:"space-between", marginLeft:"10%",marginRight:"10%"}}>
      <Suggestmin1 src={src} data= {pa} c={c}/>
      
      <Suggestmin2 src1={src1} data= {pa} go={go}/>
      <Suggestmin3 src1={src3} data= {pa} h={h}/>
   
    </div>
  )
}

export default Suggest
