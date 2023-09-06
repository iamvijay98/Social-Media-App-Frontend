import React from 'react'
import InfoFriends from './FriendsProfileInfo/InfoFriends'
import InfoFriendPost from './FriendsProfileInfo/InfoFriendPost'



const FriendsProfileMiddle = ({friendProfile}) => {
  return (
    <div style={{paddingBottom:"30px"}}>
      {friendProfile.map((val)=>(
        <InfoFriends val={val} key={val.id}/>
      ))}

      {friendProfile.map((val)=>(
        <InfoFriendPost val={val} key={val.id}/>
      ))}
      
    </div>
  )
}

export default FriendsProfileMiddle
