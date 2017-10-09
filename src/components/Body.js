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
          <div className="bodyTitle">

          </div>
          <br />
          <div className="bodyText">
            Your one stop to repair nearly anything in your home!  Please click on our <a href="/services">Services</a> section for a list of our services.  Please note that this is just a small list, please let us know anything that you might need!
          </div>
          <br />
          <div className="bodyText">
            We are a company that specializes in repairs not only to things inside and outside your home, but for all of your technical needs as well.  We have years of experience repairing everything from minor plumbing items, interior/exterior touchup painting, picture hanging, furniture moving, minor landscaping, lawn mowing, car washing, and just about anything you can think of.  We are a company that offers assistance to do the small things that sometimes you just need an extra pair of hands to do.
          </div>
          <br />
          <div className="bodyText">
            Having trouble with your computer, smart phone, tablet, entertainment system, or anything else that is electronic?  We can help with that!  We have worked in the technical field for a long time, and can fix whatever is broken!
          </div>
          <br />
          <div className="bodyText">
            We bill in half hour increments, with very competitive rates and no service charge!  Being a local company we can come out as many times as you need us!  We like to tell our customers, make a list of the things you need, no matter how small, and let us take care of them one by one.  No job is too small, we are here to help any way we can!
          </div>
        </div>
      </div>
    )
  }
}


export default Body;
