import React, { PureComponent } from 'react';
import { array, bool, func, number, object, oneOf, oneOfType, node, string } from 'prop-types';
import cx from 'classnames';

export default class Checkbox extends PureComponent {
  isControlled = null;

  static propTypes = {
    /**
    * If `true`, the component is active.
    */
    active: bool,
    /**
    * If `true`, the component is checked.
    */
    checked: oneOfType([bool, string]),
    /**
    * The icon to display when the component is checked.
    */
    checkedIcon: node,
    /**
    * @ignore
    */
    className: string,
    /**
    * If `true`, the switch will be disabled.
    */
    disabled: bool,
    /**
    * @ignore
    */
    defaultChecked: bool,
    /**
    * Properties applied to the `input` element.
    */
    inputProps: object,
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
    * The name of the `input` element.
    */
    name: string.isRequired,
    /**
    * @ignore
    */
    onBlur: func,
    /**
    * Callback fired when the state is changed.
    *
    * @param {object} event The event source of the callback.
    * You can pull out the new value by accessing `event.currentTarget.checked` or `event.currentTarget.getAttribute('aria-checked')`.
    * @param {boolean} checked The `checked` value of the switch
    */
    onChange: func,
    /**
    * @ignore
    */
    onFocus: func,
    /**
    * The label of the component.
    */
    placeholder: oneOfType([
      string,
      node,
    ]).isRequired,
    /**
     * View of style, default, custom or toggler
     */
    viewType: oneOf([
      'default',
      'toggle',
      'custom'
    ]),
    /**
    * @ignore
    */
    tabIndex: oneOfType([number, string]),
    /**
    * The icon to display when the component is unchecked.
    */
    unCheckedIcon: node,
    /**
    * The value of the component.
    */
    value: oneOfType([
      array,
      bool,
      object,
      number,
      string,
    ]),
  };

  static defaultProps = {
    active: false,
    checked: null,
    checkedIcon: null,
    className: '',
    disabled: false,
    defaultChecked: false,
    inputProps: null,
    inputRef: undefined,
    invalid: false,
    id: '',
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    tabIndex: null,
    unCheckedIcon: null,
    value: undefined,
    viewType: 'custom',
  };

  constructor(props, context) {
    super(props, context);

    this.isControlled = props.checked != null;

    if (!this.isControlled) {
      // not controlled, use internal state
      this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
      this.state.active = props.active;
    }

    this.id = this.props.id || this.props.name;
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.isEventChecked = this.isEventChecked.bind(this);
    this.renderPlaceholder = this.renderPlaceholder.bind(this);
    this.renderDefault = this.renderDefault.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.renderToggle = this.renderToggle.bind(this);
  }

  state = {};

  onBlur(event) {
    if (this.props.disabled) {
      return false;
    }
    const checked = this.isEventChecked(event);
    if (!this.isControlled) {
      this.setState({ active: false });
    }
    this.props.onBlur && this.props.onBlur(event, checked);
    return true;
  }

  onChange(event) {
    if (this.props.disabled) {
      return false;
    }
    const checked = this.isEventChecked(event);
    if (!this.isControlled) {
      this.setState({ checked });
    }
    this.props.onChange && this.props.onChange(event, checked);
    return true;
  }

  onFocus(event) {
    if (this.props.disabled) {
      return false;
    }
    if (!this.isControlled) {
      this.setState({ active: true });
    }
    const checked = this.isEventChecked(event);
    this.props.onFocus && this.props.onFocus(event, checked);
    return true;
  }

  onKeyDown(event) {
    if (event.keyCode === 13) { // enter
      this.onChange(event);
    }
  }

  isChecked() {
    return this.isControlled ? this.props.checked : this.state.checked;
  }

  isActive() {
    return this.isControlled ? this.props.active : this.state.active;
  }

  isEventChecked(event) {
    if (this.props.viewType !== 'custom') {
      return event.currentTarget.checked;
    } else if (event.currentTarget.getAttribute('aria-checked') === 'false') {
      return true;
    }
    return false;
  }

  renderPlaceholder() {
    return (
      <span className='Checkbox__placeholder'>
        {this.props.placeholder}
      </span>
    );
  }

  renderDefault() {
    const {
      disabled,
      inputProps,
      inputRef,
      name,
      tabIndex,
      value,
    } = this.props;

    const checked = this.isChecked();
    const active = this.isActive();

    return (
      <label
        htmlFor={this.id}
        className="Checkbox__label"
      >
        <input
          {...inputProps}
          checked={checked}
          className="Checkbox__input"
          disabled={disabled}
          id={this.id}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          ref={inputRef}
          name={name}
          tabIndex={active ? -1 : tabIndex || 0}
          type="checkbox"
          value={value}
        />
        {this.renderPlaceholder()}
      </label>
    );
  }

  renderCustom() {
    const {
      checkedIcon,
      disabled,
      inputProps,
      inputRef,
      name,
      tabIndex,
      unCheckedIcon,
      value,
    } = this.props;

    const checked = this.isChecked();
    const active = this.isActive();

    return (
      <label
        className="Checkbox__label"
        htmlFor={this.id}
      >
        <div
          {...inputProps}
          aria-checked={checked}
          className="Checkbox__input"
          disabled={disabled}
          id={this.id}
          role="checkbox"
          onBlur={this.onBlur}
          onClick={this.onChange}
          onFocus={this.onFocus}
          onKeyDown={this.onKeyDown}
          ref={inputRef}
          name={name}
          tabIndex={active ? -1 : tabIndex || 0}
          value={value}
        >
          {checkedIcon && unCheckedIcon ?
            (
              <div
                className={
                  cx('Checkbox__icon', {
                    'is-custom-icon': true,
                    'is-checked': checked,
                    'is-unchecked': !checked,
                    'is-disabled': disabled,
                  })
                }
              >
                {checked ?
                  checkedIcon
                  :
                  unCheckedIcon
                }
              </div>
            )
            :
            (
              <div
                className={
                  cx('Checkbox__icon', {
                    'is-default-icon': true,
                    'is-checked': checked,
                    'is-unchecked': !checked,
                    'is-disabled': disabled,
                  })
                }
              />
            )
          }
          {this.renderPlaceholder()}
        </div>
      </label>
    );
  }

  renderToggle() {
    const {
      disabled,
      inputProps,
      inputRef,
      name,
      tabIndex,
      value,
    } = this.props;

    const checked = this.isChecked();
    const active = this.isActive();

    return (
      <label
        htmlFor={this.id}
        className="Checkbox__label"
      >
        <div className="Checkbox__toggle">
          <div className="Checkbox__toggle-icon" />
        </div>
        <input
          {...inputProps}
          checked={checked}
          className="Checkbox__input"
          disabled={disabled}
          id={this.id}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          ref={inputRef}
          name={name}
          tabIndex={active ? -1 : tabIndex || 0}
          type="checkbox"
          value={value}
        />
        {this.renderPlaceholder()}
      </label>
    );
  }

  renderComponent() {
    const { viewType } = this.props;
    switch (viewType) {
      case 'default': return this.renderDefault();
      case 'custom': return this.renderCustom();
      case 'toggle': return this.renderToggle();
      default: return this.renderDefault();
    }
  }

  render() {
    const {
      className: classNameProp,
      disabled,
      invalid,
      viewType
    } = this.props;

    const checked = this.isChecked();
    const active = this.isActive();
    const className = cx('Checkbox', {
      [classNameProp]: !!classNameProp,
      'is-active': active,
      'is-checked': checked,
      'is-disabled': disabled,
      'is-invalid': invalid,
      'is-unchecked': !checked,
      [`is-view-${viewType}`]: !!viewType
    });

    return (
      <div className={className}>
        {
          this.renderComponent()
        }
      </div>
    );
  }
}
