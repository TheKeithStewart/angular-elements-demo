import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './element-wrappers/Header';
import { Input } from './element-wrappers/Input';
import { Select } from './element-wrappers/Select';

class App extends Component {
  render() {
    var options = JSON.stringify([
      { value: '1', viewValue: 'Value 1' },
      { value: '2', viewValue: 'Value 2' },
      { value: '3', viewValue: 'Value 3' },
    ]);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="main-container">
          <Header title="The React App" />

          <div>
            <Input placeholder="blah" />
          </div>

          <div>
            <Input placeholder="test" />
          </div>

          <div>
            <Select placeholder="The Select" options={options} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
