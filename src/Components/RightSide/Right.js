import React from 'react'
import Sugg from "./RightComponents/Suggestion/Sugg"
import Online from "./RightComponents/Online/Online"
import FollowingU from "./RightComponents/Following/FollowingU"
import "../RightSide/Right.css"
import {GrFormClose} from "react-icons/gr"

const Right = ({following,setFollowing,showMenu,setShowMenu}) => {

  return (
    <div className={showMenu ? "R-Side active" : "R-Side unActive"}>
      <GrFormClose 
      className='closeBurger'
      onClick={()=>setShowMenu(false)}/>
      <Sugg 
      following={following}
      setFollowing={setFollowing}
      />

      <Online />

      <FollowingU 
      following={following}
      setFollowing={setFollowing}
      />
    </div>
  )
}

export default Right