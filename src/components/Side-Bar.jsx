import React, { Component } from 'react';
import AppLogo from '../logos/house.svg';

import FavLogo from '../logos/favorite.svg';
import EmergencyLogo from '../logos/emergency.svg';
import HelpLogo from '../logos/information.svg';
import SettingsLogo from '../logos/settings.svg';

import './css/Side-Bar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">

          <li ><img src={AppLogo}  alt="logo" /></li>
          <li ><img src={FavLogo} alt="logo" /></li>
          <li ><img src={SettingsLogo} alt="logo" /></li>
          <li ><img src={HelpLogo} alt="logo" /></li>
          <li ><img src={EmergencyLogo} alt="logo" /></li>

        </div>
    );
  }
}

export default SideBar;
