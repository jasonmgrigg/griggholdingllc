import React, { Component } from 'react';
import '../styles/body.css';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div className="bodyContainer">
        <div className="titleContainer">
          <div className="titleText">
            WELCOME TO GRIGG HOLDINGS, LLC
          </div>
          <div className="titleDescription">
            Home and Technical Repair Services
          </div>
          <div className="phoneNumber">
            (919) 932-0835
          </div>
        </div>
      </div>
    )
  }
}


export default Body;
