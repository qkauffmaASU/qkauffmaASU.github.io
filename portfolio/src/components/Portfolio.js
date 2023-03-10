import React, { Component } from 'react';
import { Project } from './Project';
import Home from './Home';
import { PROJECT_1, PROJECT_2, PROJECT_3, PROJECT_4, PROJECT_5, PROJECT_6 } from '../constants/Data';

class Portfolio extends Component {
  render() {
    return (
      <>
        <Home />
        <section id="portfolio">
          <div className="container">
            <div className="row">
              <Project proj={PROJECT_1} />
              <Project proj={PROJECT_2} />
              <Project proj={PROJECT_3} />
              <Project proj={PROJECT_4} />
              <Project proj={PROJECT_5} />
              <Project proj={PROJECT_6} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Portfolio;
