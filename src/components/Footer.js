import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);

}

  render() {
    return (
      <div className="fullFooter">
          <div className="developer">
            <a className="footerContainer" href="mailto: jason@jasonmgrigg.com">
              <p className="developerName">Designed by Jason M. Grigg</p>
              <p className="developerCompany">Grigg Holdings, LLC</p>
              <p className="developerPhone">919-932-0835</p>
            </a>
          </div>
      </div>
    );
  }

}

export default Footer;
