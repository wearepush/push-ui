import { theme as defaultTheme } from "../../styles";

export const createComponentTheme = ({
  theme,
}) => {
  return Object.keys(theme).length ? theme : defaultTheme;
};
