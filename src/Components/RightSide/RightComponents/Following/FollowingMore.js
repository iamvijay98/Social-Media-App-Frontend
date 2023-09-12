import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import Fimg1 from "../../../../assets/Remaining-Following/img-1.jpg"
import Fimg2 from "../../../../assets/Remaining-Following/img-3.jpg"
import Fimg3 from "../../../../assets/Remaining-Following/img-2.jpg"
import Fimg4 from "../../../../assets/Remaining-Following/img-4.jpg"
import Fimg5 from "../../../../assets/Remaining-Following/img-5.jpg"

const FollowingMore = ({showMore,setShowMore}) => {
    
    const FollowingRemainingData=[
        {   
            id:1,
            name:"Johnson",
            username:"@John",
            img:Fimg1
        },
        {  
            id:2,
            name:"Pink",
            username:"@Pinkee",
            img:Fimg2
        },
        {   id:3,
            name:"Brock",
            username:"@BrandonBran",
            img:Fimg3
        },
        {   
            id:4,
            name:"Chutki",
            username:"@Chutki",
            img:Fimg4
        },
        {  
            id:5,
            name:"jassica",
            username:"@JassicaMia",
            img:Fimg5
        }
    ]
    
    


  return (
    
    <>
      <Modal
      className='modelShowMore'
      radius="8px"
      opened={showMore}
      onClose={()=>setShowMore(false)}
      transitionProps={{ transition: 'fade', duration: 200 }}
      title="Who Is Following You"
      centered
      padding="20px"
      zIndex={2000}
      
    >
        {FollowingRemainingData.map((val)=>(
                  <div key={val.id} style={{marginTop:"20px"}} className="following-people">
                  <div className="following-details">
                    <img src={val.img} alt="" />
                      <div className="following-name-username">
                        <h3>{val.name}</h3>
                        <p>{val.username}</p>
                      </div>
                  </div>
        
                  <button className='Rbtn' style={{background:"linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)"}}>Follow</button>
            </div>
        
        ))}

    
    </Modal>
    </>

  
  )
}

export default FollowingMore