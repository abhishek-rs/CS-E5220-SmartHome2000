import React, { Component } from 'react';
import MainCard from './MainCard.jsx';
import './css/MainMenu.css';
import ACLogo from '../logos/AC.png';
import Switch from './Switch.jsx';
import LightLogo from '../logos/Lighting.png';
import ElecLogo from '../logos/Electrical.png';
import LockLogo from '../logos/Lock.png';
import MotionLogo from '../logos/Motion.png';
import SmokeLogo from '../logos/Smoke.png';

class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu">
        <div className="row menu-container">
          <Switch label1="Away" label2="Home" type="square" />
          <MainCard title="AC" imgpath={ACLogo} val="hello" />
          <MainCard title="Lighting" imgpath={LightLogo} val="hello" />
            <MainCard title="Electrical" imgpath={ElecLogo} val="hello" />
              <MainCard title="Locks" imgpath={LockLogo} val="hello" />
          <MainCard title="Motion detector" imgpath={MotionLogo} val="hello" />
              <MainCard title="Smoke detector" imgpath={SmokeLogo} val="hello" />

    </div>


        </div>
    );
  }
}

export default MainMenu;
