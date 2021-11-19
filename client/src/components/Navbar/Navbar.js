import React from 'react'
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import GuestLinks from "./GuestLinks";
import AuthLinks from "./AuthLinks.js";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
const Navigation = () => {
    return (
      
        <Navbar>
          <Navbar.Brand >
            <Link to="/" >
              TravelBlog
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
             <GuestLinks />
          </Navbar.Collapse>
        </Navbar>
    )
    
}

export default Navigation
