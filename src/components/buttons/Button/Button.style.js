import styled from "@emotion/styled";
import { space, layout, color, variant as useVariant } from "styled-system";
import css from '@styled-system/css';

const variant = useVariant({
  prop: "variant",
  variants: {
    primary: {
      color: "success900",
      bg: "success400",
      "&:hover": {
        bg: "success900"
      },
      "&:disabled": {
        bg: "disabled"
      }
    },
    warning: {
      color: "warning900",
      bg: "warning400"
    }
  }
});

export const StyledButton = styled.button`
  ${variant}
  ${color}
  ${layout}
  ${space}
  ${props => css(props.css)};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  ${variant}
  ${color}
  ${layout}
  ${space}
  ${props => css(props.css)};
`;

export default {
  StyledButton,
  StyledLink
};
