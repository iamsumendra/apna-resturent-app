import React from 'react'
import Ownermin from "./Ownermin"
const im2="images/ceo.png"
             
                   const data1="Testimonials"
                 const data= "Our Happy Customers Says"
                 const para=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. 
                                   Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.`
const Owner = () => {
  return (
    <>
     <Ownermin data1={data1} heading={data} sr={im2} pa={para}/>
    </>
  )
}

export default Owner
