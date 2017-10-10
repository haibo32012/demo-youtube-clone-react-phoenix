import React, { Component } from 'react';

import Recommanded from './Recommanded/Recommanded';
import Subscriptions from './Subscriptions/Subscriptions';

import './HomePage.css';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage-wrapper">
        <div className="homepage-content">
          <Recommanded />
          <Subscriptions />
          <Subscriptions />
          <Subscriptions />
        </div>
      </div>
    );
  }
}

export default HomePage;
