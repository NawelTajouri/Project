import React from "react";
// import Jumbotron  from 'react-bootstrap/lib/Jumbotron';
import Navbar from "../Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';

export default () => {
  return (
   <div className="body">

     <Navbar />
     
      <h1>Welcome</h1>
      <p>
        Here You can share with all the world your travel experience </p> 
        <p>Discover the world through videos and posts 
      </p>
      
    </div>
    
  );
}