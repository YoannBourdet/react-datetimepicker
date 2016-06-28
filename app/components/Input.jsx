'use strict';

import React, { Component, PropTypes } from 'react';

import { input } from '../styles';

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    placeholder: 'Choose your date',
  }

  handleChange(e) {
    const { onChange } = this.props;
    const value = e.target.value;
    if (onChange) {
      onChange(value);
    }
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
        onChange={this.handleChange.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        placeholder={placeholder}
        style={input}
        type="text"
        value={value}
      />
    );
  }
}
