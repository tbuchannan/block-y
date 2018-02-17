import React, { Component } from 'react';
import logo from './images/blockchain-logo.svg';
import './styles/App.css';
import Search from './components/search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BLOCKCHAIN Coding Challenge</h1>
        </header>
        <Search/>
      </div>
    );
  }
}

export default App;
