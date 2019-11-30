import styled from "@emotion/styled";
import { space, layout, color, variant as useVariant } from "styled-system";
import css from "@styled-system/css";

const variants = {};
["primary", "warning", "success", "danger", "brand"].forEach(c => {
  variants[c] = {
    color: "white",
    bg: `${c}700`,
    borderColor: `${c}700`,
    "&:hover": {
      bg: `${c}600`,
      borderColor: `${c}600`,
    },
    "&:disabled": {
      bg: "disabled",
      borderColor: "disabled",
    }
  };
});

const variant = useVariant({
  prop: "variant",
  variants
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
  padding: 10px;
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
