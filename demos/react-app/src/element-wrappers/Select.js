import React, { Component } from 'react';

export class Select extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  _handleRef = component => {
    this.component = component;
  };

  render() {
    return <select-element placeholder={this.props.placeholder} options={this.props.options} />;
  }
}
