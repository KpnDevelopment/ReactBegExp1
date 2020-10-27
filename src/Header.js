import React from 'react';
import './Header.css'

function Header(props){
    return(
        <div className='header-section'>
        
            <a href="#" class="logo"> logo</a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#whyus">Contact Us</a></li>
            </ul>
        </div>
    )
}
export default Header;