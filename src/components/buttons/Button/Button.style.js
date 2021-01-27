import styled from '@emotion/styled';
import { css } from '@emotion/react';

const buttonVariants = (variant) => {
  if (variant === 'light') {
    return `
      color: var(--button__color, var(--color--black));
      background-color: var(--button__background__color--${variant}, var(--color--white));
      border-color: var(--button__border__color--${variant}, var(--color--gray400));
      &:hover {
        background-color: var(--button__background__color--hover--${variant}, var(--color--white));
        border-color: var(--button__border__color--hover--${variant}, var(--color--gray500));
      }
    `;
  }
  if (variant === 'dark') {
    return `
      color: var(--button__color, var(--color--white));
      background-color: var(--button__background__color--${variant}, var(--color--black));
      border-color: var(--button__border__color--${variant}, var(--color--black600));
      &:hover {
        background-color: var(--button__background__color--hover--${variant}, var(--color--black));
        border-color: var(--button__border__color--hover--${variant}, var(--color--black600));
      }
    `;
  }
  return `
    color: var(--button__color, var(--color--white));
    background-color: var(--button__background__color--${variant}, var(--color--${variant}700));
    border-color: var(--button__border__color--${variant}, var(--color--${variant}700));
    &:hover {
      background-color: var(--button__background__color--hover--${variant}, var(--color--${variant}600));
      border-color: var(--button__border__color--hover--${variant}, var(--color--${variant}600));
    }
  `;
};

const buttonStyle = (props) =>
  css`
    ${buttonVariants(props.variant)}
    border-radius: var(--radius--${props.rounded});
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    padding: var(--input--padding--${props.size});
    font-size: var(--input--fontsize--${props.size});
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
      box-shadow: var(--button__box_shadow--hover, var(--shadow--${props.shadow}));
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
