import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {useParams} from 'react-router-dom'

import { Redirect } from 'react-router';
import ProfileInfo from './ProfileInfo';

import { followuser, getuserprofile } from './../../redux/actions/userActions';
const UserProfile = () => {
    
  const {userid}=useParams();
  console.log(userid)

    const dispatch = useDispatch();
  
    
    const userprofile = useSelector((state) => state.userReducer.userprofile);   
    const postprofile = useSelector((state) => state.userReducer.postprofile);
    
useEffect(() => {
   dispatch(getuserprofile(userid))

    }
, [])

const follow = () => {
  dispatch(followuser(userid))
 
};
console.log(userprofile)
if (!userprofile){
    return <Redirect to ='/dashboard'/>
   }
    return (
<>

        <div>
        <ProfileInfo user={userprofile} post={postprofile}/>
        <button onClick={()=>follow()}>Follow</button>
        <div className="gallery" style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around"}}>
        {postprofile.map((item,i)=>{
                       return(
                       
                          <div>
                       
                          <Post key={i} item={item}/>
                          </div>
                       )
                   })
               }
         </div>


</div>

</>
    )
}

export default UserProfile 
