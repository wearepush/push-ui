import styled from '@emotion/styled';
import { css } from '@emotion/react';

const buttonVariants = (variant) => {
  if (variant === 'light') {
    return `
      color: var(--button__color, var(--color--black));
      background-color: var(--button__background-olor--${variant}, var(--color--white));
      border-color: var(--button__border-color--${variant}, var(--color--gray400));
      &:hover {
        background-color: var(--button__background-olor--hover--${variant}, var(--color--white));
        border-color: var(--button__border-color--hover--${variant}, var(--color--gray500));
      }
    `;
  }
  if (variant === 'dark') {
    return `
      color: var(--button__color, var(--color--white));
      background-color: var(--button__background-olor--${variant}, var(--color--black));
      border-color: var(--button__border-color--${variant}, var(--color--black600));
      &:hover {
        background-color: var(--button__background-olor--hover--${variant}, var(--color--black));
        border-color: var(--button__border-color--hover--${variant}, var(--color--black600));
      }
    `;
  }
  return `
    color: var(--button__color, var(--color--white));
    background-color: var(--button__background-olor--${variant}, var(--color--${variant}700));
    border-color: var(--button__border-color--${variant}, var(--color--${variant}700));
    &:hover {
      background-color: var(--button__background-olor--hover--${variant}, var(--color--${variant}600));
      border-color: var(--button__border-color--hover--${variant}, var(--color--${variant}600));
    }
  `;
};

const buttonStyle = (props) =>
  css`
    ${buttonVariants(props.variant)}
    border-radius: var(--radius--${props.rounded});
    border-style: var(--button__border-style, solid);
    border-width: var(--button__border-width, 1px);
    box-sizing: var(--button__box-sizing, border-box);
    cursor: var(--button__cursor, pointer);
    display: var(--button__display, inline-block);
    font-size: var(--button__font-size--${props.size}, var(--input__fontsize--${props.size}));
    font-weight: var(--button__font-weight, 400);
    line-height: var(--button__line-height, 1.2);
    padding: var(--button__padding--${props.size}, var(--input__padding--${props.size}));
    text-align: var(--button__text-align, center);
    text-decoration: var(--button__text-decoration, none);
    transition: color var(--button__transition-time, var(--motion__time--faster))
        var(--button__transition-func, var(--motion__ease--inout)),
      background-color var(--button__transition-time, var(--motion__time--faster))
        var(--button__transition-func, var(--motion__ease--inout)),
      box-shadow var(--button__transition-time, var(--motion__time--faster))
        var(--button__transition-func, var(--motion__ease--inout)),
      border-color var(--button__transition-time, var(--motion__time--faster))
        var(--button__transition-func, var(--motion__ease--inout));
    user-select: var(--button__user-select, none);
    vertical-align: var(--button__vertical-align, middle);
    white-space: var(--button__white-space, nowrap);

    &:hover {
      box-shadow: var(--button__box-shadow--hover, var(--shadow--${props.shadow}));
    }

    &:disabled {
      background-color: var(--button__background-olor--disabled, var(--color--disabled));
      border-color: var(--button__border-color--disabled, var(--color--disabled));
      box-shadow: var(--button__box-shadow--disabled, none);
      cursor: var(--button__cursor--disabled, not-allowed);
    }

    &:focus {
      outline: var(--button__outline--focus, none);
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
