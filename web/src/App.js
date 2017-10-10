import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main-container">
          <SideBar />
          <div className="main-content-wrapper" />
        </div>
      </div>
    );
  }
}

export default App;
