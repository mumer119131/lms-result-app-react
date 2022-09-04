import React from 'react'
import './header.css'
const Header = () => {
  return (
    <header>
        <nav>
            <h3><i className="fa-solid fa-square-poll-vertical"></i> M Umer | LMS Result</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button><i className="fa-sharp fa-solid fa-bars"></i></button>
        </nav>
    </header>
  )
}

export default Header