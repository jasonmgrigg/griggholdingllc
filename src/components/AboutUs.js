import React, { Component } from 'react';
import '../styles/aboutus.css';

class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div className="aboutUsContainer">
        <h1 className="aboutUsTitle">ABOUT US</h1>
        <div className="itemContainer">
          <div className="homeRepairServices">
            <h2 className="itemTitle">Home Repair Services</h2>
            <h3 className="itemText">No repair is too small!  We live nearby and have experienced most common repair problems in Briar Chapel, Fearrington Village and surrounding areas.  It is our highest priority to get the job done right the first time while you get on with your life.</h3>
              <div className="findOutMoreContainer">
                <a href='/homerepairservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
          <div className="computerItServices">
            <h2 className="itemTitle">Computer and IT Services</h2>
            <h3 className="itemText">We truly enjoy solving your computer, internet, security, smart phone, and tablet issues.  We strive to save you both time and money by combining our experience, equipment knowledge, and exceptional service.</h3>
              <div className="findOutMoreContainer">
                <a href='/computeritservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
          <div className="realtorServices">
            <h2 className="itemTitle">Realtor Services</h2>
            <h3 className="itemText">We offer special services to realtors including new listing preparation, exterior and interior preparation, and landscaping.</h3>
              <div className="findOutMoreContainer">
                <a href='/realtorservices'>
                  <div className="findOutMore">FIND OUT MORE</div>
                </a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}


export default AboutUs;
