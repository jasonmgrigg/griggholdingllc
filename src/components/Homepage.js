import React, { Component } from 'react';
import '../styles/homepage.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handleMouseHoverLandscaping = this.handleMouseHoverLandscaping.bind(this);
    this.handleMouseHoverGeneralCarpentry = this.handleMouseHoverGeneralCarpentry.bind(this);
    this.handleMouseHoverPlumbing = this.handleMouseHoverPlumbing.bind(this);
    this.handleMouseHoverRoofRepair = this.handleMouseHoverRoofRepair.bind(this);
    this.handleMouseHoverDoorRepair = this.handleMouseHoverDoorRepair.bind(this);
    this.handleMouseHoverPainting = this.handleMouseHoverPainting.bind(this);
    this.handleMouseHoverDeck = this.handleMouseHoverDeck.bind(this);
    this.handleMouseHoverPressureWashing = this.handleMouseHoverPressureWashing.bind(this);
    this.handleMouseHoverGutterCleaning = this.handleMouseHoverGutterCleaning.bind(this);
    this.handleMouseHoverAppleImacRepair = this.handleMouseHoverAppleImacRepair.bind(this);

    this.state = {
      isHoveringLandscaping: false,
      isHoveringGeneralCarpentry: false,
      isHoveringPlumbing: false,
      isHoveringRoofRepair: false,
      isHoveringDoorRepair: false,
      isHoveringPainting: false,
      isHoveringDeck: false,
      isHoveringPressureWashing: false,
      isHoveringGutterCleaning: false,
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

  handleMouseHoverLandscaping() {
    this.setState(this.toggleHoverStateLandscaping);
  }

  handleMouseHoverGeneralCarpentry() {
    this.setState(this.toggleHoverStateGeneralCarpentry);
  }

  handleMouseHoverPlumbing() {
    this.setState(this.toggleHoverStatePlumbing);
  }

  handleMouseHoverRoofRepair() {
    this.setState(this.toggleHoverStateRoofRepair);
  }

  handleMouseHoverDoorRepair() {
    this.setState(this.toggleHoverStateDoorRepair);
  }

  handleMouseHoverPainting() {
    this.setState(this.toggleHoverStatePainting);
  }

  handleMouseHoverDeck() {
    this.setState(this.toggleHoverStateDeck);
  }

  handleMouseHoverPressureWashing() {
    this.setState(this.toggleHoverStatePressureWashing);
  }

  handleMouseHoverGutterCleaning() {
    this.setState(this.toggleHoverStateGutterCleaning);
  }

  handleMouseHoverAppleImacRepair() {
    this.setState(this.toggleHoverStateAppleImacRepair);
  }

  toggleHoverStateLandscaping(state) {
    return {
      isHoveringLandscaping: !state.isHoveringLandscaping,
    };
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

  toggleHoverStateRoofRepair(state) {
    return {
      isHoveringRoofRepair: !state.isHoveringRoofRepair,
    };
  }

  toggleHoverStateDoorRepair(state) {
    return {
      isHoveringDoorRepair: !state.isHoveringDoorRepair,
    };
  }

  toggleHoverStatePainting(state) {
    return {
      isHoveringPainting: !state.isHoveringPainting,
    };
  }

  toggleHoverStateDeck(state) {
    return {
      isHoveringDeck: !state.isHoveringDeck,
    };
  }

  toggleHoverStatePressureWashing(state) {
    return {
      isHoveringPressureWashing: !state.isHoveringPressureWashing,
    };
  }

  toggleHoverStateGutterCleaning(state) {
    return {
      isHoveringGutterCleaning: !state.isHoveringGutterCleaning,
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
              Take a look at the services we offer but do not hesitate to inquire about anything else, we are a full service company we just don't have room to put it all here!
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
                    Grass mowing, edging, and blowing.  Just need your grass cut once?  Just need some leaves blown and gotten up?  No problem, we can do that!  We work on a call basis, or we can offer a discount for weekly service.  We plant trees, dig up decorative trees, trim bushes, pretty much anything you need we can do!
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
                    Got a dripping faucet?  Toilet running constantly?  Want to replace your fixtures?  We can do that!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverRoofRepair}
                  onMouseLeave={this.handleMouseHoverRoofRepair}
                  >
                  Roof Repair
                </div>
                  {this.state.isHoveringRoofRepair &&
                  <div className="roofRepairShowMore">
                    Have a shingle or two missing?  Got a drip when it rains?  Let us take a look!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverDoorRepair}
                  onMouseLeave={this.handleMouseHoverDoorRepair}
                  >
                  Door Repair
                </div>
                  {this.state.isHoveringDoorRepair &&
                  <div className="doorRepairShowMore">
                    We can replace interior and exterior doors, change locks, change door knobs, or any other repairs they may need!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverPainting}
                  onMouseLeave={this.handleMouseHoverPainting}
                  >
                  Painting Touchup
                </div>
                  {this.state.isHoveringPainting &&
                  <div className="paintingShowMore">
                    We can handle interior and exterior touchup and refreshing.
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverDeck}
                  onMouseLeave={this.handleMouseHoverDeck}
                  >
                  Deck Maintenance
                </div>
                  {this.state.isHoveringDeck &&
                  <div className="deckShowMore">
                    Deck looking a little dirty?  We can pressure wash and stain/seal most types of woods.  We can also replace any damaged or missing boards and railings.
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverPressureWashing}
                  onMouseLeave={this.handleMouseHoverPressureWashing}
                  >
                  Pressure Washing
                </div>
                  {this.state.isHoveringPressureWashing &&
                  <div className="pressureWashingShowMore">
                    If it will stand still, we can pressure wash it!  Driveways, house siding, decks, literally anything!
                  </div>
                }
              </li>
              <li className="servicesItem">
                <div
                  onMouseEnter={this.handleMouseHoverGutterCleaning}
                  onMouseLeave={this.handleMouseHoverGutterCleaning}
                  >
                  Gutter Cleaning
                </div>
                  {this.state.isHoveringGutterCleaning &&
                  <div className="gutterCleaningShowMore">
                    Let us clean your gutters of leaves and debris for better water drainage and roof leaks.
                  </div>
                }
              </li>
              <li className="servicesItem">
                Window Cleaning
              </li>
              <li className="servicesItem">
                Picture Hanging
              </li>
              <li className="servicesItem">
                Filter Replacement
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
