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
        <img className="sub-card-image" src={imgpath} alt="Up arrow logo" onClick={() => this.changetemp(21, "up")}/>
        <h1 id="temp">21 &#8451;</h1>
        <img className="sub-card-image" src={imgpath2} alt="Down arrow logo" onClick={() => this.changetemp(21, "down")}/>
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
         <img className="card-image" src={imgpath} alt="TV logo"/>
         <Switch title={val} label1="OFF" label2="ON" type="round" />
           <img className="sub-card-image" alt="Up arrow logo" src={ArrowsUpLogo} />
           <h4 id="temp">ESPN</h4>
           <img className="sub-card-image" src={ArrowsDownLogo} alt="Down arrow logo" />
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
      <img className="card-image" alt="Refrigerator logo" src={imgpath} />
      <Switch title={val} label1="OFF" label2="ON" type="round" />
        <img className="sub-card-image" alt="Up arrow logo" src={ArrowsUpLogo} />
        <h1 id="temp">3 &#8451;</h1>
        <img className="sub-card-image" alt="Down arrow logo" src={ArrowsDownLogo} />

    </div>
  </a>;
}
else if ( val === "Freezer")
{
 var card = <a href={path}>
 <div className="col-md-12 col-lg-6 elec">
   <h2>{val}</h2>
   <img className="card-image" alt="Freezer logo" src={imgpath} />
   <Switch title={val} label1="OFF" label2="ON" type="round" />
     <img className="sub-card-image" alt="Up arrow logo" src={ArrowsUpLogo} />
     <h1 id="temp">-5 &#8451;</h1>
     <img className="sub-card-image" alt="Down arrow logo" src={ArrowsDownLogo} />

 </div>
</a>;
}
else if ( val === "Stove")
{
 var card = <a href={path}>
 <div className="col-md-12 col-lg-6 elec">
   <h2>{val}</h2>
   <img className="card-image" src={imgpath} alt="Stove"/> <br />
   <div className="stove">
     <img className="sub-card-image" alt="Up arrow logo" src={ArrowsUpLogo} />
     <h1 id="temp">0</h1>
     <img className="sub-card-image" alt="Down arrow logo" src={ArrowsDownLogo} />
   </div>
<div className="stove">
       <img className="sub-card-image" alt="Up arrow logo" src={ArrowsUpLogo} />
     <h1 id="temp">0</h1>
     <img className="sub-card-image" alt="Down arrow logo" src={ArrowsDownLogo} />
   </div> <br />
<div className="stove">
       <img className="sub-card-image" alt="Up arrow logo" src={ArrowsUpLogo} />
     <h1 id="temp">0</h1>
     <img className="sub-card-image" alt="Down arrow logo" src={ArrowsDownLogo} />
   </div>
<div className="stove">
       <img className="sub-card-image" alt="Up arrow logo" src={ArrowsUpLogo} />
     <h1 id="temp">0</h1>
     <img className="sub-card-image" alt="Down arrow logo" src={ArrowsDownLogo} />
   </div>
 </div>
</a>;
}

   else {
     var card = <a href={path}>
     <div className="col-md-12 col-lg-6 sub-options">
       <h2>{val}</h2>
       <img className="card-image" src={imgpath} alt="unknowm"/>
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
           <button className ="btn btn-danger">Delete</button>
       </div>
     </a>;
    }
    else if (title == "Settings"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 onecard">

              <label>Change password</label><br />
             <label>Old Password:</label><input type="password" placeholder="min 8 characters"/>
             <br />
           <label>New Password:</label><input type="password" placeholder="min 8 characters"/>
           <br />
             <label>Retype Password:</label><input type="password" placeholder="min 8 characters"/><br />
             <button className="btn btn-success"> Change</button>
             <br />
           <br />
             <div className="dropdown">
         <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Change Language
         <span className="caret"></span></button>
         <ul className="dropdown-menu">
          <li><a href="#">English</a></li>
          <li><a href="#">Swedish</a></li>
          <li><a href="#">Finnish</a></li>
         </ul>
       </div>
         <br />
         <br />
         <label >Temperature unit:</label>
         <Switch title={val} label1="Celsius" label2="Fahrenheit" type="round" />


       </div>
     </a>;
    }

    else if (title == "Help"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 onecard">
         <img className="map" src={imgpath} alt="house map" /><br /> <br />
         <button className="btn btn-info">Contact Support</button>
       </div>
     </a>;
    }

    else if (title == "Profile"){
       var card = <a href={path}>
       <div className="col-md-12 col-lg-6 onecard">
         <h2>Hello Donald!</h2>
         <img className="map" src={imgpath} alt="Profile photo"/><br /><br />
         <button className="btn btn-danger">Logout</button><br /><br />

       </div>
     </a>;
    }

    else {
      var card = <a href={path}>
      <div className="col-md-12 col-lg-6 menu-options">
        <h2>{title}</h2>
        <img className="card-image" alt="unknown" src={imgpath} />
        <h1>What</h1>
      </div>
      </a>;
    }

    return card;
  }
}

export default SubCard;
