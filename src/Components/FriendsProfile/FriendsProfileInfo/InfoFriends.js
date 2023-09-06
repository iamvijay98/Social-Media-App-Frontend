import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import "./InfoFriend.css"


const InfoFriends = ({val}) => {



  return (
    <div className='info'>
        <div className="info-cover">
            <img src={val.coverpicture} alt="" />
            <img src={val.profilepicture} alt="" />
        </div>

        <div className="info-follow">
            <h1>{val.username}</h1>
            <p>{val.userid}</p>
          

          <div className="info-details">
            <div className="info-col-1">
              <div className="info-details-list">
                <LocationOnOutlinedIcon />
                <span>{val.ModelCountryName}</span>
              </div>

              <div className="info-details-list">
                <WorkOutlineRoundedIcon />
                <span>{val.ModelJobName}</span>
              </div>

              <div className="info-details-list">
                <CalendarMonthRoundedIcon />
                <span>{val.ModelJoinedDate}</span>
              </div>
            </div>

            <div className="info-col-2">
              <div>
                <h2>{val.followers}</h2>
                <span>Followers</span>
              </div>
              <div>
                <h2>1</h2>
                <span>Posts</span>
              </div>
              <div>
                <h2>10</h2>
                <span>Following</span>
              </div>
            </div>

          </div>


        </div>
    </div>
    
  )
}

export default InfoFriends