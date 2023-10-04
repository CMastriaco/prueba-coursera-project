import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
return (
      <nav>
        <div className="navigation">
            <div className="img-logo">
                <img src="Image-2.png" alt="logo-little-lemon" width="200" height="60"/>
            </div>
            <div className="navigation-ul">
                <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/bookingPage">Reservations</Link></li>
                        <li><Link to="/orderonline">Order Online</Link></li>
                        <li><Link to="/Testimonials">Testimonials</Link></li>
                        <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
      </nav>
    )}
    export default Nav;