// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{
  constructor(props) {
    super(props)
  }

  handleTimeout = (e) => {
    setTimeout(()=>{this.props.onDelayedClick(e)}, this.props.delay)
    e.persist()

  }

  render() {
    return (
      <button onClick={this.handleTimeout}>Delayed</button>);
  }
}