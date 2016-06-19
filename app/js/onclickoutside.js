/*
 * OnclickoutSide Decorator
 */
'use strict';

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default (WrapedComponent) => (
  class onClickOutside extends Component {
    componentDidMount() {
      window.addEventListener(
        'mousedown',
        this.handleClickOutside.bind(this)
      );
    }

    componentWillUnmount() {
      window.removeEventListener(
        'mousedown',
        this.handleClickOutside.bind(this)
      );
    }

    getReactRef() {
      return this.refs.componentTarget;
    }

    handleClickOutside(e) {
      e.stopPropagation();

      const ref = this.getReactRef();

      if (typeof ref.handleClickOutside !== 'function') {
        throw new Error(
          'handleClickOutside() must be a function for processing outside click events.'
        );
      }

      const component = findDOMNode(ref);

      if (!component.contains(e.target)) {
        ref.handleClickOutside();
      }
    }

    render() {
      return (
        <WrapedComponent ref="componentTarget"/>
      );
    }
  }
);
