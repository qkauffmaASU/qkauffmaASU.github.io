import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
     <div className="container">
          <div className="row">

               <div className="col-md-3 col-sm-3">
                    <i className="fa fa-magnet"></i>
               </div>

               <div className="col-md-4 col-sm-4">
                    <p>124 Market Street, Suite 3570 San Francisco, CA 3042 United States</p>
               </div>

               <div className="col-md-offset-1 col-md-4 col-sm-offset-1 col-sm-3">
                    <p><a href="mailto:youremail@gmail.com">hello@yourstudio.co</a></p>
                    <p>(+01) 2048937 / 02 203403</p>
               </div>

               <div className="clearfix col-md-12 col-sm-12">
                    <hr/>
               </div>

               <div className="col-md-6 col-sm-6">
                    <div className="footer-copyright">
                         <p>© 2016 Magnet Studio | All Rights Reserved.</p>
                    </div>
               </div>

               <div className="col-md-6 col-sm-6">
                    <ul className="social-icon">
                         <li><a href="#" className="fa fa-facebook"></a></li>
                         <li><a href="#" className="fa fa-twitter"></a></li>
                         <li><a href="#" className="fa fa-linkedin"></a></li>
                    </ul>
               </div>
               
          </div>
     </div>
</footer>
    );
  }
}

export default Footer;
