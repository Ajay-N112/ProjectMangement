import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

// register
export const registerApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/user/register`,body,"")
}


// Login 
export const loginApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/user/login`,body,"")
}


// update pprofile
export const updateProfile=async(body,headers,id)=>{
    return await commonApi('PUT',`${BASE_URL}/user/update-profile/${id}`,body,headers)
}


// get Profile
export const getProfileApi=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/user/getProfile/${id}`,{},"")
}


// add new projects
export const addProjectApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/user/add-projects`,body)
}


// get user projects
// export const userProjectsApi=async(headers,id){
//     return await commonApi('GET',`${BASE_URL}/user/get-user-projects/${id}`,"",headers)
// }
// get all projects
// export const allProjectsApi=async()=>{
// return await commonApi('GET',`${BASE_URL}/user/get-all-projects`,"","")
// }