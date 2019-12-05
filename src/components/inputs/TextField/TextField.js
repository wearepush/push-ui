import React, { PureComponent } from 'react';
import { bool, func, number, oneOfType, oneOf, object, string } from 'prop-types';
import cx from 'classnames';
import { withTheme } from "emotion-theming";
import { theme as defaultTheme } from "../../styles";
import { StyledTextfield } from "./TextField.style";

class TextField extends PureComponent {
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
    * @ignore
    */
    onKeyDown: func,
    /**
    * The name of the `input` element.
    */
    name: string.isRequired,
    /**
     * Size.
     */
    size: oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
    /**
    * @ignore
    */
    tabIndex: oneOfType([
      number,
      string,
    ]),
    /**
     * @ignore
     */
    theme: object,
    /**
    * The type of the input.
    */
    type: oneOf([
      'date',
      'email',
      'number',
      'password',
      'text',
    ]),
    /**
    * If `true`, the component is valid.
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
    // id: '', prevent ovveride {...other}
    inputRef: undefined,
    invalid: false,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    onKeyDown: undefined,
    size: "sm",
    tabIndex: null,
    theme: {},
    type: 'text',
    valid: false,
    value: undefined,
  };

  constructor(props, context) {
    super(props, context);
    this.isControlled = props.value !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.active = props.active;
    }
    this.id = this.props.id || this.props.name;
  }

  state = {};

  onBlur = (event) => {
    if (!this.isControlled) {
      this.setState({ active: false });
    }
    this.props.onBlur && this.props.onBlur(event);
  }

  onChange = (event) => {
    if (!this.isControlled) {
      if (this.props.type === 'number' && Number.isNaN(event.currentTarget.value)) {
        return;
      }
    }
    this.props.onChange && this.props.onChange(event);
  }

  onFocus = (event) => {
    if (!this.isControlled) {
      this.setState({ active: true });
    }
    this.props.onFocus && this.props.onFocus(event);
  }

  onKeyDown = (event) => {
    if (this.props.type === 'number' && event.keyCode >= 65 && event.keyCode <= 90) {
      event.preventDefault();
      return;
    }
    this.props.onKeyDown && this.props.onKeyDown(event);
  }

  isActive = () => {
    return this.isControlled ? this.props.active : this.state.active;
  }

  render() {
    const {
      className: classNameProp,
      defaultValue,
      disabled,
      inputRef,
      invalid,
      name,
      tabIndex,
      theme,
      type,
      valid,
      value,
      ...other
    } = this.props;
    const active = this.isActive();
    const className = cx("TextField", {
      [classNameProp]: !!classNameProp,
      'is-invalid': invalid,
      'is-valid': valid,
    });
    const _theme = Object.keys(theme).length ? theme : defaultTheme;
    return (
      <StyledTextfield
        className={className}
        defaultValue={defaultValue}
        disabled={disabled}
        id={this.id}
        ref={inputRef}
        name={name}
        tabIndex={active ? -1 : tabIndex || 0}
        theme={_theme}
        type={type}
        value={value}
        {...other}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export const TextFieldComponent = TextField;
export default withTheme(TextField);
