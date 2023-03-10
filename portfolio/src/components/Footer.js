import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ICON_STYLE, LINK_STYLE } from '../constants/Style';

class Footer extends Component {
  render() {
    return (
      <div className="container pt-5 fs-6">
        <div className="row">

          <div className="col-4 my-auto">
            <div className="text-left">
              <a href="mailto:sydney_ramos@ymail.com" style={LINK_STYLE}>
                <div className="text">sydney_ramos@ymail.com</div>
                </a>
            </div>
          </div>

          <div className="col-4 my-auto">
            <div className="text text-center">Charleston, SC United States</div>
          </div>

          <div className="col-4 my-auto">
            <div className="float-end">
              <a href="tel:+12036109533" style={LINK_STYLE}>
                <div className="text">(203) 610-9533</div>
              </a>
            </div>
          </div>
        </div>

        <hr />
        
        <div className="row ">
          <div className="col-8">
            <div>
              <div className="text">&copy; 2023 Sydney Ramos | All Rights Reserved.</div>
            </div>
          </div>

          <div className="col-4">
            <div className="row float-end">
              <div className="col fs-5">
                <a href="https://instagram.com/sydramos/">
                  <FontAwesomeIcon icon={faInstagram} style={ICON_STYLE} />
                </a>
              </div>
              <div className="col fs-5">
                <a href="https://linkedin.com/in/sydneyramos">
                  <FontAwesomeIcon icon={faLinkedin} style={ICON_STYLE} />
                </a>
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
