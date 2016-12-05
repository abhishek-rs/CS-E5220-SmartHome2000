import React, { Component } from 'react';
import AppLogo from '../logos/Logo.png';

import FavLogo from '../logos/Favoriteblue.png';
import EmergencyLogo from '../logos/Emerblue.png';
import HelpLogo from '../logos/Help.png';
import SettingsLogo from '../logos/Settingblue.png';

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
