import React from 'react'
import "../Home/Post.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';

import {PiSmileySad} from "react-icons/pi"
import {IoVolumeMuteOutline} from "react-icons/io5"
import {MdBlockFlipped} from "react-icons/md"
import {AiOutlineDelete} from "react-icons/ai"
import {MdReportGmailerrorred} from "react-icons/md"

import {LiaFacebookF} from "react-icons/lia"
import {FiInstagram} from "react-icons/fi"
import {BiLogoLinkedin} from "react-icons/bi"
import {AiFillYoutube} from "react-icons/ai"
import {RxTwitterLogo} from "react-icons/rx"
import {FiGithub} from "react-icons/fi"

import img1 from "../../assets/Following/img-2.jpg"
import img2 from  "../../assets/Following/img-3.jpg"
import img3 from  "../../assets/Following/img-4.jpg"

import Profile from "../../assets/profile.jpg"

import { useState } from 'react';
import Comments from '../Comments/Comments';
import moment from 'moment';
import { Link } from 'react-router-dom';



const Post = ({post,posts,setPosts,setFriendsProfile,images}) => {

  const [comments,setComments] =useState([
    {
        id:1,
        profilePic:img1,
        likes:23,
        username:"Violet",
        time:"3 Hours Ago",
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores debitis saepe itaque, eligendi quasi laboriosam vitae voluptatem animi maiores voluptatibus."
    },
    {
        id:2,
        profilePic:img2,
        likes:5,
        username:"Brandon",
        time:"1 Hour Ago",
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id:3,
        profilePic:img3,
        likes:50,
        username:"Lilly",
        time:"30 Mins Ago",
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores debitis saepe itaque, eligendi quasi"
    }
])



  const [like,setLike] =useState(post.like)
  const [unlike,setUnlike] =useState(false)

  const [filledLike,setFilledLike] =useState(<FavoriteBorderOutlinedIcon />)
  const [unFilledLike,setUnFilledLike] =useState(false)

  const handlelikes=()=>{
    setLike(unlike ? like -1 :like +1)
    setUnlike(!unlike)

    setFilledLike(unFilledLike ?   <FavoriteBorderOutlinedIcon /> : <FavoriteRoundedIcon />)
    setUnFilledLike(!unFilledLike)
  }
 

  const [showDelete,setShowDelete] = useState(false)
  const [showComment,setShowComment] = useState(false)

const handleDelete=(id)=>{
  const deleteFilter =posts.filter(val=> val.id !== id)
    setPosts(deleteFilter)
    setShowDelete(false)
  }
 
  const [commentInput,setCommentInput] =useState("")

  const handleCommentInput=(e)=>{
     e.preventDefault()

    const id=comments.length ? comments[comments.length -1].id +1 : 1
    const profilePic =Profile
    const username="Vijay"
    const comment =commentInput
    const time= moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()

    const commentObj ={
      id:id,
      profilePic:profilePic,
      likes:0,
      username:username,
      comment:comment,
      time:time
    }
    const insert =[...comments,commentObj]
    setComments(insert)
    setCommentInput("")
  }

   const handleFriendsId=(id)=>{
      const friendsIdFilter = posts.filter(val => val.id === id)
      setFriendsProfile(friendsIdFilter)
   }

   const [socialIcons,setSocialIcons] = useState(false)




  return (
    <div className='post'>
      <div className='post-header'>
        <Link to="/FriendsId" style={{textDecoration:"none"}}>
        <div className='post-user' onClick={()=>handleFriendsId(post.id)} style={{cursor:"pointer"}}>
            <img src={post.profilepicture} className='p-img' alt="" />
            <h2>{post.username}</h2>
            <p className='datePara'>{post.datetime}</p>
        </div>
        </Link>
         
         <div className='delete'>
         {showDelete && (<div className="options">
            <button><PiSmileySad />Not Interested in this post</button>
            <button><IoVolumeMuteOutline />Mute this user</button>
            <button><MdBlockFlipped />Block this user</button>
            <button onClick={()=>handleDelete(post.id)}><AiOutlineDelete />Delete</button>
            <button><MdReportGmailerrorred />Report post</button>
         </div>
        
         )}
          <MoreVertRoundedIcon className='post-vertical-icon' onClick={()=>setShowDelete(!showDelete)}/>
         </div>
       </div>

        <p className='body'>{
        (post.body).length <=300 ?
        post.body : `${(post.body).slice(0,300)}...`
        }</p>

       {post.img && (<img src={post.img} alt="" className="post-img" />)}
  


      <div className="post-foot">
       <div className="post-footer">
        <div className="like-icons">
          <p className='heart' 
            onClick={handlelikes}
            style={{marginTop:"5px"}}
          >
              {filledLike}
          </p>

          <MessageRoundedIcon 
            onClick= {()=>setShowComment(!showComment)}
            className='msg'  
          />

          <ShareOutlinedIcon 
            onClick={()=>setSocialIcons(!socialIcons)}
            className='share'  
          />
          {socialIcons && (
          
              <div className="social-buttons">        
        
                <a href="http://www.facebook.com" target="blank" className="social-margin"> 
                  <div className="social-icon facebook">
                    <LiaFacebookF className='social-links'/>
                  </div>
                </a>
                
                <a href="https://www.instagram.com/" target="blank"  className="social-margin">
                  <div className="social-icon instagram">
                    <FiInstagram className='social-links'/>
                  </div>
                </a>
                
                <a href="http://linkedin.com/" className="social-margin" target="blank">
                  <div className="social-icon linkedin">
                    <BiLogoLinkedin className='social-links'/>
                  </div> 
                </a>
             
                <a href="https://github.com/"  target="blank"  className="social-margin">
                  <div className="social-icon github">
                    <FiGithub className='social-links'/>
                  </div>
                </a>
                
                <a href="http://youtube.com/" target="blank"  className="social-margin">
                  <div className="social-icon youtube">
                  <AiFillYoutube className='social-links'/>
                  </div> 
                </a>
          
                <a href="http://twitter.com/" target="blank" className="social-margin">
                  <div className="social-icon twitter">
                  <RxTwitterLogo className='social-links'/>
                  </div> 
                </a>
           </div>
          )}
        </div>
        

        <div className="like-comment-details">
          <span className='post-like'>{like} people like it,</span>
          <span className='post-comment'>{comments.length} comments</span>
        </div>
        
       {showComment && (<div className="commentSection">
        <form onSubmit={handleCommentInput}>
          <div className="cmtGroup">
              <SentimentSatisfiedRoundedIcon className='emoji'
              />
              
              <input 
              type="text" 
              id="commentInput"
              required
              placeholder='Add a comment...'
              onChange={(e)=>setCommentInput(e.target.value)}
              value={commentInput}
               />
              
              <button type='submit'><SendRoundedIcon className='send' /></button> 
          
          </div>
        </form>

        <div className="sticky">
          {comments.map((cmt)=>(
            <Comments 
            className="classComment"
            cmt={cmt}
            key={cmt.id}
            />
          ))}
          </div>
        </div>
        )}

      </div>     
    </div>
  </div>
  )
}

export default Post