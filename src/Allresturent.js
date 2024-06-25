import React, { useEffect } from "react";
import { useState } from "react";
import style from "./allresturent.module.css" 

import Rupe from "./Rupe";
const resturent="images/resturent.png"
const im="images/imz.png"


const Allresturent = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(3);
  const loadmore=()=>{
    setVisible(visible + 3)
   }
  const URL = "https://devserver.apnathali.com/api/v1/get/all/shop";

 
  const fetchdata = () => {
  
    fetch(URL).then((response) =>
      response.json().then((result) => {
        // console.log(result.data);
        setData(result.data);
      })
      .catch((error)=>{
        console.log("no record found");
      })
    );
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data);
  return (
    <>
    
    <p className={style.api_head}>partners</p>
    <h3 className={style.api_he}>Featured Restaurants</h3>

      <div  style={{ display: "flex", flexWrap:"wrap",justifyContent:"space-evenly" }}>
        {data.slice(0,visible).map((item, index) => {
          return (
            <div
              key={index}
              className={style.main_content}
             
             >
              <div className={style.card}>
                <img
                //  src={item.logo}  //all data accessed dynamically from api but images are not fetched  by api  so we did fix image.
                  src={resturent}
                 
                  width={300}
                  height={250}
                  alt="imageupload"
                />

              
                
                   <h4>{item.name}</h4>
              </div>
              <div style={{display:"flex",justifyContent:"space-around"}}>
              <Rupe sr={im} data={"₹ 1500"}/>
              <Rupe sr={im} data={"₹ 1500"}/>
              <Rupe sr={im} data={"₹ 1500"}/>
              </div>
             
              
            </div>
            



            
          );
        })}
      </div>
      <button className={style.btn} onClick={loadmore}><p id={style.see}>See All Restaurants</p></button>
    </>
  );
};

export default Allresturent;
