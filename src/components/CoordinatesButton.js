// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  callCoord = e => this.props.onReceiveCoordinates([e.clientX, e.clientY]);

  render() {

    return (
      <div>
      <button onClick={this.callCoord}></button>
      </div>
    );
  }

}

export default CoordinatesButton;
