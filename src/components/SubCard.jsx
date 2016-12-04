import React, { Component } from 'react';
import Switch from './Switch.jsx';
import './css/SubCard.css';

class SubCard extends Component {
  constructor(props) {
      super(props);
    //  const name = props.name;
    }

    changetemp(temp, type){
      if(type == "up"){
        temp = temp+1;
      }
      else{
        temp = temp -1;
      }
      document.getElementById('temp').innerHTML = temp.toString() + " &#8451;";
    }

  render() {
    const { title } = this.props;
    const { imgpath } = this.props;
    const { val } = this.props;
    const path = "#/submenu/" + title;
    if (title == "AC"){
      const { imgpath2 } = this.props;
      var card = <a href={path}>
      <div className="col-md-12 col-lg-6 sub-options AC-button">
        <h2>{val}</h2>
        <Switch title={val} label1="OFF" label2="ON" type="round" />
        <div className="updown">
        <img className="sub-card-down" src={imgpath} onClick={() => this.changetemp(21, "up")}/>
        <h1 id="temp">21 &#8451;</h1>
        <img className="sub-card-image" src={imgpath2} onClick={() => this.changetemp(21, "down")}/>
        </div>
    </div>
    </a>;
    }
    else if (title == "Electrical"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 sub-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>2/10 ON</h1>
       </div>
     </a>;
    }
    else if (title == "Lighting"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 sub-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>7/10 ON</h1>
       </div>
     </a>;
    }
    else if (title == "Locks"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 sub-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>Entrance unlocked</h1>
       </div>
     </a>;
    }
    else if (title == "Smoke detector"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 menu-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>All active</h1>
       </div>
     </a>;
    }
    else if (title == "Motion detector"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 menu-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>None active</h1>
       </div>
     </a>;
    }
    else {
      var card = <a href={path}>
      <div className="col-md-12 col-lg-6 menu-options">
        <h2>{title}</h2>
        <img className="card-image" src={imgpath} />
        <h1>What</h1>
      </div>
      </a>;
    }

    return card;
  }
}

export default SubCard;
