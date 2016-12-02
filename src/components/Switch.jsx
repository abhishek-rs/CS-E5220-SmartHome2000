import React, { Component } from 'react';

import './css/Switch.css';

class Switch extends Component {
  constructor(props) {
      super(props);
    //  const name = props.name;
    }

  render() {
    const { label1 } = this.props;
    const { label2 } = this.props;
    const { type } = this.props;

    if(type == 'square'){
    var myswitch = <div className="mySwitch">
<label id="name">{label1}</label>
    <label className="switch">

      <input type="checkbox" />
      <div className="slider"></div>

    </label>
    <label id="name">{label2}</label>
  </div>;
}
else {
    var myswitch = <div className="mySwitch">
<label id="name">{label1}</label>
    <label className="switch">

      <input type="checkbox" />
      <div className="slider round"></div>

    </label>
    <label id="name">{label2}</label>
  </div>;
}

return myswitch;

  }
}

export default Switch;
