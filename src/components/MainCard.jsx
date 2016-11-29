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
    return (
            <div className="col-md-12 col-lg-4 menu-options">
              <h3>{title}</h3>
              <img className="card-image" src={imgpath} />
              <h6>{val}</h6>
            </div>





    );
  }
}

export default MainCard;
