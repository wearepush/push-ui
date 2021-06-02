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
    border-style: var(--button--borderstyle, solid);
    border-width: var(--button--borderwidth, 1px);
    box-sizing: var(--button--boxsizing, border-box);
    cursor: var(--button--cursor, pointer);
    display: var(--button--display, inline-block);
    font-size: var(--button--fontsize--${props.size}, var(--input--fontsize--${props.size}));
    font-weight: var(--button--fontweight--${props.size}, 400);
    line-height: var(--button--lineheight--${props.size}, 1.2);
    padding: var(--button--padding--${props.size}, var(--input--padding--${props.size}));
    text-align: var(--button--textalign, center);
    text-decoration: var(--button--textdecoration, none);
    transition: color var(--button--transition-time, var(--motion__time--faster))
        var(--button--transition-func, var(--motion__ease--inout)),
      background-color var(--button--transition-time, var(--motion__time--faster))
        var(--button--transition-func, var(--motion__ease--inout)),
      box-shadow var(--button--transition-time, var(--motion__time--faster))
        var(--button--transition-func, var(--motion__ease--inout)),
      border-color var(--button--transition-time, var(--motion__time--faster))
        var(--button--transition-func, var(--motion__ease--inout));
    user-select: var(--button--userselect, none);
    vertical-align: var(--button--verticalalign, middle);
    white-space: var(--button--whitespace, nowrap);

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
