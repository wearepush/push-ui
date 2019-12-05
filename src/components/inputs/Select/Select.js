import React, { PureComponent } from 'react';
import { array, bool, func, number, node, object, oneOfType, string } from 'prop-types';
import cx from 'classnames';

export default class Select extends PureComponent {
  isControlled = null;

  static propTypes = {
    /**
    * If `true`, the component is active.
    */
    active: bool,
    /**
    * The content of the select <option></option>.
    */
    children: node.isRequired,
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
      array,
      number,
      object,
      string,
    ]),
    /**
    * Use that property to pass a ref callback to the native input component.
    */
    inputRef: func,
    /**
    * If `true`, the component is invalid.
    */
    invalid: bool,
    /**
    * The id of the `input` element.
    */
    id: string,
    /**
    * If `true`, the component is multiple.
    */
    multiple: bool,
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
    * The name of the `input` element.
    */
    name: string.isRequired,
    /**
    * The placeholder of the component.
    */
    placeholder: string,
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
      array,
      number,
      string,
    ]),
  };

  static defaultProps = {
    active: false,
    className: '',
    disabled: false,
    defaultValue: undefined,
    inputRef: undefined,
    invalid: false,
    id: '',
    multiple: false,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    placeholder: '',
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
    if (this.props.multiple) {
      const options = event.target.options;
      const value = [];
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      return value;
    }
    return event.currentTarget.value;
  }

  renderDefault() {
    const {
      children,
      defaultValue,
      disabled,
      inputRef,
      invalid,
      multiple,
      name,
      placeholder,
      tabIndex,
      valid,
      value,
    } = this.props;

    const active = this.isActive();
    const empty = this.isEmpty();

    return (
      <select
        className={
          cx('Select__input', {
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
        id={this.id}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        ref={inputRef}
        multiple={multiple}
        name={name}
        placeholder={placeholder}
        tabIndex={active ? -1 : tabIndex || 0}
        value={value}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {children}
      </select>
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
    const className = cx('Select', {
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
