// Code CoordinatesButton Component Here

import React, { Component } from 'react';

class CoordinatesButton extends Component {

  state = {
    arr: []
  }

  createAnArray = (event) => {
     let newArr = [event.clientX, event.clientY]
     this.setState({arr: newArr})
  }

  render() {
    return (
      <div>
        <button onClick = {this.createAnArray}>Click!!</button>
        {this.props.onReceiveCoordinates(this.state.arr)}
      </div>
    )
  }
}

export default CoordinatesButton;
