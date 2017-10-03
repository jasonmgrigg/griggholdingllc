import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="fullHeader">
        <a className="headerTitle">Grigg Holdings, LLC</a>
        <div className="headerInfo">
          <a href='/'>
            <h3 className="headerSubtitle">Home</h3>
          </a>
          <a href='/contact'>
            <h3 className="headerSubtitle">Contact Us</h3>
          </a>
          <a href='/about'>
            <h3 className="headerSubtitle">About</h3>
          </a>
          <a href='/services'>
            <h3 className="headerSubtitle">Services</h3>
          </a>
          </div>


        </div>
    );
  }
}

export default Header;
