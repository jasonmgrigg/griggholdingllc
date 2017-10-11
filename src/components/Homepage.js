import React, { Component } from 'react';
import '../styles/homepage.css';
import Header from './Header.js'
import Body from './Body.js'
import AboutUs from './AboutUs.js'
import Footer from './Footer.js';


class Homepage extends Component {
  constructor(props) {
    super(props);
}



  render() {
    return (
      <div>
      <Header />
      <Body />
      <AboutUs />
      <Footer />
      </div>
    );
  }
}

export default Homepage;
