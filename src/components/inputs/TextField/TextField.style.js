import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { variant } from 'styled-system';

export const sizeVariant = variant({
  prop: 'size',
  scale: 'inputSizes',
  variants: {
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  },
});

export const inputStyle = ({ theme: { input } }) =>
  css`
    background-color: ${input.backgroundColor};
    border: 1px solid;
    border-color: ${input.borderColor};
    border-radius: ${input.borderRadius};
    box-sizing: border-box;
    color: ${input.color};
    display: block;
    fontsize: ${input.fontSize};
    font-weight: 400;
    line-height: 1.5;
    padding: ${input.padding};
    transition: ${input.transition};
    width: 100%;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;

    &:focus {
      border-color: ${input.borderColorFocus};
      outline: ${input.outlineFocus};
    }
    &:disabled {
      background-color: var(--color--gray300);
      border-color: var(--border__color__disabled);
      cursor: not-allowed;
    }
    &::placeholder {
      color: ${input.placeholderColor};
    }
    &.is-invalid {
      border-color: var(--border__color__invalid);
    }
    &.is-valid {
      border-color: var(--border__color__valid);
    }
  `;

export const StyledTextField = styled.input`
  ${inputStyle}
  ${sizeVariant}
`;

export default {
  StyledTextField,
};
