import React from 'react';
import { bool, number, oneOfType, oneOf, object, string } from 'prop-types';
import { StyledTextArea } from './TextArea.style';
import { createInputClassName } from '../_helpers/inputHelpers';

const TextArea = ({
  active,
  className: classNameProp,
  defaultValue,
  disabled,
  id,
  invalid,
  name,
  tabIndex,
  valid,
  value,
  ...other
}) => {
  const className = createInputClassName({
    componentClassName: 'TextArea',
    className: classNameProp,
    invalid,
    valid,
  });
  return (
    <StyledTextArea
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id || name}
      name={name}
      tabIndex={active ? -1 : tabIndex || 0}
      value={value}
      {...other}
    />
  );
};

TextArea.defaultProps = {
  active: undefined,
  className: '',
  disabled: false,
  defaultValue: undefined,
  id: undefined,
  invalid: false,
  size: 'medium',
  tabIndex: null,
  valid: false,
  value: undefined,
};

TextArea.propTypes = {
  /**
   * If `true`, the component is active.
   */
  active: bool,
  /**
   * @ignore
   */
  className: oneOfType([object, string]),
  /**
   * If `true`, the switch will be disabled.
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
   * If `true`, the component is valid.
   */
  valid: bool,
  /**
   * The value of the component.
   */
  value: oneOfType([number, string]),
};

export default TextArea;
