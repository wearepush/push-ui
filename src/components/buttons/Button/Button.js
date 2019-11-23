import React, { PureComponent } from 'react';
import { bool, func, node, number, oneOfType, oneOf, string } from 'prop-types';
import cx from 'classnames';
import { withTheme } from 'emotion-theming';
import { theme as defaultTheme } from '../../styles';
import { StyledButton } from './Button.style';

export class Button extends PureComponent {
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
    color: string,
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
      ComponentProp = StyledButton;
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

    const { theme } = this.props;
    const _theme = Object.keys(theme).length ? theme : defaultTheme;

    return (
      <ComponentProp
        className={className}
        color={color}
        ref={buttonRef}
        role={role}
        tabIndex={disabled ? -1 : parseInt(tabIndex, 10)}
        theme={_theme}
        variant={variant}
        {...buttonProps}
        {...other}
      >
        {children}
      </ComponentProp>
    );
  }
}

export default withTheme(Button);
