import React from "react";
import {
  array,
  bool,
  func,
  number,
  oneOfType,
  oneOf,
  object,
  shape,
  string
} from "prop-types";
import { withTheme } from "@emotion/react";
import { StyledTextField } from "./../TextField/TextField.style";
import { createInputClassName } from "../_helpers/inputHelpers";
import { createComponentTheme } from "../../styles/_helpers/themeHelpers";
import MaskedInput from "react-text-mask";

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
  theme: themeProp,
  type,
  valid,
  value,
  ...other
}) => {
  const className = createInputClassName({
    componentClassName: "TextMask",
    className: classNameProp,
    invalid,
    valid
  });
  const theme = createComponentTheme({
    theme: themeProp
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
      theme={theme}
      type={type}
      value={value}
      {...other}
    />
  );
};

TextMask.defaultProps = {
  active: undefined,
  className: "",
  disabled: false,
  defaultValue: undefined,
  guide: false,
  keepCharPositions: false,
  invalid: false,
  size: "sm",
  showMask: false,
  tabIndex: null,
  theme: {},
  type: "text",
  valid: false,
  value: undefined
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
   * Mask is an array or a function that defines how the user input is going to be masked.
   */
  mask: oneOfType([
    array,
    func,
    bool,
    shape({
      mask: oneOfType([array, func]),
      pipe: func
    })
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
  size: oneOf(["xs", "sm", "md", "lg", "xl"]),
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
  type: oneOf(["date", "email", "number", "password", "text"]),
  /**
   * If `true`, the component is valid.
   */
  valid: bool,
  /**
   * The value of the component.
   */
  value: oneOfType([number, string])
};

export const TextMaskComponent = TextMask;
export default withTheme(TextMask);
