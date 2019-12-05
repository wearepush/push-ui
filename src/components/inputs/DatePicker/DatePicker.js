import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import cx from 'classnames';
import { bool, string, func, oneOf, oneOfType, object } from 'prop-types';

class DatePicker extends Component {
  isControlled = null;

  static propTypes = {
    /**
    * If `true`, the component is active.
    */
    active: bool,
    /**
    * @ignore
    */
    className: string,
    /**
     * Value of date
     */
    defaultValue: oneOfType([
      object,
      string,
    ]),
    /**
    * if 'True' disable input
    */
    disabled: bool,
    /**
    * If `true`, the component is invalid.
    */
    invalid: bool,
    /**
     * Callbeck fired when input was blured
     */
    onBlur: func,
    /**
     * Callback fired when the date changed
     */
    onChange: func,
    /**
     * Callback fired when the datepicker open
     */
    onFocus: func,
    /**
     * Flatpickr options https://flatpickr.js.org/options/
     */
    options: object,
    /**
     * Possible to select multiple dates 'multiple' or 'range'
     */
    mode: oneOf([
      'single',
      'multiple',
      'range',
    ]),
    /**
     * Value of date
     */
    value: oneOfType([
      object,
      string,
    ]),
    /**
     * If `true`, the component is valid.
     */
    valid: bool,
  };

  static defaultProps = {
    active: false,
    defaultValue: undefined,
    disabled: false,
    invalid: false,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    options: {
      altFormat: 'F j, Y',
      dateFormat: 'y-m-d',
    },
    mode: undefined,
    value: undefined,
    valid: false,
  };

  constructor(props) {
    super(props);
    this.isControlled = props.value !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.value = props.defaultValue !== undefined ? props.defaultValue : undefined;
      this.state.active = props.active;
    }
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.isActive = this.isActive.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  state = {};

  onChange(value, dateStr) {
    const { onChange } = this.props;
    if (!this.isControlled) {
      this.setState({ value });
    }
    onChange && onChange(value, dateStr);
  }

  onFocus(value, dateStr) {
    const { onFocus } = this.props;
    if (!this.isControlled) {
      this.setState({ active: true });
    }
    onFocus && onFocus(value, dateStr);
  }

  onBlur(value, dateStr) {
    const { onBlur } = this.props;
    if (!this.isControlled) {
      this.setState({ active: false });
    }
    onBlur && setTimeout(() => {
      onBlur(value, dateStr);
    }, 0);
  }

  isActive() {
    return this.isControlled ? this.props.active : this.state.active;
  }

  getValue() {
    return this.isControlled ? this.props.value : this.state.value;
  }

  render() {
    const {
      className: classNameProp,
      disabled,
      invalid,
      mode,
      options: propsOptions,
      valid
    } = this.props;
    const active = this.isActive();
    const value = this.getValue();

    const options = {
      allowInput: disabled,
      ...propsOptions
    };
    if (mode) {
      options.mode = mode;
    }

    const className = cx('DatePicker', {
      [classNameProp]: !!classNameProp,
      'is-active': active,
      'is-valid': valid,
      'is-invalid': invalid,
      'is-disabled': disabled,
    });

    return (
      <Flatpickr
        className={className}
        disabled={disabled}
        onChange={this.onChange}
        onClose={this.onBlur}
        onOpen={this.onFocus}
        options={options}
        value={value}
      />
    )
  }
}

export default DatePicker
