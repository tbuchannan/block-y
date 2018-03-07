import React, { Component } from 'react';
import logo from './images/blockchain-logo.svg';
import './styles/App.css';
import Widget from './components/widget/widget';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {
    // Wrap in MaterialUI Provider
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">BLOCKCHAIN Coding Challenge</h1>
          </header>
          <Widget />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
