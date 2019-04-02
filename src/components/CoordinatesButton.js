// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  cb = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  };

  render () {
    return (
      <button onClick={this.cb}>Coordinates</button>
    )
  }
}
export default CoordinatesButton;
