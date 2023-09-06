import React from 'react'
import PostUser from './PostUser'

const FeedUser = ({posts,setPosts,profileImg,modelDetails,images}) => {
  return (
    <div className='feedposts'>
        {posts.map((post,id)=>(
            <PostUser 
            images={images}
            modelDetails={modelDetails}
            profileImg={profileImg}
            posts={posts}
            post ={post}
            setPosts={setPosts}
            key={id} 
            />
        ))}
    </div>
  )
}

export default FeedUser