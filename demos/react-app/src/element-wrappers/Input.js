import React, { Component } from 'react';

export class Input extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  _handleRef = component => {
    this.component = component;
  };

  render() {
    return <input-element ref={this._handleRef} placeholder={this.props.placeholder} />;
  }
}
