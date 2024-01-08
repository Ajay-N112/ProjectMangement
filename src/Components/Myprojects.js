import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectApi } from '../service/allApi';

function Myprojects() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    // state of image store
    const [preview,setPreview]=useState("")
const [token,setToken]=useState("")
    const [projectInputs,setProjectInputs]=useState({
      title:"",overView:"",gitHub:"",website:"",projectImage:"",languages:""
    })
    const setInputs=(e)=>{
      const {value,name}=e.target
      setProjectInputs({...projectInputs,[name]:value})
    }

// useEffect(()=>{
// if(projectInputs.projectImage){
//   setPreview(URL.createObjectURL(projectInputs.projectImage))
// }
// },[projectInputs.projectImage])
useEffect(() => {
  if (projectInputs.projectImage) {
    setPreview(URL.createObjectURL(projectInputs.projectImage));
  }
}, [projectInputs.projectImage]);

// useEffect(()=>{
// if(localStorage.getItem("token")){
//   setToken(localStorage.getItem("token"))
// }
// else{
//   setToken("")
// }
// },[])
useEffect(() => {
  if (localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));
  } else {
    setToken("");
  }
}, []);

// console.log(token);

//     console.log(projectInputs);

    const handleAdd=async(e)=>{
      e.preventDefault();
      const {title,overView,gitHub,website,projectImage,languages
    }=projectInputs
    if(!title || !overView || !gitHub || !website || !projectImage || !languages){
      alert('All fields are required')
    }
    else{
      // header
      const headerConfig={
        "content-Type":"multipart/form-data",
        "access_token":`Bearer ${token}`
      }
      // body
const reqBody=new FormData()
reqBody.append("title",title)
reqBody.append("overView",overView)
reqBody.append("gitHub",gitHub)
reqBody.append("website",website)
reqBody.append("projectImage",projectImage)
reqBody.append("languages",languages)
const result=await addProjectApi(reqBody,headerConfig)
console.log(result);
if(result.status==200){
  alert(`${result.data.title}`)
}

else{
  alert(result.response.data)
}
    }
    }
  return (
    <div>

<Row className='mt-5'>
                        <Col><h5>My Projects</h5></Col>
                        <Col>
                            <Link className='btn btn-dark'    onClick={handleShow}>Add Projects</Link>
                        </Col>
                    </Row>
                    <div className='c1  border p-3 mt-3'>
                        <Row>
                            <Col>
                                <span>Project Title</span>
                            </Col>
                            <Col className='t1  text-end '>
                                <Link className='text-end text-dark'> <i class="fa-brands fa-github"></i></Link>
                                <Link className='text-end me-5 ms-5 text-dark'><i class="fa-regular fa-pen-to-square"></i></Link>
                                <Link className='text-end text-dark'><i class="fa-solid fa-trash"></i></Link>
                            </Col>
                        </Row>


                        <Modal show={show} onHide={handleClose}  className='w-100'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body >
       

            <Row>
                <Col >
                <label htmlFor="img2">
                  <input onChange={(e)=>setProjectInputs({...projectInputs,["projectImage"]:e.target.files[0]})} type="file" id='img2' style={{display:"none"}}  />
<img style={{width:"250px", height:"250px"}} src={preview?preview:"https://i.postimg.cc/y6jFQzj4/Whats-App-Image-2023-11-09-at-09-11-28-4f760bb8.jpg"} alt="" />

</label>
                </Col>
                <Col>
                <input name='title' onChange={(e)=>setInputs(e)} type="text" className='form-control mt-2' placeholder='Project Name' />
                <input name='languages' onChange={(e)=>setInputs(e)} type="text" className='form-control mt-2' placeholder='Language Used' />
                <input name='gitHub' onChange={(e)=>setInputs(e)} type="text" className='form-control mt-2' placeholder='GitHub Link' />
                <input name='website' onChange={(e)=>setInputs(e)} type="text" className='form-control mt-2' placeholder='Website Link' />
                <input name='overView' onChange={(e)=>setInputs(e)} type="text" className='form-control mt-2' placeholder='overView' />

                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handleAdd(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                      
                    </div>
                    <div>
                <p className='ms'>No Projects Uploaded!</p>
            </div>
    </div>
  )
}

export default Myprojects


