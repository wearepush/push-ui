import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { space, layout, variant as useVariant } from "styled-system";

const variant = useVariant({
  prop: "variant",
  scale: "buttonVariants",
  variants: {
    brand: {},
    danger: {},
    primary: {},
    success: {},
    warning: {},
  }
});

const size = useVariant({
  prop: "size",
  scale: "buttonSizes",
  variants: {
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  }
});

const buttonStyle = props =>
  css`
    border-radius: ${props.theme.rounded[props.rounded]};
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    transition: ${props.theme.button.transition};
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    ${css(props.css)};

    &:disabled {
      cursor: not-allowed;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      box-shadow: ${props.theme.shadows[props.shadow]};
    }
  `;

export const StyledButton = styled.button`
  ${buttonStyle};
  ${variant};
  ${size};
  ${layout};
  ${space};
`;

export const StyledLink = styled.a`
  ${buttonStyle};
  ${variant};
  ${size};
  ${layout};
  ${space};
`;

export default {
  StyledButton,
  StyledLink
};
