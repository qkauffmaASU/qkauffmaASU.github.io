import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import { ABOUT, PROJECTS } from './constants/Navigation';
import Spinner from './components/Spinner';



class App extends Component {
  render() {
    return (
      <>
        <Spinner />
        <div className="px-5 pb-4">
          <Navbar />
          <Routes>
            <Route path={ABOUT} element={<About />}/>
            <Route path={PROJECTS} element={<Portfolio />} />
            <Route path="*" element={<Portfolio />} />
          </Routes>
          <Footer />
        </div>
      </>


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
