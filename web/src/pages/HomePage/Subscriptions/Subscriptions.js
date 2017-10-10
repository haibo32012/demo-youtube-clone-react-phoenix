import React, { Component } from 'react';

import './Subscriptions.css';

const imgs = [
  'https://i.ytimg.com/vi/qmNPpoVkY2Y/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAaP8FuDiNFigBJVPSQBjutUdOfHA',
  'https://i.ytimg.com/vi/baJyGTJr9so/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD61L1tU2wnR4wWzz-6HXX2r9U5oQ',
  'https://i.ytimg.com/vi/_Mb-Q_A9ofU/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA0NVzsP7wBeBwsriIdt_B6O9pzWw',
  'https://i.ytimg.com/vi/TYuEllKloj4/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCgw6bPITTt7A0AaXlj-BICYmtrjg',
];

const recommended = Array.from({ length: 6 }).map(() => ({
  thumbnail: imgs[Math.floor(Math.random() * imgs.length)],
  title: 'Lorem ipsum dolor sit amet consectetur',
  author: 'EQuimper',
  views: '15k',
  createdAt: '8 months ago',
}));

class Subscriptions extends Component {
  state = {};
  render() {
    return (
      <div className="subscriptions-wrapper">
        <span className="homepage-categories-title">EQuimper</span>
        <div className="homepage-video-row">
          {recommended.map((item, i) => (
            <div key={i} className="homepage-video-wrapper">
              <img src={item.thumbnail} className="video-thumbnail" />
              <span className="video-title">{item.title}</span>
              <span className="video-author">{item.author}</span>
              <span className="video-meta">
                {item.views} views &bull; {item.createdAt}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Subscriptions;
