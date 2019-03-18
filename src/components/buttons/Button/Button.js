import React, { PureComponent } from 'react';
import { bool, func, node, number, oneOfType, oneOf, string } from 'prop-types';
import { css } from '@emotion/core';
import cx from 'classnames';

const baseStyles = ({colors}) => {
  console.log('colors', colors);
  return css`
  appearance: none;
  background-color: red;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  line-height: 1;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  transition: background-color 300ms linear, border-color 300ms linear, color 300ms linear, box-shadow 300ms linear;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
`;
};

export default class Button extends PureComponent {
  static propTypes = {
    /**
    * Use that property to pass a ref callback to the native button component.
    */
    buttonRef: func,
    /**
    * The content of the button.
    */
    children: node.isRequired,
    /**
    * @ignore
    */
    className: string,
    /**
    * The button text color.
    */
    color: oneOf([
      'alert',
      'warning',
      'primary',
      'success',
      'default',
    ]),
    /**
    * The component used for the root node.
    * Either a string to use a DOM element or a component.
    * The default value is a `button`.
    */
    component: string,
    /**
    * If `true`, the base button will be disabled.
    */
    disabled: bool,
    /**
    * If `true`, the base button will be rounded.
    */
    float: bool,
    /**
    * If `true`, the button will take up the full width of its container.
    */
    fullWidth: bool,
    /**
    * @ignore
    */
    onBlur: func,
    /**
    * @ignore
    */
    onClick: func,
    /**
    * @ignore
    */
    onFocus: func,
    /**
    * @ignore
    */
    onKeyDown: func,
    /**
    * @ignore
    */
    onKeyUp: func,
    /**
    * @ignore
    */
    onMouseDown: func,
    /**
    * @ignore
    */
    onMouseLeave: func,
    /**
    * @ignore
    */
    onMouseUp: func,
    /**
    * @ignore
    */
    onTouchEnd: func,
    /**
    * @ignore
    */
    onTouchMove: func,
    /**
    * @ignore
    */
    onTouchStart: func,
    /**
    * @ignore
    */
    role: string,
    /**
    * @ignore
    */
    tabIndex: oneOfType([
      number,
      string
    ]),
    /**
    * The size of the button.
    */
    size: oneOf([
      'small',
      'medium',
      'large'
    ]),
    /**
    * @ignore
    */
    type: string,
    /**
    * The variant of the button style:
    * outlined: the button with outline;
    * contained: the button distinguished by the elevation and fill;
    */
    variant: oneOf([
      'contained',
      'outlined'
    ])
  };

  static defaultProps = {
    buttonRef: undefined,
    className: '',
    color: 'primary',
    component: 'button',
    disabled: false,
    float: false,
    fullWidth: false,
    onBlur: undefined,
    onClick: undefined,
    onFocus: undefined,
    onKeyDown: undefined,
    onKeyUp: undefined,
    onMouseDown: undefined,
    onMouseLeave: undefined,
    onMouseUp: undefined,
    onTouchEnd: undefined,
    onTouchMove: undefined,
    onTouchStart: undefined,
    role: 'button',
    size: 'medium',
    tabIndex: 0,
    type: 'button',
    variant: 'contained'
  };

  render() {
    const {
      buttonRef,
      children,
      className: classNameProp,
      color,
      component,
      disabled,
      float,
      fullWidth,
      onClick,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      role,
      size,
      tabIndex,
      type,
      variant,
      ...other
    } = this.props;

    let ComponentProp = component;

    if (other.href) {
      ComponentProp = 'a';
    } else {
      ComponentProp = 'button';
    }

    const buttonProps = {};
    if (ComponentProp === 'button') {
      buttonProps.type = type || 'button';
      buttonProps.disabled = disabled;
      buttonProps.role = undefined;
    } else {
      buttonProps.role = 'button';
    }

    const className = cx('Button', {
      [classNameProp]: !!classNameProp,
      'is-disabled': disabled,
      'is-full-width': fullWidth,
      [`is-size-${size}`]: !!size,
      'is-link': !!other.href,
      [`is-${color}`]: !!color,
      [`is-${variant}`]: !!variant,
      'is-float': !!float,
    });

    return (
      <ComponentProp
        className={className}
        color={color}
        css={baseStyles}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        ref={buttonRef}
        role={role}
        tabIndex={disabled ? -1 : parseInt(tabIndex, 10)}
        variant={variant}
        {...buttonProps}
        {...other}
      >
        {children}
      </ComponentProp>
    );
  }
}
