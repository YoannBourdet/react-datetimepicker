'use strict';

import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import DayCell from './DayCell';

import { calendar, header, monthdays, tableCell, weekdays } from '../styles';

moment.locale('fr');

export default class Calendar extends Component {

  static propTypes = {
    defaultValue: PropTypes.instanceOf(Date),
    showToday: PropTypes.bool,
    visibility: PropTypes.bool,
    onRequest: PropTypes.func,
    format: PropTypes.string,
  }

  static defaultProps = {
    defaultValue: new Date(),
    format: 'DD/MM/YYYY',
    showToday: true,
    visibility: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: moment(this.props.defaultValue),
      selected: moment(this.props.defaultValue),
    };
  }

  partitionArray(array, length) {
    if (length <= 0) {
      throw new Error('length should be greater than 0');
    }

    const partitions = [];
    for (let i = 0; i <= array.length; i += length) {
      const start = i;
      const end = length + i;
      partitions.push(array.slice(start, end));
    }

    return partitions;
  }

  displayDaysPartition() {
    const { date } = this.state;
    const dayStart = moment(date).startOf('month').day() - 1;
    const dateEndOfMonth = moment(date).endOf('month').date();
    const days = new Array(dayStart > 0 ? dayStart : 0).fill(null);

    for (let i = 1; i <= dateEndOfMonth; i++) {
      days.push(moment(date).clone().date(i).startOf('date'));
    }

    const partitions = [];
    for (let j = 0; j <= days.length; j += 7) {
      const start = j;
      const end = 7 + j;
      partitions.push(days.slice(start, end));
    }

    return this.partitionArray(days, 7);
  }

  renderDaysCells() {
    const partitons = this.displayDaysPartition();
    const { row, table } = monthdays;
    const cells = !partitons.length ? null :
      partitons.map((partition, i) => (
        <div key={i} style={row}>
          {partition.map((day, j) => !day ? this.renderEmptyCell(j) : this.renderFullCell(day, j))}
        </div>
    ));

    return (
      <div
        style={table}
      >
        {cells}
      </div>
    );
  }

  renderEmptyCell(key) {
    return (
      <span
        key={key}
        style={tableCell}
      />
    );
  }

  renderFullCell(day, key) {
    const isSelected = this.diffBetweenDays(this.state.selected, day);
    // const isToday = getTodayDate() ;

    return (
      <DayCell
        day={day}
        isSelected={isSelected}
        key={key}
        onRequest={this.selectedDay.bind(this, day)}
      />
    );
  }

  renderPickerDays() {
    const days = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
    const { cell, container } = weekdays;
    const cells = days.map((day, i) => (
      <span
        key={i}
        style={cell}
      >
        {day}
      </span>
    ));

    return (
      <div
        style={container}
      >
        {cells}
      </div>
    );
  }

  manipulate(action, number, time) {
    this.setState({ date : moment(this.state.date)[action](1, time) });
  }

  selectedDay(day) {
    const { format, onRequest } = this.props;
    const formattedDay = moment(day).format(format);
    const isOpen = false;

    this.setState({ selected: moment(day) }, () => {
      if (onRequest) {
        onRequest(formattedDay, isOpen);
      }
    });
  }

  diffBetweenDays(day1, day2) {
    return !day1.startOf('date').diff(day2.startOf('date'));
  }

  getTodayDate() {
    const { defaultValue, showToday } = this.props;
    return !showToday ? null : moment(defaultValue).date();
  }

  getValue() {
    const { format } = this.props;
    const { selected } = this.state;
    return {
      day: selected,
      formatted: moment(selected).format(format),
      iso: selected.toJSON(),
    };
  }

  renderHeader() {
    const { date } = this.state;
    const { btn, container, paragraph } = header;

    return (
      <div
        style={container}
      >
        <p
          style={paragraph}
        >
          {date.format('MMMM')}, {date.format('YYYY')}
        </p>

        <span
          onClick={this.manipulate.bind(this, 'subtract', 1, 'months')}
          style={Object.assign({}, btn, {
            left: 0,
          })}
        >
        -
        </span>
        <span
          onClick={this.manipulate.bind(this, 'add', 1, 'months')}
          style={Object.assign({}, btn, {
            right: 0,
          })}
        >
        +
        </span>
      </div>
    );
  }

  render() {
    const { visibility } = this.props;
    const { arrow, arrow: { svg }, container } = calendar;

    return !visibility ? null : (
      <div
        style={container}
      >
        <span style={arrow}>
          <svg
            style={svg}
            viewBox="0 0 386.257 386.257"
            x="0px"
            y="0px"
          >
            <polygon points="193.129,96.879 0,289.379 386.257,289.379 "/>
          </svg>
        </span>
        {this.renderHeader()}
        {this.renderPickerDays()}
        {this.renderDaysCells()}
      </div>
    );
  }
}
