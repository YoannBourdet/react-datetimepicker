'use strict';

import React, { Component, PropTypes } from 'react';

import { tableCellBtn, tableCellBtnActive } from '../styles';

export default class DayCell extends Component {

  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    day: PropTypes.object.isRequired,
    onRequest: PropTypes.func.isRequired,
  }

  state = {
    cellhover: false,
  }

  handleClick() {
    const { day, onRequest } = this.props;
    if(onRequest) {
      onRequest(day);
    }
  }

  handleHoverCell(state) {
    this.setState({ cellhover: state });
  }

  render() {
    const { isSelected, day } = this.props;
    const style = !this.state.cellhover && !isSelected ?
      tableCellBtn :
      tableCellBtnActive;

    return (
      <div
        onClick={this.handleClick.bind(this)}
        onMouseEnter={this.handleHoverCell.bind(this, true)}
        onMouseLeave={this.handleHoverCell.bind(this, false)}
        style={style}
      >
        <span>{day.date()}</span>
      </div>
    );
  }
}
