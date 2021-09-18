import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <section id="home"> 
    <nav>
        <div class="container">
            <div class="navbar">
                <h1>ZIPPY</h1>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#blog"> BLOG</a></li>
                    <li><a href="#price-table">ABOUT</a></li>
                    <li><a href="#team">SERVICE</a></li>
                   <button className='btn primary-btn'>
                       CLICK ME
                   </button>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
     </section>
    )
}

 
