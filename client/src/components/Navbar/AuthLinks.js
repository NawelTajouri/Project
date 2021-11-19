import React from 'react'
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const AuthLinks = () => {
    return (
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as:{" "}
          <Link to="/"> user name </Link>
        </Navbar.Text>
        <Button
          variant="danger"
          className="m-2"
        >
          Logout
        </Button>
      </Navbar.Collapse>
    )
}

export default AuthLinks
