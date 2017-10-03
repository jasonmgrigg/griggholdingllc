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
      <div>
        <div className="bodyContainer">
          <div>Placeholder</div>
        </div>
      </div>
    )
  }
}


export default Body;
