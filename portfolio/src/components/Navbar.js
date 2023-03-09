import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, ABOUT } from '../constants/Navigation';

// style={{paddingRight: 15, paddingLeft: 15}}
const linkStyle = {letterSpacing: "1px", color: "#777"};
class Navbar extends Component {
  render() {
    return (
      <section id="navbar">
        <div className="container py-5" >
          <div className="row">
            <div className="col-10 my-auto fs-1">
              <Link to={PROJECTS}><i className="fa fa-magnet"></i></Link>
            </div>
            <div className="col-1 my-auto">
              <Link to={PROJECTS} className="fs-6 float-end" style={linkStyle}>Projects</Link>
            </div>
            <div className="col-1 my-auto">
              <Link to={ABOUT} className="fs-6 float-end" style={linkStyle}>About</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
