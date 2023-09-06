import React, { useState } from 'react'
import "../Comments/Comments.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';


const Comments = ({cmt}) => {
    const [booleonLike,setBooleonLike] =useState(false)
    const [likeCount,setLikeCount] =useState(cmt.likes)

  return (
    <div className="overAllCommentList">
        <div className="commentList">
            <div className='commentList1'>
                <div className="commentHead">
                    <div><img src={cmt.profilePic} /></div>
                    <p><span>{cmt.username}</span>{cmt.comment}</p>
                </div>

                <div className="commentFooter">
                    <p>{cmt.time}</p>
                    <h4>{booleonLike ? likeCount +1 : likeCount} likes</h4>
                </div>
            </div>

        <div className="commentList2">
            <p 
            className='cp'
            onClick={()=>setBooleonLike(!booleonLike)}
            style={{cursor:"pointer"}}
            >
                {booleonLike ? <FavoriteRoundedIcon /> : <FavoriteBorderOutlinedIcon />}
            </p>
        </div>
    </div>
    </div>
    
  )
}

export default Comments