import axios from "axios";
import { FOLLOW_USER, GET_USER_PROFILE } from './../const/index';
export const getuserprofile = (userid) => async(dispatch) =>{

    const config = {
        headers: {
            Authorization:localStorage.getItem("token")
        },
    }
    try {
        const {data} = await axios.get("/user/profileuser/"+ userid, config)
   dispatch({
       type: GET_USER_PROFILE,
       payload: data
   })
   console.log(data)
   
    } catch (error) {
        console.log(error)
        
    }
}

//Follow a user
export const followuser =(userid) => async(dispatch)=>{
    
    const config = {
        headers: {
            Authorization:localStorage.getItem("token")
        },
    }
    try {
        const {data} = await axios.get("/user/follow",{
            followId:userid
        }, config)
        localStorage.setItem("user",JSON.stringify(data))
   dispatch({
       type: FOLLOW_USER,
       payload:{following:data.following,followers:data.followers}
   })
   console.log(data)
   
    } catch (error) {
        console.log(error)
        
    }
}