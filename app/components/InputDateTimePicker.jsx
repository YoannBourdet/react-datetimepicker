'use strict';

import React, { Component, PropTypes } from 'react';

export default class InputDateTimePicker extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: 'choose your Date',
  }

  handleFocus() {
    console.log('handleFocus');
  }

  render() {
    const { placeholder } = this.props;
    return (
      <input
        onFocus={this.handleFocus.bind(this)}
        placeholder={placeholder}
        type="text"
      />
    );
  }
}
