import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCounter, removeCounter } from '../actions/index';

class CounterButtons extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.addCounter()}>Add Counter</button>
        <button onClick={() => this.props.removeCounter()}>Remove Counter</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addCounter, removeCounter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButtons);
