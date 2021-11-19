import React, { useState,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/actions/authAction";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../../App";
const Login = ({ history }) => {
  // const {state,dispatch}=useContext(UserContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //login

    dispatch(signin(formData));
  
    history.push("/dashboard");
  };
  // const isAuth = useSelector((state) => state.authReducer.isAuth);
  // if (isAuth) {
  //   <Redirect to = "/dashboard"/>
  // }

  return (
    <form onSubmit={handleSubmit} className="form signin">
      <h2 className="text-center">Sign in</h2>

      <label>Email address</label>
      <br />
      <input
        onChange={handleChange}
        value={formData.email}
        name="email"
        type="email"
        placeholder="Enter email"
      />
      <br />

      <label>Password</label>
      <br />
      <input
        onChange={handleChange}
        value={formData.password}
        name="password"
        type="password"
        placeholder="Password"
      />
      <br />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Login;
