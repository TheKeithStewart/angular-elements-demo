import React, { Component } from 'react';

export class Header extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  _handleRef = component => {
    this.component = component;
  };

  render() {
    return <header-element ref={this._handleRef} title={this.props.title} />;
  }
}
