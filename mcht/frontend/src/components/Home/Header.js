import React, {useState} from 'react';
import Agent from '../assets/a5f1d5d4-6289-4382-adf7-181dc6962170.png';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className='header-content'>
      <div className='agent flex w-full justify-center mt-16 flex-col items-center'>
        <img src={Agent} alt="Agent" className='w-[80px] md:w-[110px] rounded-full'/>
        <div className='text-white flex justify-center w-full flex-col items-center mt-4'>
            <div><h3>Mike Collier Home Team</h3></div>
            <div className='text-center mt-2'><p>Your Trusted Partner for Finding Your Dream Home</p></div>
        </div>
      </div>
      <div className='header-search'>
        <form>
           <div>
            <div>

            </div>

           </div>
        </form>
      </div>
    </div>
  )
}

export default Header;
