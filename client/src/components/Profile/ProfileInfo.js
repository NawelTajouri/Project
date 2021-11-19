import React from 'react'
import { useSelector } from 'react-redux';
import { Avatar } from "@material-ui/core";
import { getallposts } from './../../redux/actions/postActions';


const ProfileInfo = ({user,post}) => {
  
 
    return (
       
        <div style={{width:"500px"}}>
            
        <div style={{
           margin:"18px 0px",
            borderBottom:"1px solid grey"
        }}>
             <div className="icons-bis">
            <Avatar alt="Remy Sharp" src={`/${user.picture}`} />
         
          <br />
          </div>
            <h6>{user.name +' '+ user.lastName}</h6>
            <div style={{display:"flex", justifyContent:"space-between", width:"50%"}}>
                <h6>{post.length} posts</h6>
                {/* <h6>{user.followers.length} followers</h6>
                <h6>{user.following.length} following</h6> */}
            </div>
        </div>

        </div>
    )

   
}

export default ProfileInfo
