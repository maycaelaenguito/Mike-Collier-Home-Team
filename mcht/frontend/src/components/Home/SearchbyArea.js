import React from 'react';
import './Sba.css';

const SearchbyArea = () => {
  return (
    <div className='w-full'>
      <div className="searchby-area-container flex justify-center items-center flex-col">
        <div className="sba-header uppercase mt-10">
            <h1 className='font-light'>Search by Area</h1>
        </div>
        <div className="areas-container w-full flex flex-col justify-center items-center text-white px-4">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full place-items-center'>
          <div className="city area-orlando flex justify-center items-center">
              <div className='flex justify-center items-center flex-col'>
                <h5>Orlando</h5>
                <div className=' vl'>
                  <button className='px-3 py-1 hidden'>
                    View Listings
                  </button>
                </div>
              </div>
            </div>
            <div className="city area-sanford flex justify-center items-center">
              <div>
                <h5>Sanford</h5>
              </div>
            </div>
            <div className="city area-ocala flex justify-center items-center">
              <div>
                <h5>Ocala</h5>
              </div>
            </div>
            <div className="city area-winterhaven flex justify-center items-center">
              <div>
                <h5>Winter Haven</h5>
              </div>
            </div>
            <div className="city area-leesburg flex justify-center items-center">
              <div>
                <h5>Leesburg</h5>
              </div>
            </div>
            <div className="city area-daytona flex justify-center items-center">
              <div>
                <h5>Daytona</h5>
              </div>
            </div>
            <div className="city area-lakeland flex justify-center items-center">
              <div>
                <h5>Lakeland</h5>
              </div>
            </div>
            <div className="city area-deltona flex justify-center items-center">
              <div>
                <h5>Deltona</h5>
              </div>
            </div>
            <div className="city area-clermont flex justify-center items-center">
              <div>
                <h5>Clermont</h5>
              </div>
            </div>
            <div className="city area-kissimmee flex justify-center items-center">
              <div>
                <h5>Kissimmee</h5>
              </div>
            </div>
            <div className="city area-tampa flex justify-center items-center">
              <div>
                <h5>Tampa</h5>
              </div>
            </div>
            <div className="city area-wintergarden flex justify-center items-center">
              <div>
                <h5>Winter Garden</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchbyArea
