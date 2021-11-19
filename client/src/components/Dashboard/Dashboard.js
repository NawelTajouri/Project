import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAuthUser} from '../../redux/actions/authAction';
import SideBar from "../AuthForm/SideBar";
import axios from "axios";
import NavDash from './../AuthForm/NavDash';
import { getallposts } from './../../redux/actions/postActions';
import AllPosts from "../Home/AllPosts";
import './Dashboard.css'
const Dashboard = () => {
  const dispatch = useDispatch();
 
   const post = useSelector((state) => state.postReducer.post);
    useEffect(() => {
      dispatch(getallposts());
      
    },[dispatch]);
    console.log(post)


  return (
    <div className="Accueil">
      <div className="Nav">
      <div className="side-bar">
      <SideBar/>
      </div>
      <div className="dash-bar">
      <NavDash/>
      </div>
      </div>
    <div>
    
      
    
    {post ?  <div className="gallery">
               {
                   post.map((post1, i)=>{
                       return(
                          <div className="post-card"> 
                        <AllPosts key={i} item={post1}/>
                         
                          </div>
                       )
                   })
               }</div>
               :<h1>Dashboard</h1>           
            

           
           }
    </div>
    </div>
  );
};

export default Dashboard;