import React, { Component } from 'react';
import img1 from '../images/portfolio-img1.jpg';
import img2 from '../images/portfolio-img2.jpg';
import img3 from '../images/portfolio-img3.jpg';
import img4 from '../images/portfolio-img4.jpg';
import img5 from '../images/portfolio-img5.jpg';
import img6 from '../images/portfolio-img6.jpg';
import { Project } from './Project';
import Home from './Home';

class Portfolio extends Component {
  render() {
    return (
      <>
      <Home />
        <section id="portfolio">
          <div className="container">
            <div className="row">
              <Project img={{src: img1}} />
              <Project img={{src: img2}} />
              <Project img={{src: img3}} />
              <Project img={{src: img4}} />
              <Project img={{src: img5}} />
              <Project img={{src: img6}} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
