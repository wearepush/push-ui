import React, { PureComponent } from "react";
import { bool, func, node, number, oneOfType, oneOf, object, string } from "prop-types";
import cx from "classnames";
import { withTheme } from "emotion-theming";
import { theme as defaultTheme } from "../../styles";
import { StyledButton, StyledLink } from "./Button.style";

class Button extends PureComponent {
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
    rounded: oneOf([
      '0',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'circle',
    ]),
    /**
     * Size.
     */
    size: oneOf([
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ]),
    /**
     * Shadow.
     */
    shadow: oneOf([
      '0',
      '1',
      '2',
      '3',
      '4',
    ]),
    /**
     * @ignore
     */
    tabIndex: oneOfType([number, string]),
    /**
     * @ignore
     */
    theme: object,
    /**
     * @ignore
     */
    type: string,
    /**
     * Variant.
     */
    variant: oneOf([
      'primary',
      'warning',
      'success',
      'danger',
      'brand',
    ]),
  };

  static defaultProps = {
    buttonRef: undefined,
    className: "",
    component: "button",
    disabled: false,
    role: "button",
    rounded: "sm",
    shadow: "0",
    size: "sm",
    tabIndex: 0,
    theme: {},
    type: "button",
    variant: "primary",
  };

  render() {
    const {
      buttonRef,
      children,
      className: classNameProp,
      component,
      disabled,
      role,
      tabIndex,
      theme,
      type,
      ...other
    } = this.props
    let ComponentProp = StyledButton;
    if (other.href) {
      ComponentProp = StyledLink;
    }
    const buttonProps = {};
    if (component === "button") {
      buttonProps.type = type || "button";
      buttonProps.disabled = disabled;
      buttonProps.role = undefined;
    } else {
      buttonProps.role = "button";
    }
    const className = cx("Button", {
      [classNameProp]: !!classNameProp
    });
    const _theme = Object.keys(theme).length ? theme : defaultTheme;
    return (
      <ComponentProp
        className={className}
        ref={buttonRef}
        role={role}
        tabIndex={disabled ? -1 : parseInt(tabIndex, 10)}
        theme={_theme}
        {...buttonProps}
        {...other}
      >
        {children}
      </ComponentProp>
    );
  }
}

export const ButtonComponent = Button;
export default withTheme(Button);
