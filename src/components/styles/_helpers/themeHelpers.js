import { theme as defaultTheme } from '..';

export const createComponentTheme = (options) => {
  if (!options || !options.theme) {
    return defaultTheme;
  }
  return Object.keys(options.theme).length ? options.theme : defaultTheme;
};
