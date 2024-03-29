import React from 'react';
import { array, bool, func, number, oneOfType, oneOf, object, shape, string } from 'prop-types';
import MaskedInput from 'react-text-mask';
import { StyledTextField } from '../TextField/TextField.style';
import { createInputClassName } from '../_helpers/inputHelpers';

const TextMask = ({
  active,
  className: classNameProp,
  defaultValue,
  disabled,
  guide,
  id,
  invalid,
  keepCharPositions,
  mask,
  name,
  showMask,
  tabIndex,
  type,
  valid,
  value,
  ...other
}) => {
  const className = createInputClassName({
    componentClassName: 'TextMask',
    className: classNameProp,
    invalid,
    valid,
  });
  return (
    <MaskedInput
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      guide={guide}
      id={id || name}
      keepCharPositions={keepCharPositions}
      mask={mask}
      name={name}
      render={(ref, props) => <StyledTextField ref={ref} {...props} />}
      showMask={showMask}
      tabIndex={active ? -1 : tabIndex || 0}
      type={type}
      value={value}
      {...other}
    />
  );
};

TextMask.defaultProps = {
  className: '',
  disabled: false,
  guide: false,
  keepCharPositions: false,
  invalid: false,
  size: 'medium',
  showMask: false,
  tabIndex: null,
  type: 'text',
  valid: false,
};

TextMask.propTypes = {
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
   * If `true`, that tells the component whether to be in guide or no guide mode.
   */
  guide: bool,
  /**
   * If `true`, the component is invalid.
   */
  invalid: bool,
  /**
   * The id of the `input` element.
   */
  id: string,
  /**
   * If `true`, changes the general behavior of the Text Mask component.
   */
  keepCharPositions: bool,
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
   * If `true`, that tells the Text Mask component to display the mask as a placeholder in place of the regular placeholder when the input element value is empty.
   */
  showMask: bool,
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

export default TextMask;
