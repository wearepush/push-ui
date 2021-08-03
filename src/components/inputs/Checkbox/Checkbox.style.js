import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

export const StyledCheckbox = styled.div`
  box-sizing: border-box;
  display: inline-block;
  line-height: 1;

  .Checkbox__icon {
    fill: var(--input__border-color);
    transition: fill var(--input__transition-time, var(--motion__time--faster))
      var(--input__transition-func, var(--motion__ease--inout));
  }
  .Checkbox__icon--checked {
    display: none;
  }

  ${HiddenCheckbox}:checked + & {
    .Checkbox__icon {
      fill: var(--color--primary800);
    }
    .Checkbox__icon--unchecked {
      display: none;
    }
    .Checkbox__icon--checked {
      display: block;
    }
  }

  ${HiddenCheckbox}:disabled + & {
    .Checkbox__icon {
      fill: var(--input__border-color--disabled) !important;
    }
    .Checkbox__icon--checked {
      display: block;
    }
    .Checkbox__icon--unchecked {
      display: none;
    }
  }

  ${HiddenCheckbox}:disabled:not(:checked) + & {
    .Checkbox__icon {
      fill: var(--input__border-color--disabled);
    }
    .Checkbox__icon--unchecked {
      display: block;
    }
    .Checkbox__icon--checked {
      display: none;
    }
  }

  ${HiddenCheckbox}:disabled + &,
  ${HiddenCheckbox}:disabled + & + span {
    cursor: var(--input__cursor--disabled, not-allowed);
    color: var(--border__color__disabled);
  }
`;

const checkboxLabelSize = (props) =>
  css`
    font-size: var(--input__font-size--${props.size});
    font-weight: var(--input__font-weight, 400);
    line-height: var(--input__line-height, 1.5);
  `;

export const Label = styled.span`
  ${checkboxLabelSize};
  transition: color var(--input__transition-time, var(--motion__time--faster))
    var(--input__transition-func, var(--motion__ease--inout));
  margin-left: 0.5rem;
`;

export const CheckboxContainer = styled.label`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;

  &.is-invalid {
    .Checkbox__icon {
      fill: var(--input__border-color--invalid) !important;
    }
    ${Label} {
      color: var(--input__border-color--invalid);
    }
  }

  &.is-valid {
    .Checkbox__icon {
      fill: var(--input__border-color--valid) !important;
    }
    ${Label} {
      color: var(--input__border-color--valid);
    }
  }
`;

export default {
  StyledCheckbox,
  CheckboxContainer,
  HiddenCheckbox,
  Label,
};
