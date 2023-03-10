import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS, HOME } from '../constants/Navigation';
import { PROJECT_LIST } from '../constants/Data';
import { LINK_STYLE } from '../constants/Style';

export function SingleProject() {
    let { id } = useParams();
    let proj = null;
    PROJECT_LIST.forEach(x => {
      if (x.id == id) {
        proj = x;
      }
    })
    if (proj == null) {
      return (
        <Navigate to={HOME} replace />
      )
    }

    id = parseInt(id);
    let prevId = id - 1;
    if (prevId == 0) {
      prevId = PROJECT_LIST.length;
    }
    let nextId = id + 1;
    if (nextId > PROJECT_LIST.length) {
      nextId = 1;
    }
     
    return (
      <>
        <div className="mx-auto">
          <div className="container mb-4">
            <div className="row">
              <div className="col-5" />
              <div className="col-1 text-center">
                <Link to={PROJECTS + "/" + prevId} style={LINK_STYLE}>
                  <div className="text">Previous</div>
                </Link>
              </div>
              <div className="col-1 text-center">
                <Link to={PROJECTS + "/" + nextId} style={LINK_STYLE}>
                  <div className="text">Next</div>
                </Link>
              </div>
              <div className="col-5" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <img src={proj.img.src} className="img-fluid" />
            </div>
            <div className="col-4">
              <h1>{proj.name}</h1>
              <h2>{proj.label}</h2>
              <div className="text">
                {proj.description}
              </div>
            </div>
          </div>
        </div>
      </>
    )
}