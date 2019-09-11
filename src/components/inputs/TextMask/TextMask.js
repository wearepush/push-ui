import React, { PureComponent } from 'react';
import { array, bool, func, number, oneOfType, shape, string } from 'prop-types';
import cx from 'classnames';
import MaskedInput from 'react-text-mask';
import {} from './TextMask.scss';

export default class TextMask extends PureComponent {
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
    * If `true`, the input will be disabled.
    */
    disabled: bool,
    /**
    * @ignore
    */
    defaultValue: oneOfType([
      number,
      string,
    ]),
    /**
    * If `true`, that tells the component whether to be in guide or no guide mode.
    */
    guide: bool,
    /**
    * Use that property to pass a ref callback to the native input component.
    */
    inputRef: func,
    /**
    * If `true`, the component is invalid.
    */
    invalid: bool,
    /**
    * If `true`, changes the general behavior of the Text Mask component.
    */
    keepCharPositions: bool,
    /**
    * The id of the `input` element.
    */
    id: string,
    /**
    * @ignore
    */
    onBlur: func,
    /**
    * Callback fired when the state is changed.
    *
    * @param {object} event The event source of the callback.
    * You can pull out the new value by accessing `event.currentTarget.value`.
    * @param {string} value The `value` of the input
    */
    onChange: func,
    /**
    * @ignore
    */
    onFocus: func,
    /**
    * Mask is an array or a function that defines how the user input is going to be masked.
    */
    mask: oneOfType([
      array,
      func,
      bool,
      shape({
        mask: oneOfType([array, func]),
        pipe: func,
      }),
    ]).isRequired,
    /**
    * The name of the `input` element.
    */
    name: string.isRequired,
    /**
    * The placeholder of the component.
    */
    placeholder: string,

    /**
    * If `true`, that tells the Text Mask component to display the mask as a placeholder in place of the regular placeholder when the input element value is empty.
    */
    showMask: bool,
    /**
    * @ignore
    */
    tabIndex: oneOfType([
      number,
      string,
    ]),
    /**
    * If `true`, the component is invalid.
    */
    valid: bool,
    /**
    * The value of the component.
    */
    value: oneOfType([
      number,
      string,
    ]),
  };

  static defaultProps = {
    active: false,
    className: '',
    disabled: false,
    defaultValue: undefined,
    guide: false,
    inputRef: undefined,
    invalid: false,
    id: '',
    keepCharPositions: false,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    placeholder: '',
    showMask: false,
    tabIndex: null,
    valid: false,
    value: undefined,
  };

  constructor(props, context) {
    super(props, context);

    this.isControlled = props.value != null;

    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.value = props.defaultValue !== undefined ? props.defaultValue : undefined;
      this.state.active = props.active;
    }

    this.id = this.props.id || this.props.name;
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.isActive = this.isActive.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.renderDefault = this.renderDefault.bind(this);
  }

  state = {};

  onBlur(event) {
    if (this.props.disabled) {
      return false;
    }
    const value = this.isEventValue(event);
    if (!this.isControlled) {
      this.setState({ active: false });
    }
    this.props.onBlur && this.props.onBlur(event, value);
    return true;
  }

  onChange(event) {
    if (this.props.disabled) {
      return false;
    }
    const value = this.isEventValue(event);
    if (!this.isControlled) {
      this.setState({ value });
    }
    this.props.onChange && this.props.onChange(event, value);
    return true;
  }

  onFocus(event) {
    if (this.props.disabled) {
      return false;
    }
    if (!this.isControlled) {
      this.setState({ active: true });
    }
    const value = this.isEventValue(event);
    this.props.onFocus && this.props.onFocus(event, value);
    return true;
  }

  isEmpty() {
    return this.isControlled ? !this.props.value : !this.state.value;
  }

  isActive() {
    return this.isControlled ? this.props.active : this.state.active;
  }

  isEventValue(event) {
    return event.currentTarget.value;
  }

  renderDefault() {
    const {
      defaultValue,
      disabled,
      guide,
      inputRef,
      invalid,
      keepCharPositions,
      mask,
      name,
      placeholder,
      showMask,
      tabIndex,
      valid,
      value,
    } = this.props;

    const active = this.isActive();
    const empty = this.isEmpty();

    return (
      <MaskedInput
        className={
          cx('TextMask__input', {
            'is-active': active,
            'is-disabled': disabled,
            'is-empty': empty,
            'is-invalid': invalid,
            'is-not-empty': !empty,
            'is-valid': valid,
          })
        }
        defaultValue={defaultValue}
        disabled={disabled}
        guide={guide}
        id={this.id}
        keepCharPositions={keepCharPositions}
        mask={mask}
        name={name}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        placeholder={placeholder}
        ref={inputRef}
        showMask={showMask}
        tabIndex={active ? -1 : tabIndex || 0}
        value={value}
      />
    );
  }

  render() {
    const {
      className: classNameProp,
      disabled,
      invalid,
      valid,
    } = this.props;

    const active = this.isActive();
    const empty = this.isEmpty();
    const className = cx('TextMask', {
      [classNameProp]: !!classNameProp,
      'is-active': active,
      'is-empty': empty,
      'is-disabled': disabled,
      'is-invalid': invalid,
      'is-not-empty': !empty,
      'is-valid': valid,
    });

    return (
      <div className={className}>
        {this.renderDefault()}
      </div>
    );
  }
}
