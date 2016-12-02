import React, { Component } from 'react';
import MainCard from './MainCard.jsx';
import './css/MainMenu.css';
import AppLogo from '../logos/house.svg';
import Switch from './Switch.jsx';
import FavLogo from '../logos/favorite.svg';
import EmergencyLogo from '../logos/emergency.svg';
import HelpLogo from '../logos/information.svg';
import SettingsLogo from '../logos/settings.svg';


class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu">
        <div className="row menu-container">
          <Switch label1="Away" label2="Home" type="round" />
          <MainCard title="AC" imgpath={AppLogo} val="hello" />
          <MainCard title="Lighting" imgpath={FavLogo} val="hello" />
            <MainCard title="Electrical" imgpath={SettingsLogo} val="hello" />
            <MainCard title="Alarms" imgpath={AppLogo} val="hello" />
              <MainCard title="Locks" imgpath={HelpLogo} val="hello" />
              <MainCard title="Whatever" imgpath={SettingsLogo} val="hello" />

    </div>


        </div>
    );
  }
}

export default MainMenu;
