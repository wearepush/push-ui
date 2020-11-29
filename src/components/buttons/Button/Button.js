import React from 'react';
import { bool, func, node, number, oneOf, oneOfType, object, string } from 'prop-types';
import cx from 'classnames';
import { StyledButton, StyledLink } from './Button.style';

const Button = ({
  children,
  className: classNameProp,
  component,
  disabled,
  role,
  tabIndex,
  type,
  ...other
}) => {
  let ComponentProp = StyledButton;
  if (other.href) {
    ComponentProp = StyledLink;
  }
  const buttonProps = {};
  if (component === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
    buttonProps.role = undefined;
  } else {
    buttonProps.role = 'button';
  }
  const className = cx('Button', classNameProp);
  return (
    <ComponentProp
      className={className}
      role={role}
      tabIndex={disabled ? -1 : parseInt(tabIndex, 10)}
      {...buttonProps}
      {...other}
    >
      {children}
    </ComponentProp>
  );
};

Button.defaultProps = {
  buttonRef: undefined,
  className: '',
  component: 'button',
  disabled: false,
  role: 'button',
  rounded: 'sm',
  shadow: '0',
  size: 'sm',
  tabIndex: 0,
  type: 'button',
  variant: 'primary',
};

Button.propTypes = {
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
  className: oneOfType([object, string]),
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
   * @ignore
   */
  role: string,
  /**
   * Border raidus.
   */
  rounded: oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl', 'circle']),
  /**
   * Size.
   */
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * Shadow.
   */
  shadow: oneOf(['0', '1', '2', '3', '4']),
  /**
   * @ignore
   */
  tabIndex: oneOfType([number, string]),
  /**
   * @ignore
   */
  type: string,
  /**
   * Variant.
   */
  variant: oneOf(['primary', 'warning', 'success', 'danger', 'brand', 'dark', 'light']),
};

export default Button;
