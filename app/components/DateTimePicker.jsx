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
    placeholder: 'Choose your date',
  }

  constructor(props) {
    super(props);
    this.state = {
      updatedDate: { formatted: '' },
      displayPicker : false,
    };
  }

  displayPicker(isVisible) {
    this.setState({ displayPicker: isVisible });
  }

  updatePicker(day, isVisible) {
    this.setState({ updatedDate: day }, () => {
      this.displayPicker(isVisible);
    });
  }

  getValue(e) {
    e.preventDefault();
    return this.refs.calendar.getValue();
  }

  handleClickOutside() {
    this.displayPicker(false);
  }

  handleInputChange(value) {
    this.setState({ updatedDate : { formatted: value } },
      () => this.forceUpdate());
  }

  render() {
    const { placeholder } = this.props;
    const { displayPicker, updatedDate: { day, formatted } } = this.state;

    return (
      <div
        style={dtm}
      >
        <Input
          onChange={this.handleInputChange.bind(this)}
          onFocus={this.displayPicker.bind(this)}
          placeholder={placeholder}
          ref="input"
          value={formatted}
        />
        <Calendar
          onRequest={this.updatePicker.bind(this)}
          ref="calendar"
          value={!day ? formatted : day}
          visibility={displayPicker}
        />
      </div>
    );
  }
}
