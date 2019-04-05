import React, {Component} from 'react';

class CoordinatesButton extends Component {

  clickHandler = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const array = [x,y]
    this.props.onReceiveCoordinates(array)
  }

  render() {
    return <button onClick={this.clickHandler}>Button</button>
  }
}
export default CoordinatesButton
