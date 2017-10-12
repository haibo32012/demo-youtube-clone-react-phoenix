/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Icon } from 'react-fa';
import GoogleLogin from 'react-google-login';

import { Auth } from '../../utils/api';
import { secret } from '../../utils/secret';

import './NavBar.css';

const isLogged = true;

class NavBar extends Component {
  state = {};

  _signin = async (response) => {
    console.log('====================================');
    console.log('res', response);
    console.log('====================================');
    const res = await Auth.signinGoogle(response.code);
    console.log('====================================');
    console.log('response', res);
    console.log('====================================');
    // window.location = 'http://localhost:4000/auth/google';
  };

  _signinFailure = (response) => {
    console.log('====================================');
    console.log('error ');
    console.log('====================================');
    console.log('====================================');
    console.log('fail', response);
    console.log('====================================');
  }

  _renderRightButtons = () => {
    if (isLogged) {
      return (
        <div className="nav-right-buttons">
          <Icon name="upload" className="nav-icon" />
          <Icon name="th" className="nav-icon" />
          <Icon name="bell" className="nav-icon" />
          <div className="nav-avatar-wrapper">
            <img
              className="nav-avatar-img"
              src="https://yt3.ggpht.com/-hp_4wt12CCg/AAAAAAAAAAI/AAAAAAAAAAA/5GN7MTdnVlg/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
              alt="avatar"
            />
          </div>
        </div>
      );
    }

    // return (
    //   <div className="nav-right-buttons">
    //     <div onClick={this._signin}>
    //       <span className="nav-signin-btn">SIGN IN</span>
    //     </div>
    //   </div>
    // );

    return (
      <div className="nav-right-buttons">
        <GoogleLogin
          style={{ backgroundColor: 'transparent', border: 0 }}
          clientId={secret.googleClientId}
          onSuccess={this._signin}
          onFailure={this._signinFailure}
          responseType="code"
          redirectUri="http://localhost:3000"
          offline
          // uxMode="redirect"
        >
          <span className="nav-signin-btn">SIGN IN</span>
        </GoogleLogin>
      </div>
    );
  };

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
            <input
              className="nav-search-input"
              type="text"
              placeholder="Search"
            />
            <button className="nav-btn-search">
              <Icon className="nav-icon" name="search" />
            </button>
          </form>
        </div>
        {this._renderRightButtons()}
      </div>
    );
  }
}

export default NavBar;
