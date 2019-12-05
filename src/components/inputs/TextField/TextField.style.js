import styled from "@emotion/styled";
import { css } from '@emotion/core';
import { space, layout } from "styled-system";

const inputStyle = (props) =>
  css`
    background-color: ${props.theme.input.backgroundColor};
    border: 1px solid;
    border-color: ${props.theme.input.borderColor};
    border-radius: ${props.theme.input.borderRadius};
    box-sizing: border-box;
    color: ${props.color};
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
      cursor: not-allowed;
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
  ${layout};
  ${space};
  font-size: 14px;
  padding: 15px 16px;
`;

export default {
  StyledTextfield,
};
