import React from 'react';
import './Home.css';
import {FaSignInAlt} from 'react-icons/fa';
import {ImFacebook} from 'react-icons/im';
import {TfiYoutube} from 'react-icons/tfi';
import {TiSocialInstagram} from 'react-icons/ti';
import {SiGmail} from 'react-icons/si';
import Navbar from './Navbar'


    /**
     * Home Component:
     * Renders the first page/default section of the website.
     */

const Home = () => {
  return (
  <section className='home'>
      <div className='header'>
        {/* HEADER TOP RIGHT SOCIAL ICONS */}
        <div className='header-topleft-icons flex justify-end xl:mr-8 pb-4'>
          <ul className='flex w-[10rem] mt-2 justify-evenly mr-2'>
            <li className='text-white flex'>
              <span className='flex justify-center items-center login-icon'>
                <FaSignInAlt size={15} style={{ fontWeight: 'bolder' }} />
              </span>
              <span className='pl-2 login-text'>Login</span>
            </li>
            <li className='border-solid border-2 border-white w-fit rounded-full text-white flex justify-center items-center social-icons'>
              <SiGmail size={12} />
            </li>
            <li className='border-solid border-2 border-white w-fit rounded-full text-white flex justify-center items-center social-icons'>
              <ImFacebook size={12} />
            </li>
            <li className='border-solid border-2 border-white w-fit rounded-full text-white flex justify-center items-center social-icons'>
              <TfiYoutube size={12} />
            </li>
            <li className='border-solid border-2 border-white w-fit rounded-full text-white flex justify-center items-center social-icons'>
              <TiSocialInstagram size={12} />
            </li>
          </ul>
        </div>
        {/* NAVBAR */}
        <div>
          <Navbar/>
        </div>
        {/* HEADER CONTENT */}
      </div>
  </section>
  );
};

export default Home
