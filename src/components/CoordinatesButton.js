// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }


  handleCoordinates = (e) => {
    const data = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(data);
  }

  render() {
    return (
        <button onClick={this.handleCoordinates}>Click Me!</button>
      );
  }
}