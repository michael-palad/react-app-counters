import React, { Component } from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter, decrementCounter } from '../actions/index';


class CounterList extends Component {
  render() {
    const counters = this.props.counters.map((value, index) => (
        <Counter index={index} value={value} key={index}
                 incCounter={this.props.incrementCounter}
                 decCounter={this.props.decrementCounter}/>
      ));

    return (
      <div>
        { counters }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counters: state.counters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ incrementCounter, decrementCounter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
