import React, { Component } from 'react';
import forrest_baby from '../images/forrest_baby.jpeg';
import Project from './Project';

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Project title="Forrest Baby"
            caption="Cutest Boy Ever"
            img={{width: 300, height: 400, src: forrest_baby}}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
