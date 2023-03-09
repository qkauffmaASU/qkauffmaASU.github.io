import React, { Component } from 'react';

const faIconStyle = {color: "#777"};

class Footer extends Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-4 fs-1">
            <i className="fa fa-magnet"></i>
          </div>

          <div className="col-4">
            <div className="text-center">
              <p>Charleston, SC United States</p>
            </div>
          </div>

          <div className="col-4">
            <div className="float-end">
              <p className="text-right"><a href="mailto:sydney_ramos@ymail.com">sydney_ramos@ymail.com</a></p>
              <p className="text-right">(+01) 2036109533</p>
            </div>
          </div>
        </div>

        <hr />
        
        <div className="row">
          <div className="col-10 fs-6">
            <div>
              <p>&copy; 2023 Sydney Ramos | All Rights Reserved.</p>
            </div>
          </div>

          <div className="col-2 fs-6">
            <div className="row">
              <div className="col">
                <a href="https://instagram.com" className="fa fa-facebook" style={faIconStyle}/>
              </div>
              <div className="col">
                <a href="https://twitter.com" className="fa fa-twitter" style={faIconStyle} />
              </div>
              <div className="col">
                <a href="https://linkedin.com" className="fa fa-linkedin" style={faIconStyle} />
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
