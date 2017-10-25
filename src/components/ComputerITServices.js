import React, { Component } from 'react';
import '../styles/services.css';
import Header from './Header.js';
import Footer from './Footer.js';

class ComputerITServices extends Component {
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
          <h1 className="aboutUsTitle">COMPUTER AND IT SERVICES</h1>
          <h2 className="laborTitle">Rate: $50/Hour Billed in 1/2 Hour Increments</h2>
          <div className="itemContainer">
            <div className="oneServices">
              <h2 className="itemTitle">Apple Mac Maintenance</h2>
              <h3 className="itemText">We have lots of experience with Apple Mac Computers and operating systems.  We can handle operating system upgrades, applications installation, and basic technical training.</h3>
            </div>
            <div className="twoServices">
              <h2 className="itemTitle">Technical Training</h2>
              <h3 className="itemText">Do you just need someone to sit with you for a few minutes to go over some things on your computer or smart phone that you are having trouble with?  Let us help, we bill in half hour increments which is perfect for a quick tutorial.</h3>
            </div>
            <div className="threeServices">
              <h2 className="itemTitle">Phone & Tablet Maintenance</h2>
              <h3 className="itemText">We can help with a new smart phone or tablet, adding it to your network, copying over profiles, or any other issue you may need assistance with.</h3>
            </div>
            <div className="fourServices">
              <h2 className="itemTitle">Windows Maintenance</h2>
              <h3 className="itemText">We can help you maintain and upgrade your windows computer from software upgrades to virus removal.</h3>
            </div>
            <div className="fiveServices">
              <h2 className="itemTitle">Printer Maintenance</h2>
              <h3 className="itemText">We can change out printer cartridges, add a new printer to your network, or troubleshoot any other type of printing issue.</h3>
            </div>
            <div className="sixServices">
              <h2 className="itemTitle">Web Development</h2>
              <h3 className="itemText">We are very skilled in web development for your personal or business needs.  We built this website, and can build one for you to your specifications.</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default ComputerITServices;
