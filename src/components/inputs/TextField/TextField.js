import React from 'react';
import { bool, number, oneOfType, oneOf, object, string } from 'prop-types';
import { StyledTextField } from './TextField.style';
import { createInputClassName } from '../_helpers/inputHelpers';

const TextField = ({
  active,
  className: classNameProp,
  defaultValue,
  disabled,
  id,
  invalid,
  name,
  tabIndex,
  type,
  valid,
  value,
  ...other
}) => {
  const className = createInputClassName({
    componentClassName: 'TextField',
    className: classNameProp,
    invalid,
    valid,
  });
  return (
    <StyledTextField
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id || name}
      name={name}
      tabIndex={active ? -1 : tabIndex || 0}
      type={type}
      value={value}
      {...other}
    />
  );
};

TextField.defaultProps = {
  className: '',
  disabled: false,
  invalid: false,
  size: 'medium',
  tabIndex: null,
  type: 'text',
  valid: false,
};

TextField.propTypes = {
  /**
   * If `true`, the component is active.
   */
  active: bool,
  /**
   * @ignore
   */
  className: oneOfType([object, string]),
  /**
   * If `true`, the input will be disabled.
   */
  disabled: bool,
  /**
   * @ignore
   */
  defaultValue: oneOfType([number, string]),
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
   * Size.
   */
  size: oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  /**
   * @ignore
   */
  tabIndex: oneOfType([number, string]),
  /**
   * The type of the input.
   */
  type: oneOf(['date', 'email', 'number', 'password', 'text']),
  /**
   * If `true`, the component is valid.
   */
  valid: bool,
  /**
   * The value of the component.
   */
  value: oneOfType([number, string]),
};

export default TextField;
