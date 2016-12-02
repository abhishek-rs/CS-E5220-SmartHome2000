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
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <MainCard title="Hall" imgpath={AppLogo} val="hello" />
        <MainCard title="Bedroom" imgpath={FavLogo} val="hello" />
          <MainCard title="Balcony" imgpath={SettingsLogo} val="hello" />
          <MainCard title="Alarms" imgpath={AppLogo} val="hello" />
            <MainCard title="Locks" imgpath={HelpLogo} val="hello" />
            <MainCard title="Whatever" imgpath={SettingsLogo} val="hello" />
            </div>
      </div>
    </div>



    );
  }
}

export default SubMenu;
