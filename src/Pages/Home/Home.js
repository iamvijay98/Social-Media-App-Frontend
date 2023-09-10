import {  useState } from 'react'
import Profile from "../../assets/profile.jpg"
import img1 from "../../assets/Post Images/img1.jpg"
import img2 from "../../assets/Post Images/img2.jpg"
import img3 from "../../assets/Post Images/img3.jpg"
import img4 from "../../assets/Post Images/img4.jpg"
import img5 from "../../assets/Post Images/img5.jpg"
import img6 from "../../assets/Post Images/img6.jpg"


import DPimg1 from "../../assets/DP/img1.jpg"
import DPimg2 from "../../assets/DP/img2.jpg"
import DPimg3 from "../../assets/DP/img3.jpg"
import DPimg4 from "../../assets/DP/img4.jpg"
import DPimg5 from "../../assets/DP/img5.jpg"
import DPimg6 from "../../assets/DP/img6.jpg"

import cover from "../../assets/Info-Dp/img-3.jpg"

import Cover1 from "../../assets/Friends-Cover/cover-1.jpg"
import Cover2 from "../../assets/Friends-Cover/cover-2.jpg"
import Cover3 from "../../assets/Friends-Cover/cover-3.jpg"
import Cover5 from "../../assets/Friends-Cover/cover-5.jpg"
import Cover7 from "../../assets/Friends-Cover/cover-7.jpg"
import Cover8 from "../../assets/Friends-Cover/cover-8.jpg"
import Cover9 from "../../assets/Friends-Cover/cover-9.jpg"

import Uimg1 from "../../assets/User-post/img1.jpg"
import Uimg2 from "../../assets/User-post/img2.jpg"
import Uimg3 from "../../assets/User-post/img3.jpg"


import "../Home/Home.css"

import Left from "../../Components/LeftSide/Left"
import Middle from "../../Components/MiddleSide/Middle"
import Right from '../../Components/RightSide/Right'
import Nav from '../../Components/Navigation/Nav'
import moment from 'moment/moment'

const Home = ({setFriendsProfile}) => {
  
    const [posts,setPosts] = useState(
        [
          {
            id:1,
            username:"Harry",
            profilepicture:DPimg1,
            img:img1,
            datetime:moment("20230131", "YYYYMMDD").fromNow(),
            body:"My 1st Post, Have A Good Day Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum laborum necessitatibus ex doloragnam ea?",
            like: 44,
            comment:3,
            unFilledLike:true,
            coverpicture:Cover1,
            userid:"@Iamharry",
            ModelCountryName:"USA",
            ModelJobName:"Java Developer",
            ModelJoinedDate:"Joined in 2019-02-28",
            followers:1478
          },
          {
            id:2,
            username:"chris dhaniel",
            profilepicture:DPimg2,
            img:img2,
            datetime:moment("20230605", "YYYYMMDD").fromNow(),
            body:"My 2st Post, Have A Bad Day Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum laborum necessitatibus ex dolor reiciendis, consequuntur placeat repellat magnam ea?",
            like: 84,
            comment:3,
            coverpicture:Cover2,
            userid:"@chris777",
            ModelCountryName:"Australia",
            ModelJobName:"Cyber Security",
            ModelJoinedDate:"Joined in 2018-01-17",
            followers:1730
          },
          {
            id:3,
            username:"April",
            profilepicture:DPimg3,
            img:img3,
            datetime:moment("20230813", "YYYYMMDD").fromNow(),
            body:"My 3st Post, Have A Nice Day Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum laborum necessitatibus ex dolor reiciendis, consequuntur",
            like: 340,
            comment:76,
            coverpicture:Cover3,
            userid:"@April",
            ModelCountryName:"India",
            ModelJobName:"Python Developer",
            ModelJoinedDate:"Joined in 2022-03-01",
            followers:426
          },
          {
            id:4,
            username:"Vijay",
            profilepicture:Profile,
            img:Uimg1,
            datetime:moment("20230310", "YYYYMMDD").fromNow(),
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
            like: 22,
            comment:3,
            coverpicture:cover,
            userid:"@vijay98",
            ModelCountryName:"India",
            ModelJobName:"Web Developer in Google",
            ModelJoinedDate:"Joined in 2023-08-12",
            followers:5000
          },
          {
            id:5,
            username:"Lara",
            profilepicture:DPimg4,
            img:img4,
            datetime:moment("20200101", "YYYYMMDD").fromNow(),
            body:"My 4st Post, Have A Dull DayLorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis numquam, ex explicabo tempore eum autem. Distinctio, odit fugiat rerum animi mollitia placeat? At ipsam debitis animi rem suscipit dicta dolor eveniet impedit minus. Quidem odit autem quia facere consectetur vero placeat delectus enim aspernatur",
            like: 44,
            comment:3,
            coverpicture:Cover5,
            userid:"@laralara",
            ModelCountryName:"London",
            ModelJobName:"CEO in Google",
            ModelJoinedDate:"Joined in 2023-04-15",
            followers:3005
          },
          {
            id:6,
            username:"Vijay",
            profilepicture:Profile,
            img:Uimg2,
            datetime:moment("20230618", "YYYYMMDD").fromNow(),
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
            like: 84,
            comment:3,
            coverpicture:cover,
            userid:"@vijay98",
            ModelCountryName:"India",
            ModelJobName:"Web Developer in Google",
            ModelJoinedDate:"Joined in 2023-08-12",
            followers:5000
          },
          {
            id:7,
            username:"Kenny",
            profilepicture:DPimg5,
            img:img5,
            datetime:moment("20230505", "YYYYMMDD").fromNow(),
            body:"My 5st Post, Have A Awesome Day Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum laborum necessitatibus ex",
            like: 30,
            comment:3,
            coverpicture:Cover7,
            userid:"@kenny80",
            ModelCountryName:"South Africa",
            ModelJobName:"Full Stack Web Developer in Twitter",
            ModelJoinedDate:"Joined in 2020-08-09",
            followers:626
          },
          {
            id:8,
            username:"Vijay",
            profilepicture:Profile,
            img:Uimg3,
            datetime:moment("20230219", "YYYYMMDD").fromNow(),
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
            like: 340,
            comment:3,
            coverpicture:Cover8,
            userid:"@vijay98",
            ModelCountryName:"India",
            ModelJobName:"Web Developer in Google",
            ModelJoinedDate:"Joined in 2023-08-12",
            followers:5000

          },
          {
            id:9,
            username:"Reyana",
            profilepicture:DPimg6,
            img:img6,
            datetime:moment("20230404", "YYYYMMDD").fromNow(),
            body:"My 6st Post, Have A Half Day Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum laborum necessitatibus ex dolor reiciendis, consequuntur",
            like: 844,
            comment:3,
            coverpicture:Cover9,
            userid:"@reyanaRey",
            ModelCountryName:"Russia",
            ModelJobName:"Back End Developer in Microsoft",
            ModelJoinedDate:"Joined in 2020-02-29",
            followers:3599
           }
        ]
      )

      const [body,setBody] =useState("")
      const [importFile,setImportFile] =useState("")
      

      const handleSubmit =(e)=>{
        e.preventDefault()
        
        
        const id =posts.length ? posts[posts.length -1].id +1 :1
        const username="Vijay"
        const profilepicture=Profile
        const datetime=moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()
        const img =images ? {img:URL.createObjectURL(images)} : null
        
        const obj ={id:id,
                   profilepicture:profilepicture,
                   username:username,
                   datetime:datetime,
                   img:img && (img.img),
                   body:body,
                   like:0,
                   comment:0
                  }

        

        const insert =[...posts,obj]
        setPosts(insert)
        setBody("")
        setImages(null)

      }
   
   const [search,setSearch] =useState("")

    
  const [following,setFollowing] =useState("")
        
  const [showMenu,setShowMenu] =useState(false)
  const [images,setImages] =  useState(null)

  return (
    <div className='interface'>
        <Nav 
        search={search}
        setSearch={setSearch}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        />

    <div className="home">
   
        <Left />

        <Middle 
        handleSubmit={handleSubmit}
        body ={body}
        setBody ={setBody}
        importFile ={importFile}
        setImportFile ={setImportFile}
        posts={posts}
        setPosts={setPosts}
        search={search}
        setFriendsProfile={setFriendsProfile}
        images={images}
        setImages={setImages}

        />

        <Right
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        following={following}
        setFollowing={setFollowing}
        />
    </div>

    </div>
  )
}

export default Home