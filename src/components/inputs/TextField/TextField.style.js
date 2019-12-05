import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { space, layout, variant } from "styled-system";

const size = variant({
  prop: "size",
  scale: "inputSizes",
  variants: {
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  }
});

const inputStyle = props =>
  css`
    background-color: ${props.theme.input.backgroundColor};
    border: 1px solid;
    border-color: ${props.theme.input.borderColor};
    border-radius: ${props.theme.input.borderRadius};
    box-sizing: border-box;
    color: ${props.theme.input.color};
    display: block;
    transition: ${props.theme.transitions.input};
    width: 100%;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    ${css(props.css)};

    &:focus {
      border-color: ${props.theme.input.borderColorFocus};
      outline: ${props.theme.input.outlineFocus};
    }
    &:disabled {
      background-color: ${props.theme.input.backgroundColorDisabled};
      border-color: ${props.theme.input.borderColorDisabled};
      cursor: not-allowed;
    }
    &::placeholder {
      color: ${props.theme.input.placeholderColor};
    }
    &.is-invalid {
      border-color: ${props.theme.input.borderColorInvalid};
    }
    &.is-valid {
      border-color: ${props.theme.input.borderColorValid};
    }
  `;

export const StyledTextfield = styled.input`
  ${inputStyle}
  ${size}
  ${layout};
  ${space};
`;

export default {
  StyledTextfield
};
