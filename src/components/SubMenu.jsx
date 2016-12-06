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
import TVLogo from '../logos/TV.png';
import FridgeLogo from '../logos/Refrigerator.png';
import StoveLogo from '../logos/Stove.png';
import FreezerLogo from '../logos/Freezer.png';
import DishwasherLogo from '../logos/Dish.png';
import WashingLogo from '../logos/Washing.png';
import SubCard from './SubCard.jsx';
import HelpMap from '../logos/Helpmap.jpg';
import toastr from 'toastr';
import Profile from '../logos/profile.jpg';

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
    else if(titles == "Lighting"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Hall" />
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Bedroom 1" />
          <SubCard title={titles} imgpath={ArrowsUpLogo} val="Bedroom 2" />
          <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Dining Area" />
            <SubCard title={titles} imgpath={ArrowsUpLogo} val="Kitchen" />

            </div>
      </div>
    </div>;
    }
    else if(titles == "Electrical"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={TVLogo}  val="TV" />
        <SubCard title={titles} imgpath={FridgeLogo}  val="Refrigerator" />
          <SubCard title={titles} imgpath={FreezerLogo} val="Freezer" />

            <SubCard title={titles} imgpath={StoveLogo} val="Stove" />
            <SubCard title={titles} imgpath={WashingLogo} val="Washing Machine" />
<SubCard title={titles} imgpath={DishwasherLogo}  val="Dishwasher" />

            </div>
      </div>
    </div>;
    }
    else if(titles == "Locks"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Hall" />
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Bedroom 1" />
          <SubCard title={titles} imgpath={ArrowsUpLogo} val="Bedroom 2" />
          <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Balcony" />

            </div>
      </div>
    </div>;
    }
    else if(titles == "Smoke detector"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Hall" />
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Bedroom 1" />
          <SubCard title={titles} imgpath={ArrowsUpLogo} val="Bedroom 2" />
          <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Kitchen" />

            </div>
      </div>
    </div>;
    }
    else if(titles == "Motion detector"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Hall" />
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Dining area" />
          <SubCard title={titles} imgpath={ArrowsUpLogo} val="Bedroom 2" />
          <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Balcony" />

            </div>
      </div>
    </div>;
    }
    else if(titles == "Favorites"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <button className="btn btn-success" data-toggle="modal" data-target="#myModal">+ Add new</button> <br />
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Sleeping" />
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="Party" />
          <SubCard title={titles} imgpath={ArrowsUpLogo} val="Evening" />


            </div>


      </div>

      <div className="modal fade" tabIndex="1" id="myModal" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
      <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Add new favorite</h4>
      </div>
      <div className="modal-body">
        <label>Favorite name</label><br /><input name="favname" placeholder="min 3 characters" type="text" />
        <p>This saves all the current settings into a template that you can use anytime.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
      </div>
      </div>
      </div>
    </div>;
    }
    else if(titles == "Settings"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={ArrowsUpLogo}  val="" />
        </div>
      </div>
    </div>;
    }
    else if(titles == "Help"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={HelpMap}  val="" />
        </div>
      </div>
    </div>;
    }

    else if(titles == "Profile"){
      var content = <div className="Sub">
        <SideBar />
      <div className="SubMenu">
        <div className="row menu-container">
        <h1>{this.props.params.subId}</h1>
        <SubCard title={titles} imgpath={Profile}  val="" />
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
