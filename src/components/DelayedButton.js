// Code DelayedButton Component Here

import React, { Component } from 'react';

class DelayedButton extends Component {

  onClickHandler = (event) => {
    event.persist();
    setTimeout(
      () => {
        this.props.onDelayedClick(event)}, this.props.delay
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.onClickHandler}>Delay</button>
      </div>
    )
  }
}

export default DelayedButton;
