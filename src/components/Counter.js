import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="counter-panel">
        <strong>Counter no. {this.props.index + 1}</strong>
        <h2 className={ (this.props.value >= 0 ? "positive-number" : "negative-number") }>
          {this.props.value}
        </h2>
        <button className="btn btn-success n-btn"
          onClick={() => this.props.incCounter(this.props.index)}>
          +
        </button>
        <button className="btn btn-success n-btn"
          onClick={() => this.props.decCounter(this.props.index)}>
          -
        </button>
      </div>
    )
  }
}

export default Counter;
