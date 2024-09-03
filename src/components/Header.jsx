import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
      <MDBNavbar light className='navbar'>
        <MDBContainer>
          <MDBNavbarBrand href='#' className='nav text-light fs-4 fw-bold'>
            <img
              src='https://moein.video/wp-content/uploads/2022/12/Telegram-Logo-GIF-Telegram-Icon-GIF-Royalty-Free-Animated-Icon-GIF-1080px-after-effects-project.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            SHOW-HIDE
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
