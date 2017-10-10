import React, { Component } from 'react';
import { Icon } from 'react-fa';

import './NavBar.css';

class NavBar extends Component {
  state = { }
  render() {
    return (
      <div className="nav-container">
        <div className="nav-burger-wrapper">
          <Icon name="bars" className="nav-icon" />
          <div className="nav-brand-wrapper">
            <Icon name="youtube-play" className="youtube-logo" size="2x" />
            <span className="nav-brand-text">YouTube</span>
          </div>
        </div>
        <div className="nav-search-wrapper">
          <form id="nav-search-form">
            <input className="nav-search-input" type="text" placeholder="Search" />
            <button className="nav-btn-search"><Icon className="nav-icon" name="search" size="2x" /></button>
          </form>
        </div>
        <div className="nav-right-buttons">
          <Icon name="upload" className="nav-icon" />
          <Icon name="th" className="nav-icon" />
          <Icon name="bell" className="nav-icon" />
          <div className="nav-avatar-wrapper">
            <img className="nav-avatar-img" src="https://yt3.ggpht.com/-hp_4wt12CCg/AAAAAAAAAAI/AAAAAAAAAAA/5GN7MTdnVlg/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="avatar" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
