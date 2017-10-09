import React, { Component } from 'react';
import '../styles/homepage.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class Homepage extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="servicesContainer">
        <div className="homeServicesTitle">Home Services</div>
          <div className="servicesListContainer">
            <h1 className="servicesTitle">
              Put Your Feet Up And Let Us Do The Work!
            </h1>
            <h3 className="servicesDescription">
              Take a look at the services we offer but do not hesitate to inquire about anything else, we a a full service company we just don't have room to put it all here!
            </h3>
            <ul className="servicesList">
              <li className="servicesItem">
                General Carpentry
              </li>
              <li className="servicesItem">
                Plumbing
              </li>
              <li className="servicesItem">
                Roof Repair
              </li>
              <li className="servicesItem">
                Door Repair/Replacement
              </li>
              <li className="servicesItem">
                Painting and Touchup
              </li>
              <li className="servicesItem">
                Deck Maintenance
              </li>
              <li className="servicesItem">
                Pressure Washing
              </li>
              <li className="servicesItem">
                Gutter Cleaning
              </li>
              <li className="servicesItem">
                Window Cleaning
              </li>
              <li className="servicesItem">
                Picture Hanging
              </li>
              <li className="servicesItem">
                Air Filter Replacement
              </li>
              <li className="servicesItem">
                Smoke Detectors
              </li>
              <li className="servicesItem">
                Car Washing
              </li>
              <li className="servicesItem">
                Screen Porch Repair
              </li>
              <li className="servicesItem">
                Landscaping
              </li>
            </ul>
          </div>
          </div>
          <div className="techServicesTitle">
            Tech Services
          </div>
          <ul className="techServicesList">
            <li className="servicesItem">
              Apple Macintosh Repair
            </li>
            <li className="servicesItem">
              Smartphone Repair
            </li>
            <li className="servicesItem">
              Home Networking
            </li>
            <li className="servicesItem">
              Printer Maintenance
            </li>
            <li className="servicesItem">
              Technical Training
            </li>
            <li className="servicesItem">
              Web Development
            </li>
          </ul>
      <Footer />
      </div>
    );
  }
}

export default Homepage;
