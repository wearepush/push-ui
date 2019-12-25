import styled from "@emotion/styled";
import { variant } from "styled-system";

const variants = {
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {}
};

export const checkboxSizeVariant = variant({
  prop: "size",
  scale: "checkboxSizes",
  variants
});

export const labelSizeVariant = variant({
  prop: "size",
  scale: "checkboxLabelSizes",
  variants
});

export const Icon = styled.svg`
  fill: none;
  stroke: white;
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

export const StyledCheckbox = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid #c9ced6;
  border-radius: 3px;
  transition: all 150ms;
  ${checkboxSizeVariant}

  ${HiddenCheckbox}:checked + & {
    border-color: #026dd6;
    background-color: #026dd6;
    ${Icon} {
      visibility: visible;
    }
  }

  ${HiddenCheckbox}:disabled + & {
    border-color: #b0b7c3;
    background-color: #b0b7c3;
  }

  ${HiddenCheckbox}:disabled:not(:checked) + & {
    background-color: #F1F2F4;
  }

  ${HiddenCheckbox}:disabled + &,
  ${HiddenCheckbox}:disabled + & + span {
    cursor: not-allowed;
  }
`;

export const Label = styled.span`
  ${labelSizeVariant};
  margin-left: 0.5rem;
`;

export const CheckboxContainer = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  align-items: flex-start;

  &.is-invalid {
    ${StyledCheckbox} {
      border-color: red;
    }
    ${HiddenCheckbox}:checked + ${StyledCheckbox} {
      background-color: red;
      border-color: red;
    }
    ${Label} {
      color: red;
    }
  }
`;

export default {
  StyledCheckbox,
  CheckboxContainer,
  Icon,
  HiddenCheckbox,
  Label
};
