// import React, {useState} from 'react';
import Agent from '../assets/Agent.png';
import './Header.css';
import HeaderSearch from './HeaderSearch';
import {IoMdArrowRoundDown} from 'react-icons/io'


const Header = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen);
    // };
  return (
    <div className='header-content'>
      <div className='agent flex w-full justify-center mt-16 flex-col items-center'>
        <img src={Agent} alt="Agent" className='w-[80px] md:w-[110px] rounded-full'/>
        <div className='text-white flex justify-center w-full flex-col items-center mt-2'>
            <div className='text-center'><h3>Mike Collier Home Team</h3></div>
            <div className='text-center mt-2'><p>Your Trusted Partner for Finding Your Dream Home</p></div>
            <div className='hidden md:flex re'><p>exp Realty in Central Florida</p></div>
        </div>
      </div>
      <div className='header-search'>
        <HeaderSearch/>
      </div>
      <div className='advanced-form-btn flex justify-center items-center mt-3 mb-3 lg:mb-6'>
        <button className='flex flex-row justify-center items-center'>
          More Options 
          <span className='pl-2 font-bold'><IoMdArrowRoundDown/></span>
          </button>
      </div>
      <div className='areas flex justify-center items-center h-[14vh] lg:h-[9vh] text-center pt-3 mt-1 text-xl font-light'>
        <p>Serving Central Florida & Areas Surrounding Disney</p>
      </div>
    </div>
  )
}

export default Header;
