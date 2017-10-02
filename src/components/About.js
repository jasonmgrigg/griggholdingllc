import React, { Component } from 'react';
import '../styles/contact.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class About extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="address1">About Placeholder</div>
      <Footer />
      </div>
    );
  }
}

export default About;
