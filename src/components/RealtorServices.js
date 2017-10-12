import React, { Component } from 'react';
import '../styles/services.css';
import Header from './Header.js';
import Footer from './Footer.js';

class RealtorServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div>
        <Header />
        <div className="aboutUsContainer">
          <h1 className="aboutUsTitle">SERVICES FOR REAL ESTATE PROFESSSIONALS</h1>
          <div className="itemContainer">
            <div className="oneServices">
              <h2 className="itemTitle">Services</h2>
              <h3 className="itemText">We offer a complete package for cleaning and preparing a house for sale.  This includes pressure washing and yard maintenance.  We can mow the grass on a home you have for sale while it is on the market, or to do a quick touchup before an open house or showing.  We can also offer deferred payment to be paid upon closing.</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default RealtorServices;
