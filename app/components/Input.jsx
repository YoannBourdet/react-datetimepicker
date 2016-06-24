'use strict';

import React, { Component, PropTypes } from 'react';

import { input } from '../styles';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  }

  static defaultProps = {
    placeholder: 'choose your Date',
  }

  handleFocus() {
    const { onFocus } = this.props;
    if(onFocus) {
      onFocus(true);
    }
  }

  render() {
    const { placeholder, value } = this.props;

    return (
      <input
        onFocus={this.handleFocus.bind(this)}
        placeholder={placeholder}
        style={input}
        type="text"
        value={value}
      />
    );
  }
}
