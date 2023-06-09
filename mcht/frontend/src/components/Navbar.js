import React, { useState } from 'react';
import Logo from './assets/Logo.png';
import './Navbar.css';
import {RxHamburgerMenu} from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar w-full flex justify-between'>
      <div className="exp-logo lg:pl-10 xl:pl-36 pl-5">
        <img src={Logo} alt="EXP Logo" className='w-[100px] md:w-[110px] lg:w-[120px] xl:w-[150px]'/>
      </div>
      <div className="nav-menu hidden lg:flex">
        <ul className='flex flex-row uppercase mr-16 lg:mr-10 xl:mr-36 '>
          <li>Property Search</li>
          <li>Free Home Evaluation</li>
          <li>Meet Our Team</li>
          <li>Area Info</li>
          <li>Buying A Home</li>
          <li>Selling A Home</li>
        </ul>
      </div>
      <div className="hamburger-menu hidden">
      <li>Property Search</li>
          <li>Free Home Evaluation</li>
          <li>Meet Our Team</li>
          <li>Area Info</li>
          <li>Buying A Home</li>
          <li>Selling A Home</li>
      </div>
      <div className="hamburger-toggle rounded border-solid border-2 border-white w-fit p-1 h-fit mr-3 lg:hidden" style={{color: "white"}}>
          <RxHamburgerMenu toggled={isOpen} toggle={toggleMenu} size={23}/>
      </div>
    </div>
  )
}

export default Navbar
