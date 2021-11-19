import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo'
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom';
import AddPost from './AddPost';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPost, logoutpost } from '../../redux/actions/postActions';
import AddNewPost from './PostModal';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import { logout } from '../../redux/actions/authAction';
import './profile.css'

const ProfilePage = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer.user);
    
    const post = useSelector((state) => state.postReducer.post);
useEffect(() => {
  
  dispatch(getPost())
}, [])
const logoutf = () => {
    dispatch(logout());
    dispatch(logoutpost());
  };
if (!user){
  return <Redirect to ='/'/>
 }
 

    return (
        <div>
           <div className="Info-buttons">
               <div className="Info">
            <ProfileInfo user={user} post={post}/>
            </div>
            <div className="buttons">
            <div>
            <Link to="/" exact activeClassName="active-left-nav">
            <button className="logoutbutton" onClick={logoutf}>
             Logout
            </button>
          </Link>
            </div>
            <div>
        <AddNewPost/>
            </div>
            </div>
            </div>
         <div className="gallery" style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around"}}>
        {post.map((item,i)=>{
                       return(
                        
                          <div>
                      
                          <Post key={i} item={item}/>
                          </div>
                       )
                   })
               }
         </div>


</div>
    )
}

export default ProfilePage
