import {LOGIN_USER_SUCCESS,AUTH_FAIL, REGISTER_USER_SUCCESS, SETLOADING, GET_AUTH_USER, LOGOUT} from '../const';
import axios from "axios";


//SignIn user
export const signin = (formData) => async (dispatch) => {
    dispatch({
        type:SETLOADING,
    })
        try {
        
        let { data } = await axios.post("/auth/signIn", formData);
        // console.log(data);
        localStorage.setItem("token",data.token)
        dispatch(
            {
                type: LOGIN_USER_SUCCESS,
                payload: data //email or username and password
            }
        )
    } catch (error) {
        console.dir(error)
        const res = error.response.data;
        if (Array.isArray(res)) {
          res.forEach((elt) => {
            
            var errorEl = elt.msg;
            alert(errorEl);
          });
        };
        dispatch({
            type:AUTH_FAIL,
           
        })
    
    }
    }

//SignUp User
export const signup = (formData) => async (dispatch) => {
    try {
        
        let { data } = await axios.post("/auth/signUp", formData, {
            headers: {
                
                "Content-type": "multipart/form-data",
            }  }   );
        console.log(data);
        localStorage.setItem("token",data.token)
        dispatch(
            {
                type: REGISTER_USER_SUCCESS,
                payload: data //User
            }
        )
    } catch (error) {
        console.dir(error)
        // const res = error.response.data;
        // if (Array.isArray(res)) {
        //   res.forEach((elt) => {
            
        //     var errorEl = elt.msg;
        //     alert(errorEl);
        //   });
        // };

        dispatch({
            type:AUTH_FAIL,
           
        })
    
    }
    }
//LOGOUT user
export const logout = () => async(dispatch) =>{
   
  
   dispatch({
       type: LOGOUT,
    
   })
   
   
}
    
//Get Auth User
export const getAuthUser = () => async(dispatch) =>{
    // dispatch({
    //     type:SETLOADING,
    // })
    const config = {
        headers: {
            Authorization:localStorage.getItem("token")
        },
    }
    try {
        const {data} = await axios.get("/auth/me", config)
   dispatch({
       type: GET_AUTH_USER,
       payload: data
   })
   console.log(data)
   
    } catch (error) {
        dispatch({
            type: AUTH_FAIL
        })
    }
}