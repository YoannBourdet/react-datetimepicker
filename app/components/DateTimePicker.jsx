'use strict';

import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import { component as el, header } from '../styles';

moment.locale('fr');

export default class DateTimePicker extends Component {

  static propTypes = {
    defaultValue: PropTypes.instanceOf(Date),
    today: PropTypes.number,
  }

  static defaultProps = {
    defaultValue: new Date(),
    today: moment(new Date()).date(),
  };

  state = {
    date: moment(this.props.defaultValue),
    selected: moment(this.props.defaultValue),
    rollover: false,
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
      <div
        key={key}
        style={{
          display: 'table-cell',
          textAlign: 'center',
          width: '50px',
          height: '50px',
          verticalAlign: 'middle',
        }}
      />
    );
  }

  renderFullCell(day, key) {
    const date = day.date();
    // const selected = this.diffBetweenDays(this.state.selected, day);
    // const isToday = this.props.today === date;
    return (
      <div
        key={key}
        onClick={this.selectedDay.bind(this, day)}
        style={{
          display: 'table-cell',
          textAlign: 'center',
          width: '50px',
          height: '50px',
          verticalAlign: 'middle',
          cursor: 'pointer',
        }}
      >
        <span>{date}</span>
      </div>
    );
  }

  selectedDay(day) {
    this.setState({ selected:  moment(day) });
  }

  diffBetweenDays(day1, day2) {
    return !day1.startOf('date').diff(day2.startOf('date'));
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

  renderHeader() {
    const { date } = this.state;
    const { btn } = header;

    return (
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: 'green',
        }}
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
    return (
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
