
import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import cx from 'classnames';
import { array, bool, string, func, oneOfType, object } from 'prop-types';
import { } from './DatePicker.scss';

class DatePicker extends Component {
  static propTypes = {
    /**
     * date format
     */
    dateFormat: string,
    /**
    * if 'True' disable input
    */
    disabled: bool,
    /**
    * Array of disable dates or array of objects with disable ranges, also can be function
    * Examples: 
    * ['2025-01-30', '2025-02-21', '2025-03-08', new Date(2025, 4, 9) ];
    * [{ from: '2025-04-01', to: '2025-05-01' }, { from: '2025-09-01', to: '2025-12-01'}];
    * (date) => (date.getDay() === 5 || date.getDay() === 6);
    */
    disableDates: oneOfType([array, func]),
    /**
    * Array of enable dates or array of objects with enable ranges, also can be function
    * Examples: 
    * ['2025-01-30', '2025-02-21', '2025-03-08', new Date(2025, 4, 9) ];
    * [{ from: '2025-04-01', to: '2025-05-01' }, { from: '2025-09-01', to: '2025-12-01'}];
    * (date) => (date.getDay() === 5 || date.getDay() === 6);
     */
    enableDates: oneOfType([array, func]),
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
    onOpen: func,
    /**
     * Callback fired when the datepicker close
     */
    onClose: func,
    /**
     * Lock and unlock hours/minutes setup
     */
    timeEnable: bool,
    /**
     * Possible to select multiple dates 'multiple' or 'range'
     */
    mode: string,
    /**
     * Min date
     * can be string like 'today'
     */
    minDate: oneOfType([object, string]),
    /**
    * Max date
    * can be string like 'today'
    */
    maxDate: oneOfType([object, string]),
    /**
     * Value of date
     */
    value: oneOfType([object, string]),
    /**
     * If `true`, the component is invalid.
     */
    valid: bool,

  }

  static defaultProps = {
    dateFormat: 'y-m-d',
    disabled: false,
    disable: [],
    invalid: false,
    enableDates: [],
    onBlur: undefined,
    onChange: undefined,
    onClose: undefined,
    onOpen: undefined,
    timeEnable: false,
    mode: '',
    value: undefined,
    valid: false,
  }

  constructor(props) {
    super(props);
    this.isControled = props.value !== undefined;
    if (!this.isControled) {
      this.state = {
        value: props.value !== undefined ? props.value : new Date()
      }
    }
  }

  onChangeHandler = (selectedDates, dateStr, instance) => {
    const { onChange } = this.props;
    if (!this.isControled) this.setState({ selectedDates });
    onChange && onChange(selectedDates.toString(), dateStr, instance);
  }

  onOpenHandler = (selectedDates, dateStr, instance) => {
    const { onOpen } = this.props;
    if (!this.isControled) this.setState({ selectedDates });
    onOpen && onOpen(selectedDates.toString(), dateStr, instance);
  }

  onCloseHandler = (selectedDates, dateStr, instance) => {
    const { onClose } = this.props;
    if (!this.isControled) this.setState({ selectedDates });
    onClose && setTimeout(() => {
      onClose(selectedDates.toString(), dateStr, instance);
    }, 0);
  }

  render() {
    const {
      dateFormat,
      disabled,
      disableDates,
      enableDates,
      invalid,
      timeEnable,
      maxDate,
      minDate,
      mode,
      value,
      valid
    } = this.props;

    return (
      <Flatpickr
        className={
          cx("DatePicker", {
            'is-valid': valid,
            'is-invalid': invalid,
          })
        }
        disable={disableDates}
        disabled={disabled}
        data-enable-time={timeEnable}
        dateformat={dateFormat}
        enable-dates={enableDates}
        onChange={this.onChangeHandler}
        onBlur={this.onBlurHandler}
        onOpen={this.onOpenHandler}
        onClose={this.onCloseHandler}
        max-date={maxDate}
        min-date={minDate}
        mode={mode}
        value={value ? new Date(value) : new Date()}
      />
    )
  }
}

export default DatePicker