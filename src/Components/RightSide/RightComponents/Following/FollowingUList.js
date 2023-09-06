import React, { useState } from 'react'

const FollowingUList = ({data,following,setFollowing}) => {

  const [booleonFollowing,setBooleonFollowing] =useState(false)


  const [followFollowed,setFollowFollowed] = useState("Follow")
  const [boolfollowFollowed,setBoolFollowFollowed] = useState(false)

  const [clicked,setUnClicked] = useState(false)


  const handleFollow=()=>{
    setFollowing(booleonFollowing ? following -1 : following +1)
    setBooleonFollowing(! booleonFollowing)

    setFollowFollowed(boolfollowFollowed ? "Follow" : "Following")
    setBoolFollowFollowed(! boolfollowFollowed)

    setUnClicked(! clicked)

  }

  return (
    <div className="following-people">
          <div className="following-details">
            <img src={data.img} alt="" />
              <div className="following-name-username">
                <h3>{data.name}</h3>
                <p>{data.username}</p>
              </div>
          </div>

          <button
          style={{background: clicked ? "transparent" : "linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)",
                  color:clicked ? "black" : "white",
                  border:clicked ? "2px solid orangered" : "none"
                }}
          onClick={handleFollow}
           >
          {followFollowed}
          </button>
    </div>
  )
}

export default FollowingUList