import React, { Component } from 'react';
import imgAbout from '../images/portfolio-imgAbout.jpg'

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">

            <div className="col-md-offset-1 col-md-10 col-sm-12">
              <div className="section-title">
                <h3>about our story</h3>
                <h2>The creative web & mobile studio and focused on brand identity, web development and social marketing.</h2>
              </div>

              <div className="col-md-8 col-sm-12">
                <img src={imgAbout} className="img-fluid" alt="..." />
              </div>

              <div className="col-md-4 col-sm-12">
                <h1>Magnet Studio</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>

              <div className="clearfix" />
              
              <hr />

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

              <hr />

              <div className="col-md-4 col-sm-6">
                <h3>Web Development</h3>
                <ul>
                  <li>Online Shopping Site</li>
                  <li>Wordpress CMS</li>
                  <li>Bootstrap themes</li>
                  <li>Web Application</li>
                </ul>
              </div>

              <div className="col-md-4 col-sm-6">
                <h3>Brand Identity</h3>
                <ul>
                  <li>Logo Design</li>
                  <li>Personal Branding</li>
                  <li>Flyer Design</li>
                  <li>Creative Direction</li>
                </ul>
              </div>

              <div className="col-md-4 col-sm-6">
                <h3>Social marketing</h3>
                <ul>
                  <li>facebook, twitter.</li>
                  <li>Page Maintenance</li>
                  <li>Social media</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
