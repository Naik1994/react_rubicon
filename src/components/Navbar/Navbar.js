import React from 'react';
import './Navbar.css'

const Navbar = ({openMenu}) => {
  return(
    <div>
      <nav className="container bb b--white-10">
        <span className="toggle" onClick={openMenu}>&#9776;</span>
        <div className="wrap">
          <p className="f5 pt1 black-90">Welcome back, user !</p>
          <input className="f6 br2 input-reset pa1 mr4 mt2 ba b--gray" placeholder="Search By Order No" type="text" name="search" id="search" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
