import React, { Component } from 'react';
import './App.css';
import CounterList from './CounterList';
import CounterButtons from './CounterButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterList />
        <CounterButtons />
      </div>
    );
  }
}

export default App;
