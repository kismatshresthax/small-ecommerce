import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'
export const Head = () => {
    return (
        <>
      
        <main className='main-navbar'>
            <nav className="navbar navbar-expand-lg navbar-light  py-3 shadow-sm ">
                <div className="container">
                    <a id='kist' className="navbar-brand fw-bold fs-4" href="#"><h2> Kist Collection </h2></a>
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                            <li className="nav-item">
                            <Link to='/products'> <button>Products</button> </Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/about'>  <button> 
                                About</button></Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/contact'><button>Contact</button> </Link>
                            </li>
                        </ul>
<div className="buttons">
   <button className='btn'><a href="" className="btn btn-outline-dark">  Login</a></button> 
    <button className='btn'><a href="" className="btn btn-outline-dark">  Register</a></button>
  <button className='btn'><a href="" className="btn btn-outline-dark"> Cart</a></button>

</div>
                        
                    </div>
                </div>
            </nav>
            </main>
            
        </>
    )
}
