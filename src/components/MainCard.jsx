import React, { Component } from 'react';

import './css/MainCard.css';

class MainCard extends Component {
  constructor(props) {
      super(props);
    //  const name = props.name;
    }


  render() {
    const { title } = this.props;
    const { imgpath } = this.props;
    const { val } = this.props;
    const path = "#/submenu/" + title;
    if (title == "AC"){
      var card = <a href={path}>
      <div className="col-md-6 col-lg-4 menu-options">
        <h2>{title}</h2>
        <img className="card-image" src={imgpath} />
        <h1>Avge. 21 &#8451;</h1>
      </div>
    </a>;
    }
    else if (title == "Electrical"){
       var card = <a href={path}>
       <div className="col-md-6 col-lg-4 menu-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>2/10 ON</h1>
       </div>
     </a>;
    }
    else if (title == "Lighting"){
       var card = <a href={path}>
       <div className="col-md-6 col-lg-4 menu-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>7/10 ON</h1>
       </div>
     </a>;
    }
    else if (title == "Locks"){
       var card = <a href={path}>
       <div className="col-md-6 col-lg-4 menu-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>Entrance unlocked</h1>
       </div>
     </a>;
    }
    else if (title == "Smoke detector"){
       var card = <a href={path}>
       <div className="col-md-6 col-lg-4 menu-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>All active</h1>
       </div>
     </a>;
    }
    else if (title == "Motion detector"){
       var card = <a href={path}>
       <div className="col-md-6 col-lg-4 menu-options">
         <h2>{title}</h2>
         <img className="card-image" src={imgpath} />
         <h1>None active</h1>
       </div>
     </a>;
    }
    else {
      var card = <a href={path}>
      <div className="col-md-12 col-lg-4 menu-options">
        <h2>{title}</h2>
        <img className="card-image" src={imgpath} />
        <h1>What</h1>
      </div>
      </a>;
    }

    return card;
  }
}

export default MainCard;
