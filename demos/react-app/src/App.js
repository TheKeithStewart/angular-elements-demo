import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const questions = [
      {
        value: 'Bombasto',
        key: 'firstName',
        label: 'First name',
        required: true,
        order: 1,
        controlType: 'textbox',
        type: ''
      },
      {
        key: 'emailAddress',
        label: 'Email',
        required: false,
        order: 2,
        controlType: 'textbox',
        type: 'email'
      },
      {
        key: 'brave',
        label: 'Bravery Rating',
        required: false,
        order: 3,
        controlType: 'dropdown',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ]
      }
    ];

    console.log(questions);

    return (
      <div className="App">
        <header-element />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <dynamic-form-element questions={JSON.stringify(questions)} />
      </div>
    );
  }
}

export default App;
