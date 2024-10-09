// eslint-disable-next-line
import React, { useState } from "react";
import {Link } from "react-router-dom";


function Header(){

    
    const [isOpen, setIsOpen] = useState(false);

   function toggleMenu(){
    setIsOpen(!isOpen);
   }


   const phoneNumber = "93785007849";
   const message = "Hello, I am interested in your product!";
   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`


    return <header className="header">
        <div className="logo">
             <img src="/image/logo.jpg" alt="logo"/>
        </div>
        <nav>
            <ul className={isOpen ? 'active' : null}>
                <li> <Link to='/'><a href="#home" >Home</a></Link> </li>
                <li> <a href="#about" > <Link to='/'>About</Link> </a> </li>
                <li> <Link to='/'>Content</Link> </li>
                <li> <a href="#about" ><Link to='/'>Services</Link></a> </li>
                <li> <a href={whatsappLink} >Contact</a> </li>
            </ul>
        </nav>
        <dev  className="humberger" onClick={toggleMenu} >
            <span></span>
            <span></span>
            <span></span>
        </dev>
    </header>
}

export default Header;