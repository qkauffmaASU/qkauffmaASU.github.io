import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants/Navigation';

export function Project({proj}) {
  return (
    <div className="col-4">
      <Link to={PROJECTS + "/" + proj.id}>
        <div className="portfolio-thumb">
          <img src={proj.img.src} className="img-fluid" alt="..." />
          <div className="portfolio-overlay">
            <div className="portfolio-item">
              <h3>{proj.name}</h3>
              <small>{proj.label}</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
