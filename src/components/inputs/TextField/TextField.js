import React from 'react';
import { bool, number, oneOfType, oneOf, object, string } from 'prop-types';
import { withTheme } from '@emotion/react';
import { StyledTextField } from './TextField.style';
import { createInputClassName } from '../_helpers/inputHelpers';
import { createComponentTheme } from '../../styles/_helpers/themeHelpers';

const TextField = ({
  active,
  className: classNameProp,
  defaultValue,
  disabled,
  id,
  invalid,
  name,
  tabIndex,
  theme: themeProp,
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
  const theme = createComponentTheme({
    theme: themeProp,
  });
  return (
    <StyledTextField
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id || name}
      name={name}
      tabIndex={active ? -1 : tabIndex || 0}
      theme={theme}
      type={type}
      value={value}
      {...other}
    />
  );
};

TextField.defaultProps = {
  active: undefined,
  className: '',
  disabled: false,
  defaultValue: undefined,
  id: undefined,
  invalid: false,
  size: 'sm',
  tabIndex: null,
  theme: {},
  type: 'text',
  valid: false,
  value: undefined,
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
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * @ignore
   */
  tabIndex: oneOfType([number, string]),
  /**
   * @ignore
   */
  theme: object,
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

export const TextFieldComponent = TextField;
export default withTheme(TextField);
