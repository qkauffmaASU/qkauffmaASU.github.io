import React, { Component } from 'react';

// style={{ paddingTop: "60px", paddingBottom: "40px"}}
// style={{ color: "#333", width: "82px", marginTop: "32px"}}
class Home extends Component {
  render() {
    return (
      <div className="container pb-3 pt-4">
        <div className="row">
          <div className="col-12 mx-auto text-center">
            <div className="text fs-2 lh-base">
              The creative web & mobile studio. We are young designers and focused on brand identity, web development and social marketing.
            </div>
            <div className="mx-auto mt-3 w-25">
              <hr className="mx-auto w-25"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
