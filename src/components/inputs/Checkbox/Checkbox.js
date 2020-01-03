import React from "react";
import { bool, func, number, oneOfType, oneOf, object, string, node } from "prop-types";
import { withTheme } from "@emotion/core";
import { StyledCheckbox, CheckboxContainer, HiddenCheckbox, Icon, Label } from "./Checkbox.style";
import { createInputClassName } from "../_helpers/inputHelpers";
import { createComponentTheme } from "../../styles/_helpers/themeHelpers";

const Checkbox = ({
  active,
  className: classNameProp,
  children,
  checked,
  defaultChecked,
  disabled,
  id,
  invalid,
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
  const theme = createComponentTheme({
    theme: themeProp
  });
  return (
    <CheckboxContainer
      className={className}
    >
      <HiddenCheckbox
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id || name}
        name={name}
        tabIndex={active ? -1 : tabIndex || 0}
        type="checkbox"
      />
      <StyledCheckbox
        checked={checked}
        size={size}
        theme={theme}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      {children && (
        <Label
          size={size}
          theme={theme}
        >
          {children}
        </Label>
      )}
    </CheckboxContainer>
  );
};

Checkbox.defaultProps = {
  active: undefined,
  children: undefined,
  className: "",
  disabled: false,
  defaultChecked: undefined,
  invalid: false,
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
   * If `true`, the component is invalid.
   */
  valid: bool,
};

export const CheckboxComponent = Checkbox;
export default withTheme(Checkbox);
