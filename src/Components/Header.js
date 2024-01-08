import React from 'react'
import './Header.css'
import { Container } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
const Header = () => {
    const Navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem('currentUser')
        localStorage.removeItem('currentId')
        sessionStorage.removeItem('token')

        Navigate('/')

    }
  return (
    <div className='cv'>
        <Container>
    <header>
            <div className="logo">
                <img className='w3' src="https://i.postimg.cc/HnWhxJxB/png-clipart-computer-icons-brand-logo-technology-computer-lab-blue-text-thumbnail.png" alt="Company Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a onClick={logout} href="#">LOGOUT</a></li>
                </ul>
            </nav>
        </header>

        </Container>

    </div>
  )
}

export default Header