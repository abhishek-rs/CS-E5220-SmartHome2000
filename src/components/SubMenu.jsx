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
import ArrowsUpLogo from '../logos/up.png';
import ArrowsDownLogo from '../logos/down.png';
import SubCard from './SubCard.jsx';
import toastr from 'toastr';
class SubMenu extends Component {
  render() {

    const titles = this.props.params.subId;
    if(titles == "AC"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={ArrowsUpLogo} imgpath2={ArrowsDownLogo} val="Hall" />
        <SubCard title={titles} imgpath={ArrowsUpLogo} imgpath2={ArrowsDownLogo} val="Bedroom 1" />
          <SubCard title={titles} imgpath={ArrowsUpLogo} imgpath2={ArrowsDownLogo} val="Bedroom 2" />
          <SubCard title={titles} imgpath={ArrowsUpLogo} imgpath2={ArrowsDownLogo} val="Dining Area" />
            <SubCard title={titles} imgpath={ArrowsUpLogo} imgpath2={ArrowsDownLogo} val="Kitchen" />

            </div>
      </div>
    </div>;
    }
    else {
      var content = <div className="Sub">
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
    </div>;
    }
    return content;
  }
}

export default SubMenu;
