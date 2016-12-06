import React, { Component } from 'react';
import AppLogo from '../logos/Logo.png';
import ProfileLogo from '../logos/user.png';
import FavLogo from '../logos/Favoriteblue.png';
import EmergencyLogo from '../logos/Emerblue.png';
import HelpLogo from '../logos/Help.png';
import SettingsLogo from '../logos/Settingblue.png';

import './css/Side-Bar.css';

class SideBar extends Component {

  createAlert(){
    confirm("Are you sure you want to raise an alarm?");
    alert("Authorities have been notified. Stay safe till you get help.");
  }
  render() {
    return (
      <div className="SideBar">
          <a href="#/"><li className="nav-item active"><img src={AppLogo}  alt="App logo" /></li></a>
          <a href="#/submenu/Favorites"><li ><img src={FavLogo} alt="Favorites logo" /></li></a>
          <a href="#/submenu/Settings"><li ><img src={SettingsLogo} alt="Settings logo" /></li></a>
          <a href="#/submenu/Help"><li ><img src={HelpLogo} alt="Help logo" /></li></a>
          <a href="" onClick={this.createAlert}><li ><img src={EmergencyLogo} alt="Emergency logo" /></li></a>
          <a href="#/submenu/Profile"><li ><img src={ProfileLogo} alt="Profile logo" /></li></a>
        </div>
    );
  }
}

export default SideBar;
