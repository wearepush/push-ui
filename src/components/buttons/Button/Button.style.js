import styled from '@emotion/styled';
import { css } from '@emotion/react';

// brand: {},
// danger: {},
// primary: {},
// success: {},
// warning: {},
// dark: {},
// light: {},

// xs: {},
// sm: {},
// md: {},
// lg: {},
// xl: {},

const buttonStyle = (props) =>
  css`
    background-color: var(--button__background__color--${props.variant}, var(--color--${props.variant}700));
    border-color: var(--button__border__color--${props.variant}, var(--color--${props.variant}700));
    border-radius: var(--radius--${props.rounded});
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out,
      border-color 0.4s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;

    &:hover {
      box-shadow: var(--button__box_shadow, var(--shadow--${props.shadow}));
      background-color: var(--button__background__color--${props.variant}, var(--color--${props.variant}600));
      border-color: var(--button__border__color--${props.variant}, var(--color--${props.variant}600));
    }
    &:disabled {
      cursor: not-allowed;
      background-color: var(--button__background__color--disabled, var(--color--disabled));
      border-color: var(--button__border__color--disabled, var(--color--disabled));
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  `;

export const StyledButton = styled.button`
  ${buttonStyle};
`;

export const StyledLink = styled.a`
  ${buttonStyle};
`;

export default {
  StyledButton,
  StyledLink,
};
