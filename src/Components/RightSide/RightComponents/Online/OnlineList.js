import React from 'react'

const OnlineList = ({value}) => {
  return (
    <div className='online-people'>
        <img src={value.profilepicture} alt="" />
        <p>{value.username}</p>
    </div>
  )
}

export default OnlineList