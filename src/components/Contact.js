import React, { Component } from 'react';
import '../styles/contact.css';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div className="contactContainer">
        <h1 className="contactTitle">CONTACT US</h1>
          <div className="contactTextTitle">
            Please let us know how we can help you:
          </div>
            <div className="contactTextContainer">
              <div className="contactInfoContainer">
                <div className="contactText">
                  Please use the below phone number or email to contact us at anytime!
                </div>
                <div className="contactCompany">
                  Grigg Holdings LLC
                </div>
                <div className="contactPhone">
                  (919) 932-0835 (Call/Text)
                </div>
                <a href="mailto: jason@griggholdingsllc.com">
                  <div className="contactEmail">
                    jason@griggholdingsllc.com
                  </div>
                </a>
              </div>
              <div className="contactHoursContainer">
                <div className="contactHoursTitle">
                  Hours:
                </div>
                <div className="contactHours">
                  Monday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Tuesday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Wednesday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Thursday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Friday: 9:30 am – 5:30 pm
                </div>
                <div className="contactHours">
                  Saturday: By Appointment
                </div>
                <div className="contactHours">
                  Sunday: Closed
                </div>
              </div>
            </div>
      </div>
    )
  }
}


export default Body;
