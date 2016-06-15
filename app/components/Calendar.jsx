'use strict';

import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import DayCell from './DayCell';

import { component as el, header, tableCell } from '../styles';

moment.locale('fr');

export default class Calendar extends Component {

  static propTypes = {
    defaultValue: PropTypes.instanceOf(Date),
    showToday: PropTypes.bool,
    visibility: PropTypes.bool,
    onRequest: PropTypes.func,
  }

  static defaultProps = {
    defaultValue: new Date(),
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
    const cells = !partitons.length ? null :
      partitons.map((partition, i) => (
        <div key={i} style={{ display: 'table-row' }}>
          {partition.map((day, j) => !day ? this.renderEmptyCell(j) : this.renderFullCell(day, j))}
        </div>
    ));

    return (
      <div
        style={{
          display: 'table',
          width: '100%',
          height: 'auto',
        }}
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
    const cells = days.map((day, i) => (
      <span
        key={i}
        style={{
          display: 'table-cell',
          textAlign: 'center',
          width: '5px',
          height: '50px',
          verticalAlign: 'middle',
        }}
      >
        {day}
      </span>
    ));

    return (
      <div
        style={{
          display: 'table',
          width: '100%',
          height: 'auto',
          borderBottom: '1px solid grey',
        }}
      >
        {cells}
      </div>
    );
  }

  manipulate(action, number, time) {
    this.setState({ date : moment(this.state.date)[action](1, time) });
  }

  hideCalendar() {
    const { onRequest } = this.props;
    if (onRequest) {
      onRequest(false);
    }
  }

  selectedDay(day) {
    this.setState({ selected: moment(day) });
    this.hideCalendar();
  }

  diffBetweenDays(day1, day2) {
    return !day1.startOf('date').diff(day2.startOf('date'));
  }

  getTodayDate() {
    const { defaultValue, showToday } = this.props;
    return !showToday ? null : moment(defaultValue).date();
  }

  renderHeader() {
    const { date } = this.state;
    const { btn, main } = header;

    return (
      <div
        style={main}
      >
        <p
          className="year"
          style={{
            textAlign: 'center',
          }}
        >
          {date.format('YYYY')}
        </p>

        <div className="month">
          <p
            style={{
              textAlign: 'center',
            }}
          >
            {date.format('MMMM')}
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
      </div>
    );
  }

  render() {
    const { visibility } = this.props;

    return !visibility ? null : (
      <div
        className="datepicker"
        style={el}
      >
        {this.renderHeader()}
        {this.renderPickerDays()}
        {this.renderDaysCells()}
      </div>
    );
  }
}
