'use strict';

import React, { Component, PropTypes } from 'react';
import DateTimePicker from 'DateTimePicker';

export default class InputDateTimePicker extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: 'choose your Date',
  }

  constructor(props) {
    super(props);
    this.state = {
      displayPicker : false,
    };
  }

  displayPicker(isVisible) {
    this.setState({ displayPicker: isVisible });
  }

  render() {
    const { placeholder } = this.props;
    const { displayPicker } = this.state;

    return (
      <div>
        <input
          onFocus={this.displayPicker.bind(this, true)}
          placeholder={placeholder}
          ref="input"
          type="text"
        />
        <DateTimePicker
          onRequest={this.displayPicker.bind(this)}
          visibility={displayPicker}
        />
      </div>
    );
  }
}
