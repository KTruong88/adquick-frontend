import React, { Component } from 'react'
import './App.css';
import Navigation from './components/Navigation'
import Billboards from './components/Billboards'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Billboards />
      </div>
    );
  }
}

export default App;
