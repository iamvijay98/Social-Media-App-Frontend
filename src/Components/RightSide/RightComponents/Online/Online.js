import React from 'react'
import "../Online/Online.css"
import { DisPlayPostData } from '../../../../Data/DisplayPostData'
import OnlineList from './OnlineList'


const Online = () => {
  return (
    <div className="online-comp">
      <h2>Online Friends</h2>

      {DisPlayPostData.map((value,id)=>(
              <OnlineList 
              value={value}
              key={id}
              />

      ))}

    </div>
  )
}

export default Online