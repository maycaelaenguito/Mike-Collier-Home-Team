import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import './Navbar.css';
import {RxHamburgerMenu} from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar w-full flex justify-between'>
      <div className="exp-logo pl-4">
        <img src={Logo} alt="EXP Logo" className='w-[100px]'/>
      </div>
      <div className="nav-menu sm: hidden">
        <ul>
          <li>Property Search</li>
          <li>Free Home Evaluation</li>
          <li>Meet Our Team</li>
          <li>Area Info</li>
          <li>Buying A Home</li>
          <li>Selling A Home</li>
          <li>Market and Community Update</li>
        </ul>
      </div>
      <div className="hamburger-menu hidden">
      <li>Property Search</li>
          <li>Free Home Evaluation</li>
          <li>Meet Our Team</li>
          <li>Area Info</li>
          <li>Buying A Home</li>
          <li>Selling A Home</li>
          <li>Market and Community Update</li>
      </div>
      <div className="hamburger-toggle rounded border-solid border-2 border-white w-fit p-1 h-fit mr-3" style={{color: "white"}}>
          <RxHamburgerMenu toggled={isOpen} toggle={toggleMenu} size={23}/>
      </div>
    </div>
  )
}

export default Navbar
