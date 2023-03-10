import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import { Routes, Route, Navigate} from 'react-router-dom';
import { HOME, ABOUT, PROJECTS } from './constants/Navigation';
import Spinner from './components/Spinner';
import { SingleProject } from './components/SingleProject';

class App extends Component {
  render() {
    return (
      <>
        <Spinner />
        <div className="px-5 pb-4">
          <Navbar />
          <Routes>
            <Route path={HOME} element={<Portfolio />} />
            <Route path={ABOUT} element={<About /> } />
            <Route path={PROJECTS + "/:id"} element={<SingleProject />} />
            <Route path="*"  element={<Navigate to={HOME} replace />} />
          </Routes>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
