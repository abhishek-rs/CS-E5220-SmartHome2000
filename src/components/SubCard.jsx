import React, { Component } from 'react';
import Switch from './Switch.jsx';
import ArrowsUpLogo from '../logos/up.png';
import ArrowsDownLogo from '../logos/down.png';
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
        <img className="sub-card-image" src={imgpath} onClick={() => this.changetemp(21, "up")}/>
        <h1 id="temp">21 &#8451;</h1>
        <img className="sub-card-image" src={imgpath2} onClick={() => this.changetemp(21, "down")}/>
        </div>
    </div>
    </a>;
    }
    else if (title == "Lighting"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 menu-options">
         <h2>{val}</h2>
         <Switch title={val} label1="OFF" label2="ON" type="round" />
       </div>
     </a>;
    }
    else if (title == "Electrical"){
      if( val === "TV")
      {
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 elec">
         <h2>{val}</h2>
         <img className="card-image" src={imgpath} />
         <Switch title={val} label1="OFF" label2="ON" type="round" />
           <img className="sub-card-image" src={ArrowsUpLogo} />
           <h1 id="temp">ESPN</h1>
           <img className="sub-card-image" src={ArrowsDownLogo} />
          <div style={{'border-radius': '5px', padding:'10px', color:'white','background-color': '#081d38', width:"80%", margin:'auto'}} >
         <label>Volume</label><input  id="vol-control" type="range" min="0" max="100" step="1"></input>
</div>
       </div>
     </a>;
   }

   else if ( val === "Refrigerator")
   {
    var card = <a href={path}>
    <div className="col-md-12 col-lg-6 elec">
      <h2>{val}</h2>
      <img className="card-image" src={imgpath} />
      <Switch title={val} label1="OFF" label2="ON" type="round" />
        <img className="sub-card-image" src={ArrowsUpLogo} />
        <h1 id="temp">3 &#8451;</h1>
        <img className="sub-card-image" src={ArrowsDownLogo} />

    </div>
  </a>;
}
else if ( val === "Freezer")
{
 var card = <a href={path}>
 <div className="col-md-12 col-lg-6 elec">
   <h2>{val}</h2>
   <img className="card-image" src={imgpath} />
   <Switch title={val} label1="OFF" label2="ON" type="round" />
     <img className="sub-card-image" src={ArrowsUpLogo} />
     <h1 id="temp">-5 &#8451;</h1>
     <img className="sub-card-image" src={ArrowsDownLogo} />

 </div>
</a>;
}
else if ( val === "Stove")
{
 var card = <a href={path}>
 <div className="col-md-12 col-lg-6 elec">
   <h2>{val}</h2>
   <img className="card-image" src={imgpath} /> <br />
   <div className="stove">
     <img className="sub-card-image" src={ArrowsUpLogo} />
     <h1 id="temp">0</h1>
     <img className="sub-card-image" src={ArrowsDownLogo} />
   </div>
<div className="stove">
       <img className="sub-card-image" src={ArrowsUpLogo} />
     <h1 id="temp">0</h1>
     <img className="sub-card-image" src={ArrowsDownLogo} />
   </div> <br />
<div className="stove">
       <img className="sub-card-image" src={ArrowsUpLogo} />
     <h1 id="temp">0</h1>
     <img className="sub-card-image" src={ArrowsDownLogo} />
   </div>
<div className="stove">
       <img className="sub-card-image" src={ArrowsUpLogo} />
     <h1 id="temp">0</h1>
     <img className="sub-card-image" src={ArrowsDownLogo} />
   </div>
 </div>
</a>;
}

   else {
     var card = <a href={path}>
     <div className="col-md-12 col-lg-6 sub-options">
       <h2>{val}</h2>
       <img className="card-image" src={imgpath} />
       <Switch title={val} label1="OFF" label2="ON" type="round" />
       </div>
     </a>;
 }
}

    else if (title == "Locks"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 menu-options">
         <h2>{val}</h2>
           <Switch title={val} label1="LOCKED" label2="UNLOCKED" type="round" />
       </div>
     </a>;
    }
    else if (title == "Smoke detector"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 menu-options">
         <h2>{val}</h2>
           <Switch title={val} label1="OFF" label2="ON" type="round" />
       </div>
     </a>;
    }
    else if (title == "Motion detector"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 menu-options">
         <h2>{val}</h2>
           <Switch title={val} label1="OFF" label2="ON" type="round" />

       </div>
     </a>;
    }
    else if (title == "Favorites"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 menu-options">
         <h2>{val}</h2>
           <Switch title={val} label1="OFF" label2="ON" type="round" />

       </div>
     </a>;
    }
    else if (title == "Settings"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 onecard">
         <h2>{val}</h2>

             <label>Old Password:</label><input type="password" />
             <br />
           <label>New Password:</label><input type="password" />
           <br />
             <label>Retype Password:</label><input type="password" />
             <br />
             <div className="dropdown">
         <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Change Language
         <span className="caret"></span></button>
         <ul className="dropdown-menu">
          <li><a href="#">English</a></li>
          <li><a href="#">Swedish</a></li>
          <li><a href="#">Finnish</a></li>
         </ul>
         <br />
         <br />
         <label >Temperature unit:</label>
         <Switch title={val} label1="Celsius" label2="Fahrenheit" type="round" />
         </div>

       </div>
     </a>;
    }

    else if (title == "Help"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 onecard">
         <img className="map" src={imgpath} />
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
