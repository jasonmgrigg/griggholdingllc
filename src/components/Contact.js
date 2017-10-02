import React, { Component } from 'react';
import '../styles/contact.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class Contact extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="address1">Grigg Holdings, LLC</div>
        <div className="address2">1181 Great Ridge Parkway</div>
        <div className="address3">Chapel Hill, NC  27516</div>
        <div className="phone">919-932-0835</div>
      <Footer />
      </div>
    );
  }
}

export default Contact;
