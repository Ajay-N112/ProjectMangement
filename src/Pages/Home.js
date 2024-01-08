import React, { useState } from 'react'
import './Home.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'



const Home = () => {
  const [isLoggedIn,setLoggedIn]=useState(false)
  useState(()=>{
if(localStorage.getItem("currentId")){
  setLoggedIn(true);
}
  },[])
  // console.log(isLoggedIn);

  return (
    <div  className='b1'>
        <Container >
        <Row   >
           
            <Col className='b2'>
        <h1 className='b3'>
            Science Fair
        </h1>
    
        science fairs are usually held and sponsored by public and private primary and secondary 
        schools to give the students within those schools the opportunity to do independent research
         and to decide which of their students' research is good enough to represent their school at the regional fair.
         Fair refers to an event at which people or businessmen. show and sell their goods. So, a computer fair is a. public display of 
         computers held at a particular place. for publicity
         <br />
         <br />
         {/* {isLoggedIn ?
       <Link className='m2' style={{textDecoration:'none'}} to={'/dashboard'} variant='dark'> Explore   <i class="fa-solid fa-arrow-right fa-fade"></i></Link>
              <Link className='m2' style={{textDecoration:'none'}} to={'/login'} variant='dark'> Get Start   <i class="fa-solid fa-arrow-right fa-fade"></i></Link>
         } */}
         {isLoggedIn ? (
  <Link className='m2' style={{ textDecoration: 'none' }} to={'/dashboard'} variant='dark'>
    Explore <i className="fa-solid fa-arrow-right fa-fade"></i>
  </Link>
) : (
  <Link className='m2' style={{ textDecoration: 'none' }} to={'/login'} variant='dark'>
    Get Started <i className="fa-solid fa-arrow-right fa-fade"></i>
  </Link>
)}

            </Col>
            <Col>
            <img className='img1' src="https://i.postimg.cc/wBRHpFmK/png-transparent-science-and-technology-science-and-technology-tree-ppt-material.png" alt="" /> 
            </Col>
          
        </Row>
        </Container>
        <br />
        <br />
        <div>
          <h1 className='text-center'>Explore Projects</h1>
        </div>
        <br />

<div>
  <Container>
    <marquee scrollAmount={25}>
      <div className='d-flex justify-content-between'>
 <div>
  <ProjectCard></ProjectCard>
  </div>

  <div>
  <ProjectCard></ProjectCard>
  </div>

  <div>
  <ProjectCard></ProjectCard>
  </div>
  </div>
  </marquee>
  </Container>
</div>
<div className='text-center m-5'>
 <Link to={'/Projects'}
  style={{textDecoration:'none', color:'black'}} >
 <h6>View More Projects <i class="fa-solid fa-arrow-right fa-fade"></i></h6>
 </Link>
</div>

    </div>
  )
}

export default Home