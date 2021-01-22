import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const inputStyle = () =>
  css`
    background-color: var(--color--white);
    border: 1px solid;
    border-color: var(--color--gray400);
    border-radius: 3px;
    box-sizing: border-box;
    color: var(--color--black900);
    display: block;
    font-weight: 400;
    line-height: 1.5;
    transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
    width: 100%;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;

    &:focus {
      border-color: var(--color--gray900);
      outline: none;
    }
    &:disabled {
      background-color: var(--color--gray300);
      border-color: var(--border__color__disabled);
      cursor: not-allowed;
    }
    &::placeholder {
      color: #a6aebc;
    }
    &.is-invalid {
      border-color: var(--border__color__invalid);
    }
    &.is-valid {
      border-color: var(--border__color__valid);
    }
  `;

const inputSizes = (props) =>
  css`
    padding: var(--input--padding--${props.size});
    font-size: var(--input--fontsize--${props.size});
  `;

export const StyledTextField = styled.input`
  ${inputStyle}
  ${inputSizes}
`;

export default {
  StyledTextField,
};
