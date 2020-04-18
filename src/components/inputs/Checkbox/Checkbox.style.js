import styled from '@emotion/styled';
import { variant } from 'styled-system';

const variants = {
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

export const checkboxSizeVariant = variant({
  prop: 'size',
  scale: 'checkboxSizes',
  variants,
});

export const labelSizeVariant = variant({
  prop: 'size',
  scale: 'checkboxLabelSizes',
  variants,
});

const getInvalidColor = (props) => props.theme.input.borderColorInvalid;
const getValidColor = (props) => props.theme.input.borderColorValid;
const getDisabledColor = (props) => props.theme.input.borderColorDisabled;
const getBackgroundCheckedColor = (props) => props.theme.checkbox.backgroundCheckedColor;

export const Icon = styled.svg`
  fill: none;
  stroke: ${(props) => props.theme.checkbox.iconColor};
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
  border: 2px solid;
  border-color: ${(props) => props.theme.checkbox.borderColor};
  border-radius: ${(props) => props.theme.checkbox.borderRadius};
  transition: ${(props) => props.theme.checkbox.transition};
  ${checkboxSizeVariant}

  ${HiddenCheckbox}:checked + & {
    border-color: ${getBackgroundCheckedColor};
    background-color: ${getBackgroundCheckedColor};
    ${Icon} {
      visibility: visible;
    }
  }

  ${HiddenCheckbox}:disabled + & {
    border-color: ${getDisabledColor};
    background-color: ${getDisabledColor};
  }

  ${HiddenCheckbox}:disabled:not(:checked) + & {
    background-color: ${(props) => props.theme.input.backgroundColorDisabled};
  }

  ${HiddenCheckbox}:disabled + &,
  ${HiddenCheckbox}:disabled + & + span {
    cursor: not-allowed;
    color: ${getDisabledColor};
  }
`;

export const Label = styled.span`
  ${labelSizeVariant};
  transition: ${(props) => props.theme.checkbox.transition};
  margin-left: 0.5rem;
`;

export const CheckboxContainer = styled.label`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  align-items: flex-start;

  &.is-invalid {
    ${StyledCheckbox} {
      border-color: ${getInvalidColor};
    }
    ${HiddenCheckbox}:checked + ${StyledCheckbox} {
      background-color: ${getInvalidColor};
      border-color: ${getInvalidColor};
    }
    ${Label} {
      color: ${getInvalidColor};
    }
  }

  &.is-valid {
    ${StyledCheckbox} {
      border-color: ${getValidColor};
    }
    ${HiddenCheckbox}:checked + ${StyledCheckbox} {
      background-color: ${getValidColor};
      border-color: ${getValidColor};
    }
    ${Label} {
      color: ${getValidColor};
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
