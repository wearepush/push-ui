import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const inputStyle = (props) =>
  css`
    background-color: var(--input__background-color);
    border-color: var(--input__border-color);
    border-radius: var(--input__border-radius, 3px);
    border-style: var(--input__border-style, solid);
    border-width: var(--input__border-width, 1px);
    box-sizing: var(--input__boxsizing, border-box);
    color: var(--input__color);
    display: var(--input__display, block);
    font-size: var(--input__font-size--${props.size});
    font-weight: var(--input__font-weight, 400);
    line-height: var(--input__line-height, 1.5);
    padding: var(--input__padding--${props.size});
    transition: color var(--input__transition-time, var(--motion__time--faster))
        var(--input__transition-func, var(--motion__ease--inout)),
      background-color var(--input__transition-time, var(--motion__time--faster))
        var(--input__transition-func, var(--motion__ease--inout)),
      border-color var(--input__transition-time, var(--motion__time--faster))
        var(--input__transition-func, var(--motion__ease--inout));
    width: var(--input__width, 100%);

    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;

    &:focus {
      border-color: var(--input__border-color--focus);
      outline: var(--input__outline--focus, none);
    }

    &:disabled {
      background-color: var(--input__background-color--disabled);
      border-color: var(--input__border-color--disabled);
      cursor: var(--input__cursor--disabled, not-allowed);
    }

    &::placeholder {
      color: var(--input__color--placeholder);
    }

    &.is-invalid {
      border-color: var(--input__border-color--invalid);
    }

    &.is-valid {
      border-color: var(--input__border-color--valid);
    }
  `;

export const StyledTextField = styled.input`
  ${inputStyle}
`;

export default {
  StyledTextField,
};
