import React, {Component} from 'react';
import './Filter.css';

class Filter extends Component {
  dropdownFilter = () => {
    document.querySelector(".dropdown").style.display === "block"
    ? document.querySelector(".dropdown").style.display = "none"
    : document.querySelector(".dropdown").style.display = "block";
  }

  render() {
    return(
      <div>
        <button className="mr4 btn" href="#0" onClick = {this.dropdownFilter}>
          <span className="date-mtd">WTD<i className="down"></i></span>
        </button>
        <div className="dropdown">
        	<div className="triangle-with-shadow"></div>
          <ul className="pa0 ma0 hover">
            <li className="active">WTD</li>
            <li className="active1">MTD</li>
            <li className="active2">YTD</li>
            <li daterangepicker="" className="active3">CUSTOM</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
