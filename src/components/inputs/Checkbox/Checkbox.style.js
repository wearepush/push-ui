import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Icon = styled.svg`
  fill: none;
  stroke: var(--color--white);
  stroke-width: 2px;
  visibility: hidden;
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const checkboxSize = (props) =>
  css`
    --checkbox__size--xs: 1.4rem;
    --checkbox__size--sm: 1.6rem;
    --checkbox__size--md: 1.8rem;
    --checkbox__size--lg: 2rem;
    --checkbox__size--xl: 2.2rem;
    width: var(--checkbox__size--${props.size});
    height: var(--checkbox__size--${props.size});
  `;

export const StyledCheckbox = styled.div`
  ${checkboxSize};
  box-sizing: border-box;
  display: inline-block;
  border: 2px solid;
  border-color: var(--color--gray500);
  border-radius: 3px;
  transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;

  ${HiddenCheckbox}:checked + & {
    border-color: var(--color--primary800);
    background-color: var(--color--primary800);
    ${Icon} {
      visibility: visible;
    }
  }

  ${HiddenCheckbox}:disabled + & {
    border-color: var(--border__color__disabled);
    background-color: var(--border__color__disabled);
  }

  ${HiddenCheckbox}:disabled:not(:checked) + & {
    background-color: var(--color--gray300);
  }

  ${HiddenCheckbox}:disabled + &,
  ${HiddenCheckbox}:disabled + & + span {
    cursor: not-allowed;
    color: var(--border__color__disabled);
  }
`;

const checkboxLabelSize = (props) =>
  css`
    --checkbox__label__size--xs: 1rem;
    --checkbox__label__size--sm: 1.2rem;
    --checkbox__label__size--md: 1.4rem;
    --checkbox__label__size--lg: 1.6rem;
    --checkbox__label__size--xl: 1.8rem;
    font-size: var(--checkbox__label__size--${props.size});
  `;

export const Label = styled.span`
  ${checkboxLabelSize};
  transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  margin-left: 0.5rem;
`;

export const CheckboxContainer = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  align-items: flex-start;

  &.is-invalid {
    ${StyledCheckbox} {
      border-color: var(--border__color__invalid);
    }
    ${HiddenCheckbox}:checked + ${StyledCheckbox} {
      background-color: var(--border__color__invalid);
      border-color: var(--border__color__invalid);
    }
    ${Label} {
      color: var(--border__color__invalid);
    }
  }

  &.is-valid {
    ${StyledCheckbox} {
      border-color: var(--border__color__valid);
    }
    ${HiddenCheckbox}:checked + ${StyledCheckbox} {
      background-color: var(--border__color__valid);
      border-color: var(--border__color__valid);
    }
    ${Label} {
      color: var(--border__color__valid);
    }
  }
`;

export default {
  StyledCheckbox,
  CheckboxContainer,
  Icon,
  HiddenCheckbox,
  Label,
};
