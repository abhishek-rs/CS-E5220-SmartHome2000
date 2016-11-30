import MainCard from './MainCard.jsx';
import React, { Component } from 'react';
import './css/SubMenu.css';
import AppLogo from '../logos/house.svg';
import Switch from './Switch.jsx';
import FavLogo from '../logos/favorite.svg';
import EmergencyLogo from '../logos/emergency.svg';
import HelpLogo from '../logos/information.svg';
import SettingsLogo from '../logos/settings.svg';
import SideBar from './Side-Bar.jsx';

class SubMenu extends Component {
  render() {
    return (
      <div className="Sub">
        <SideBar />
      <div className="SubMenu">

      <h1> this is {this.props.params.subId} </h1>
      </div>
    </div>



    );
  }
}

export default SubMenu;
