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
    <label className="switch">
      <label>{label1}</label>
      <input type="checkbox" />
      <div className="slider"></div>
      <label>{label2}</label>
    </label>
  </div>;
}
else {
    var myswitch = <div className="mySwitch">
    <label className="switch">
      <label>{label1}</label>
      <input type="checkbox" />
      <div className="slider round"></div>
      <label>{label2}</label>
    </label>
  </div>;
}

return myswitch;

  }
}

export default Switch;
