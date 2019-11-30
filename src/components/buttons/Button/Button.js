import React, { PureComponent } from "react";
import { bool, func, node, number, oneOfType, string } from "prop-types";
import cx from "classnames";
import { withTheme } from "emotion-theming";
import { theme as defaultTheme } from "../../styles";
import { StyledButton, StyledLink } from "./Button.style";

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
     * @ignore
     */
    tabIndex: oneOfType([number, string]),
    /**
     * @ignore
     */
    type: string,
    /**
     * The button variant.
     */
    variant: string,
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
    type: "button",
    variant: "primary",
  };

  render() {
    const {
      buttonRef,
      children,
      className: classNameProp,
      color,
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
        color={color}
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

export default withTheme(Button);
