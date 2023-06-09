import React from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';


const HeaderSearch = () => {
  return (
    <div className='form-search'>
     <Form method="get" action="">
      <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row w-full">
        <div className="d-flex flex-md-row flex-column">
          <div className="w-[100vw] sm:w-[90vw] md:w-[17vw] lg:w-[15vw]">
            <Form.Label className="visually-hidden ">Location</Form.Label>
            <Form.Control type="text" placeholder="City, Area, Zip, MLS# , or Address" className="location h-[3.5rem] d-flex justify-content-between place-items-center " style={{borderRadius: '0', border: '0', fontSize: '15px'}} />
          </div>

          <div className="dropdown w-[100vw] sm:w-[90vw] md:w-[20vw] lg:w-[12vw]">
            <Dropdown>
                  <label htmlFor="" className='visually-hidden'>Type</label>
                  <Dropdown.Toggle as={Button} variant="light" className="h-[3.5rem] dropdown-toggle w-100 d-flex justify-content-between place-items-center" style={{ borderRadius: '0', borderTop: '.5px solid gainsboro' }}>
                  <span>Nothing Selected</span>
                  <span className="caret"></span>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{borderRadius: '0'}} className="w-[100vw] sm:w-[90vw] md:w-[20vw] lg:w-[12vw]">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className=" flex md:flex-row w-full sm:w-[90vw] md:w-fit">
            <div className="dropdown w-[50vw] sm:w-[45vw] md:w-[12vw] lg:w-[7vw]">
                <Dropdown>
                    <Dropdown.Toggle as={Button} variant="light" className="h-[3.5rem] dropdown-toggle w-100 d-flex justify-content-between place-items-center" style={{borderRadius: '0'}}>
                      Beds
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{borderRadius: '0'}} className="w-[50vw] sm:w-[45vw] md:w-[5vw] lg:w-[5vw]">
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    </Dropdown.Menu> 
                </Dropdown>
              </div>

              <div className="dropdown w-[50vw] sm:w-[45vw] md:w-[12vw] lg:w-[7vw]">
              <Dropdown>
                <Dropdown.Toggle as={Button} variant="light" className="h-[3.5rem] dropdown-toggle w-100 d-flex justify-content-between place-items-center" style={{borderRadius: '0'}}>
                  Baths
                </Dropdown.Toggle>

                <Dropdown.Menu style={{borderRadius: '0'}}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
          </div>

          <div className=" flex md:flex-row w-full sm:w-[90vw] md:w-fit">
            <div className="dropdown w-[50vw] sm:w-[45vw] md:w-[12vw] lg:w-[7vw]">
                <Dropdown>
                    <Dropdown.Toggle as={Button} variant="light" className="h-[3.5rem] dropdown-toggle w-100 d-flex justify-content-between place-items-center" style={{borderRadius: '0'}}>
                      Min
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{borderRadius: '0'}} >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu> 
                </Dropdown>
              </div>

              <div className="dropdown w-[50vw] sm:w-[45vw] md:w-[12vw] lg:w-[7vw]">
              <Dropdown>
                <Dropdown.Toggle as={Button} variant="light" className="h-[3.5rem] dropdown-toggle w-100 d-flex justify-content-between place-items-center" style={{borderRadius: '0'}}>
                  Max
                </Dropdown.Toggle>

                <Dropdown.Menu style={{borderRadius: '0'}}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
          </div>
        </div>

        <div className='search-btn'>
          <Button className="search-button w-[100vw] sm:w-[90vw] md:w-fit h-[3.5rem]" style={{borderRadius: '0'}}>
            <span className='px-6 lg:px-14'>Search</span>
          </Button>
        </div>
      </div>
    </Form>

    </div>
  )
}

export default HeaderSearch
