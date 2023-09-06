import React from 'react'
import Feedposts from './Feedposts'
import "../Home/Homepage.css"


const Homepage = ({posts,setPosts,setFriendsProfile,images}) => {
  return (
    <main className='homepage'>
        
        {posts.length ? <Feedposts 
                        images={images}
                        posts={posts}
                        setPosts={setPosts}
                        setFriendsProfile={setFriendsProfile}
                        /> 
        :
        (<p style={{textAlign:"center",marginTop:"40px"}}>
            NO POSTS ARE HERE
        </p>)
        }
    </main>
  )
}

export default Homepage