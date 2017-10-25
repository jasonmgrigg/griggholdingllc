import React, { Component } from 'react';
import '../styles/services.css';
import Header from './Header.js';
import Footer from './Footer.js';

class HomeRepairServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
}


  render() {
    return (
      <div>
        <Header />
        <div className="aboutUsContainer">
          <h1 className="aboutUsTitle">HOME MAINTENANCE AND REPAIR SERVICES</h1>
          <h2 className="laborTitle">Rate: $50/Hour Billed in 1/2 Hour Increments</h2>
          <div className="itemContainer">
            <div className="oneServices">
              <h2 className="itemTitle">Home Repair Services</h2>
              <h3 className="itemText">We are here to repair just about anything in your including minor plumbing repairs, electrical repairs, and fixture replacement.  We replace smoke detector batteries and air filters when needed.  We hang shelving in any room of your house for additional storage spae.  There is no job too small, we can do anything needed.</h3>
            </div>
            <div className="twoServices">
              <h2 className="itemTitle">General Assistance</h2>
              <h3 className="itemText">We are here to offer an extra pair of hands when needed.  We can hang pictures, move furniture, take out your garbage cans, literally anything you need we can do.  We bill in half hour increments, and since we are so close we can stop by any time you need us.</h3>
            </div>
            <div className="threeServices">
              <h2 className="itemTitle">Mowing and Landscaping</h2>
              <h3 className="itemText">We can maintain your yard on as-needed basis, or for better savings, let us set you up on weekly visits.  We will cut, edge, and cleanup your yard.  We can also handle plantings, tree and bush trimming, and just about any other type of yard maintenance you may need.</h3>
            </div>
            <div className="fourServices">
              <h2 className="itemTitle">Deck and Driveway Maintenance</h2>
              <h3 className="itemText">We can pressure wash and stain/seal most type of decks and porches.  We can also replace and damaged or missing boards and railings.  We can pressure wash not only decks, but drive ways and side walks.</h3>
            </div>
            <div className="fiveServices">
              <h2 className="itemTitle">Dryer Vent Cleaning</h2>
              <h3 className="itemText">Your dryer vent is a very neglected item in your home that needs regular maintenance.  Let us clean it of lint and debris to keep your dryer running at peak efficiency and to avoid the risk of fire.</h3>
            </div>
            <div className="sixServices">
              <h2 className="itemTitle">Garage</h2>
              <h3 className="itemText">We are experts at hanging peg board for garage organization.  Since most of the garages in Briar Chapel are unfinished, we can paint, hang peg board, shelving, or any other type of improvements.</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default HomeRepairServices;
