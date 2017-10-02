import React, { Component } from 'react';
import PictureCarousel from './PictureCarousel.js'

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
        <PictureCarousel />
      </div>
    )
  }
}


export default Body;
