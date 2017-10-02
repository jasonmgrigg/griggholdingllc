import React, { Component } from 'react';
import '../styles/carousel.css';
import storefront from '../photos/storefront.jpg';
import oldpicture1 from '../photos/oldpicture1.jpg';
import storefront2 from '../photos/storefront2.jpg';
import storeside from '../photos/storeside.jpg';

class PictureCarousel extends Component {
  render () {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>

        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src={storefront}/>
          </div>

          <div className="item">
            <img src={storefront2} />
          </div>

          <div className="item">
            <img src={storeside} alt="No Image" />
          </div>

        <div className="item">
          <img src={oldpicture1} alt="No Image" />
        </div>

      </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
    }
  }

export default PictureCarousel;
