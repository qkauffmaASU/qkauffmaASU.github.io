import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div className="preloader">
        <div className="sk-spinner sk-spinner-wordpress">
          <span className="sk-inner-circle"></span>
        </div>
      </div>
    );
  }
}

export default Spinner;
