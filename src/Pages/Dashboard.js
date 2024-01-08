import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import Profile from '../Components/Profile'
import Myprojects from '../Components/Myprojects'
import Header from '../Components/Header'

const Dashboard = () => {
    const [uname,setUname]=useState("")

    useState(()=>{
        if(localStorage.getItem("currentUser")){
            setUname(localStorage.getItem("currentUser"))
        }
    },[])
    return (
      
        <div className='z1'>
        <Header dashbord></Header>
      
            <Row>
                <Col>
                    <h3>Hey   {uname}</h3>
                   <Myprojects></Myprojects>
                </Col>
                <Col>
              {/* <Profile userName={uname}></Profile> */}
              <Profile userName={uname}></Profile>
                </Col>
              
            </Row>
       
        </div>
        
    )
}

export default Dashboard