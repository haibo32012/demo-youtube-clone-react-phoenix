import React, { Component } from 'react';
import { Icon } from 'react-fa';

import './SideBar.css';

class SideBar extends Component {
  state = { }
  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar-top-wrapper">
          <div className="sidebar-element">
            <Icon name="home" className="sidebar-icon active" />
            <span className="sidebar-element-text">Home</span>
          </div>
          <div className="sidebar-element">
            <Icon name="line-chart" className="sidebar-icon" />
            <span className="sidebar-element-text">Trending</span>
          </div>
        </div>
        <div className="sidebar-center-wrapper">
          <span className="sidebar-element-title">
            LIBRARY
          </span>
          <div className="sidebar-element">
            <Icon name="clock-o" className="sidebar-icon" />
            <span className="sidebar-element-text">Watch later</span>
          </div>
        </div>
        <div className="sidebar-bottom-wrapper">
          <span className="sidebar-element-title">
            SUBSCRIPTIONS
          </span>
          <div className="sidebar-element">
            <img src="https://yt3.ggpht.com/-hp_4wt12CCg/AAAAAAAAAAI/AAAAAAAAAAA/5GN7MTdnVlg/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" className="sidebar-subs-avatar" />
            <span className="sidebar-element-text">EQuimper</span>
            <span className="sidebar-subs-notif-num">2</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
