import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCounter, removeCounter } from '../actions/index';

class CounterButtons extends Component {
  render() {
    return (
      <div className="c-btn-group">
        <button className="btn btn-primary c-btn" onClick={() => this.props.addCounter()}>
          Add Counter
        </button>
        <button className="btn btn-primary c-btn" onClick={() => this.props.removeCounter()}>
          Remove Counter
        </button>
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
