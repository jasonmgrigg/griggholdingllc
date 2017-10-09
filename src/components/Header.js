import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    }


  render() {
    return (
      <div className="fullHeader">
        <a className="headerTitle">Grigg Holdings, LLC</a>
        <a className="headerTitleDescription">- The Full Service Home and Technical Service Company</a>
        <div className="headerInfo">
            <div className="headerSubtitle">
                  919-932-0835
                  <br />
                  <a href="mailto: jason@jasonmgrigg.com">
                  jason@griggholdingsllc.com
                  </a>
                </div>
          </div>


        </div>
    );
  }
}

export default Header;
