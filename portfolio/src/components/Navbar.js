import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
              <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
              </button>
              <a href="" className="navbar-brand"><i className="fa fa-magnet"></i></a>
          </div>
          <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="index.html">Projects</a></li>
                <li><a href="about.html">Our Studio</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
