import React, { useEffect, useState } from 'react'
import InputPost from '../Post/InputPost'
import Homepage from "../Home/Homepage"
import "../MiddleSide/Middle.css"


const Middle = ({handleSubmit,
                body,
                setBody,
                setImportFile,
                posts,
                setPosts,
                search,
                images,
                setImages,
                handleImageChange,
                emptImg,
                setEmptImg,
                setFriendsProfile
              }) => {
    
  
    const [searchResults,setSearchResults] =useState("")
    
    useEffect(()=>{
      const searchData = posts.filter((val)=>(
        (val.body.toLowerCase().includes(search.toLowerCase()))
       ||
       (val.username.toLowerCase().includes(search.toLowerCase()))
       ))
       setSearchResults(searchData)
       
    },[posts,search])
  
  return (
    <div className='M-features'>
        <InputPost
        handleSubmit={handleSubmit}
        body ={body}
        setBody ={setBody}
        setImportFile ={setImportFile}
        images={images}
        handleImageChange={handleImageChange}
        emptImg ={emptImg}
        setEmptImg={setEmptImg}
        setImages={setImages}
        />

        <Homepage 
        posts ={searchResults}
        setPosts={setPosts}
        setFriendsProfile={setFriendsProfile}
        images={images}
        />
    </div>
  )
}

export default Middle