import styled from "@emotion/styled";
import { space, layout, color, variant as useVariant } from "styled-system";
import css from "@styled-system/css";
import buttonsTheme from './Button.theme';

const variant = useVariant({
  prop: "variant",
  variants: buttonsTheme.variants
});

const size = useVariant({
  prop: "size",
  variants: buttonsTheme.sizes
});

const styles = `
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  ${styles};
  ${variant};
  ${size};
  ${color};
  ${layout};
  ${space};
  ${props => css(props.css)};
  border-radius: ${props => props.theme.rounded[props.rounded] };
  transition: ${props => props.theme.transitions.button };
  &:hover {
    box-shadow: ${props => props.theme.shadows[props.shadow] };
  }
`;

export const StyledLink = styled.a`
  ${styles};
  ${variant};
  ${size};
  ${color};
  ${layout};
  ${space};
  ${props => css(props.css)};
  border-radius: ${props => props.theme.rounded[props.rounded] };
  transition: ${props => props.theme.transitions.button };
  &:hover {
    box-shadow: ${props => props.theme.shadows[props.shadow] };
  }
`;

export default {
  StyledButton,
  StyledLink
};
