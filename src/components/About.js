import React, { Component } from 'react';
import '../styles/about.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js';

class About extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="aboutContainer">
          <div className="aboutTitle">
            Jason Grigg - Me
          </div>
          <div className="aboutText">
            A little about me, my name is Jason Grigg and I was born and raised here in North Carolina, I went to college
            in Winston-Salem at Wake Forest University.  My degree is in Biology, but after college I wanted to get into
            the technical world.  I worked for various companies doing everything from basic workstation repair, to systems
            administration, and finally into account management.  Back in 2005 I had the opportunity to take over my family's
            business in Chatham County.  We were mainly in Heavy Equipment Diesel Repair, but expanded the business into Auto
            Paint and Body work.  While there my wife and I built a house in Bear Creek, and eventually moved to Chapel Hill.
            In 2017 were were lucky enough to achive a long term goal of selling our business.  After that I enrolled in a web
            devlopment program to strengthen my technical skills.
          </div>
          <br />
          <div className="aboutText">
            I have always been one of those people that can fix nearly anything.  I have worked on my own home as well as family
            and friends pretty much my whole life.  I have built outbuildings, repaired dry wall, changed out electrial components,
            and really anything else that needs doing.  It's always bothered me that the only thing in my home I can't fix is my
            HVAC unit, and I'm working on learning that!  Electronics have always come to me very easily, I was the kid that had
            his first computer back in the late 80's and was pretty much the only member of the family that coudl operate it.  I
            haven't found anything yet that I couldn't fix!
          </div>
          <div className="aboutText">
            After selling our business I made the decision to do something in life that I enjoy.  Fixing things around the house,
            making home improvements, repairing/upgrading computers, and the repair of pretty much any other electronic device is
            something that I enjoy, and I really enjoy building a business providing these services.
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

export default About;
