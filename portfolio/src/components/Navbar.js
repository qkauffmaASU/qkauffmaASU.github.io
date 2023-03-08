import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, ABOUT } from '../constants/Navigation';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">

          <div className="navbar-header">
            <Link to={PROJECTS} className="navbar-brand"><i className="fa fa-magnet"></i></Link>
          </div>

          <div className="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link to={PROJECTS}>Projects</Link></li>
              <li><Link to={ABOUT}>About Sydney</Link></li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Navbar;
