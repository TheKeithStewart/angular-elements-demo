import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './element-wrappers/Header';
import { Input } from './element-wrappers/Input';
import { Select } from './element-wrappers/Select';
import { DynamicForm } from './element-wrappers/Dynamic-Form';

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

        <div className="form-container">
          <Header title="Non-Dynamic Form" />
          <card-element>
            <div>
              <Input placeholder="First Name" />
            </div>

            <div>
              <Input placeholder="Last Name" />
            </div>

            <div>
              <Select placeholder="A Select With Some Options" options={options} />
            </div>
          </card-element>
        </div>

        <div className="form-container">
          <Header title="Dynamic Form" />

          <card-element>
            <DynamicForm />
          </card-element>
        </div>
      </div>
    );
  }
}

export default App;
