'use strict';

import React, { Component, PropTypes } from 'react';
import onClickOutside from 'react-onclickoutside';

import Calendar from './Calendar';
import Input from './Input';

const DateTimePicker = class DateTimePicker extends Component {

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
      <div>
        <Input
          onFocus={this.displayPicker.bind(this)}
          placeholder={placeholder}
        />
        <Calendar
          onRequest={this.displayPicker.bind(this)}
          visibility={displayPicker}
        />
      </div>
    );
  }
};

export default onClickOutside(DateTimePicker);
