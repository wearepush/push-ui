import React from "react";
import {
  bool,
  func,
  number,
  oneOfType,
  oneOf,
  object,
  string,
  node
} from "prop-types";
import { withTheme } from "@emotion/core";
import cx from "classnames";
import {
  StyledCheckbox,
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  Label
} from "./Checkbox.style";
import { createInputClassName } from "../_helpers/inputHelpers";
import { createComponentTheme } from "../../styles/_helpers/themeHelpers";

const Checkbox = ({
  active,
  checkboxClassName: checkboxClassNameProp,
  className: classNameProp,
  children,
  checked,
  defaultChecked,
  disabled,
  iconClassName: iconClassNameProp,
  id,
  inputClassName: inputClassNameProp,
  invalid,
  labelClassName: labelClassNameProp,
  name,
  size,
  tabIndex,
  theme: themeProp,
  valid,
  ...other
}) => {
  const className = createInputClassName({
    componentClassName: "Checkbox",
    className: classNameProp,
    invalid,
    valid
  });
  const inputClassName = cx("Checkbox__input", inputClassNameProp);
  const checkboxClassName = cx("Checkbox__checkbox", checkboxClassNameProp);
  const iconClassName = cx("Checkbox__icon", iconClassNameProp);
  const labelClassName = cx("Checkbox__label", labelClassNameProp);
  const theme = createComponentTheme({
    theme: themeProp
  });
  return (
    <CheckboxContainer className={className} theme={theme}>
      <HiddenCheckbox
        className={inputClassName}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id || name}
        name={name}
        tabIndex={active ? -1 : tabIndex || 0}
        {...other}
        type="checkbox"
      />
      <StyledCheckbox
        className={checkboxClassName}
        checked={checked}
        size={size}
        theme={theme}
      >
        <Icon className={iconClassName} viewBox="0 0 24 24" theme={theme}>
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      {children && (
        <Label className={labelClassName} size={size} theme={theme}>
          {children}
        </Label>
      )}
    </CheckboxContainer>
  );
};

Checkbox.defaultProps = {
  active: undefined,
  children: undefined,
  checkboxClassName: "",
  className: "",
  disabled: false,
  defaultChecked: undefined,
  iconClassName: "",
  inputClassName: "",
  invalid: false,
  labelClassName: "",
  size: "sm",
  tabIndex: null,
  theme: {},
  valid: false
};

Checkbox.propTypes = {
  /**
   * If `true`, the component is active.
   */
  active: bool,
  /**
   * @ignore
   */
  checkboxClassName: oneOfType([object, string]),
  /**
   * The value of the component.
   */
  checked: bool,
  /**
   * @ignore
   */
  children: node,
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
  defaultChecked: bool,
  /**
   * @ignore
   */
  iconClassName: oneOfType([object, string]),
  /**
   * @ignore
   */
  inputClassName: oneOfType([object, string]),
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
  labelClassName: oneOfType([object, string]),
  /**
   * @ignore
   */
  onBlur: func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   */
  onChange: func,
  /**
   * @ignore
   */
  onFocus: func,
  /**
   * The name of the `input` element.
   */
  name: string.isRequired,
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
   * If `true`, the component is valid.
   */
  valid: bool
};

export const CheckboxComponent = Checkbox;
export default withTheme(Checkbox);
