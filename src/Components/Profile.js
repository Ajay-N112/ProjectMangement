import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getProfileApi, updateProfile } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../service/baseUrl';


function Profile({ userName }) {

  const [show, setShow] = useState(false);
const [preview,setPreview]=useState("")
const [token,setToken]=useState("")
  const handleClose = () => {
    setShow(false);
    // setProfile({ image:"", gitHub: "", linkedIn: "" })
  }

  const handleShow = () => setShow(true);


  const [profile, setProfile] = useState({
    user: localStorage.getItem("currentUser"),image:"" , gitHub: "", linkedIn: ""
  })

  // Api call

  // const getProfile = async () => {
  //   // id
  //   if (localStorage.getItem("currentId")) {
  //     let id = localStorage.getItem("currentId");
  //     const result = await getProfileApi(id);
  //     console.log(result.data);
  //     setProfile({...Profile,
  //    user:result.data.userName,
  //    gitHub:result.data.gitHub,
  //    linkedIn:result.data.linkedIn,
  //     })
  //   }
  // };
  const getProfile = async () => {
    // id
    if (localStorage.getItem("currentId")) {
      let id = localStorage.getItem("currentId");
      const result = await getProfileApi(id);
  
      if (result.data) {
        setProfile({
          user: result.data.userName || '',
          gitHub: result.data.gitHub || '',
          linkedIn: result.data.linkedIn || '',
          Updatedimg:result.data.profile || '',
        });
      }
    }
  };
  

  useEffect(() => {
    getProfile();
    // store Token in a State
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  }, []);
console.log(profile);

  const setData = (e) => {
    const { value, name } = e.target
    setProfile({ ...profile, [name]: value })
  }
  // console.log(profile);

useEffect(()=>{
  if(profile.image){
    setPreview(URL.createObjectURL(profile.image));
  }
},[profile.image])
console.log(preview);

  const handleUpdate = async (e) => {
    e.preventDefault()
    const { user,image, gitHub, linkedIn } = profile
    if (!user || !gitHub || !linkedIn) {
      alert('Please fill all fields')

    }
    else {
      // api call
      
      // id
      if (localStorage.getItem("currentId")) {
        const id = localStorage.getItem("currentId")
        console.log(id);

      
        // header
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "access_token": `Bearer ${token}`
        }
        console.log(reqHeader);
        // Body
        const reqBody = new FormData()
        reqBody.append("userName", user)
        reqBody.append("profile",image)
        reqBody.append("gitHub", gitHub)
        reqBody.append("linkedIn", linkedIn)
        console.log(reqBody);

        const response = await updateProfile(reqBody, reqHeader, id)
        console.log(response);
        if (response.status == 200) {
          // alert("Successfully updated");
          toast.success(`successfully Updated `, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
            theme: "dark",
            });
          handleClose()
          getProfile()
          // Update new username in local storage
          localStorage.setItem("currentUser",profile.user)
        }
        else {
          console.log("profile updated successfully");
        }
      }
    }
  }
  console.log(profile);

  return (
    <div>

      <div>
        <Row>
          <Col>
            <h3 className='tc'>
              MY PROFILE
            </h3>
          </Col>
          <Col className='text-end'>
            <div>
              <i class="fa-solid fa-circle-check px-3 fa-1x mt-3  text-success"></i>
            </div>
          </Col>
        </Row>
        <div >
          <img  style={{ width: '200px', height:"200px" }} src={preview?preview:"https://i.postimg.cc/qRPR8dGt/download-3.png"} alt="" />
        </div>
        <br />
        <h4>Welcome: <b>{profile.user}</b></h4>
        <h4 className='me-5'>GitHUB:{profile?.gitHub}</h4>
        <h4 className='me-5'>LinkedIn:{profile?.linkedIn}</h4>
        <Link className='m2' style={{ textDecoration: 'none' }} variant='dark' onClick={handleShow}> Edit   <i class="fa-solid fa-arrow-right fa-fade"></i></Link>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="img1" className='text-center'>
              <input
                onChange={(e) => setProfile({ ...profile, ["image"]: e.target.files[0] })}

                id='img1' style={{ display: 'none' }} type="file" />
              <img style={{ width: '100px', height:"100px" }} src={profile?.Updatedimg?`${BASE_URL}/uploads/${profile?.Updatedimg}`:"https://i.postimg.cc/qRPR8dGt/download-3.png"} alt="" />

            </label>

            <div>
              <input value={profile?.user} onChange={(e) => setData(e)} name='user' className='form-control mt-2 ' />
            </div>
            <div>
              <input value={profile?.gitHub} onChange={(e) => setData(e)} name='gitHub' className='form-control mt-2 ' placeholder='GitHUb' />
            </div>
            <div>
              <input value={profile?.linkedIn} onChange={(e) => setData(e)} name='linkedIn' className='form-control mt-2 ' placeholder='LinkedIn' />
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => handleUpdate(e)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>

      <ToastContainer />
    </div>
  )
}

export default Profile