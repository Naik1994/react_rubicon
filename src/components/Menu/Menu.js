import React, {Component} from 'react';
import Logo from './Images/rxjavalogo.png';
import Icon from './Images/Catalog_Master_Icon.svg';
import './Menu.css';

class Menu extends Component{
  dropdownFilter = () => {
    document.querySelector(".dropdown1").style.display === "block"
    ? document.querySelector(".dropdown1").style.display = "none"
    : document.querySelector(".dropdown1").style.display = "block";
  }

  render() {
    return(
      <div id="mySidenav" className="sidenav">
        <div className="user-panel pb5">
          <div className="user_profile_circle">
            <img alt="" src={Logo} />
          </div>
          <div className="info">
            <div className="role-name pr4" onClick = {this.dropdownFilter}>Superadmin<i className="down"></i></div>
            <div className="dropdown1">
            	<div className="triangle-with-shadow"></div>
              <ul className="pa0 ma0 hover">
                <li className="active">My Profile</li>
                <li className="active1">Change Password</li>
                <li className="active2" onClick = {() => this.props.onRouteChange('signin')}>Logout</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='menu-list f6 fw5 tl'>
          <div id="menus-list">
            <div className="sidebar-menu">
              <div className="menu-list">
                <span>
                  <a routerlinkactive="active" href="#active">
                    <i className="menu-icons">
                      <img src={Icon} alt="" />
                    </i>
                    <span>Dashboard</span>
                  </a>
                  <div className="treeview-menu">
                  </div>
                </span>
                <span>
                  <a routerlinkactive="active" href="#active" className="dropdown-btn" onClick={this.props.dropdown}>
                    <i className="menu-icons">
                      <img src={Icon} alt="" />
                    </i>
                    <span>Order Management</span>
                  </a>
                  <div className="nav-dropdown" id="myDropdown">
                      <a href="#active">Warehouse Order Panel</a>
                      <a href="#active">Store Panel</a>
                      <a href="#active">Order Tracking</a>
                  </div>
                </span>
                <span>
                  <a routerlinkactive="active" href="#active">
                    <i className="menu-icons">
                      <img src={Icon} alt="" />
                    </i>
                    <span>Catalog Management</span>
                  </a>
                  <div className="treeview-menu">
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
