import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, HOME } from '../constants/Navigation';
import { LINK_STYLE } from '../constants/Style';

class Navbar extends Component {
  render() {
    return (
      <section id="navbar">
        <div className="container py-5" >
          <div className="row">
            <div className="col-12 my-auto fs-1 text-center">
              <Link to={HOME} style={LINK_STYLE}>
                <div className="text">Sydney Ramos</div>
              </Link>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-5 my-auto" />
            <div className="col-1 my-auto text-center">
              <Link to={HOME} style={LINK_STYLE}>
                <div className="text">Projects</div>
              </Link>
            </div>
            <div className="col-1 my-auto text-center">
              <Link to={ABOUT} style={LINK_STYLE}>
                <div className="text">About</div>  
              </Link>
            </div>
            <div className="col-5 my-auto" />
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
