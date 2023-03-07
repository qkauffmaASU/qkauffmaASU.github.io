import React, { Component } from 'react';
// import logo from '../images/forrest_baby.jpeg';

export default function Project({title, caption, img}) {
  return (
    <div className="col-md-4 col-sm-6">
      <a href="single-project.html">
        <div className="portfolio-thumb">
          <img src={img.src} width={img.width} height={img.height} className="img-responsive" alt="Portfolio" />
          <div className="portfolio-overlay">
            <div className="portfolio-item">
              <h3>{title}</h3>
              <small>{caption}</small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );

}
