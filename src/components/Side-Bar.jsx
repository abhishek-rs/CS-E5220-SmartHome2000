import React, { Component } from 'react';
import AppLogo from '../logos/Logomakr.png';

import FavLogo from '../logos/favorite.svg';
import EmergencyLogo from '../logos/emergency.svg';
import HelpLogo from '../logos/information.svg';
import SettingsLogo from '../logos/settings.svg';

import './css/Side-Bar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">

          <a href="#/"><li className="nav-item active"><img src={AppLogo}  alt="logo" /></li></a>
          <a href="#/submenu/favorites"><li ><img src={FavLogo} alt="logo" /></li></a>
          <a href="#/submenu/settings"><li ><img src={SettingsLogo} alt="logo" /></li></a>
          <a href="#/submenu/help"><li ><img src={HelpLogo} alt="logo" /></li></a>
          <a href="#/submenu/emergency"><li ><img src={EmergencyLogo} alt="logo" /></li></a>

        </div>
    );
  }
}

export default SideBar;
