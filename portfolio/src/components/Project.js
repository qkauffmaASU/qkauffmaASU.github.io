import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants/Navigation';

export function Project({img}) {
  return (
    <div className="col-md-4 col-sm-6">
      <Link to={PROJECTS+"/1"}>
        <div className="portfolio-thumb">
          <img src={img.src} className="img-fluid" alt="..." />
          <div className="portfolio-overlay">
            <div className="portfolio-item">
              <h3>Project Name</h3>
              <small>Brand Identity</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
