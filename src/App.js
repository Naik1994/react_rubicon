import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';
import Filter from './components/Filter/Filter';
import Cards from './components/Cards/Cards';
import Signin from './components/Signin/Signin';
import Menu from './components/Menu/Menu';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions = {
  "particles": {
      "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
      },
      "size": {
          "value": 3,
          "anim": {
            "speed": 40
          }
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  openMenu = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("root").style.background = "rgba(0,0,0,0.4)";
  }

  closeMenu = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("root").style.background = document.body.style.background;;
  }

  dropdown = () => {
    document.querySelector(".nav-dropdown").style.display === "block"
    ? document.getElementById("myDropdown").style.display = "none"
    : document.querySelector(".nav-dropdown").style.display = "block";
  }

  render() {
    return(
      <div className="App">
        <Particles className="particles"
          params={particleOptions}
        />
        {
          this.state.route === 'signin'
          ? <Signin onRouteChange={this.onRouteChange}/>
          : <div>
              <Navbar openMenu={this.openMenu}/>
              <div className="body">
                <div className="container pv2">
                  <Timer />
                  <Filter />
                </div>
                <Cards closeMenu={this.closeMenu} />
                <Menu dropdown={this.dropdown} onRouteChange={this.onRouteChange}/>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default App;
