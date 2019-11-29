import styled from "@emotion/styled";
import { space, layout, color, variant as useVariant } from "styled-system";
import css from "@styled-system/css";

const variants = {};
["primary", "warning", "success", "danger", "brand"].forEach(c => {
  variants[c] = {
    color: "white",
    bg: `${c}700`,
    "&:hover": {
      bg: `${c}600`
    },
    "&:disabled": {
      bg: "disabled"
    }
  };
});

const variant = useVariant({
  prop: "variant",
  variants
});

const styles = `
  box-sizing: border-box;
  padding: 10px;
  text-decoration: none;
`;

export const StyledButton = styled.button`
  ${styles};
  ${variant};
  ${color};
  ${layout};
  ${space};
  ${props => css(props.css)};
  transition: ${props => props.theme.transitions.button };
  &:hover {
    box-shadow: ${props => props.theme.shadows[props.shadow] };
  }
`;

export const StyledLink = styled.a`
  ${styles};
  ${variant};
  ${color};
  ${layout};
  ${space};
  ${props => css(props.css)};
  ${props => `transition: ${props.theme.transitions.button}`};
  &:hover {
    box-shadow: ${props => props.theme.shadows[props.shadow] };
  }
`;

export default {
  StyledButton,
  StyledLink
};
