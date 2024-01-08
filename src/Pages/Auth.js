import React, { useState } from 'react'
import { Col, FloatingLabel, Row } from 'react-bootstrap'
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Auth.css'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = ({register}) => {

const navigate=useNavigate()
  // state to store inputs
  const [user,setUser]=useState({
    userName:"",email:"",password:""
  })

  // state to check validation
  const [unamevalid,setunamevalid]=useState(false)
  const [ename,setename]=useState(true)
  const [pname,setpname]=useState(true)

  // const setInputs=(e)=>{
    
  //   const {name,value}=e.target
  //   if (name=='userName')
  //   if(value.match(/^[a-zA-Z]+$/)){
  //     setunamevalid(false)
  //   setUser({...user,[name]:value})
  //   }
    

  // else{
  //   setunamevalid(true)
  // }
  // }
  const setInputs = (e) => {
    const { name, value } = e.target;
  
    if (name === 'userName') {
      if (value.match(/^[a-zA-Z]+$/)) {
        setunamevalid(false);
        setUser({ ...user, [name]: value });
      } else {
        setunamevalid(true);
      }
    } else {
      setUser({ ...user, [name]: value });
    }
    if (name === 'email') {
      if (value.match( /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
        setename(false);
        setUser({ ...user, [name]: value });
      } else {
        setename(true);
      }
    } else {
      setUser({ ...user, [name]: value });
  }
  if (name === 'password') {
    if (value.match(/^[0-9a-zA-Z]+$/ )) {
      setpname(false);
      setUser({ ...user, [name]: value });
    } else {
      setpname(true);
    }
  } else {
    setUser({ ...user, [name]: value });
  }
  };
  
 
  


console.log(user);




const handleRegister= async(e)=>{
  e.preventDefault()
  const {userName,email,password}=user
  if(!userName || !email || !password){

toast.error('plese fill all Datas!', {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });

  }
  else{
      const result=await registerApi(user)
      console.log(result);
      if (result.status===200){
       
        toast.success(`${result.data.userName} Your account is created successfully!`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });


       
          setUser({userName:"",email:"",password:""})
          navigate('/login')
      }
      else{
      

        toast.error('result.response.data', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
  }
}


const handleLogin= async(e)=>{
  e.preventDefault()
  const {email,password}=user
  if( !email || !password){

toast.error('plese fill all Datas!', {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });

  }
  else{
      const result=await loginApi(user)
      // console.log(result);
      if (result.status===200){
        // store user data in local storage
        sessionStorage.setItem("token",result?.data.token)
        localStorage.setItem("currentUser",result?.data?.user.userName);
        localStorage.setItem("currentId",result?.data?.user._id);
       
        toast.success(`login success `, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });


       
          setUser({email:"",password:""})
          navigate('/')
      }
      else{
      

        toast.error(result.response?.data, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
  }
}



    const isRegistrationForm=register?true:false
  return (
    <div className=' vvt w-50  container bg-light mb-5 mt-5 p-5'>
         <h1 className='zx text-center'>{
            isRegistrationForm?'Science Fiar': 'Science Fiar'
         }
         </h1>
         <br />
         <br />
        <Row>
            <Col>
            <i class="fa-solid fa-angles-left fa-beat-fade"></i>
         <Link className='mt-2' style={{textDecoration:'none', color:'black'}}> 
             Back to Home
             </Link>
           <br />
           <br />
           <br />
           <img className='gg  w-75' 
           src={isRegistrationForm?"https://i.postimg.cc/CL5Dtzt6/Screenshot-8-1.png":"https://i.postimg.cc/CL5Dtzt6/Screenshot-8-1.png"} alt="" />
            
            </Col>
            <Col>
            <h3>{isRegistrationForm?"SIGN IN":"SIGN UP"}</h3>
           


           <div>
{

  isRegistrationForm&&
  <>
 <FloatingLabel controlId="floatingPassword" label="User Name">
 <Form.Control value={user.userName} onChange={(e)=>setInputs(e)} name="userName"
  placeholder="User Name"
 type="text" />
</FloatingLabel>
{ unamevalid &&
<p className='text-success'> Include characters only</p>
}
</>
}
<br />
        <FloatingLabel
      controlId="floatingInput"
      label="Email address"
      className="mb-3"
    >
      <Form.Control value={user.email} onChange={(e)=>setInputs(e)} name="email" type="email" placeholder="" />
    </FloatingLabel> 
    { ename &&
    <p className='text-success'> Email is not vaild</p>
    }
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control value={user.password}  onChange={(e)=>setInputs(e)} name="password"  type="password" placeholder="Password" />
      </FloatingLabel>
      { pname &&
      <p className='text-success'>Invalid password</p>
      }
      <br />
    
     
<div>
  {
    isRegistrationForm?
    // <Button onClick={(e)=>handleRegister(e)} className='btn btn-dark w-100' > Register</Button>
    <Button onClick={(e)=>handleRegister(e)} className='btn btn-dark w-100'>Register</Button>

    :
 <Button onClick={(e)=>handleLogin(e)} className='btn btn-dark w-100'>Login</Button>
  }

<div>
  {
    isRegistrationForm?
    <p>
      Already Have A Account?<Link to={'/login'} style={{textDecoration:'none'}}> Login here</Link>
    </p>:
    <p> New User? <Link to={'/register'}> Sign-up Here</Link></p>
  }
</div>
</div>
</div>
            </Col>
        </Row>
        <ToastContainer />
        </div>
  )
}

export default Auth

