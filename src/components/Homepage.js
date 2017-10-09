import React, { Component } from 'react';
import '../styles/homepage.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handleMouseHoverGeneralCarpentry = this.handleMouseHoverGeneralCarpentry.bind(this);
    this.handleMouseHoverPlumbing = this.handleMouseHoverPlumbing.bind(this);
    this.handleMouseHoverLandscaping = this.handleMouseHoverLandscaping.bind(this);
    this.handleMouseHoverAppleImacRepair = this.handleMouseHoverAppleImacRepair.bind(this);

    this.state = {
      isHoveringPlumbing: false,
      isHoveringGeneralCarpentry: false,
      isHoveringGeneralLandscaping: false,
      isHoveringAppleImacRepair: false,
      contributors: [
        {
          name: 'Brittany Arsi',
          link: ''
        },
        {
          name: 'Robert Garmhausen',
          link: ''
        },
        {
          name: 'Jason Grigg',
          link: ''
        },
        {
          name: 'Dylan Stump',
          link: ''
        }
      ],
      rowsToDisplay: 0,
      expanded: false,
      str: '',
      browse: <div />,
      status: this.props.status
    };
  }

  handleStringChange(event) {
    this.setState({ str: event.target.value });
  }

  showMore() {
    this.state.rowsToDisplay === 0
      ? this.setState({
          rowsToDisplay: this.state.contributors.length,
          expanded: true
        })
      : this.setState({ rowsToDisplay: 0, expanded: false });
  }

  handleMouseHoverPlumbing() {
    this.setState(this.toggleHoverStatePlumbing);
  }

  handleMouseHoverGeneralCarpentry() {
    this.setState(this.toggleHoverStateGeneralCarpentry);
  }

  handleMouseHoverLandscaping() {
    this.setState(this.toggleHoverStateLandscaping);
  }

  handleMouseHoverAppleImacRepair() {
    this.setState(this.toggleHoverStateAppleImacRepair);
  }

  toggleHoverStateGeneralCarpentry(state) {
    return {
      isHoveringGeneralCarpentry: !state.isHoveringGeneralCarpentry,
    };
  }

  toggleHoverStatePlumbing(state) {
    return {
      isHoveringPlumbing: !state.isHoveringPlumbing,
    };
  }

  toggleHoverStateLandscaping(state) {
    return {
      isHoveringLandscaping: !state.isHoveringLandscaping,
    };
  }

  toggleHoverStateAppleImacRepair(state) {
    return {
      isHoveringAppleImacRepair: !state.isHoveringAppleImacRepair,
    };
  }

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
                <div
                  onMouseEnter={this.handleMouseHoverLandscaping}
                  onMouseLeave={this.handleMouseHoverLandscaping}
                  >
                  Landscaping
                </div>
                {this.state.isHoveringLandscaping &&
                  <div className="landscapingShowMore">
                    We can work on any kind of wood or structural repair in your home, including your exterior porches and railings.
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverGeneralCarpentry}
                  onMouseLeave={this.handleMouseHoverGeneralCarpentry}
                  >
                  General Carpentry
                </div>
                  {this.state.isHoveringGeneralCarpentry &&
                  <div className="generalCarpentryShowMore">
                    We can work on any kind of wood or structural repair in your home, including your exterior porches and railings.
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverPlumbing}
                  onMouseLeave={this.handleMouseHoverPlumbing}
                  >
                  Plumbing
                </div>
                  {this.state.isHoveringPlumbing &&
                  <div className="plumbingShowMore">
                    We can work on any kind of wood or structural repair in your home, including your exterior porches and railings.
                  </div>
                }
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
            </ul>
          </div>
          </div>

        <div className="techServicesContainer">
          <div className="techServicesTitle">
            Tech Services
          </div>
          <ul className="techServicesList">
            <li className="servicesItem">
              <div
                onMouseEnter={this.handleMouseHoverAppleImacRepair}
                onMouseLeave={this.handleMouseHoverAppleImacRepair}
                >
                Apple iMac Repair
              </div>
                {this.state.isHoveringAppleImacRepair &&
                <div className="appleImacRepairShowMore">
                  We can work on any kind of wood or structural repair in your home, including your exterior porches and railings.
                </div>
              }
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
        </div>

      <Footer />
      </div>
    );
  }
}

export default Homepage;
