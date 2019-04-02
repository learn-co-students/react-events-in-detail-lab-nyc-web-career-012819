// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
  click = (ev) => {
    ev.persist()
    setTimeout(() => {
      this.props.onDelayedClick(ev);
    }, this.props.delay);
  }
  render(){
    return <button onClick={this.click}></button>
  }
}

export default DelayedButton;
