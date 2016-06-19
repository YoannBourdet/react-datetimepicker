'use strict';

import React, { Component, PropTypes } from 'react';
import onClickOutside from '../js/onClickOutside';

import Calendar from './Calendar';
import Input from './Input';

import { dtm } from '../styles';

@onClickOutside
export default class DateTimePicker extends Component {

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

  handleClickOutside() {
    this.displayPicker(false);
  }

  render() {
    const { placeholder } = this.props;
    const { displayPicker } = this.state;

    return (
      <div
        style={dtm}
      >
        <Input
          onFocus={this.displayPicker.bind(this)}
          placeholder={placeholder}
          ref="input"
        />
        <Calendar
          onRequest={this.displayPicker.bind(this)}
          ref="calendar"
          visibility={displayPicker}
        />
      </div>
    );
  }
}
