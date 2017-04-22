import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.value}</h2>
        <button onClick={() => this.props.incCounter(this.props.index)}>+</button>
        <button onClick={() => this.props.decCounter(this.props.index)}>-</button>
      </div>
    )
  }
}

export default Counter;
