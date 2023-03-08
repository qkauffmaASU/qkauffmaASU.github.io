import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      //     <p className="text-3xl text-gray-700 font-bold mb-5">
      //       Welcome!
      //     </p>
      //     <p className="text-gray-500 text-lg">
      //       React and Tailwind CSS in action
      //     </p>
      //   </div>
      //   <nav>
      //     This is the Navbar
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/about">About</Link>
      //       </li>
      //       <li>
      //         <Link to="/projects">Projects</Link>
      //       </li>
      //       <li>
      //         <Link to="/contact">Contact</Link>
      //       </li>
      //     </ul>
      //   </nav>
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/about" element={<About />}/>
      //     <Route path="/projects" element={<Portfolio />} />
      //     <Route path="/contact" element={<Contact />} />
      //     <Route path="*" element={<Contact />} />
      //   </Routes>
      //   <FontAwesomeIcon icon={faCoffee} />
      //   <FontAwesomeIcon icon={faFacebook} size="sm" />
      //   <FontAwesomeIcon icon={faInstagram} size="xl" />
      //   <Button className="secondary">Hello World</Button>
      //   <Navbar />
      //   <Home />
      //   <About />
      //   <Contact />
      //   <Portfolio />
      //   <Footer />
      // </div>
    );
  }
}

export default App;
