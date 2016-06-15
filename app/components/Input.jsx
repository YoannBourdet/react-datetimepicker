'use strict';

import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onFocus: PropTypes.func,
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
