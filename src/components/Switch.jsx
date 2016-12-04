import React, { Component } from 'react';
//import ReactToastr, { ToastContainer } from 'react-toastr';
 // This is a React Element.
// For Non ES6...
// var ToastContainer = ReactToastr.ToastContainer;
//var { ToastContainer } = ReactToastr;
import toastr from 'toastr';
import './css/Switch.css';
var count = 1;


class Switch extends Component {
  constructor(props) {
      super(props);
    //  const name = props.name;

    }


    toasterhome(){

      if (count%2 == 1){
        toastr.success('Home mode activated');
        count++;
      }
      else {
        toastr.error('Away mode activated');
        count--;
      }
    }

    toaster(type){

      if (count%2 == 1){
        toastr.success(type, 'Turned on');
        count++;
      }
      else {
        toastr.error(type, 'Turned off');
        count--;
      }
    }

  render() {
    var count = 1;
    const { title } = this.props;
    const { label1 } = this.props;
    const { label2 } = this.props;
    const { type } = this.props;


    if(type == 'square'){
    var myswitch = <div className="mySwitch">

<label id="name">{label1}</label>
    <label className="switch">

      <input type="checkbox" />
      <div className="slider" onClick={this.toasterhome}></div>

    </label>
    <label id="name">{label2}</label>
  </div>;
}
else {
    var myswitch = <div className="mySwitch">

<label id="name">{label1}</label>
    <label className="switch">

      <input type="checkbox" />
      <div className="slider round" onClick={() => this.toaster(title)}></div>

    </label>
    <label id="name">{label2}</label>
  </div>;
}

return myswitch;

  }
}

export default Switch;
