import React from 'react'
import Post from './Post'

const Feedposts = ({posts,setPosts,setFriendsProfile,images}) => {
  return (
    <div className='feedposts'>
        {posts.map((post,id)=>(
            <Post 
            images={images}
            posts={posts}
            post ={post}
            setPosts={setPosts}
            key={id} 
            setFriendsProfile={setFriendsProfile}
            />
        ))}
    </div>
  )
}

export default Feedposts