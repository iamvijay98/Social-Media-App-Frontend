import React from 'react'

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import {FaSmile} from "react-icons/fa"


const ProfileInputPost = ({handleSubmit,
                            setBody,
                            body,
                            images,
                            setImages,
                            profileImg,
                            modelDetails
                        }) => {
  return (
    <div className="i-form">
        <form onSubmit={handleSubmit}>
            <div className="i-input-box">
                <img src={profileImg} className='i-img'/>
                
                <input 
                type="text" 
                id="i-input" 
                placeholder={`What's in your mind ${modelDetails.ModelName}?`}
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                />
            </div>

     <div className="file-upload">
      <div className="file-icons">
          <label htmlFor='file' className="pv-upload">
            <PhotoLibraryIcon className="input-svg" style={{fontSize:"38px",color:"orangered"}}/>
            <span className='photo-dis'>Photo</span>
          </label>

          <div className="pv-upload">
            <PlayCircleFilledOutlinedIcon className="input-svg" style={{fontSize:"38px",color:"black"}}/>
            <span className='photo-dis'>Video</span>
          </div>

          <div className="pv-upload">
            <KeyboardVoiceRoundedIcon className="input-svg" style={{fontSize:"38px",color:"green"}}/>
            <span className='photo-dis'>Audio</span>
          </div>

          <div className="pv-upload">
            <FaSmile className="input-svg" style={{fontSize:"30px",color:"red"}}/>
            <span className='photo-dis'>Location</span>
          </div>
      </div>
      
          <button type='submit'>Share</button>
            
      </div>

        <div style={{display:"none"}} >
            <input 
            id='file'
            type="file" 
            accept=".png,jpeg,.jpg"
            onChange={(e)=>setImages(e.target.files[0])}
            
             />
          </div>

        {images && (
          <div className="displayImg">
            <CloseRoundedIcon onClick={()=>setImages(null)}/>
            <img src={URL.createObjectURL(images)} alt="" />
          </div>
        )}

        </form>
     </div>
  )
}

export default ProfileInputPost
